import javax.swing.JOptionPane;

public class WinChecker {
    public boolean checkWin(boolean[][] lights) {
        for (int i = 0; i < lights.length; i++) {
            for (int j = 0; j < lights[i].length; j++) {
                if (lights[i][j]) {
                    return false; // If any light is still on, the game is not won
                }
            }
        }
        JOptionPane.showMessageDialog(null, "You won!");
        return true;
    }
}
