import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyHeader from '../../components/Myheader'
import colors from '../../globalStyle/colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'

const TermsServices = () => {
	return (
		<View style={styles.container}>
			<MyHeader screenTitle={'Terms and Conditions'} />

			<Text style={styles.textStyle} >I. Qualifications
				To be eligible for the Impact Program a Participant must register with the Coordinator on
				or before September 1st of beginning their freshman year, or subsequent year, and attend high school within the Sauk Valley Community College (SVCC) District.

				Participants must progress  to graduation on or before their normal expected graduation date (i.e. 4 years). A participant
				commits to:
				Complete 100 hours of volunteer community service. (e.g. 25 hours per year) with an entity or
				project approved by the Program Coordinator.

				Apply, prior to enrollment at SVCC, for at least one other local/state/national scholarship
				Graduate from a high school program, or qualified home school program, located within the
				geographic territory of the SVCC District.

				Complete the FAFSA, or if ineligible to apply for FAFSA, the FAFAS forecaster, and have such
				information released to SVCC.

				II. Program Benefits
				A Participant is eligible to receive waiver of tuition and fees, of costs normally charged
				by SVCC, in proportion to the percentage of time enrolled in the Program. For example,
				Participants who are enrolled for a 4 year period and complete the necessary volunteer hours will
				receive a 100% waiver, Participants who are enrolled for a 3 year period will receive 75%, while
				Participants enrolled for 2 years will receive 50%. Any accrued and completed period of waiver
				is good until the earliest of the awarding of an Associates Degree or Certificate, three calendar
				years, or a maximum of four (4) semesters credited in a three year period, whichever occurs first.

				The Impact Program is a "last dollar" program where students are required to accept all available
				free aid before the Impact funds are awarded.

				III. Enrollment Conditions
				Both Participant and parent/guardian acknowledge that the costs eligible to be waived, of
				the program, includes only tuition and fees assessed by SVCC. Eligibility for waiver of these
				costs is not transferable to other educational institutions. An accrued waiver may not be
				redeemed for any monetary cash value and is expressly applied only to waiver of tuition and/or
				fees.

				IV. Volunteer Programs and Projects
				Participants may select a desired community service entity and / or Project from the list
				maintained by the Coordinator. Once a selection is made and the individual is accepted by the entity for volunteer opportunities, documentation of the same should be submitted to the
				Coordinator. A participant may, if desired, submit additional proposed entities and /or projects
				not listed by SVCC and such submission will be duly considered for approval by the
				Coordinator.

				Participants and their Parent/Guardian acknowledge that SVCC does not operate or
				actively investigate persons employed or whom may also offer volunteer services to any of the
				community service entities and/or projects on the maintained list. Additionally, it is
				acknowledged that being on the “approved” list by the Impact Program means only that the
				organization has been reviewed and meet the qualification for the type of organization qualifying
				as eligible for a label of “community service.” Neither the Impact Program nor employees of
				SVCC have investigated the background or suitability of individuals managing or otherwise
				involved in such programs.

				Transportation of a Participant to a location for community services remains the sole
				responsibility of each participant and the Impact Program has no obligation to provide for the
				same.


				V. Waiver/Release
				Both Participant and Parent/Guardian acknowledge that there are inherent risks
				associated with participation in volunteer community service, including but not limited to serious
				illness, injury and/or death. As a condition of acceptance into the Impact Program each hereby
				releases and promises not to sue Sauk Valley Community College, the Sauk Valley Community
				College Foundation, and each entities Board of Directors or Trustees, employees, agents, for any
				damages and/or injury caused by or arising out of my participation in the Program.

				This release
				and waiver expressly extends to the negligence of the Parties released and it is the intent to bind
				heirs, assigns, and personal representatives.

				VI. Media/Marketing Release
				Participant and Parent/Guardian authorize and irrevocably consent to use of Participant’s
				photograph, name, and image (video and/or photographic) when done so by SVCC for marketing
				the Impact Program. Accordingly, SVCC and its employee and/or agent are expressly
				authorized to use, reproduce, display, or broadcast, all photographs or videos of Participant taken
				by SVCC or provided to SVCC, for any and all purpose related to the Impact Program, including
				but not limited to in electronic and print media, social media, and without limitation or
				requirement of compensation.

				VII. Miscellaneous
				The terms and conditions of this Enrollment Application and Release/Waiver shall be
				governed by Illinois law and the sole venue for any dispute related to such matters shall be in the
				Circuit Court of the 15th Judicial Circuit Lee County Illinois. SVCC reserves the right, from
				time to time, to adjust Impact Program terms and conditions. Any changes will be applied on a
				going forward basis.

				VIII. Coordinator Acceptance
				I approve acceptance of Applicant’s enrollment into the Impact Program and have
				reviewed with them the terms and conditions of the program.

				IX. Participant/Student Application
				The undersigned submits this application and requests acceptance into the SVCC Impact
				Program. As a condition of acceptance, Participant agrees to comply with the terms and
				conditions of the Program and complete all required volunteer hours. If unable to comply with
				the requirements, or move out of the SVCC District, I agree to provide the Program Coordinator
				with timely written notice. I further represent that I have read and reviewed the terms of this
				Enrollment Application and that my statements contained herein are true and correct.

				X. Parent/Guardian Approval
				As the parent/guardian of the Participant, I authorize their enrollment into the SVCC
				Impact Program and accept the conditions outlined therein. I further give permission for my
				student to serves as a volunteer for the agency/project that they have identified and understand
				that they will not receive monetary compensation, other than credit for potential future tuition/fee
				waiver, for such volunteer hours. I also acknowledge that SVCC and its agent are not
				responsible for implementing, monitoring, or in any manner scheduling, volunteer hours or
				activities. </Text>
		</View>
	)
}

export default TermsServices

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.mainThem,
		paddingHorizontal: moderateVerticalScale(16),
		color: colors.white,
		flexGrow: 1,

	}, textStyle: {
		marginTop: moderateVerticalScale(20),
		color: colors.white,
		fontWeight: moderateScale(400),
		fontSize: scale(15.5),
		lineHeight: moderateScale(19),
	}
})