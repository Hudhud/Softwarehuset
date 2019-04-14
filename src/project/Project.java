package project;

import exceptions.OperationNotAllowedException;

public class Project {
	private String projectName;
	private String id;
	
	public Project(String projectName, String str) throws Exception {
		if (projectName.length() < 1) {
				throw new OperationNotAllowedException("The project has no name. Please choose a name for the project");
			} 

	this.projectName = projectName;
	this.id = id;
	
	}

	public String getProjectName() {
		return projectName;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	

}
