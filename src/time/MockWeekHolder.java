package time;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.junit.Before;

import main.Softwarehuset;

public class MockWeekHolder {

	private int weekNumber;

	DateServer dateServer = mock(DateServer.class);
	
	public MockWeekHolder(Softwarehuset softwarehuset) {
		
		System.out.println("sss");
		System.out.println(dateServer.getDate().get(Calendar.WEEK_OF_YEAR));
	    weekNumber = dateServer.getDate().get(Calendar.WEEK_OF_YEAR);
		System.out.println(weekNumber);
		setUp(weekNumber);
		softwarehuset.setDateServer(dateServer);
	}
	
	public void setUp(int week) {		
		when(this.dateServer.getDate().get(Calendar.WEEK_OF_YEAR)).thenReturn(week);
	}
	
	public void advancedDateByWeeks(int weeks) {
		int currentWeekNr = dateServer.getDate().get(Calendar.WEEK_OF_YEAR);
		System.out.println(currentWeekNr);
		currentWeekNr += weeks;
		System.out.println(currentWeekNr);
		setUp(currentWeekNr);
	}
}

