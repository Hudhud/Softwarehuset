package project;

import exceptions.OperationNotAllowedException;

public class Project {
	private String projectName;

	public Project(String projectName) throws Exception {
		if (projectName.length() < 1) {
				throw new OperationNotAllowedException("The project has no name. Please choose a name for the project");
			} 

	this.projectName = projectName;
	}

	public String getProjectName() {
		return projectName;
	}

}
