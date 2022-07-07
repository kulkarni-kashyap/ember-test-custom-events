/* eslint-disable no-console */
import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        this.element.querySelector('#input1').addEventListener('fwFocus', (event) => {
            console.log('fwFocus fired for:' , event);
        })
    },
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
    fwBlur(event) {
        console.log('fwBlur event triggered!', event);
        //Handle the correct component based on the ID.
        switch (event.target.id) {
            case 'input1':
                console.log('Blur fired on input');
                break;
            case 'btn1':
                console.log('Blur fired on button');
        }
    },
    fwInput(event) {
        console.log('fwInput event triggered!', event);
    }
});
