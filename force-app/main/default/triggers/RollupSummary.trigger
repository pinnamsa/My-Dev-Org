Trigger RollupSummary on Contact (after insert, after update, after delete, after undelete)
{
    List<Account> accountList = new List<Account>();
    set<Id> accIds = new set<Id>();
    List<Contact> contactsList;
    
    if(Trigger.isInsert || Trigger.isDelete || Trigger.isUndelete){
        
        if(Trigger.isDelete){
            contactsList = Trigger.Old;
        }else{
            contactsList = Trigger.New;
        }
        
        for(contact c : contactsList){
            if(c.AccountId != null){
                accIds.add(c.AccountId);
            }
        }
        
    }
    if(Trigger.isUpdate){
        contactsList = Trigger.New;
        for(contact con : contactsList)
        {
            contact oldContact = Trigger.OldMap.get(con.Id);
            if(oldContact != null){
                if(String.isNotEmpty(oldContact.AccountId)  && con.AccountId != oldContact.AccountId){
                    accIds.add(oldContact.AccountId);
                }
            }
            if(con.AccountId != null){
                accIds.add(con.AccountId);
            }
        }
    }
    
    AggregateResult[] lstAggregateResult = [select sum(Amount__c) totalAmount, AccountId from contact where AccountId IN : accIds GROUP BY AccountId];
    
    for(AggregateResult ar : lstAggregateResult)
    {
        String accountId = (string) ar.get('AccountId');
        decimal totalAmount = (Decimal) ar.get('totalAmount');
        
        Account a = new Account(Id=accountId, Total_Amount__c=totalAmount);
        accountList.add(a);
    }
    
    update accountList;
}