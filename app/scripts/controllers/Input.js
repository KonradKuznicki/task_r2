;(function ($, App) {
  'use strict';

  function Input ($root, model) {

    this.$root = $root;
    this.model = model;

    this.render();


    this.$add = $root.find('button');
    this.$input = $root.find('input');


    this.$add.click(this.addItem.bind(this));

  }

  Input.prototype.addItem = function () {
    if(this.$input.val().length > 0 ) {
      this.model.add(this.$input.val());
      this.$input.val('');
    } else {
      alert('please provide item name');
    }
  };

  Input.prototype.render = function () {

    this.$root.empty();

    this.$root.append(App.templates.input());

  };


  App.controllers.Input = Input;

})(window.jQuery, window.App);