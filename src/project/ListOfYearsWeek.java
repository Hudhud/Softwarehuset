package project;

public class ListOfYearsWeek {

	private int[] weeklist = new int[53];
	private int givenYear;

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
