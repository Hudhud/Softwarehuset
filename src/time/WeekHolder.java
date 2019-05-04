package time;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.junit.Before;

import main.Softwarehuset;

public class WeekHolder {

	private int weekNumber;

	WeekServer weekServer = mock(WeekServer.class);
	
	public WeekHolder(Softwarehuset softwarehuset) {
		
		Calendar calendar = new GregorianCalendar();
		Date week = new Date();
		calendar.setTime(week);
	    weekNumber =calendar.get(Calendar.WEEK_OF_YEAR);
		
		setUp(weekNumber);
		softwarehuset.setWeekServer(weekServer);
	}
	
	public void setUp(int week) {		
		when(this.weekServer.getWeekNumber()).thenReturn(week);
	}
	
	public void advancedDateByWeeks(int weeks) {
		int currentWeekNr = weekServer.getWeekNumber();
		currentWeekNr += weeks;
		setUp(currentWeekNr);
	}
}

