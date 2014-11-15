;(function ($, App) {
  'use strict';

  function List ($root, model) {

    this.$root = $root;
    this.model = model;


    model.addObserver(this.render.bind(this));

    this.render();

  }

  List.prototype.render = function () {

    var $items, items, item;

    this.$root.empty();
    $items = $(App.templates.list());
    $items.appendTo(this.$root);

    items = this.model.get();


    this.controllers = items.map(function (item, id) {
      return new App.controllers.Item($items, this.model, id, item);
    }, this);


  };

  App.controllers.List = List;

})(window.jQuery, window.App);