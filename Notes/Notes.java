// Notes
// Lab 1

// You can write c/c++ for pseudo code

class Msg {
	public void setM(String m) {
		// this.m = m;
	} // Close setM method
} // Close Msg Class

/*public*/ class MsgApp {
	private static Msg m;
	public static void main(String[] args) {
		m = new Msg();
	} // Close main method
} // Close MsgApp Class


public class Notes {
	/**
	 * @param args
	 */
	public static void main(String[] args) {		
		// Integer Array
		int[] keys = {7, 4, 2, 66, 41, 8};
		// Positions {0, 1, 2,  3,  4, 5};

		// Calls on the value 2 in position 2
		int select = keys[2]; 
		
		// Integer can be int or long
		// floating can be float or double
		float i = 2000000f;
		System.out.println(i);
		
		double [] tempCelsius = {18.2, 14.1, 9.6, 12.1};
		
		// O(1) ; constant time
	}
}

class Fruit {
	private String type;
	double weight;
	public Fruit() { type = ""; weight = 0.0; }
	public Fruit(String t, double w) { type = t; weight = w;}
	public void setType(String t) { type = t; }
	public String getType() { return type; }
	public void setWeight(double w) { weight = w; }
	public double getWeight() { return weight; }
} // closes Fruit class
/*
	Design of table for class Fruit
   __________________________________________
   |                 Fruit                  |
   |----------------------------------------|
   | - type: String                         |
   | - weight: double                       |
   |----------------------------------------|
   | + Fruit ()                             |
   | + Fruit (t:String, w:double)           |
   | + setType (t:String) : void            |
   | + getType () : String                  |
   | + setWeight (w:double) : void          |
   | + getWeight () : double                |
   |________________________________________|
*/