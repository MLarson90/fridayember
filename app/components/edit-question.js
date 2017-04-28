import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
actions:{
  delete(question){
    this.sendAction('deleteQuestion', question);
  },
  update(question){
    var params = {
      main: this.get('edit_main'),
      author: this.get('edit_author'),
      note: this.get('note'),
    };
    this.set('updateQuestion',false);
    this.sendAction('update', question, params);
  },
  showQuestion(){
    this.set('updateQuestion', true);
  },
  updateAnswer(answer, params){
    Object.keys(params).forEach(function(key){
      if(params[key]!==undefined){
        answer.set(key,params[key]);
      }
    });
    answer.save();
  },
  destroyAnswer(answer){
    answer.destroyRecord();
  }
}
});
