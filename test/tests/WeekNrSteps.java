package tests;
	
	import time.WeekHolder;
	import time.WeekServer;
	import org.junit.*;

import cucumber.api.java.en.Given;
import exceptions.OperationNotAllowedException;

import static org.mockito.Mockito.*;

	import java.util.Calendar;
	import java.util.Date;
	import java.util.GregorianCalendar;
	
	public class WeekNrSteps {
		WeekHolder weekHolder;

		public WeekNrSteps(WeekHolder weekHolder) {
			this.weekHolder= weekHolder;
		}
		
		@Given("provides a start date week {int} of {int} for the activity")
		public void providesAStartDateWeekOfForTheActivity(Integer week, Integer year) {
			weekHolder.advancedDateByWeeks(week);
		}

		@Given("provides an end date week {int} of {int} for the activity")
		public void providesAnEndDateWeekOfForTheActivity(Integer week, Integer year) {
			  weekHolder.advancedDateByWeeks(week);
		}
}
