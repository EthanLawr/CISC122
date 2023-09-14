import java.util.ArrayList; // Needed for ArrayList class

public class ArrayDemo6 {

	   public static void main(String[] args)
	   {
	      // Create an ArrayList to hold BankAccount objects.
	      ArrayList<BankAccount> list = new ArrayList<BankAccount>();
	      
	      // Add three BankAccount objects to the ArrayList.
	      list.add(new BankAccount(100.0));
	      list.add(new BankAccount(500.0));
	      list.add(new BankAccount(1500.0));
	      
	      // Display each item.
	      for (int index = 0; index < list.size(); index++)
	      {
	         BankAccount account = list.get(index);
	         System.out.println("Account at index " + index +
	                      "\nBalance: " + account.getBalance());
	      }      
	   }

}

class BankAccount {
	private double balance;
	
	public BankAccount(double num) {
		balance = num;
	}

	public double getBalance() {
		return balance;
	}
}