
public class EmployeeAndProductionWorker {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Employee Test Program
		// Testing Accessors
		Employee test1 = new Employee("Jack", "333-A", "12/12/1996");
		System.out.printf("Employee Test\nName: %s\tID: %s\tHire Date: %s", 
				test1.getName(), test1.getId(), test1.getHireDate());
		// Testing Mutators
		test1.setName("Jorge");
		test1.setId("999-Z");
		test1.setHireDate("1/1/2017");
		System.out.printf("\nName: %s\tID: %s\tHire Date: %s\n-----------------------------------------------------------\n", 
				test1.getName(), test1.getId(), test1.getHireDate());
		// Complete
		
		// Production Worker Test Program
		// Testing Accessors
		ProductionWorker test2 = new ProductionWorker(2, 16);
		System.out.printf("Production Worker Test\nShift: %s\tPayRate: $%s", 
				test2.getShift(), test2.getPayRate());
		// Testing Mutators
		test2.setShift(1);
		test2.setPayRate(23.50);
		System.out.printf("\nShift: %s\tPayRate: $%s\n-----------------------------------------------------------\n", 
				test2.getShift(), test2.getPayRate());
		// Complete
		
		// Shift Supervisor Test Program
		ShiftSupervisor test3 = new ShiftSupervisor(30000, 10000, "Jack", "333-A", "12/12/1996");
		// Testing Accessors
		System.out.printf("SuperVisor Test\nName: %s\tID: %s\tHire Date: %s\tSalary: $%s\tYearly Bonus: $%s", 
				test3.getName(), test3.getId(), test3.getHireDate(), test3.getSalary(), test3.getBonus());
		// Testing Mutators
		test3.setName("Jorge");
		test3.setId("999-Z");
		test3.setHireDate("1/1/2017");
		test3.setSalary(50250);
		test3.setBonus(5000);
		System.out.printf("\nName: %s\tID: %s\tHire Date: %s\tSalary: $%s\tYearly Bonus: $%s\n-----------------------------------------------------------\n", 
				test3.getName(), test3.getId(), test3.getHireDate(), test3.getSalary(), test3.getBonus());
		// Complete
		
		// Team Leader Test Program
		// Testing Accessors
		TeamLeader test4 = new TeamLeader(2, 16, 5000, 300, 120);
		System.out.printf("Team Leader Test\nShift: %s\tPayRate: $%s\tMonthly Bonus: $%s\tTraining Req: %s\tTraining Done: %s", 
				test4.getShift(), test4.getPayRate(), test4.getMBonus(), test4.getTrainingReq(), test4.getTrainingComplete());
		// Testing Mutators
		test4.setShift(1);
		test4.setPayRate(23.50);
		test4.setMBonus(10000);
		test4.setTrainingReq(400);
		test4.setTrainingComplete(350);
		System.out.printf("\nShift: %s\tPayRate: $%s\tMonthly Bonus: $%s\tTraining Req: %s\tTraining Done: %s\n-----------------------------------------------------------\n", 
				test4.getShift(), test4.getPayRate(), test4.getMBonus(), test4.getTrainingReq(), test4.getTrainingComplete());
		// Complete
		
		/*ShiftSupervisor staff = new ShiftSupervisor(30000, 10000, "Jack", "333-A", "12/12/1996");
		System.out.printf("SuperVisor Test\nName: %s\nID: %s\nHire Date: %s\nSalary: $%s\nYearly Bonus: $%s", 
				staff.getName(), staff.getId(), staff.getHireDate(), staff.getSalary(), staff.getBonus());
		ShiftSupervisor staff = new ShiftSupervisor(30000, 10000, "Jack", "333-A", "12/12/1996");
		System.out.printf("SuperVisor Test\nName: %s\nID: %s\nHire Date: %s\nSalary: $%s\nYearly Bonus: $%s", 
				staff.getName(), staff.getId(), staff.getHireDate(), staff.getSalary(), staff.getBonus());
		
		ShiftSupervisor staff = new ShiftSupervisor(30000, 10000, "Jack", "333-A", "12/12/1996");
		System.out.printf("SuperVisor Test\nName: %s\nID: %s\nHire Date: %s\nSalary: $%s\nYearly Bonus: $%s", 
				staff.getName(), staff.getId(), staff.getHireDate(), staff.getSalary(), staff.getBonus());
				*/
	}

}

class Employee {
	private String name = null; // Their name
	private String id = "XXX-L"; // Employee ID. X is a digit. L is A-Z
	private String hireDate = "12/12/12"; // Date they were hired
	Employee(String newName, String newId, String newHireDate) {
		name = newName;
		id = newId;
		hireDate = newHireDate;
	}
	// Accessor Methods
	public String getName() {
		return name;
	}
	public String getId() {
		return id;
	}
	public String getHireDate() {
		return hireDate;
	}
	// Mutator Methods
	public void setName(String newName) {
		name = newName;
	}
	public void setId(String newId) {
		id = newId;
	}
	public void setHireDate(String newHireDate) {
		hireDate = newHireDate;
	}
}

class ProductionWorker {
	private int shift = 1; // 1 is day, 2 is night
	private double payRate = 0; // Hourly pay
	ProductionWorker(int newShift, double newPayRate) {
		shift = newShift;
		payRate = newPayRate;
		// Constructor
	}
	// Accessor Methods
	public int getShift() {
		return shift;
	}
	public double getPayRate() {
		return payRate;
	}
	// Mutator Methods
	public void setShift(int newShift) {
		shift = newShift;
	}
	public void setPayRate(double newPayRate) {
		payRate = newPayRate;
	}
}

class ShiftSupervisor extends Employee {
	private double salary = 0; // Annual Salary
	private double bonus = 0; // Production Bonus
	ShiftSupervisor(double setSalary, double setBonus, String name, String id, String hireDate) {
		super(name, id, hireDate);
		salary = setSalary;
		bonus = setBonus;
	}
	// Accessor Methods
	public double getSalary() {
		return salary;
	}
	public double getBonus() {
		return bonus;
	}
	// Mutator Methods
	public void setSalary(double newSalary) {
		salary = newSalary;
	}
	public void setBonus(double newBonus) {
		bonus = newBonus;
	}
	
}

class TeamLeader extends ProductionWorker {
	private double mBonus = 0; // Monthly Bonus
	private int trainingReq = 0; // Minimum required training per year
	private int trainingComplete = 0; // Training done
	TeamLeader(int shift, double payRate, double newMBonus, int newTrainingReq, int newTrainingComplete) {
		super(shift, payRate);
		mBonus = newMBonus;
		trainingReq = newTrainingReq;
		trainingComplete = newTrainingComplete;
	}
	
	// Accessor Methods
	public double getMBonus() {
		return mBonus;
	}
	public int getTrainingReq() {
		return trainingReq;
	}
	public int getTrainingComplete() {
		return trainingComplete;
	}
	// Mutator Methods
	public void setMBonus(double newMBonus) {
		mBonus = newMBonus;
	}
	public void setTrainingReq(int newTrainingReq) {
		trainingReq = newTrainingReq;
	}
	public void setTrainingComplete(int newTrainingComplete) {
		trainingComplete = newTrainingComplete;
	}
}

