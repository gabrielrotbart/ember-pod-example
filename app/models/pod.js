import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { attr } = DS;

export default DS.Model.extend({
  color: attr('string'),
  type: attr('string'),

  isRed: computed.equal('color', 'red')
});