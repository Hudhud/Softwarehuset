package employee;

import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Activity;
import project.Project;

public class ActivityWorkingHours {
	private Softwarehuset softwarehuset = new Softwarehuset();
	
	public ActivityWorkingHours (String activityID, String workingHours) throws OperationNotAllowedException {
		if(workingHours == null) {
			throw new OperationNotAllowedException("Invalid working hours");
		}
		else if(activityID == null) {
			throw new OperationNotAllowedException("Invalid activity ID");
		}
		for (Project pro : softwarehuset.getProjectsFromProjectList()) {
			for (Activity act : pro.getActivities()) {
				if(!act.getName().equals(activityID)) {
					throw new OperationNotAllowedException("Invalid activity ID");					
				}
			}
		}
	}	
}
