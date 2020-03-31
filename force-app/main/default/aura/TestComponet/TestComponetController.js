({
    handleDateChange: function(cmp, event, helper) {
        var dateSelector = event.getSource().getLocalId();
        if (dateSelector == 'closeDate'){
            var opp = cmp.get("v.opportunity");
            opp.CloseDate = event.getParam("value");
        }
    }
})