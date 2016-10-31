import Ember from 'ember';

export default Ember.Route.extend({
  // this is same as model: function() {}
  // same as model: () => {}
  // ember convention is to do it this way
  model(params) {
    return [
      { title: 'Kittens', id: 1 },
      { title: 'Blah', id: 2 },
      { title: 'Mittens', id: 3 },
    ][params.list_id - 1];
  }
});
