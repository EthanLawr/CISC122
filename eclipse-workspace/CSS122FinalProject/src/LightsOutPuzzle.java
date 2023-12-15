import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;
import javax.swing.WindowConstants;

/*
 * Create a Lights Out Puzzle
 * Create a working grid and logic system for the lights out puzzle
 * Make it so that puzzles can be made manually
 * Implement a text file reliant high score system
 * Implement classes for buttons and colors to give better customizability in the future
 * Implement a win check class
 * Implement an AI to automatically solve the puzzle
 * Ensure the puzzle is randomly generated and displays a win screen.
 */

public class LightsOutPuzzle extends JFrame {
	private static final long serialVersionUID = 1L;
	static final int GRID_SIZE = 5;
	private LightsOutGrid lightsOutGrid;
	private HighScoreManager highScoreManager;
	private WinChecker winChecker;
	private ManualModeManager manualModeManager;
	private static int moves = 0;
	private static JLabel movesLabel;
	private JLabel highScoreLabel;

	public LightsOutPuzzle() {
		// Set Graphics Panel Options
		setTitle("Lights Out Puzzle");
		setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
		setSize(500, 500);
		setLayout(new BorderLayout());

		// Call Classes
		manualModeManager = new ManualModeManager();
		winChecker = new WinChecker();
		highScoreManager = new HighScoreManager();
		lightsOutGrid = new LightsOutGrid(GRID_SIZE, manualModeManager, winChecker);

		// New JPanel and button layout
		JPanel puzzlePanel = new JPanel();
		puzzlePanel.setLayout(new GridLayout(GRID_SIZE, GRID_SIZE));

		// Initial setup
		for (int i = 0; i < GRID_SIZE; i++) {
			for (int j = 0; j < GRID_SIZE; j++) {
				LightsOutButton button = new LightsOutButton();
				lightsOutGrid.addButton(button, i, j);
				puzzlePanel.add(button);
			}
		}

		add(puzzlePanel, BorderLayout.CENTER);

		JPanel controlPanel = new JPanel();
		controlPanel.setLayout(new FlowLayout());

		// Bottom buttons
		JButton restartButton = new JButton("Restart");
		restartButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				restartGame();
			}
		});

		// Manual mode to set up a specific puzzle
		JButton manualButton = new JButton("Manual Mode");
		manualButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				manualModeManager.toggleManualMode();
				updateManualModeMessage();
				if (winChecker.checkWin(lightsOutGrid.getLights())) {
					toggleWin();
				}
			}
		});

		movesLabel = new JLabel("Moves: 0");
		highScoreLabel = new JLabel("High Score: " + highScoreManager.readHighScores());

		// Automatic solver
		AISolverButton aiSolverButton = new AISolverButton(lightsOutGrid, GRID_SIZE);

		// Adding the buttons and labels
		controlPanel.add(restartButton);
		controlPanel.add(manualButton);
		controlPanel.add(movesLabel);
		controlPanel.add(highScoreLabel);
		controlPanel.add(aiSolverButton);

		add(controlPanel, BorderLayout.SOUTH);

		// Puzzle Gen
		generateRandomPuzzle();

		pack();
		setLocationRelativeTo(null);
		setSize(500, 500);
		setVisible(true);
	}

	// Puzzle Gen
	private void generateRandomPuzzle() {
		movesLabel.setText("Moves: 0");
		lightsOutGrid.generateRandomPuzzle();
		lightsOutGrid.generateRandomPuzzle();
	}

	// New Game
	private void restartGame() {
		movesLabel.setText("Moves: 0");
		lightsOutGrid.generateRandomPuzzle();
		lightsOutGrid.generateRandomPuzzle();
	}

	// Manual Mode Setup
	private void updateManualModeMessage() {
		if (manualModeManager.isManualMode()) {
			JOptionPane.showMessageDialog(null, "Manual Mode: Click on the buttons to toggle lights.");
		}
	}

	// If win do this
	void toggleWin() {
		JOptionPane.showMessageDialog(this, "Congratulations, you have won!");
		restartGame();
	}

	// Program start
	public static void main(String[] args) {
		SwingUtilities.invokeLater(new Runnable() {
			@Override
			public void run() {
				new LightsOutPuzzle();
			}
		});

	}

	public static int getMoves() {
		return moves;
	}

	public static void setMoves(int movesNew) {
		moves = movesNew;
		movesLabel.setText("Moves: " + movesNew);
	}
}
