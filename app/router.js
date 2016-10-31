import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  // below is Ember's convention
  // same as this.route('lists', { path: '/lists' });
  // if you want to map a different URL to a route, can expand:
  // this.route('lists', { path: '/all-my-listicles' });
  this.route('lists');
  this.route('list', { path: 'lists/:list_id' });
  // above, could also use:
  // this.route('list', { path: 'lists:/:id' });
  // but this produces collisions if you have nested routes
});

export default Router;
