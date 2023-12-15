import javax.swing.JOptionPane;

public class ManualModeManager {
    private boolean manualMode;

    // Manual mode check
    public boolean isManualMode() {
        return manualMode;
    }

    // Turns on/off manual mode
    public void toggleManualMode() {
        manualMode = !manualMode;
    }

    // Displays a message if manual mode is on
    public void showManualModeMessage() {
        if (manualMode) {
            JOptionPane.showMessageDialog(null, "Manual Mode: Click on the buttons to toggle lights.");
        }
    }
}
