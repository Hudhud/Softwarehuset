package project;

// Tala

public class ListOfYearsWeek {

	private int givenYear;
	private int[] weeklist = new int[53];
	public ListOfYearsWeek(int givenYear, int[] weeklist) {

		this.givenYear = givenYear;
		this.weeklist = weeklist;
	}

	public int[] getWeeklist() {
		return weeklist;
	}
	
	public int getGivenYear() {
		return givenYear;
	}

}
