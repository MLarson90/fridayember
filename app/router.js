import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('questions');
  this.route('indivQuest');
  this.route('indiv-quest', {path: '/indiv-quest/:question_id'});
  this.route('edit');
});

export default Router;
