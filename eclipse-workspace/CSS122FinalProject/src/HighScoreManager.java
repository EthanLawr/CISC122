import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class HighScoreManager {
	private List<Integer> highScores;
	private String highScoreFilePath = "Highscores.txt";
	private static final int MAX_HIGH_SCORES = 10;

	// Loads highscores
	public HighScoreManager() {
		highScores = new ArrayList<>();
		loadHighScores();
	}

	// Getter
	public List<Integer> getHighScores() {
		return highScores;
	}

	/// New highscore
	public void addHighScore(int score) {
		highScores.add(score);
		Collections.sort(highScores);
		Collections.reverse(highScores);

		if (highScores.size() > MAX_HIGH_SCORES)
			highScores.remove(MAX_HIGH_SCORES);

		saveHighScores();
	}

	// Reads highscore.txt
	public String readHighScores() {
		return Collections.min(highScores).toString();
	}

	// Loading function
	void loadHighScores() {
		try (BufferedReader reader = new BufferedReader(new FileReader(highScoreFilePath))) {
			String line;
			while ((line = reader.readLine()) != null) {
				int score = Integer.parseInt(line);
				highScores.add(score);
			}
		} catch (IOException | NumberFormatException e) {
			e.printStackTrace();
		}
	}

	// Saves new data.
	private void saveHighScores() {
		try (BufferedWriter writer = new BufferedWriter(new FileWriter(highScoreFilePath))) {
			for (int score : highScores) {
				writer.write(String.valueOf(score));
				writer.newLine();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
