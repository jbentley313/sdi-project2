//alert("JavaScript works!");

// Assignment: Project 2
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 2: Teaching at an Audio School

var audio = "Recording Program",
	classTime = 800,
	instructors = ["Jason Bentley", "Alan Mason"],
	StationIds = ["Station GA1", 
				"Station GA2", 
				"Station GA3", 
				"Station GA4", 
				"Station GA5", 
				"Station GB1", 
				"Station GB2", 
				"Station GB3", 
				"Station GB4", 
				"Station GB5", 
				"Station GC1", 
				"Station GC2", 
				"Station GC3", 
				"Station GC4", 
				"Station GC5", 
				"Station GD1", 
				"Station GD2", 
				"Station GD3", 
				"Station GD4", 
				"Station GD5"]

	labTopics = ["Introduction",
				 "Monitor Path Connection",
				 "Effects and Inserts", 
				 "Input Path Connection", 
				 "Quiz"]

for (var minutesTillClass=60; minutesTillClass > 0; minutesTillClass-=5) {
	console.log("Only " + minutesTillClass + " minutes until class starts!" );
};
	console.log("OK!, Let's take roll and start this class!");
	console.log("Your instructors are " + instructors[0] + " and " + instructors[1]);





var accreditorsHappyTest = function(numStudents , numInstructors) {
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

var dumbTest = function(nameOfSchool) {
	if (nameOfSchool === "The Los Angeles Recording School") {
	console.log("Whew! Just checking to make sure you guys are awake.");
	}	else {
	console.log("I'm not sure if you are in the right place. Let me see your school id.");
	};
};
dumbTest("The Los Angeles Recording School");


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



var experience = function(yearsExperience, degree) {
	var myExperience = "Just to let you know you are in good hands. I am your main instructor, and have " + yearsExperience  + " years experience as well as received my " + degree + " degree.";
	return myExperience;	
};

var getExperience = experience("15", "Associates");
console.log(getExperience);



console.log("Your schedule is as follows:");


var ii = 0;
var labNum = 1;
while (ii < labTopics.length) {
	console.log("Lab" + labNum++ + " : " + labTopics [ii]);
	ii++;
}




// the following is not the real way to subtract time, but works for this example.  
var doWeKeepWorking = function(classTime,currentTime) {
	if(currentTime - classTime <= 299) {
		keepWorking = ("There is still time left in class, we are going to keep working.");
	}	else {
		keepWorking = ("It's time to get out of here!");
	};
	return keepWorking;
};
var workOrNot = doWeKeepWorking(classTime, 1059);
console.log(workOrNot);


