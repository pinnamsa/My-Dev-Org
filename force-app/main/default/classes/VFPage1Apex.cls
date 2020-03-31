public class VFPage1Apex {
    
    public String name	{set; get;}
    public String job	{set; get;}
    public String selected	{set; get;}
    public List<selectOption>	options	{set; get;}
    
    public VFPage1Apex(){
        this.options = new List<selectOption>();
        this.name = 'Sandeep';
        this.job  = 'Salesforce';
        this.selected = '';
        
    }
    
    public pageReference redirecttoVf2(){
        pagereference p = new PageReference('/apex/VFPage2');
        
        return p;
    }
    
    public void getoption(){
        selectoption opt1 = new selectoption('opt1','opt1');
        selectoption opt2 = new selectoption('opt2','opt2');
        options.add(opt1);
        options.add(opt2);
    }

}