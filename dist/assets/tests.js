'use strict';

define("bookstore/tests/integration/components/book-cover-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | book-cover', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <BookCover />
      */
      {
        id: "T46WFf5+",
        block: "{\"symbols\":[],\"statements\":[[5,\"book-cover\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <BookCover>
              template block text
            </BookCover>
          
      */
      {
        id: "vB7r0+Ja",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"book-cover\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("bookstore/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/author.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/author.js should pass ESLint\n\n11:5 - Unexpected console statement. (no-console)');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/book-cover.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-cover.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/books.js should pass ESLint\n\n');
  });
  QUnit.test('models/author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/author.js should pass ESLint\n\n');
  });
  QUnit.test('models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass ESLint\n\n');
  });
  QUnit.test('models/publisher.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/publisher.js should pass ESLint\n\n');
  });
  QUnit.test('models/publishing-house.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/publishing-house.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('routes/author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/author.js should pass ESLint\n\n');
  });
  QUnit.test('routes/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/books.js should pass ESLint\n\n');
  });
});
define("bookstore/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('bookstore/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/templates/application.hbs should pass TemplateLint.\n\nbookstore/templates/application.hbs\n  5:11  error  Unnecessary string concatenation. Use {{if blur \'blur-background\'}} instead of "{{if blur \'blur-background\'}}".  no-unnecessary-concat\n  2:36  error  you must use double quotes in templates  quotes\n  5:22  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('bookstore/templates/author.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/templates/author.hbs should pass TemplateLint.\n\nbookstore/templates/author.hbs\n  7:0  error  Incorrect indentation for `{{#each}}` beginning at L7:C0. Expected `{{#each}}` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('bookstore/templates/books.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/templates/books.hbs should pass TemplateLint.\n\nbookstore/templates/books.hbs\n  8:19  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('bookstore/templates/components/book-cover.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bookstore/templates/components/book-cover.hbs should pass TemplateLint.\n\nbookstore/templates/components/book-cover.hbs\n  1:4  error  Interaction added to non-interactive element  no-invalid-interactive\n  4:29  error  you must use double quotes in templates  quotes\n  8:34  error  you must use double quotes in templates  quotes\n');
  });
});
define("bookstore/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/book-cover-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-cover-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/author-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/author-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/book-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/publisher-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/publisher-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/publishing-house-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/publishing-house-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/author-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-test.js should pass ESLint\n\n');
  });
});
define("bookstore/tests/test-helper", ["bookstore/app", "bookstore/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("bookstore/tests/unit/adapters/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:author');
      assert.ok(adapter);
    });
  });
});
define("bookstore/tests/unit/controllers/books-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:books');
      assert.ok(controller);
    });
  });
});
define("bookstore/tests/unit/models/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('author', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/models/book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('book', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/models/publisher-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | publisher', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('publisher', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/models/publishing-house-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | publishing house', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('publishing-house', {});
      assert.ok(model);
    });
  });
});
define("bookstore/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/routes/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:author');
      assert.ok(route);
    });
  });
});
define("bookstore/tests/unit/routes/books-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:books');
      assert.ok(route);
    });
  });
});
define('bookstore/config/environment', [], function() {
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

require('bookstore/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
