/* eslint-disable no-console */
import Component from '@ember/component';

export default Component.extend({
    fwChange(event) {
        console.log('fwChange event triggered!!', event.detail);
    },
});
