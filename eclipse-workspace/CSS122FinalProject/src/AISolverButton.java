import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AISolverButton extends JButton {
	private static final long serialVersionUID = 1L;
	private LightsOutGrid lightsOutGrid;
    private int gridSize;
    private WinChecker winChecker;
    
    // Constructor
    public AISolverButton(LightsOutGrid lightsOutGrid, int gridSize) {
        super("Solve with AI");
        this.lightsOutGrid = lightsOutGrid;
        this.gridSize = gridSize;
        this.winChecker = new WinChecker();
        addActionListener(new AISolverActionListener());
    }

    // Meat of the class to solve by computer
    private class AISolverActionListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int moves = solveWithAI(lightsOutGrid);
            lightsOutGrid.updateAllColor();
            JOptionPane.showMessageDialog(null, "AI solved the puzzle in " + moves + " moves.");
        }
        
        // Brute-force approach: Toggle lights that are on in a sequence until the puzzle is solved
        // Gauss-Jordan Elimination was attempted but could not be completed before the given due date
        private int solveWithAI(LightsOutGrid lightsOutGrid) {
            int moves = 0;
            
            while (winChecker.checkWin(lightsOutGrid.getLights()) == false) {
            for (int i = 0; i < gridSize; i++) {
                for (int j = 0; j < gridSize; j++) {
                	if (lightsOutGrid.getLights()[i][j]) {
                    lightsOutGrid.toggleLights(i, j);
                    lightsOutGrid.updateAdjacentLightsAI(i, j);
                    moves++;  
                	}
                }
            }
            }
            return moves;
            }
        }
}
