import java.util.Scanner;  // Import the Scanner class
import java.util.ArrayList; // Import the ArrayList class
import java.util.Arrays; // Import the Arrays class

/*
 * Psuedo-Code
 * Create a Class with a constructor that accepts a String
 * This class should have 2 methods
 * Method one should show the vowels of the chosen String
 * Method two should show the consonants of the chosen String
 * The program should start by taking a word
 * The program must then display the menu that has been provided with working options of A B C and D
 * Option A must display the amount of vowels in a given string
 * Option B must display the amount of consonants in a given string
 * Option C must ask for a new string to be input by the user
 * Option D must end the program
 * The program must repeat through these options until Option D is selected
 */
public class VowelsAndConsonants {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Create a Scanner object for the initial input string and obtain the inital input
		Scanner initialWord = new Scanner(System.in);
		System.out.print("Please input a string to continue this program:\t");
		Lotty chosenWord = new Lotty(initialWord.nextLine());
		
		// Create a Scanner object for the initial choice input and obtain the initial choice input
	    Scanner option = new Scanner(System.in);  
	    int check = 0;
	    System.out.println("Please choose one of the following options:\n" +
	    		"A.Count the number of vowels in the string;\n" +
	    		"B.Count the number of consonants in the string.\n" +
	    		"C. Enter another string;\n" +
	    		"D. Exit the program.");
	    // While loop to infinitely accept new inputs.
	    while (check == 0) {
		    String chosenOption = option.nextLine();
		    // Switch with toLowerCase to accept user input options.
		    switch (chosenOption.toLowerCase()) {
		    case("a"): 
		    	// Use the input string on Lotty
		    	int vowelCount = chosenWord.vowelCount();
	    		// If statement for grammar. Create desired output.
		    	if (vowelCount != 1) System.out.println("There are " + vowelCount + " vowels in your word.");
		    	else System.out.println("There is " + vowelCount + " vowel in your word.");
		    	break;
		    case("b"):
		    	// Use the input string on Lotty
		    	int consonantCount = chosenWord.consonantCount();
		    	// If statement for grammar. Create desired output.
		    	if (consonantCount != 1) System.out.println("There are " + consonantCount + " consonants in your word.");
		    	else System.out.println("There is " + consonantCount + " consonant in your word.");
		    	break;
		    case("c"):
		    	// Obtain a new input
		    	System.out.print("Please input your string:\t");
		    	Scanner word = new Scanner(System.in);
		    	// Insert input into private variable
	    	    chosenWord = new Lotty(word.nextLine());
	    	    
		    	break;
		    case("d"):
		    	// Breaks the loop.
		    	check += 1;
		    	break;
		    default:
		    	// In the case an option is not chosen the question is reiterated.
			    System.out.println("Please select on of the corresponding letters from the following options:\n" +
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
	// Vowel array list. Used to provide "contains" to count methods.
	final private static ArrayList<Character> vowels = new ArrayList<Character>(
			Arrays.asList('a', 'e', 'i', 'o', 'u')
			);
	// Consonant array list.
	final private static ArrayList<Character> consonants = new ArrayList<Character>(
			Arrays.asList('b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z')
			);
	
	private String chosenWord = "";
	
	// Accepts chosen word. 
	public Lotty(String x) {
		chosenWord = x;
	}
	// Gets the number of vowels in chosenWord
	public int vowelCount() {
		// Replace non alphabetical characters with a regex
		char[] word = chosenWord.replaceAll("[^a-z]+/gmi", "").toCharArray();
		int vowelCount = 0;
		// Counts vowels one by one
		for (int i = 0; i < word.length; i++) {
			if (vowels.contains(word[i])) ++vowelCount;
		}
		return vowelCount;
	}
	// Gets the number of consonants in chosenWord
	public int consonantCount() {
		// Replace non alphabetical characters with a regex
		char[] word = chosenWord.replaceAll("[^a-z]+/gmi", "").toCharArray();
		int consonantCount = 0;
		// Counts consonants one by one
		for (int i = 0; i < word.length; i++) {
			if (consonants.contains(word[i])) ++consonantCount;
		}
		return consonantCount;
	}
}
