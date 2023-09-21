/**
 * @author lawrencee86310
 *
 */

/* Psuedo-code
 * Objective: Create a BankAccount class to complete the code in the main method.
 * Create the BankAccount class.
 * Create a BankAccount constructor setting a balance
 * Create a BankAccount method to return the balance named getBalance()
 */

import java.util.ArrayList; // Needed for ArrayList class

public class ArrayListDemo6 {

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

// BankAccount Class to complete the above pre-selected code.
class BankAccount {
	private double balance;
	
	// Stores a balance to a BankAccount
	public BankAccount(double num) {
		balance = num;
	}
	
	// Returns the balance of a BankAccount
	public double getBalance() {
		return balance;
	}
} // Closes BankAccount class