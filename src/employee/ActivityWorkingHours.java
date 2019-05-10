package employee;

import exceptions.OperationNotAllowedException;

public class ActivityWorkingHours {

	public ActivityWorkingHours(String activityName, double workingHours) throws OperationNotAllowedException {
		
		workingHours = Math.round(workingHours * 2) / 2.0;

		if (activityName == null) {
			throw new OperationNotAllowedException("Please provide activity name");
		}

	}
}
