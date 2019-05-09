package time;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.util.Calendar;
import java.util.GregorianCalendar;
import main.Softwarehuset;

public class MockWeekHolder {

	DateServer dateServer = mock(DateServer.class);

	public MockWeekHolder(Softwarehuset softwarehuset) {
		GregorianCalendar calendar = new GregorianCalendar();
		setUp(calendar);
		softwarehuset.setDateServer(dateServer);
	}

	public void setUp(Calendar calendar) {
		Calendar c = new GregorianCalendar(calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH));
		when(this.dateServer.getDate()).thenReturn(c);
	}

	public void advancedDateByWeeks(int weeks) {
		Calendar currentDate = dateServer.getDate();
		Calendar nextDate = new GregorianCalendar();
		nextDate.setTime(currentDate.getTime());
		nextDate.add(Calendar.WEEK_OF_YEAR, weeks);
		setUp(nextDate);
	}
}
