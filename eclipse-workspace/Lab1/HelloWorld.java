/**
 * 
 */

/**
 * @author lawrencee86310
 *
 */

/* Psuedo-code
 * Create a HelloWorld class in which another class is called to define a message for output.
 * Create an App class that defines and sets a message fit for output ("Hello World"). 
 * */

public class HelloWorld {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// New variable to call class App
		App based = new App();
		// Print current message provided by App
		System.out.println("The current output is: " + based.getMessage());
		// Set message of App to Hello World
		based.setMessage("Hello World");
		// Print new message provided by App
		System.out.println("The current output is: " + based.getMessage());
	}

}

class App {
	// Default message of App
	String message = "Place-Holder";
	// Returns a string to display message from App
	public String getMessage() {
		return message;
	}
	// Sets a string to be the new value of message in App
	public void setMessage(String ajax) {
		message = ajax;
	}
}