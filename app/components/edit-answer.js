import Ember from 'ember';

export default Ember.Component.extend({
  formAnswer: false,
  actions:{
   destroyAnswer(answer){
     this.sendAction('destroyAnswer', answer);
   },
   updateAnswer(answer){
      var params = {
        content: this.get('edit_content'),
        author: this.get('edit_author'),
      };
      this.set('formAnswer',false);
      this.sendAction('updateAnswer', answer, params);
    },
    showAnswer(){
      this.set('formAnswer', true);
    }
 }
});
