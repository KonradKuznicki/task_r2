;(function ($, App) {
  'use strict';

  function List () {

    this.subject = ['Carrots', 'Pears', 'Fish', 'Milk', 'Bread'];

    this.observers = [];

  }

  List.prototype.add = function (item) {
    var id = this.subject.push(item) - 1;
    this.notify('add', id, item);
  };

  List.prototype.remove = function (id) {
    var item = this.subject[id];
    this.subject.splice(id, 1);
    this.notify('remove', id, item);
  };

  List.prototype.notify = function () {
    var i;
    for(i = 0; i < this.observers.length; i++) {
      this.observers[i].apply(null, arguments);
    }

  };

  List.prototype.addObserver = function (observer) {
    this.observers.push(observer);
  };

  List.prototype.get = function () {
    return this.subject;
  };

  App.models.List = List;

})(window.jQuery, window.App);