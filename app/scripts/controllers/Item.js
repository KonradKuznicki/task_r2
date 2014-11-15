;(function ($, App) {
  'use strict';

  function Item ($root, model, id, str) {

    this.$root = $root;
    this.model = model;
    this.id = id;
    this.str = str;

    this.render();

  }

  Item.prototype.render = function () {

    var $item = $(App.templates.item(this.str));

    $item.appendTo(this.$root)
         .find('button')
         .click(this.remove.bind(this));

  };

  Item.prototype.remove = function () {

    this.model.remove(this.id);

  };


  App.controllers.Item = Item;

})(window.jQuery, window.App);