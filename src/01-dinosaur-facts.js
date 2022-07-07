/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */


function getLongestDinosaur(dinosaurs) {
  
  if (dinosaurs.length === 0){
    return {}
  }
  
  let longDinoName =dinosaurs[0].name
  let longDino =dinosaurs[0].lengthInMeters
  for (let i = 0; i < dinosaurs.length; i++) {
    if ( longDino < dinosaurs[i].lengthInMeters){
      longDino= dinosaurs[i].lengthInMeters  ,
      longDinoName = dinosaurs[i].name
    } 
  }
  let obj= {[longDinoName]: longDino * 3.281}
  return obj
}
// console.log(getLongestDinosaur(input))
/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */


function getDinosaurDescription(dinosaurs, id) {
  
  
  let idDinoName = id
   let longDino =dinosaurs[0].lengthInMeters
  for (let i = 0; i < dinosaurs.length; i++) {
    if (dinosaurs[i].dinosaurId === idDinoName){
      return `${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info} It lived in the ${dinosaurs[i].period} period, over ${dinosaurs[i].mya[dinosaurs[i].mya.length-1]} million years ago.`
    } 
  }
  
  return `A dinosaur with an ID of '${id}' cannot be found.`
  
}

// console.log(getDinosaurDescription(input, "U9vuZmgKwUr"))

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */

//  const input = [
//   // ...dinosaurs,
//   {
//     dinosaurId: "7ZJlPQZRL",
//     name: "Tallosaurus",
//     pronunciation: "TALL-o-SORE-us",
//     meaningOfName: "Very tall dinosaur",
//     diet: "herbivorous",
//     lengthInMeters: 30,
//     period: "Early Cretaceous",
//     mya: [120, 110],
//     info: "Not much is known about this dinosaur because it didn't exist.",
//   },
// ];

function getDinosaursAliveMya(dinosaurs, mya, key) {
   let arr = []
   let myaDinoName = mya
   for (let i = 0; i < dinosaurs.length; i++) {

     if (dinosaurs[i].mya <= myaDinoName){
         arr.push(dinosaurs[i].dinosaurId)
         
         return arr
  // for (let j = 0; j < dinosaurs[i].mya.length; j++) {
    
  }
  }
}



// console.log(getDinosaursAliveMya(input,110),input[0].mya[input[0].mya.length-1] )

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
