({
	fetchData : function(component, event,helper) {
		
        var action = component.get("c.getContacts");
        
        action.setParams({
            "accountId" : '0017F00000fR875QAC'
        });
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var returnData = response.getReturnValue();
                returnData.forEach(function(item) {
                    item['URL'] = '/lightning/r/Contact/' + item['Id'] + '/view';
                    item['Account.Name'] = '/lightning/r/Account/' + item['AccountId'] + '/view';
                   // item['Account'] =  item['Account.Name'] ;
                })
                
                component.set("v.data",returnData);
            }else if (a.getState() === "ERROR") {
                alert('get Data Failed');
            }
        });
         $A.enqueueAction(action);
	}
})