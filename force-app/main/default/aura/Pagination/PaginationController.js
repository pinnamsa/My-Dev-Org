({
	doInit : function(component, event, helper) {
        
        var action = component.get("c.getAccounts");
        
        action.setParams({
            "searchKey" : component.get("v.searchString")
        })
        
        action.setCallback(this,function(response){
            var state = response.getState();
            
            if(state=='SUCCESS'){
                component.set("v.start",0);
                component.set("v.end",10);
                console.log('response>>::'+JSON.stringify(response.getReturnValue()));
                component.set("v.lstAccounts",response.getReturnValue());
            }else{
                alert(response.getReturnValue());
            }
            
        })
        
        $A.enqueueAction(action);
		
	},
    
    previous : function(component,event,helper){
        var start = component.get("v.start");
        var end = component.get("v.end");
        var pageLimit = component.get("v.recordsperPage");
        
        start = parseInt(start)-parseInt(pageLimit);
        end = parseInt(end)-parseInt(pageLimit)+1;
        component.set("v.start",start);
        component.set("v.end",end);
        console.log('Start>>::'+start);
        console.log('end>>::'+end);
        
    },
    
    next : function(component,event,helper){
        var start = component.get("v.start");
        var end = component.get("v.end");
        var pageLimit = component.get("v.recordsperPage");
        
        start = parseInt(start)+parseInt(pageLimit);
        end = parseInt(end)+parseInt(pageLimit)+1;
        component.set("v.start",start);
        component.set("v.end",end);
        console.log('next:::::');
        console.log('Start>>::'+start);
        console.log('end>>::'+end);
        
    }
})