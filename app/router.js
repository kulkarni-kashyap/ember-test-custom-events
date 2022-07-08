import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('static-form');
  this.route('dynamic-form');
  this.route('atomic-components');
  this.route('datepicker');
  this.route('data-table');
});

export default Router;
