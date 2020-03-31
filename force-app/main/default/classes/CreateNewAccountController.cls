public class CreateNewAccountController {
    
    @AuraEnabled
    public static Id createNewAccount(Account acc){
        
        insert acc;
        return acc.Id;
    }

}