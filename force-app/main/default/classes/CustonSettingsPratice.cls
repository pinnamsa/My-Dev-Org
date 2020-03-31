public class CustonSettingsPratice {
   
    public CustonSettingsPratice(){
      
        // List custom setting 
        Map<String,ListCustomSetting1__c> listCSMap = ListCustomSetting1__c.getAll();
        system.debug('>>>>::::Map'+listCSMap);
        system.debug('mapKeys>>:::'+listCSMap.keySet());
        ListCustomSetting1__c cs = ListCustomSetting1__c.getValues('Asia');
        system.debug('>>>>getValues>:::'+cs);
        ListCustomSetting1__c insatance = ListCustomSetting1__c.getInstance('Asia');
        system.debug('>>>>insatance>:::'+insatance);
        // List custom setting 
        
        //Hirearchy custom settings
        CustomSetting1__c mc = CustomSetting1__c.getOrgDefaults();
        system.debug('>>>Hirearchy OWD::::'+mc);
        CustomSetting1__c hirearchyCS = CustomSetting1__c.getInstance('0057F000003DFXC');
        system.debug('>>>>::::hirearchyCS'+hirearchyCS);

    }

}