import javax.swing.JOptionPane;

public class WinChecker {
	public boolean checkWin(boolean[][] lights) {
		for (boolean[] light : lights) {
			for (int j = 0; j < light.length; j++) {
				if (light[j]) {
					return false; // If any light is still on, the game is not won
				}
			}
		}
		JOptionPane.showMessageDialog(null, "You won!");
		return true;
	}
}
