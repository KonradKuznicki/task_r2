;(function () {
  'use strict';

  function App ($root) {

    this.$root = $root;

    this.render();

    this.models = {};
    this.models.list = new App.models.List();

    this.controllers = {};

    this.controllers.input = new App.controllers.Input(
      $root.find('.input'),
      this.models.list
    );

    this.controllers.list = new App.controllers.List(
      $root.find('.list'),
      this.models.list
    );

    this.controllers.summary = new App.controllers.Summary(
      $root.find('.summary'),
      this.models.list
    );
  }

  App.prototype.render = function () {
    this.$root.empty();
    this.$root.append(App.templates.app());
  };


  App.templates = {};
  App.controllers = {};
  App.models = {};
  App.libs = {};

  window.App = App;

})();