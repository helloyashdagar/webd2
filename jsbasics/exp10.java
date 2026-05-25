 
abstract class BankAccount {
     
    private int accountNumber;
    private String accountHolderName;
    private double balance;

     
    public BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

     
    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public void setAccountHolderName(String accountHolderName) {
        this.accountHolderName = accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

     
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Amount Deposited: " + amount);
        } else {
            System.out.println("Invalid Deposit Amount!");
        }
    }

     
    public void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

     
    abstract void calculateInterest();
}

 
class SavingsAccount extends BankAccount {
    
    public SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

     
    @Override
    void calculateInterest() {
         
        double interest = getBalance() * 0.05; // 5% interest
        System.out.println("Savings Account Interest: " + interest);
    }
}

 
class CurrentAccount extends BankAccount {
    
    public CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

     
    @Override
    void calculateInterest() {
         
        double interest = getBalance() * 0.02;  
        System.out.println("Current Account Interest: " + interest);
    }
}

 
public class Exp10 {
    public static void main(String[] args) {
        
        SavingsAccount sa = new SavingsAccount(101, "yash", 10000);
        CurrentAccount ca = new CurrentAccount(102, "venkatesh", 20000);

        System.out.println("----- Savings Account -----");
        sa.deposit(2000);
        sa.displayDetails();
        sa.calculateInterest();

        System.out.println();

        System.out.println("----- Current Account -----");
        ca.deposit(3000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}