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
		
		System.out.println("Welcome to Softwarehuset's internal system.");
		System.out.println("For returning to the main menu enter 'EXIT'.\n");
		
		System.out.println("---------------------EMPLOYEES---------------------------");
		System.out.println(
				sw.getEmployeeList().get(0).getEmployeeID() + "\n" + sw.getEmployeeList().get(1).getEmployeeID());
		System.out.println("---------------------EMPLOYEES---------------------------");
		System.out.println();
		
		mainMenu();
	}

	public static void mainMenu() throws Exception {

		System.out.println();
		System.out.println("1 Create a new project" + "\n" + "2 Choose employee to be a project manager" + "\n"
				+ "3 Create a new activity" + "\n" + "4 Create a permanent activity" + "\n"
				+ "5 Assign an employee to an activity" + "\n" + "6 Register wokring time" + "\n");
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
		Employee emp = new Employee();

		System.out.println("Please enter project name: ");
		String inputProjectName = scannerCheck();

		System.out.println("Please enter end week: ");
		int inputEndWeek = Integer.parseInt(scannerCheck());

		System.out.println("Please enter end year: ");
		int inputEndYear = Integer.parseInt(scannerCheck());

		try {
			sw.addProjectToProjectList(inputProjectName, emp, inputEndWeek, inputEndYear);
			System.out.println("Success. The project ID is: " + sw.getProjectsFromProjectList().get(i).getId());
			System.out.println();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again\n");
			caseCreateProject();
			System.out.println();
		}
	}

	public static void caseToBePM() throws Exception {
		scanner = new Scanner(System.in);

		System.out.println("Please enter your ID: ");
		String inputCeoId = scannerCheck();

		System.out.println("Please enter project ID: ");
		String projectId = scannerCheck();

		System.out.println("Please enter the ID of the employee");
		String inputEmployeeId = scannerCheck();

		try {
			sw.choosePM(inputEmployeeId, inputCeoId, projectId);
			System.out.println(
					"Employee " + inputEmployeeId + " is now the project manager of project " + projectId + "\n");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again\n");
			caseToBePM();
			System.out.println();
		}

	}

	public static void caseCreateActivity() throws Exception {

		System.out.println("Please enter your ID: ");
		String pmId = scannerCheck();

		System.out.println("Please enter a name for the activity: ");
		String inputActivityName = scannerCheck();

		System.out.println("Please enter project ID: ");
		String projectId = scannerCheck();

		System.out.println("Please enter the expected Workload in hours: ");
		int inputExpectedWorkLoad = Integer.parseInt(scannerCheck());

		System.out.println("Please enter start week: ");
		int inputStartWeek = Integer.parseInt(scannerCheck());

		System.out.println("Please enter start year: ");
		int inputStartYear = Integer.parseInt(scannerCheck());

		System.out.println("Please enter end week: ");
		int inputEndWeek = Integer.parseInt(scannerCheck());

		System.out.println("Please enter end year: ");
		int inputEndYear = Integer.parseInt(scannerCheck());

		try {
			sw.createAct(inputActivityName, projectId, inputExpectedWorkLoad, pmId, inputStartWeek, inputEndWeek,
					inputStartYear, inputEndYear);
			System.out.println(
					"Success. An activity with name " + inputActivityName + " is created for project " + projectId);
			System.out.println();
		} catch (OperationNotAllowedException e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again\n");
			caseCreateActivity();
		}

	}

	public static void caseCreatePermanentActivity() throws Exception {

		System.out.println("Please enter your ID: ");
		String employeeId = scannerCheck();

		System.out.println("Please enter start week: ");
		int inputStartWeek = Integer.parseInt(scannerCheck());

		System.out.println("Please enter start year: ");
		int inputStartYear = Integer.parseInt(scannerCheck());

		System.out.println("Please enter end week: ");
		int inputEndWeek = Integer.parseInt(scannerCheck());

		System.out.println("Please enter end year: ");
		int inputEndYear = Integer.parseInt(scannerCheck());

		try {
			sw.createPermanentActivity(inputStartWeek, inputEndWeek, inputStartYear, inputEndYear,
					sw.searchForEmployeeById(employeeId));
			System.out.println("Success");
			System.out.println();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again");
			System.out.println();
			caseCreatePermanentActivity();
		}
	}

	public static void caseRegisterWorkingTime() throws Exception {

		System.out.println("Please enter your ID: ");
		String employeeId = scannerCheck();

		System.out.println("Please enter the name of the activity you want to register working hours for: ");
		String inputActivityName = scannerCheck();

		System.out.println("Please enter working hours: ");
		String inputWorkingHours = scannerCheck();

		try {
			sw.registerWorkingTime(inputActivityName, inputWorkingHours, sw.searchForEmployeeById(employeeId));
			System.out.println("Success. Time registered\n");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again\n");
			caseRegisterWorkingTime();
		}
	}

	public static void caseAssignEmployeeToActivity() throws Exception {

		System.out.println("Please enter your ID: ");
		String pmId = scannerCheck();

		System.out.println("Please enter the employee you want to assign to an activity: ");
		String employeeId = scannerCheck();

		System.out.println("Please enter the activity, by name, you want to assign to: ");
		String activityName = scannerCheck();

		try {
			sw.assignEmployeeToActivity(sw.searchForEmployeeById(employeeId), sw.searchForPMById(pmId), activityName);
			System.out.println("Success. Employee " + employeeId + " is assigned to the activity " + activityName);
			System.out.println();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Please try again\n");
			caseAssignEmployeeToActivity();
		}
	}

	public static void exit(String exitCommand) throws Exception {
		if (exitCommand.equals("EXIT")) {
			System.out.println();
			System.out.println("Welcome back");
			mainMenu();
			scanner.close();
		}
	}

	public static String scannerCheck() throws Exception {
		scanner = new Scanner(System.in);
		String message = scanner.nextLine();
		exit(message);
		return message;

	}
}
