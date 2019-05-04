package time;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class WeekServer {

	
	public int getWeekNumber() {
		Calendar calendar = new GregorianCalendar();
		Date week = new Date();
		calendar.setTime(week);
	    int weekNumber =calendar.get(Calendar.WEEK_OF_YEAR);
		return weekNumber;
	}
}

