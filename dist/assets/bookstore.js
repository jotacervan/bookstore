'use strict';



;define("bookstore/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("bookstore/adapters/author", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _jsonApi.default.extend({
    shouldReloadRecord() {
      return false;
    },

    shouldBackgroundReloadRecord(store, snapshot) {
      console.log("Calling shouldBackgroundReloadRecord");
      const loadedAt = snapshot.record.get('loadedAt'); // if it was loaded more than an hour ago

      if (Date.now() - loadedAt > 3600000) {
        return true;
      } else {
        return false;
      }
    }

  });

  _exports.default = _default;
});
;define("bookstore/app", ["exports", "bookstore/resolver", "ember-load-initializers", "bookstore/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _resolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("bookstore/components/book-cover", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    actions: {
      open() {
        this.get('book').reload().then(() => {
          this.set('isShowingModal', true);
          this.get('blurBackground')(true);
        });
      },

      close() {
        this.set('isShowingModal', false);
        this.get('blurBackground')(false);
      }

    }
  });

  _exports.default = _default;
});
;define("bookstore/components/ember-modal-dialog-positioned-container", ["exports", "ember-modal-dialog/components/positioned-container"], function (_exports, _positionedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
;define("bookstore/components/ember-modal-dialog/-basic-dialog", ["exports", "ember-modal-dialog/components/basic-dialog"], function (_exports, _basicDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
;define("bookstore/components/ember-modal-dialog/-in-place-dialog", ["exports", "ember-modal-dialog/components/in-place-dialog"], function (_exports, _inPlaceDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
;define("bookstore/components/ember-modal-dialog/-liquid-dialog", ["exports", "ember-modal-dialog/components/liquid-dialog"], function (_exports, _liquidDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
;define("bookstore/components/ember-modal-dialog/-liquid-tether-dialog", ["exports", "ember-modal-dialog/components/liquid-tether-dialog"], function (_exports, _liquidTetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
;define("bookstore/components/ember-modal-dialog/-tether-dialog", ["exports", "ember-modal-dialog/components/tether-dialog"], function (_exports, _tetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
;define("bookstore/components/ember-wormhole", ["exports", "ember-wormhole/components/ember-wormhole"], function (_exports, _emberWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
;define("bookstore/components/modal-dialog", ["exports", "ember-modal-dialog/components/modal-dialog"], function (_exports, _modalDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
;define("bookstore/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("bookstore/controllers/books", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['limit'],
    limit: 5,
    total: Ember.computed('model.meta', function () {
      return this.get('model.meta').total;
    }),
    showAll: Ember.computed('total', 'model.[]', function () {
      return this.get('total') > this.get('model.length');
    })
  });

  _exports.default = _default;
});
;define("bookstore/helpers/app-version", ["exports", "bookstore/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("bookstore/helpers/ignore-children", ["exports", "ember-ignore-children-helper/helpers/ignore-children"], function (_exports, _ignoreChildren) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(_exports, "ignoreChildren", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
;define("bookstore/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("bookstore/helpers/route-action", ["exports", "ember-route-action-helper/helpers/route-action"], function (_exports, _routeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
;define("bookstore/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("bookstore/initializers/add-modals-container", ["exports", "ember-modal-dialog/initializers/add-modals-container"], function (_exports, _addModalsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
  _exports.default = _default;
});
;define("bookstore/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "bookstore/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("bookstore/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("bookstore/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("bookstore/initializers/export-application-global", ["exports", "bookstore/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("bookstore/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("bookstore/models/author", ["exports", "bookstore/models/publisher", "ember-data/attr", "ember-data/relationships"], function (_exports, _publisher, _attr, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _publisher.default.extend({
    name: (0, _attr.default)(),
    books: (0, _relationships.hasMany)(),
    onDidLoad: Ember.on('didLoad', function () {
      this.set('loadedAt', new Date());
    })
  });

  _exports.default = _default;
});
;define("bookstore/models/book", ["exports", "ember-data/model", "ember-data/attr", "ember-data/relationships"], function (_exports, _model, _attr, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    title: (0, _attr.default)(),
    price: (0, _attr.default)('number'),
    author: (0, _relationships.belongsTo)('author', {
      inverse: 'books'
    }),
    publisher: (0, _relationships.belongsTo)('publisher', {
      polymorphic: true,
      inverse: 'published'
    })
  });

  _exports.default = _default;
});
;define("bookstore/models/publisher", ["exports", "@ember-data/model", "ember-data/attr", "ember-data/relationships"], function (_exports, _model, _attr, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    name: (0, _attr.default)(),
    discount: (0, _attr.default)('number'),
    published: (0, _relationships.hasMany)('book')
  });

  _exports.default = _default;
});
;define("bookstore/models/publishing-house", ["exports", "bookstore/models/publisher"], function (_exports, _publisher) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _publisher.default.extend();

  _exports.default = _default;
});
;define("bookstore/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("bookstore/router", ["exports", "bookstore/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('books', {
      path: '/'
    });
    this.route('author', {
      path: '/authors/:author_id'
    });
  });
});
;define("bookstore/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    actions: {
      blurBackground(blur) {
        this.controllerFor('application').set('blur', blur);
      }

    }
  });

  _exports.default = _default;
});
;define("bookstore/routes/author", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      return this.store.findRecord('author', params.author_id);
    }

  });

  _exports.default = _default;
});
;define("bookstore/routes/books", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    queryParams: {
      limit: {
        refreshModel: true
      }
    },

    model(params) {
      return this.store.query('book', params);
    },

    actions: {
      showAll() {
        const total = this.controllerFor('books').get('total');
        this.transitionTo({
          queryParams: {
            limit: total
          }
        }); // total?
      }

    }
  });

  _exports.default = _default;
});
;define("bookstore/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("bookstore/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("bookstore/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("bookstore/services/modal-dialog", ["exports", "bookstore/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function computedFromConfig(prop) {
    return Ember.computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  var _default = Ember.Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: null // injected by initializer

  });

  _exports.default = _default;
});
;define("bookstore/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "34sdwv1d",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\",true],[10,\"id\",\"title\"],[8],[0,\"\\n  \"],[4,\"link-to\",null,[[\"route\"],[\"books\"]],{\"statements\":[[0,\"Our Awesome Bookstore\"]],\"parameters\":[]},null],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[11,\"class\",[29,[[28,\"if\",[[24,[\"blur\"]],\"blur-background\"],null]]]],[8],[0,\"\\n  \"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/templates/author", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "eKbv6TF+",
    "block": "{\"symbols\":[\"book\"],\"statements\":[[7,\"h3\",true],[8],[1,[24,[\"model\",\"name\"]],false],[9],[0,\"\\n\\n\"],[7,\"strong\",true],[8],[0,\"Biography\"],[9],[0,\": Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n\\n\"],[7,\"h4\",true],[8],[0,\"Published titles:\"],[9],[0,\"\\n\"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\",\"books\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"book-cover\",null,[[\"book\",\"blurBackground\"],[[23,1,[]],[28,\"route-action\",[\"blurBackground\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/templates/author.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/templates/books", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iaeuM5gC",
    "block": "{\"symbols\":[\"book\"],\"statements\":[[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[1,[28,\"book-cover\",null,[[\"book\",\"blurBackground\"],[[23,1,[]],[28,\"route-action\",[\"blurBackground\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"showAll\"]]],null,{\"statements\":[[0,\"  \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"showAll\"]],[8],[0,\"Show All\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/templates/books.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/templates/components/book-cover", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QXxbOFtJ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"li\",false],[3,\"action\",[[23,0,[]],\"open\"]],[8],[0,\"\\n  \"],[7,\"strong\",true],[8],[1,[24,[\"book\",\"title\"]],false],[9],[7,\"br\",true],[8],[9],[7,\"br\",true],[8],[9],[0,\"\\n  \"],[7,\"em\",true],[8],[0,\"by\"],[9],[0,\"\\n  \"],[4,\"link-to\",null,[[\"class\",\"route\",\"model\"],[\"author\",\"author\",[24,[\"book\",\"author\",\"id\"]]]],{\"statements\":[[1,[24,[\"book\",\"author\",\"name\"]],false]],\"parameters\":[]},null],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"isShowingModal\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"onClose\",\"clickOutsideToClose\"],[[28,\"action\",[[23,0,[]],\"close\"],null],true]],{\"statements\":[[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"modal\"],[8],[0,\"\\n      \"],[7,\"h3\",true],[8],[0,\"Purchase confirmation\"],[9],[0,\"\\n      You want to buy \"],[7,\"strong\",true],[8],[1,[24,[\"book\",\"title\"]],false],[9],[0,\" by \"],[1,[24,[\"book\",\"author\",\"name\"]],false],[0,\".\\n\\n      \"],[7,\"p\",true],[8],[0,\"\\n        \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"close\"]],[8],[0,\"Purchase for $\"],[1,[24,[\"book\",\"price\"]],false],[0,\"!\"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n      \"],[7,\"p\",true],[8],[0,\"\\n        \"],[7,\"em\",true],[8],[0,\"Thank you! We will e-mail you your e-book\"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "bookstore/templates/components/book-cover.hbs"
    }
  });

  _exports.default = _default;
});
;define("bookstore/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("bookstore/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("bookstore/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("bookstore/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('bookstore/config/environment', [], function() {
  var prefix = 'bookstore';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("bookstore/app")["default"].create({"name":"bookstore","version":"0.0.0+fa756125"});
          }
        
//# sourceMappingURL=bookstore.map
