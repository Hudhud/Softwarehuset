package main;

import java.util.Scanner;

import employee.Employee;
import employee.ProjectManager;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import time.MockWeekHolder;

public class TUI {
	private static Scanner scanner;
	private static Softwarehuset sw;
	private static MockWeekHolder mw;
	private static int i = 0;

	public static void main(String[] args) throws Exception {

		sw = new Softwarehuset();
		mw = new MockWeekHolder(sw);

		sw.generateEmployees();
		System.out.println("---------------------EMPLOYEES---------------------------");
		System.out.println(
				sw.getEmployeeList().get(0).getEmployeeID() + "\n" + sw.getEmployeeList().get(1).getEmployeeID());
		System.out.println("---------------------EMPLOYEES---------------------------");
		System.out.println();
		mainMenu();
	}

	public static void mainMenu() throws Exception {

		System.out.println("1 Create a new project" + "\n" + "2 Choose employee to be a project manager" + "\n"
				+ "3 Create a new activity" + "\n" + "4 Create a permanent activity" + "\n" + "5 Assign an employee to an activity"
				+ "\n" + "6 Register wokring time" + "\n");
		scanner = new Scanner(System.in);
		System.out.println("Choose the number of the wanted function from the menu");

		int input = 0;
		
		try {
			input = scanner.nextInt();
		} catch (Exception e) {
			System.out.println("Please choose one of the options");
			System.out.println();
			mainMenu();
		}

		while (input > 6 || input <= 0) {
			System.out.println("Please choose one of the options");
			input = scanner.nextInt();
		}
		switch (input) {
		case 1:
			caseCreateProject();
			i++;
			mainMenu();
		case 2:
			caseToBePM();
			mainMenu();
		case 3:
			caseCreateActivity();
			mainMenu();
		case 4:
			caseCreatePermanentActivity();
			mainMenu();
		case 5:
			caseAssignEmployeeToActivity();
			mainMenu();
		case 6:
			caseRegisterWorkingTime();
			mainMenu();
		
		}
		System.out.println();
		scanner.close();
	}

	public static void caseCreateProject() throws Exception {
		scanner = new Scanner(System.in);
		System.out.println("Choose one employee:");
		String inputEmployeeId = scanner.nextLine();
		
		System.out.println("Please enter project name: ");
		String inputProjectName = scanner.nextLine();

		System.out.println("Please enter end week: ");
		int inputEndWeek = scanner.nextInt();

		System.out.println("Please enter end year: ");
		int inputEndYear = scanner.nextInt();
		try {
			sw.addProjectToProjectList(inputProjectName, sw.searchForEmployeeById(inputEmployeeId), inputEndWeek,
					inputEndYear);
			System.out.println("Success. The project ID is: " + sw.getProjectsFromProjectList().get(i).getId());
			System.out.println();
		} catch (OperationNotAllowedException e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again\n");
			caseCreateProject();
			System.out.println();
		}
	}

	public static void caseToBePM() throws Exception {
		scanner = new Scanner(System.in);

		System.out.println("Please enter your ID: ");
		String inputCeoId = scanner.nextLine();

		System.out.println("Please enter project ID: ");
		String projectId = scanner.nextLine();

		System.out.println("Please enter the ID of the employee");
		String inputEmployeeId = scanner.nextLine();

		try {
			sw.choosePM(inputEmployeeId, inputCeoId, projectId);
			System.out.println("Employee "+inputEmployeeId+" is now the project manager of project "+projectId+"\n");
		} catch (OperationNotAllowedException e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again\n");
			caseToBePM();
			System.out.println();
		}

	}

	public static void caseCreateActivity() throws Exception {
		scanner = new Scanner(System.in);
		
		System.out.println("Please enter your ID: ");
		String pmId = scanner.nextLine();
		
		System.out.println("Please enter a name for the activity: ");
		String inputActivityName = scanner.nextLine();

		System.out.println("Please enter project ID: ");
		String projectId = scanner.nextLine();

		System.out.println("Please enter the expected Workload in hours: ");
		int inputExpectedWorkLoad = scanner.nextInt();

		System.out.println("Please enter start week: ");
		int inputStartWeek = scanner.nextInt();

		System.out.println("Please enter start year: ");
		int inputStartYear = scanner.nextInt();

		System.out.println("Please enter end week: ");
		int inputEndWeek = scanner.nextInt();

		System.out.println("Please enter end year: ");
		int inputEndYear = scanner.nextInt();

		try {
			sw.createAct(inputActivityName, projectId, inputExpectedWorkLoad, pmId, inputStartWeek, inputEndWeek,
					inputStartYear, inputEndYear);
			System.out.println("Success. An activity with name "+inputActivityName+" is created for project "+projectId);
			System.out.println();
		} catch (OperationNotAllowedException e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again\n");
			caseCreateActivity();
		}

	}

	public static void caseCreatePermanentActivity() throws Exception {
		scanner = new Scanner(System.in);
		
		System.out.println("Please enter your ID: ");
		String employeeId = scanner.nextLine();
		
		System.out.println("Please enter start week: ");
		int inputStartWeek = scanner.nextInt();

		System.out.println("Please enter start year: ");
		int inputStartYear = scanner.nextInt();

		System.out.println("Please enter end week: ");
		int inputEndWeek = scanner.nextInt();

		System.out.println("Please enter end year: ");
		int inputEndYear = scanner.nextInt();

		try {
			sw.createPermanentActivity(inputStartWeek, inputEndWeek, inputStartYear, inputEndYear, sw.searchForEmployeeById(employeeId));
			System.out.println("Success");
			System.out.println();
		} catch (OperationNotAllowedException e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again");
			System.out.println();
			caseCreatePermanentActivity();
		}
	}

	public static void caseRegisterWorkingTime() throws Exception {
		Employee employee = new Employee();
		scanner = new Scanner(System.in);
		System.out.println("Please enter activity Name: ");
		String inputActivityName = scanner.nextLine();

		System.out.println("Please enter working hours: ");
		String inputWorkingHours = scanner.nextLine();

		try {
			sw.registerWorkingTime(inputActivityName, inputWorkingHours, employee);
		} catch (OperationNotAllowedException e) {
			System.out.println("Please enter correct info: ");
			caseRegisterWorkingTime();
		}
	}

	public static void caseAssignEmployeeToActivity() throws Exception {
		scanner = new Scanner(System.in);
		
//		System.out.println("Please enter your ID: ");
//		String employeeId = scanner.nextLine();
//		
//		ProjectManager pm = new ProjectManager(inputEmployeeId);
//
//		try {
//			sw.assignEmployeeToActivity(s, pm);
//		} catch (OperationNotAllowedException e) {
//			System.out.println("Please enter correct info: ");
//			caseAssignEmployeeToActivity();
//		}
	}
	
	public static String exit() throws Exception {
		String exitCommand = scanner.nextLine();
		if (exitCommand.equals("EXIT")) {
			mainMenu();
		}
		return exitCommand;
	}
}
