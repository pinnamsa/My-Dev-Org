@RestResource(urlMapping='/insertAccounts/*')
global class AccountInserrt 
{
    @HttpPost
   // global Static String insertAccountRecords(List<AccountWrapper> accWrapperList)
    global Static String insertAccountRecords(String name)
    {
        List<Account> accList = new List<Account>();
        /*for(AccountWrapper  acc :  accWrapperList)
        {
            Account a = new Account();
            a.Name = acc.Name;
            a.Phone = acc.phone;
            a.industry = acc.industry;
            accList.add(a);
        }
        insert accList;*/
        Account a = new Account();
        a.name = name;
        insert a;
        
        return 'Accounts inserted successfully';
    }
    
    global class AccountWrapper
    {
        global String name;
        global String Phone;
        global String industry;
        AccountWrapper()
        {
            this.name='';
            this.phone='';
            this.industry='';
            
        }
    }

}