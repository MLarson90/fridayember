import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
actions: {
  showAnswerForm(){
    this.set('addNewAnswer',true);
  },
  saveAnswer(){
    var params = {
      author: this.get('name'),
      content: this.get('answer'),
      question: this.get('question')
    };
    this.set('addNewAnswer', false);
    this.sendAction('saveAnswer', params);
  }
}
});
