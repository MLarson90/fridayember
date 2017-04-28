import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newQuestionFormShow(){
      this.set('addNewQuestion', true);
    },
    saveQuestion(){
      var params= {
        main: this.get('main'),
        author: this.get('author'),
        note: this.get('note'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
