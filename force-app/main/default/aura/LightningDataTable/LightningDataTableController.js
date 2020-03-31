({
    init: function (component, event, helper) {
        component.set('v.columns', [
            // to redirect to the redord details page
            { label: 'Name',  fieldName: 'URL', type: 'url', typeAttributes: { label: {fieldName: 'Name' },
                                                                                     target: '_self'},sortable: true },
            {label: 'Last Name', fieldName: 'lastName', type: 'text'},
            {type: "button", typeAttributes: {label: 'Name', name: 'Name', title: 'Name', disabled: false,
                                              value: 'Name', iconPosition: 'left'
                                             }},
            
            
            { label: 'Account',  fieldName: 'Account.Name', type: 'url', typeAttributes: { label: {fieldName: 'AccountId' },
                                                                                     target: '_self'},sortable: true }
        ]);
        
        helper.fetchData(component, event,helper);
    },
    handleRowAction : function(component, event, helper){
        console.log('action called>>>');
        component.set("v.showModal",true);
        var recId = event.getParam('row').Id;
        component.set("v.recId",recId);
        
    }
    
})