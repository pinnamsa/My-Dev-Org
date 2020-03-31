/********************************
 This Trigger is written to post the attachments in chater when attachement is added to account
*********************************/

trigger AttachmentTriggger on Attachment (after insert) {
    
    Map<Id,Id> accountAttachmentMap = new Map<Id,Id>(); // Map<AccountId , attachmetId>
    set<Id> accountIds = new set<Id>();
    for(Attachment att : Trigger.New)
    {
        if(att.ParentId.getSobjectType() == Account.SobjectType){
              accountAttachmentMap.put(att.ParentId,att.Id);
         }
    }
    //fetching the account to check the condition
    List<Account> accList = new List<Account>();
    accList =[select id,check1__c,check2__c from Account where Id IN : accountAttachmentMap.keySet()];
    
    //checking if account is meting the required condition
    for(Account acc : accList){
        if(acc.check1__c && acc.check2__c){
            accountIds.add(acc.Id);
        }
    }
    
    //add code here to post attachments in group

}