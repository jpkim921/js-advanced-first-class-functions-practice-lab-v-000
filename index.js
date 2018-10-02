// Code your solution in this file!

const callback = function (el, i, arr) {
  console.log(el.name);
};
 
function logDriverNames(arr) {
  return arr.forEach(callback);
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers){
  return drivers.concat().sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue
  })
}

const driversByName = function(drivers){
  return drivers.concat().sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name)
  });
}