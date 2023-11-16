// Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  names.splice(1,1)
  console.log(names); 

//   When will we be there
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  const travelTimeArrival= (travelInformation) =>{
    let time = travelInformation.destinationDistance / travelInformation.speed;
    let hour = Math.floor(time);
    let minute = Math.floor((time % 1) *60);
    return `${hour} hours and ${minute} minutes`
  }
  const travelTime = travelTimeArrival(travelInformation);
  console.log(travelTime);