package employee;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import exceptions.OperationNotAllowedException;
import project.Project;

public class Employee {

	private String employeeID;
	private boolean isEmployeePM;
	private boolean vacant;
	private ArrayList<PermanentActivity> permanentActivityList = new ArrayList<PermanentActivity>();

	// This empty constructor is necessary, because sometimes we need it in some
	// methods.
	public Employee() {

	}

	public Employee(String employeeID) {
		this.employeeID = employeeID;
	}

	public String getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(String employeeID) {
		this.employeeID = employeeID;
	}

	public boolean getIsEmployeePM() {
		return isEmployeePM;
	}

	public void setIsEmployeePM(boolean isEmployeePM) {
		this.isEmployeePM = isEmployeePM;
	}

	public void setIsEmployeeVacant(boolean vacant) {
		this.vacant = vacant;
	}

	public boolean isEmployeeVacant() {
		return vacant;
	}

	public Project createProj(String name, String id) throws Exception {
		Project p = new Project(name, id);
		return p;
	}

	public void createPermanentActivity(Integer startYear, Integer startMonth, Integer startDay, Integer endYear,
			Integer endMonth, Integer endDay) throws OperationNotAllowedException {
		ArrayList<Integer> months =  new ArrayList<Integer>(Arrays.asList(1,2,3,4,5,6,7,8,9,10,11,12));

		if (!months.contains(startMonth) || !months.contains(endMonth)) {
			throw new OperationNotAllowedException("Invalid month");
		}
		YearMonth yearMonthStart = YearMonth.of(startYear, startMonth);
		int daysInMonthStart = yearMonthStart.lengthOfMonth();
		YearMonth yearMonthEnd = YearMonth.of(endYear, endMonth);
		int daysInMonthEnd = yearMonthEnd.lengthOfMonth();

		if (daysInMonthStart < startDay || daysInMonthEnd < endDay) {
			throw new OperationNotAllowedException("Invalid day of month");
		}
		
		
		if (startYear < Calendar.getInstance().get(Calendar.YEAR)) {
			throw new OperationNotAllowedException("Invalid year");

		}

		Calendar startDate = new GregorianCalendar(startYear, startMonth, startDay);
		Calendar endDate = new GregorianCalendar(endYear, endMonth, endDay);

		if (startDate.after(endDate)) {
			throw new OperationNotAllowedException("End date must be later than start date");
		}

		PermanentActivity permanentActivity = new PermanentActivity(startDate, endDate);
		permanentActivityList.add(permanentActivity);
	}

	public ArrayList<PermanentActivity> getPermanentActivityList() {
		return permanentActivityList;
	}
}
