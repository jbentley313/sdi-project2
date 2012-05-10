//alert("JavaScript works!");

// Assignment: Project 2
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 2: Teaching at an Audio School

var audio = "Recording Program",
	film = "Film Program",
	numStations = 20,
	instructors = ["Jason Bentley", "Alan Mason"],
	StationIds = ["Station A1", "Station A2", "Station A3", "Station A4", "Station A5", "Station B1", "Station B2", "Station B3", "Station B4", "Station B5", "Station C1", "Station C2", "Station C3", "Station C4", "Station C5", "Station D1", "Station D2", "Station D3", "Station D4", "Station D5"],

	labTopics = ["Introduction", "Monitor Path Connection", "Effects and Inserts", "Input Path Connection", "Quiz" ]

for (var minutesTillClass=60; minutesTillClass > 0; minutesTillClass-=5) {
	console.log("Only " + minutesTillClass + " minutes until class starts!" );
};
	console.log("OK!, Let's take roll and start this class!");



var accreditorsHappyTest = function (numStudents , numInstructors) {
	var areAccredHappy;
	if (numStudents / numInstructors <= 8) {
		areHappy = "The accreditors are happy.  We always need 1 instructor per 8 students.";
	} else {
		areHappy = "Sorry, but the accreditors will not like this.  We always need 1 instructor per 8 students.";
	}
	return areHappy;
};

var areHappy = accreditorsHappyTest(14, instructors.length);

console.log(areHappy);



console.log("Before we begin, we need to clean " + StationIds.length + " workstations.  We all know that students in the " + audio + " are dirty and gross, so this needs to get done.");
	var newCleanedConsoles = [];
	var cleanConsoles = function(StationIds, howManyStations) {
for (i = 0; i < StationIds.length; i++) {
	 var cleanedConsole = (StationIds[i]);
	 newCleanedConsoles.push(cleanedConsole);
};
	return newCleanedConsoles;
};
cleanConsoles(StationIds, StationIds.length);
console.log("We have just cleaned the following consoles : " + newCleanedConsoles);
 	console.log("Great! Now that all " + StationIds.length + " workstations have been cleaned, we can get to work.");
// var SparklingConsoles = cleanConsoles(StationIds, StationIds.length);
// 	console.log(newClean);


var experience = function(yearsExperience, degree) {
	var myExperience = "Just to let you know you are in good hands. I am your main instructor, and have " + yearsExperience  + " years experience as well as received my " + degree + " degree.";
	return myExperience;	
};

var getExperience = experience("15", "associates");
console.log(getExperience);



console.log("Your schedule is as follows:");

	for (var ii = 0, labNum = 1; ii < labTopics.length; ii++) {
		{
			console.log("Lab " + labNum++ + " : " + labTopics [ii]);

};

};





