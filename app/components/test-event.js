/* eslint-disable no-console */
import Component from '@ember/component';

export default Component.extend({
    actions: {
        handleClick() {
            console.log(this.element.querySelector('#House').getSelectedItem().then(res => console.log(res)));
        }
    },
    fwClick(event) {
        console.log('fwClick event triggered!', event);
    },
    fwChange(event) {
        console.log('fwChange event triggered!', event);
        //Handle the correct select based on the ID.
        switch (event.target.id) {
            case 'House':
                console.log('Selected House:', event.detail);
                break;
            case 'Name':
                console.log('Selected Name:', event.detail);
        }
    },
});
