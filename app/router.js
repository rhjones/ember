import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  // this is Ember's convention
  // same as this.route('lists', { path: '/lists' });
  // if you want to map a different URL to a route, can expand:
  // this.route('lists', { path: '/all-my-listicles' });
  this.route('lists');
});

export default Router;
