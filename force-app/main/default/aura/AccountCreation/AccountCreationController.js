({
    doInit : function(component, event, helper) {
        //component.set("v.showPopup", true); 
        console.log('acc comp');
    },
 
    executeMyMethod : function (component, event, helper) {
        var params = event.getParam('arguments');
        console.log('Param 1: '+ params.param1);
        console.log('Param 2: '+ params.param2);
        component.set("v.showPopup", params.param1);
    },

	saveAccount : function(component, event, helper) {
        
        var action = component.get("c.createNewAccount");
        console.log("accountDetails"+ JSON.stringify(component.get("v.acc")));
        action.setParams({
            "acc" : component.get("v.acc") 
        });
        action.setCallback(this, function(a){
            var state = a.getState(); // get the response state
            if(state == 'SUCCESS') {
                var accId = a.getReturnValue();
                alert('accountId'+accId);
                component.set("v.accountId",accId);
                component.set("v.showPopup", false); 
                var eventvarible = component.getEvent("PatentEvent");
                eventvarible.setParams({
                    "accountId": accId
                }).fire();
               // component.set("v.showPopup", false); 
            }
        });
        $A.enqueueAction(action);
		
	},
    
    closePopup : function(component, event, helper){
        component.set("v.showPopup", false);
        var eventvarible = component.getEvent("PatentEvent");
                eventvarible.setParams({
                    "accountId": ''
                }).fire();
    }
    
})