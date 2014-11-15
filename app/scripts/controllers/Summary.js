;(function ($, App) {
  'use strict';

  function Summary ($root, model) {

    this.$root = $root;
    this.model = model;

    this.render();

    model.addObserver(this.render.bind(this));

  }

  Summary.prototype.render = function () {

    this.$root.empty();

    this.$root.append(App.templates.summary(this.model.get().length));

  };


  App.controllers.Summary = Summary;

})(window.jQuery, window.App);