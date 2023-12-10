function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

const myList = generateListings(37);
myList.forEach((listItem) => {
  console.log(listItem.size);
});
// map-----------------------------
const prices = myList.map((item) => item.price);
console.log(prices);
//cheep----------------------------
const cheepItems = myList.filter(cheep => cheep.price < 1000);
const cheepItemList = cheepItems.map(item => item.type);
console.log(cheepItemList)

//expensive---------------------------
const expensive = myList.filter(expensive => expensive.price > 8000)
const expensiveItemList = expensive.map(item => item.price)
console.log(expensiveItemList);
// item with parking-------------------
const haveParking = myList.filter((itemWithParking) => 
  itemWithParking.facilities.includes("Parkering")
);
const Itemtypes = haveParking.map(item => 
    item.type)
console.log(Itemtypes)
