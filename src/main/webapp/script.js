function popUpFunction() {
	var popUp = document.getElementById("popUpContent");
	popUp.classList.toggle("show");
}

function popUpFunction2() {
	var popUp = document.getElementById("popUpContent2");
	popUp.classList.toggle("show");
}

function popUpFunction3() {
	var popUp = document.getElementById("popUpContent3");
	popUp.classList.toggle("show");
}

function popUpFunction4() {
	var popUp = document.getElementById("popUpContent4");
	popUp.classList.toggle("show");
}

function popUpFunction5() {
	var popUp = document.getElementById("popUpContent5");
	popUp.classList.toggle("show");
}

function popUpFunction6() {
	var popUp = document.getElementById("popUpContent6");
	popUp.classList.toggle("show");
}

function popUpFunction7() {
	var popUp = document.getElementById("popUpContent7");
	popUp.classList.toggle("show");
}

function popUpFunction8() {
	var popUp = document.getElementById("popUpContent8");
	popUp.classList.toggle("show");
}

let passingGrade = 40;
let countPassingStudents, numberOfStudents;

function calculatePassPercentageDepOne() {
	countPassingStudents = 0;
	numberOfStudents = 4;

	let getStudentScore = document.getElementsByClassName("studentScore1")

	for (let i=0; i<getStudentScore.length; i++) {
		if (getStudentScore[i].outerText >= passingGrade) {
			countPassingStudents++;
		} else if (getStudentScore < passingGrade) {
		}
	}

	let passingPercentage = (countPassingStudents/numberOfStudents)*100;

	document.getElementById("dep1Percentage").innerHTML =  passingPercentage;
}

function calculatePassPercentageDepTwo() {
	numberOfStudents = 1;
	countPassingStudents = 0;

	let getStudentScore = document.getElementsByClassName("studentScore2")

	for (let i=0; i<getStudentScore.length; i++) {
		if (getStudentScore[i].outerText >= passingGrade) {
			countPassingStudents++;
		} else if (getStudentScore[i].outerText < passingGrade) {
			countPassingStudents;
		}
	}

	let passingPercentage = (countPassingStudents/numberOfStudents)*100;

	document.getElementById("dep2Percentage").innerHTML =  passingPercentage;

}

function calculatePassPercentageDepThree() {
	numberOfStudents = 3;
	countPassingStudents = 0;

	let getStudentScore = document.getElementsByClassName("studentScore3")

	for (let i=0; i<getStudentScore.length; i++) {
		if (getStudentScore[i].outerText >= passingGrade) {
			countPassingStudents++;
		} else if (getStudentScore[i].outerText < passingGrade) {
			countPassingStudents;
		}
	}

	let passingPercentage = (countPassingStudents/numberOfStudents)*100;

	document.getElementById("dep3Percentage").innerHTML =  passingPercentage;

}




