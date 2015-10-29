import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Route.extend({

  model() {
    let pods = this.pods();

    return Ember.ArrayProxy.create({content: Ember.A(pods)});
  },

  pods() {
    return _.range(30).map((i)=> {
      let color = (function() { return i % 2 === 0 ? 'blue' : 'red'; })();

      let pod = this.store.createRecord('pod', {
        id: (i + 1),
        color: color,
        type: this._type()
      });

      return pod
    });
  },


































  _type() {
    let num = Math.random();
    return num > 0.5 ? 'mars' : 'sneakers'
  }
});


