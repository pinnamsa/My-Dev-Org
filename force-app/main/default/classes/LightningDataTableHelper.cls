public class LightningDataTableHelper {
    
    @AuraEnabled
    public static List<Contact> getContacts(String accountId){
        
        List<Contact> conList = [select id,Name, lastName, firstName, AccountId, Account.Name from contact/* where AccountId= : AccountId*/];
        
        return conList;
    }

}