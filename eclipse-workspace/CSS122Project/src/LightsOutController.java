import java.awt.Color;
import java.awt.Point;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;


public class LightsOutController implements ActionListener
{
	private GemStacker board;
	private GemStacker gui;
	
	public LightsOutController(GemStacker board, GemStacker gui)
	{
		this.board = board;
		this.gui = gui;
		
	}
	@Override
	public void actionPerformed(ActionEvent e)
	{
		
		
		JButton newButton = new JButton();
	    newButton.setBackground(Color.BLACK);
	   
		
		
		
		
	
	}
	
}