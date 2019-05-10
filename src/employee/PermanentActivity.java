package employee;

import exceptions.OperationNotAllowedException;

public class PermanentActivity {

	int startweek, endWeek, startYear, endYear;

	public PermanentActivity(int startweek, int endWeek, int startYear, int endYear)
			throws OperationNotAllowedException {
		this.startweek = startweek;
		this.endWeek = endWeek;
		this.startYear = startYear;
		this.endYear = endYear;
	}

	public int getStartWeek() {
		return startweek;
	}
	
	public int getEndWeek() {
		return endWeek;
	}
	
	public int getStartYear() {
		return startYear;
	}
	
	public int getEndYear() {
		return endYear;
	}
}
