/* eslint-disable no-console */
import Component from '@ember/component';

export default Component.extend({
    initialValues: null,
    init() {
        this._super(...arguments);
        this.initialValues = {
            first_name: "John",
            };
    },
    didInsertElement() {
        // Static form
        var formStatic = document.querySelector("#fw-static-form")
        document.querySelector('#submit-static-form').addEventListener('click', async (e) => {
            const { values, isValid } = await formStatic.doSubmit(e);
            console.log({ values, isValid });

            if (isValid) {
            // make ajax post end point with values
            // fetch("/post",values);

            // if error from backend , set Errors - passing key value pair
            formStatic.setFieldErrors({
                first_name: 'First Name must be unique <<Server Error>>',
            });

            // reset the form if required if success
            // formRef.current.doReset(e);
            }

        });
        document.querySelector('#reset-static-form').addEventListener('click', (e) => {
            if (document.querySelector('#cin'))
            document.querySelector('#cin').value = '';
            formStatic.doReset(e);
        });
            
        function handleCustomInput(e) {
            console.log('handle input');
            formStatic.setFieldValue([e.target.name], e.target.value);
        }
            
        document.querySelector('#cin').addEventListener('input', handleCustomInput);
        document.querySelector('#cin').addEventListener('change', handleCustomInput);
        document.querySelector('#cin').addEventListener('blur', handleCustomInput);
        }
});
