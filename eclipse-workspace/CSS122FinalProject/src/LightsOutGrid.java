import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

import javax.swing.JButton;
import javax.swing.JOptionPane;
import java.util.random.*;

public class LightsOutGrid {
    private boolean[][] lights;
    private LightsOutButton[][] buttons;
    private ManualModeManager manualModeManager;
    private WinChecker winChecker;

    // Grid layout
    public LightsOutGrid(int gridSize, ManualModeManager manualModeManager, WinChecker winChecker) {
        this.manualModeManager = manualModeManager;
        this.winChecker = winChecker;

        setLights(new boolean[gridSize][gridSize]);
        buttons = new LightsOutButton[gridSize][gridSize];
    }

    // Adds custom buttons
    public void addButton(LightsOutButton button, int row, int col) {
        buttons[row][col] = button;
        button.addActionListener(new LightsOutActionListener(row, col));
        button.addMouseListener(new HoverMouseListener(row, col));
    }

    // Generates a new puzzle
    public void generateRandomPuzzle() {
        for (int i = 0; i < buttons.length; i++) {
            for (int j = 0; j < buttons[i].length; j++) {
                this.lights[i][j] = Math.random() < 0.5; // Randomly set lights to on or off
                updateButtonColor(i, j);
            }
        }
    	LightsOutPuzzle.setMoves(0);

    }

    // Updates button color
    private void updateButtonColor(int row, int col) {
        if (this.lights[row][col]) buttons[row][col].setBackground(LightsOutColor.WHITE);
        else buttons[row][col].setBackground(LightsOutColor.BLACK);
    }

    // Light being toggled
    void toggleLights(int row, int col) {
        this.lights[row][col] = !this.lights[row][col];
    }
    
    // Rng to make sure all puzzles are possible, even if it takes a long time.
    private void updateAdjacentLights(int row, int col) {
        if (row > 0 && (int)Math.round(Math.random()) == 0) {
        	toggleLights(row - 1, col); // Toggle above
        	updateButtonColor(row - 1, col);
        }
        if (row < this.lights.length - 1 && (int)Math.round(Math.random()) == 0) {
        	toggleLights(row + 1, col); // Toggle below
        	updateButtonColor(row + 1, col);

        }
        if (col > 0 && (int)Math.round(Math.random()) == 0) {
        	toggleLights(row, col - 1); // Toggle left
        	updateButtonColor(row, col - 1);
        }
        if (col < this.lights[row].length - 1 && (int)Math.round(Math.random()) == 0) {
        	toggleLights(row, col + 1); // Toggle right
        	updateButtonColor(row, col + 1);
        }
    }
    
    // Faster method than repainting repeatedly
    void updateAdjacentLightsAI(int row, int col) {
        if (row > 0 && (int)Math.round(Math.random()) == 0) toggleLights(row - 1, col); // Toggle above
        if (row < this.lights.length - 1 && (int)Math.round(Math.random()) == 0) toggleLights(row + 1, col); // Toggle below
        if (col > 0 && (int)Math.round(Math.random()) == 0) toggleLights(row, col - 1); // Toggle left
        if (col < this.lights[row].length - 1 && (int)Math.round(Math.random()) == 0) toggleLights(row, col + 1); // Toggle right
    }
    
    // Updates colors to for ai since it will always complete the puzzle
    void updateAllColor() {
        for (int i = 0; i < buttons.length; i++) for (int j = 0; j < buttons[i].length; j++) updateButtonColor(i, j);
    }

    private class LightsOutActionListener implements ActionListener {
        private int row;
        private int col;
        private HighScoreManager hsm = new HighScoreManager();

        // Gets the row and col
        public LightsOutActionListener(int row, int col) {
            this.row = row;
            this.col = col;
        }

        // Manual mode helper, determines if a win is possible
        @Override
        public void actionPerformed(ActionEvent e) {
            if (manualModeManager.isManualMode()) {
                toggleLights(row, col);
                updateButtonColor(row, col);
            } else {
            	LightsOutPuzzle.setMoves(LightsOutPuzzle.getMoves() + 1);
                toggleLights(row, col);
                updateButtonColor(row, col);
                updateAdjacentLights(row, col);
                if(winChecker.checkWin(getLights())) {
                	hsm.addHighScore(LightsOutPuzzle.getMoves());
                }
            }
            
        }

    }

    // Mouse hover to show what you are selecting
    // Also fixes paint should there be any issues, but in testing there wasnt
    private class HoverMouseListener extends MouseAdapter {
        private int row;
        private int col;

        public HoverMouseListener(int row, int col) {
            this.row = row;
            this.col = col;
        }

        @Override
        public void mouseEntered(MouseEvent e) {
            buttons[row][col].setBackground(LightsOutColor.GRAY);
        }

        @Override
        public void mouseExited(MouseEvent e) {
            updateButtonColor(row, col);
        }
    }

    // Getter
	public boolean[][] getLights() {
		return lights;
	}

	// Setter
	public void setLights(boolean[][] lights) {
		this.lights = lights;
	}
	

}
