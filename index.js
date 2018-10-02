// Code your solution in this file!

const callback = function (el, i, arr) {
  console.log(el.name);
};
 
function logDriverNames(arr) {
  return arr.forEach(callback);
}