import Component from '@ember/component';

export default Component.extend({
   data: null,
   init() {
       this._super(...arguments);
       this.data = {
            columns: [{
              "key": "name",
              "text": "Name"
            }, {
              "key": "role",
              "text": "Role"
            }],
            rows: [{
              "id": "0001",
              "name": "Alexander Goodman",
              "role": "Member"
            }, {
              "id": "0002",
              "name": "Ambrose Wayne",
              "role": "Member"
            }, {
              "id": "0003",
              "name": "August hines",
              "role": "Administrator"
            }],
            rowActions: [{
              "name": "Alert",
              "handler": (rowData) => {
                window.alert(rowData.name);
              }
            }, {
              "name": "Delete",
              "handler": async (rowData) => {
                let deletePromise = new Promise((resolve, reject) => {
                  const dataTable = document.querySelector('#datatable-4');
                  setTimeout(() => {
                    if (dataTable) {
                      dataTable.rows = dataTable.rows.filter((row) => (row.id !== rowData.id));
                      resolve();
                    } else {
                      reject();
                    }
                  }, 3000); 
                });
                await deletePromise;
              },
              "hideForRowIds": ["0003"]
            }]
       }
   } 
});
