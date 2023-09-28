import java.util.Scanner;  // Import the Scanner class
import java.util.ArrayList; // Import the ArrayList class
import java.util.Arrays;
import java.util.regex.Pattern;
public class VowelsAndConsonants {
	private static String chosenWord = "";
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Create a Scanner object for the initial input string and obtain the inital input
		Scanner initialWord = new Scanner(System.in);
		System.out.print("Please input a string to continue this program:\t");
		chosenWord = initialWord.nextLine();
		
		// Create a Scanner object for the initial choice input and obtain the initial choice input
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
		    	// Use the input string on Lotty
		    	int vowelCount = Lotty.vowelCount(chosenWord);
	    		// If statement for grammar. Create desired output.
		    	if (vowelCount != 1) System.out.println("There are " + vowelCount + " vowels in your word.");
		    	else System.out.println("There is " + vowelCount + " vowel in your word.");
		    	break;
		    case("b"):
		    	// Use the input string on Lotty
		    	int consonantCount = Lotty.consonantCount(chosenWord);
		    	// If statement for grammar. Create desired output.
		    	if (consonantCount != 1) System.out.println("There are " + consonantCount + " consonants in your word.");
		    	else System.out.println("There is " + consonantCount + " consonant in your word.");
		    	break;
		    case("c"):
		    	// Obtain a new input
		    	System.out.print("Please input your string:\t");
		    	Scanner word = new Scanner(System.in);
		    	// Insert input into private variable
	    	    chosenWord = word.nextLine();
	    	    System.out.println("Your word is now \"" + chosenWord + "\".");
		    	break;
		    case("d"):
		    	// Breaks the loop.
		    	check += 1;
		    	break;
		    default:
		    	// In the case an option is not chosen the question is reiterated.
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
	// Arraylist used for the "contains" method. Initialized with vowels.
	private static ArrayList<String> vowels = new ArrayList<String>() {
	    {
	        add("a"); add("e"); add("i"); add("o"); add("u");
	    }
	};
	// Required so that whitespaces and symbols are not counted
	private static ArrayList<String> consonants = new ArrayList<String>() {
	    {
	    	add("b"); add("c"); add("d"); add("f"); add("g");
	    	add("h"); add("j"); add("k"); add("l"); add("m");
	    	add("n"); add("p"); add("q"); add("r"); add("s");
	    	add("t"); add("v"); add("w"); add("x"); add("y");
	    	add("z");
	    }
	};
	
	Lotty(String x) {
		// What would we need to do here?
		// Is this where he wants me to accept a string value with Scanner?
		// If so, I still dont see why Option C is required as both A and B can accept a new string. C only accepts an input while 
	}
	
	static int vowelCount(String w) {
		String[] word = Pattern.compile("^[a-zA-Z]+?$").split(w);
		System.out.println(Arrays.toString(word));
		int vowelCount = 0;
		for (int i = 0; i < word.length; i++) {
			if (vowels.contains(word[i])) vowelCount += 1;
		}
		return vowelCount;
	}
	// Opposite of vowel count
	static int consonantCount(String w) {
		char[] word = w.toCharArray();
		int consonantCount = word.length;
		for (int i = 0; i < word.length; i++) {
			if (consonants.contains(word[i])) consonantCount += 1;
		}
		return consonantCount;
	}
}
