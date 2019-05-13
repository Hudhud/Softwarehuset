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
	
	public static void main(String[] args) throws Exception {
		
		sw = new Softwarehuset();
		mw = new MockWeekHolder(sw);
	
		mainMenu();
	}
	public static void mainMenu() throws Exception {
		sw.generateEmployees();
		System.out.println(sw.getEmployeeList().get(0).getEmployeeID() +"\n"+ sw.getEmployeeList().get(1).getEmployeeID());

		System.out.println("1 Create a new project" + "\n" 
		+ "2 Choose employee to be a project manager" + "\n"
		+ "3 Create a new activity" + "\n"
		+ "4 Create a permanent activity" + "\n"
		+ "5 Register wokring time" + "\n"
		+ "6 Assign an employee to an activity" + "\n"
		);
		scanner = new Scanner(System.in);  
		System.out.println("Choose the number of the wanted function from the menu");
		String monthString = null;
		int input = scanner.nextInt();  	

		while(input > 6 || input <= 0) {
			System.out.println("please choose a number from 1 to 6");
			input = scanner.nextInt();  
		}
		switch(input) {
		case 1:  caseCreateProject()  ;
		mainMenu();
		case 2: caseToBePM();
		mainMenu();
		case 3:  caseCreateActivity();
		mainMenu();
		case 4: caseCreatePermanentActivity();
		mainMenu();
		case 5: caseRegisterWorkingTime();
		mainMenu();
		case 6:  caseAssignEmployeeToActivity();
		mainMenu();
		}
        System.out.println();
        scanner.close();
	}
			
	public static void caseCreateProject() throws Exception {
		scanner = new Scanner(System.in);  		
		
		System.out.println("Choose one employee");
		String inputEmployeeId = scanner.nextLine();
		
		System.out.println("Please enter project name: ");
		String inputProjectName = scanner.nextLine(); 
		
		System.out.println("Please enter end week: ");
		int inputEndWeek = scanner.nextInt();
		
		System.out.println("Please enter end year: ");
		int inputEndYear = scanner.nextInt();
		try {
		sw.addProjectToProjectList(inputProjectName, sw.searchForEmployeeById(inputEmployeeId), inputEndWeek, inputEndYear);	
		System.out.println(sw.getProjectsFromProjectList().get(0).getProjectName());
		} catch(Exception e) {
			System.out.println("Please enter correct info: ");
			caseCreateProject();		
		}
	}
	public static void caseToBePM() throws Exception{
		scanner = new Scanner(System.in);  
		
		System.out.println("Please enter your ID: ");
		String inputCeoId = scanner.nextLine();  
		
		String projectId = sw.getProjectsFromProjectList().get(0).getId();
		
		System.out.println("Please enter the project Name: ");
		String inputProjectName = scanner.nextLine();	
		
		System.out.println(sw.getEmployeeList().get(0).getEmployeeID() +"\n"+ sw.getEmployeeList().get(1).getEmployeeID());
		System.out.println("Choose one employee");
		String inputEmployeeId = scanner.nextLine();
	
		try {
			sw.choosePM(inputEmployeeId, inputCeoId, projectId);
			System.out.println(sw.getProjectManagerList().get(0).getEmployeeID());
		} catch(Exception e) {
			System.out.println("Please enter correct info: ");
			caseToBePM();		
		}

	}

	public static void caseCreateActivity() throws Exception {
		scanner = new Scanner(System.in);  
		System.out.println("Please enter your : ");
		String inputActivityName = scanner.nextLine();  
		
		String projectId = sw.getProjectsFromProjectList().get(0).getId();

		System.out.println("Please enter the expected Workload: ");
		int inputExpectedWorkLoad = scanner.nextInt();  
		
		String pmId = sw.getProjectManagerList().get(0).getEmployeeID();
		
		System.out.println("Please enter start week: ");
		int inputStartWeek = scanner.nextInt();
		
		System.out.println("Please enter start year: ");
		int inputStartYear = scanner.nextInt();
		
		System.out.println("Please enter end week: ");
		int inputEndWeek = scanner.nextInt();
		
		System.out.println("Please enter end year: ");
		int inputEndYear = scanner.nextInt();
		
		try {
			sw.createAct(inputActivityName, projectId, inputExpectedWorkLoad, pmId, inputStartWeek, inputEndWeek, inputStartYear, inputEndYear);
		} catch(Exception e) {
			System.out.println("Please enter correct info: ");
			caseCreateActivity();		
		}
		
	}
	
	public static void caseCreatePermanentActivity() throws Exception {
		scanner = new Scanner(System.in);  
		Employee employee = new Employee();
		
		System.out.println("Please enter start week: ");
		int inputStartWeek = scanner.nextInt();
		
		System.out.println("Please enter start year: ");
		int inputStartWeek1 = scanner.nextInt();
		
		System.out.println("Please enter end week: ");
		int inputEndWeek = scanner.nextInt();
		
		System.out.println("Please enter end year: ");
		int inputEndYear = scanner.nextInt();
		
		try {
			sw.createPermanentActivity(inputStartWeek1, inputEndWeek, inputStartWeek1, inputEndYear, employee);
		} catch(Exception e) {
			System.out.println("Please enter correct info: ");
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
		} catch(Exception e) {
			System.out.println("Please enter correct info: ");
			caseRegisterWorkingTime();		
		}
	}
	
	public static void caseAssignEmployeeToActivity() throws Exception {
		scanner = new Scanner(System.in);  
		Employee employee = new Employee();
		System.out.println(sw.getEmployeeList().get(0).getEmployeeID() +"\n"+ sw.getEmployeeList().get(1).getEmployeeID());
		System.out.println("Choose one employee");
		String inputEmployeeId = scanner.nextLine();
		ProjectManager pm = new ProjectManager(inputEmployeeId);
		
		try {
			sw.assignEmployeeToActivity(employee, pm);
		} catch(Exception e) {
			System.out.println("Please enter correct info: ");
			caseAssignEmployeeToActivity();		
		}
	}
}
