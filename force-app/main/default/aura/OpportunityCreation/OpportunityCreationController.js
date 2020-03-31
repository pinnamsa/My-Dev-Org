({
    handleEvent : function(component,event,helper){
        component.set("v.showChild", false);
        var accId = event.getParam("accountId");
        if(!$A.util.isEmpty(accId));
        component.find("accountLookup").set("v.value",accId);
        console.log('show child');
        var childComponent = component.find('child');
        childComponent.myMethod(false, 'b');
    },
    
    showChildComponent : function(component,event,helper){
        component.set("v.showChild", true);
        console.log('show child');
        var childComponent = component.find('child');
        childComponent.myMethod(true, 'b');
    },
    handleOnload : function(component, event, helper) {
       
        
        
    },
    
    handleOnSubmit : function(component, event, helper) {
        event.preventDefault();
        var fields = event.getParam("fields");
        fields["AccountId"] = component.get("v.parentId");
        component.find("form").submit(fields);
    },
    
    handleOnSuccess : function(component, event, helper) {
        var record = event.getParam("response");
        component.find("notificationsLibrary").showToast({
            "title": "Saved",
            "message": "{0} saved for {1}",
            "messageData": [
                {
                    url: '/' + record.id,
                    label: record.fields.FirstName.value + ' ' + record.fields.LastName.value
                },
                {
                    url: '/' + record.fields.AccountId.value,
                    label: record.fields.Account.displayValue
                }
            ]
        });
    }
})