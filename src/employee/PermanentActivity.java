package employee;

import java.util.Calendar;

import exceptions.OperationNotAllowedException;

public class PermanentActivity {

	public PermanentActivity(int startweek, int endWeek, int startYear, int endYear)
			throws OperationNotAllowedException {
		Calendar calendar = Calendar.getInstance();
		int currentWeek = calendar.get(Calendar.WEEK_OF_YEAR);
		int currentYear = calendar.get(Calendar.YEAR);
		int weeksInYear = calendar.getActualMaximum(Calendar.WEEK_OF_YEAR);

		if (startweek > endWeek && startYear == endYear) {
			throw new OperationNotAllowedException("End date must be later than start date");
		} else if (startweek > weeksInYear || endWeek > weeksInYear) {
			throw new OperationNotAllowedException("Invalid week of year");
		} else if (startYear < currentYear || endYear < currentYear) {
			throw new OperationNotAllowedException("Invalid year");
		} else if (startweek < currentWeek && startYear == currentYear) {
			throw new OperationNotAllowedException(
					"Invalid week(s). The start week and end week must be in the present or future");
		}

	}
}
