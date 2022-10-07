//make a variable object so i add all the chassis parts to it
// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}
//var to store createChassis object
let chassis = createChassis()

const addWheels = () => {
	// Use dot notation to add a new property
	chassis.wheels = 4

	// Return the chassis that now has a body property on it
	return chassis
}


// function to add engine to chassis
const addEngine = () => {
    //gives engine to chassis
    chassis.engine = "Engine"
        // gives chassis back with engine
        return chassis
}
// function to add steering wheel
const addSteeringWheel = () => {
    //gives steering wheel
    chassis.steeringWheel = "Tilting"
        //gives chassis back with steering wheel
        return chassis
}

//function to add drive train
const addDriveTrain = () =>{
//gives drive train
chassis.driveTrain = "Two wheel drive"
}
//invoke funtions to make them work
createChassis()
addWheels(chassis)
addEngine(chassis)
addSteeringWheel(chassis)
addDriveTrain(chassis)
//see results
console.log(chassis)