public class LightningPaginationApexController {
    
    @AuraEnabled
    public static List<Account> getAccounts(String searchKey){
        
        List<Account> lstAccounts = new List<Account>();
        
        string queryString = 'select id,name,industry from Account where Name like \'%'+ searchKey+'%\'';
        lstAccounts = Database.query(queryString);
        return lstAccounts;
        
    }

}