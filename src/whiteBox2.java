import static org.junit.Assert.assertEquals;
import java.util.Calendar;
import org.junit.Test;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import time.MockWeekHolder;

public class whiteBox2 {
	Softwarehuset sw = new Softwarehuset(); 
	MockWeekHolder mw = new MockWeekHolder(sw);
	
	@Test
	public void testTimeInPast() throws OperationNotAllowedException {
		try{
		sw.checkTime(2016, sw.getDate().get(Calendar.YEAR), 2019, 1, 4, sw.getDate().get(Calendar.WEEK_OF_YEAR), 52);
		} catch(OperationNotAllowedException e) {
			assertEquals("Invalid time. The time can not be in the past", e.getMessage());
		} 
	}
	@Test
	public void testEndYearBeforeStartYear() throws OperationNotAllowedException {
		try{
		sw.checkTime(2020, sw.getDate().get(Calendar.YEAR), 2019, 1, 4, sw.getDate().get(Calendar.WEEK_OF_YEAR), 52);
		} catch(OperationNotAllowedException e) {
			assertEquals("End year must be after start year", e.getMessage());
		} 
	}
	@Test
	public void testEndWeekBeforeStartWeek() throws OperationNotAllowedException {
		try{
		sw.checkTime(2020, sw.getDate().get(Calendar.YEAR), 2020, 6, 4, sw.getDate().get(Calendar.WEEK_OF_YEAR), 52);
		} catch(OperationNotAllowedException e) {
			assertEquals("Start week must be before end week", e.getMessage());
		} 
	}	
	@Test
	public void testStartWeekInPast() throws OperationNotAllowedException {
		try{
		sw.checkTime(2019, sw.getDate().get(Calendar.YEAR), 2019, 6, 30, sw.getDate().get(Calendar.WEEK_OF_YEAR), 52);
		} catch(OperationNotAllowedException e) {
			assertEquals("Start week can't be in the past", e.getMessage());
		} 
	}
	@Test
	public void testInvalidWeekofYear() throws OperationNotAllowedException {
		try{
		sw.checkTime(2019, sw.getDate().get(Calendar.YEAR), 2019, 54, 56, sw.getDate().get(Calendar.WEEK_OF_YEAR), 52);
		} catch(OperationNotAllowedException e) {
			assertEquals("Invalid week of year", e.getMessage());
		} 
	}
} 