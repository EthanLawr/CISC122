import java.io.File;
import java.io.FileWriter;

import java.util.Scanner;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

/*
 * Create a program that takes a text file as an input. Use Scanner.
 * Convert each character using byte arrays to an encrypted format.
 * Write the encrypted text to an output file.
 * Display the output file contents.
 * Use a file from http://textfiles.com/directory.html as an input.
 */
public class LabFive {

	public static void main(String[] args) {
		// TODO Auto-generated method stud
		try {
			// Get file location
	        String src = (new File(LabFive.class.getProtectionDomain().getCodeSource().getLocation().toURI().getPath())).getParent()+"\\src";
	        Scanner inputFile = new Scanner(new File(src+"\\text1.txt"));
	        // Read file
	        inputFile.useDelimiter("\\Z");
	        // File to string
	        String oldText = inputFile.next();
	        
	        // Cipher
	        KeyGenerator keygenerator = KeyGenerator.getInstance("DES");
	        SecretKey myDesKey = keygenerator.generateKey();
	        // Creating object of Cipher
	        Cipher desCipher = Cipher.getInstance("DES");
	        byte[] text = oldText.getBytes("UTF8");
	        
	        // Encryption
	        desCipher.init(Cipher.ENCRYPT_MODE, myDesKey);
	        byte[] textEncrypted = desCipher.doFinal(text);    
	        // Converting encrypted byte array to String
	        String newText = new String(textEncrypted);
	        System.out.println(newText);
	        
	        //Encrypted File Output
	        FileWriter outputWriter = new FileWriter("output.txt");
	        outputWriter.write(newText);
	        outputWriter.close();
	        
	        // Decrypted text to prove its the same format
	        desCipher.init(Cipher.DECRYPT_MODE, myDesKey);
	        byte[] textDecrypted = desCipher.doFinal(textEncrypted);
	        // Converting decrypted byte array to String
	        newText = new String(textDecrypted);
	        System.out.println(newText);
	        
	        
		} catch (Exception ex){
			System.out.println("Error");
		}

	}

}
