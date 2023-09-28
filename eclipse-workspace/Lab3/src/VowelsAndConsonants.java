import java.util.Scanner;  // Import the Scanner class
public class VowelsAndConsonants {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Create a Scanner object
	    Scanner option = new Scanner(System.in);  
	    int check = 0;
	    System.out.print("Please choose one of the following options:\n" +
	    		"A.Count the number of vowels in the string;\n" +
	    		"B.Count the number of consonants in the string.\n" +
	    		"C. Enter another string;\n" +
	    		"D. Exit the program.\n");
	    while (check == 0) {
		    String chosenOption = option.nextLine();
		    // Switch with toLowerCase to accept user input options.
		    switch (chosenOption.toLowerCase()) {
		    case("a"): 
		    	Scanner word = new Scanner(System.in);
		    	// Some Additional User Input
		    	System.out.println("Please input your word for option A:\t");
		    	String chosenWord = word.nextLine();
		    	System.out.println("There are " + Lotty.vowelCount(chosenWord) + " vowel(s)" +
		    	 " in your word.");
		    	
		    	break;
		    case("b"):
		    	// Some Additional User Input
		    	System.out.println("something");
		    	break;
		    case("c"):
		    	// Some Additional User Input
		    	System.out.println("something");
		    	break;
		    case("d"):
		    	// Breaks the loop.
		    	check += 1;
		    	break;
		    default:
			    System.out.print("Please choose a valid one of the following options:\n" +
			    		"A.Count the number of vowels in the string;\n" +
			    		"B.Count the number of consonants in the string.\n" +
			    		"C. Enter another string;\n" +
			    		"D. Exit the program.");
			    break;
		    }
	    	
	    }
	    // Confirms the program is outside of the infinite loop.
    	System.out.println("Exiting the program. Have a nice day.");

	}

}

class Lotty {
	Lotty(String x) {
		
	}
	
	static int vowelCount(String w) {
		String[] array = w.split(",");
		return 1;
	}
	int consonantCount(String w) {
		return 1;
	}
}
