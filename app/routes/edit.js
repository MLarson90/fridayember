import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  },
  actions: {
    deleteQuestion(question){
    var answer_deletions = question.get('answers').map(function(answer){
      return answer.destroyRecord();
    });
    Ember.RSVP.all(answer_deletions).then(function(){
      return question.destroyRecord();
    });
    this.transitionTo('edit');
  },
  update(question, params){
    Object.keys(params).forEach(function(key){
      if(params[key]!==undefined){
        question.set(key,params[key]);
      }
    });
    question.save();
    this.transitionTo('indiv-quest');
  },
  
  }
});
