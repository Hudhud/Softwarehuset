package project;

// Hadi

import java.util.ArrayList;
import java.util.Arrays;

public class ActivityMaxChecker {

	private static int[] weeksPyears;
	private static int maxActPerWeek = 20;

	private static ArrayList<ListOfYearsWeek> yearsWeekList = new ArrayList<ListOfYearsWeek>();

	public void sortAll(ArrayList<Activity> activityList) {

		for (int g = 0; g < activityList.size(); g++) {

			Activity act = activityList.get(g);

			if (yearsWeekList.isEmpty() == true) {

				if (act.getStartYear() != act.getEndYear()) {

					weeksPyears = new int[53];
					for (int i = act.getStartWeek(); i <= 52; ++i) {
						weeksPyears[i] += 1;
					}
					yearsWeekList.add(new ListOfYearsWeek(act.getStartYear(), weeksPyears));

					weeksPyears = new int[53];

					for (int i = 1; i <= act.getEndWeek(); ++i) {
						weeksPyears[i] += 1;
					}
					yearsWeekList.add(new ListOfYearsWeek(act.getEndWeek(), weeksPyears));
				} else {
					weeksPyears = new int[53];
					for (int i = act.getStartWeek(); i <= act.getEndWeek(); ++i) {
						weeksPyears[i] += 1;
					}
					yearsWeekList.add(new ListOfYearsWeek(act.getEndWeek(), weeksPyears));
				}

			} else {

				if (act.getStartYear() != act.getEndYear()) {

					weeksPyears = new int[53];
					for (int i = act.getStartWeek(); i <= 52; ++i)
						weeksPyears[i] += 1;

					for (int i = 0; i < yearsWeekList.size(); i++) {

						if ((yearsWeekList.get(i).getGivenYear() == act.getStartYear())) {

							for (int j = 0; j <= 52; j++)
								yearsWeekList.get(i).getWeeklist()[j] += weeksPyears[j];
						} else {

							yearsWeekList.add(new ListOfYearsWeek(act.getStartYear(), weeksPyears));

						}

					}

					weeksPyears = new int[53];

					for (int i = 1; i <= act.getEndWeek(); ++i)
						weeksPyears[i] += 1;

					for (int i = 0; i < yearsWeekList.size(); i++) {

						if (i == yearsWeekList.size() - 1) {

							yearsWeekList.add(new ListOfYearsWeek(act.getEndYear(), weeksPyears));
							break;

						}

					}
				}

				if (act.getStartYear() == act.getEndYear()) {

					weeksPyears = new int[53];
					for (int i = act.getStartWeek(); i <= act.getEndWeek(); ++i)
						weeksPyears[i] += 1;

					for (int i = 0; i < yearsWeekList.size(); i++) {

						if (yearsWeekList.get(i).getGivenYear() == act.getStartYear()) {
							for (int j = 0; j <= 52; j++) {
								yearsWeekList.get(i).getWeeklist()[j] += weeksPyears[j];
							}
						} else if (i == yearsWeekList.size() - 1) {
							yearsWeekList.add(new ListOfYearsWeek(act.getStartYear(), weeksPyears));
						}
					}

				}

			}
//			}

		}

	}

	public static int numberOfActivities(int[] array) {

		int max = 0;

		for (int i = 0; i < array.length; i++) {

			if (max < array[i])
				max = array[i];

		}

		return max;

	}

	public boolean checker(ArrayList<Activity> activityList) {

		boolean flag = false;

		sortAll(activityList);

		int currentNrActivity;
		for (ListOfYearsWeek loy : yearsWeekList) {
			currentNrActivity = numberOfActivities(loy.getWeeklist());

			if (currentNrActivity > maxActPerWeek) {

				flag = true;
			}

		}

		yearsWeekList.clear();
		return flag;

	}
}
