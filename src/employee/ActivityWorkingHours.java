package employee;

import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Activity;
import project.Project;

public class ActivityWorkingHours {

	public ActivityWorkingHours(String activityName, double workingHours) throws OperationNotAllowedException {
		if (!(workingHours > 0.0)) {
			throw new OperationNotAllowedException("Invalid working hours");
		}

		workingHours = Math.round(workingHours * 2) / 2.0;

		if (activityName == null) {
			throw new OperationNotAllowedException("Please provide activity name");
		}

	

//		for (Project pro : softwarehuset.getProjectsFromProjectList()) {
//			for (Activity act : pro.getActivities()) {
//				if(!act.getName().equals(activityID)) {
//				}
//			}
//		}
	}
}
