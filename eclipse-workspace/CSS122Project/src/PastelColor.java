import java.util.Random;
import java.awt.Color;

public class PastelColor {
	private Color color = new Color(0,0,0); // Default is black
	public PastelColor() { 
		Random rand = new Random();
		// Random RGB
		float r = rand.nextFloat(); 
		float g = rand.nextFloat();
		float b = rand.nextFloat();
		color = new Color(r, g, b);
		final float hue = rand.nextFloat();
		final float saturation = 0.9f; // Saturation Adjustment
		final float luminance = 1.0f; // Bright Adjustment
		color = Color.getHSBColor(hue, saturation, luminance);
	}
	public Color getColor() {
		return color;
	}
}