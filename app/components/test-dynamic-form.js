/* eslint-disable no-console */
import Component from '@ember/component';

export default Component.extend({
    formSchema: null,
    initialValues: null,
    init() {
        this._super(...arguments);
        this.formSchema = {
            name: 'Test Form',
            fields: [
              {
                id: '2978f820-704b-46c7-9f88-110e14e34a8c',
                name: 'first_name',
                label: 'First Name',
                type: 'TEXT',
                position: 3,
                required: true,
                placeholder: 'Enter…',
                hint: 'Please provide a text of at max 100 characters',
                choices: [],
              },
        
              {
                id: '3978f820-704b-46c7-9f88-110e14e34a8c',
                name: 'last_name',
                label: 'Last Name',
                type: 'TEXT',
                position: 3,
                required: true,
                placeholder: 'Enter…',
                hint: 'Please provide a text of at max 100 characters',
                choices: [],
              },
        
              {
                id: '42aecb8f-25cf-47ce-89c6-5410fe3d4315',
                name: 'languages_known',
                label: 'Languages Known',
                type: 'MULTI_SELECT',
                position: 13,
                required: true,
                placeholder: 'Enter…',
                hint: 'Select one or more values',
                choices: [
                  {
                    id: 1,
                    value: 'English',
                    position: 1,
                    dependent_ids: {},
                  },
                  {
                    id: 2,
                    value: 'Hindi',
                    position: 2,
                    dependent_ids: {},
                  },
                  {
                    id: 3,
                    value: 'Tamil',
                    position: 3,
                    dependent_ids: {},
                  },
                ],
              },
        
              {
                id: '6978f820-704b-46c7-9f88-110e14e34a8c',
                name: 'email',
                label: 'Email',
                type: 'EMAIL',
                position: 3,
                required: true,
                placeholder: 'Enter…',
                hint: 'Please provide an email Id',
                choices: [],
              },
        
              {
                id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
                name: 'date_of_birth',
                label: 'Date Of Birth',
                type: 'DATE',
                position: 11,
                required: true,
                Placeholder: 'Enter…',
                hint: 'Please enter your date of birth',
                choices: [],
              },
        
              {
                id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
                name: 'landmark',
                label: 'Landmark',
                type: 'PARAGRAPH',
                position: 7,
                required: true,
                Placeholder: 'Enter some text…',
                hint: 'Please enter the nearest landmark',
                choices: [],
              },
        
              {
                id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
                name: 'is_indian_citizen',
                label: 'Indian Citizen?',
                type: 'CHECKBOX',
                position: 7,
                required: true,
                placeholder: null,
                hint: 'Check or Uncheck the box',
                choices: [],
              },
        
              {
                id: '8978f820-704b-46c7-9f88-110e14e34a8c',
                name: 'phone_number',
                label: 'Phone number',
                type: 'TEXT',
                position: 3,
                required: true,
                placeholder: 'Enter…',
                hint: 'Please provide your phone number',
                choices: [],
              },
        
              {
                id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
                name: 'pincode',
                label: 'Pincode',
                type: 'NUMBER',
                position: 8,
                required: false,
                Placeholder: 'Enter…',
                hint: 'Please enter your Pincode',
                choices: [],
              },
        
              {
                id: 'ba53775e-2948-4065-8a59-d99d4494e845',
                name: 'gender',
                label: 'Gender',
                type: 'RADIO',
                position: 5,
                required: true,
                placeholder: null,
                hint: 'Please specify your gender',
                choices: [
                  {
                    id: 1,
                    value: 'Female',
                    position: 1,
                    dependent_ids: {},
                  },
                  {
                    id: 2,
                    value: 'Male',
                    position: 2,
                    dependent_ids: {},
                  },
                ],
              },
        
              {
                id: '42aecb8f-25cf-47ce-89c6-5410fe3d4315',
                name: 'order_status',
                label: 'Order Status',
                type: 'DROPDOWN',
                position: 4,
                required: true,
                placeholder: 'Enter…',
                hint: 'Select a value',
                choices: [
                  {
                    id: 1,
                    value: 'open',
                    position: 1,
                    dependent_ids: {},
                  },
                  {
                    id: 2,
                    value: 'pending',
                    position: 2,
                    dependent_ids: {},
                  },
                  {
                    id: 3,
                    value: 'closed',
                    position: 3,
                    dependent_ids: {},
                  },
                ],
              },
        
              {
                id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
                name: 'amount_paid',
                label: 'Amount Paid',
                type: 'DECIMAL',
                position: 10,
                required: true,
                Placeholder: 'Enter…',
                hint: 'Please enter the amount paid',
                choices: [],
              },
            ],
        };
        this.initialValues = {
            is_indian_citizen: true,
        }

    },
    didInsertElement() {
        // Dynamic form
        var dynamicForm = document.querySelector('#dynamic-form');
        // var formContainer = document.querySelector('#form-container');
        document.querySelector('#submit').addEventListener('click', async (e) => {
          const { values, isValid } = await dynamicForm.doSubmit(e);
          console.log({ values, isValid });
      
          if (isValid) {
            // make ajax post end point with values
            // fetch("/post",values);
      
            // if error from backend , set Errors - passing key value pair
            dynamicForm.setFieldErrors({
              first_name: 'First Name must be unique <<Server Error>>',
            });
      
            // reset the form if required if success
            // formRef.current.doReset(e);
          }
        });
        document.querySelector('#reset').addEventListener('click', (e) => {
            dynamicForm.doReset(e);
        });
        // do any customisation on the field schema to match the props of crayons components.
        // var fields = formSchema.fields.map((field) => {
        //   // select expects `text` and `value` prop
        //   if (field.type === 'DROPDOWN' || field.type === 'MULTI_SELECT') {
        //     return {
        //       ...field,
        //       choices: field.choices?.map((f) => {
        //         return {
        //           ...f,
        //           text: f.value,
        //           value: f.id,
        //         };
        //       }),
        //     };
        //   } else return field;
        // });
      
        // var formSchema1 = {
        //   ...formSchema,
        //   fields: fields,
        // };
        // form.formSchema = formSchema1;

    }
});
