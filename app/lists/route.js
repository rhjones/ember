import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      { title: 'Kittens', id: 1 },
      { title: 'Mittens', id: 3 },
    ];
  }
});
