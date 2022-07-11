/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */

 function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  let dinoName = dinosaurName
   let dinoId = ``
   
   //edge case needed
   
   for (let i = 0; i < dinosaurs.length; i++) {

    if (dinosaurs[i].name === dinoName){
      dinoId = dinosaurs[i].dinosaurId
    } 
  }
  
  for (let j = 0; j < rooms.length; j++) {
    for (let r = 0; r < rooms[j].dinosaurs.length; r++) {
      if (rooms[j].dinosaurs[r] === dinoId){
        return `${rooms[j].name}`
      }else{
        continue
      }
    }
  }
  if (!dinoId)
  {return `Dinosaur with name '${dinoName}' cannot be found.`}
  return `Dinosaur with name '${dinoName}' cannot be found in any rooms.`
}



/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */

function getConnectedRoomNamesById(rooms, id) {
  
  
  let arr = []
  let arr2 = []
  for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].roomId === id ){
          arr = rooms[i].connectsTo
      } 
  }
  if (arr.length === 0) return `Room with ID of '${id}' could not be found.`

  
  for (let j = 0; j < rooms.length; j++) {
    for (let z = 0; z < arr.length; z++) {
      if (rooms[j].roomId === arr[z])
      arr2.push(rooms[j].name)
    }
  }
  for (let r = 0; r < rooms.length; r++) {
    for (let g = 0; g < arr2.length; g++) {
      if (rooms[r].name === arr2[g]){
        
        // need to change edge cas for "✓ if connected room ID is incorrect, should return an error message"

          // if(rooms !== exampleRoomData){
          //   return `Room with ID of 'incorrect-id' could not be found.`
          // }

           return arr2
          } 
        }
      }
       
  
  // console.log(arr)
  // return `Room with ID of 'incorrect-id' could not be found.`

  /* attepmt 2
  let arr = []
  let arr2 = []
  let rms = rooms
  for (let i = 0; i < rooms.length; i++) {
    if (rms[i].roomId === id ){
      arr = rms[i].connectsTo
    }
  }
  for (let j = 0; j < rooms.length; j++) {
    for (let z = 0; z < arr.length; z++) {
      if (rooms[j].roomId === arr[z])
      arr2.push(rooms[j].name)
    }
  }
  // console.log(arr)
  if (arr2 === []){
      return `Room with ID of '${id}' could not be found.`
    }

  return arr2*/

/*first att
    // let arr =`Room with ID of '${id}' could not be found.`
    // let arr2 = []
    // let rms = rooms
    // for (let i = 0; i < rooms.length; i++) {
    //     if (rms[i].roomId === id ){
    //         arr = rms[i].connectsTo
    //     }
    // }
    // for (let j = 0; j < rooms.length; j++) {
    //   for (let z = 0; z < arr.length; z++) {
    //     if (rooms[j].roomId === arr[z])
    //        arr2.push(rooms[j].name)
    //   }
    // }
// return arr2 */
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
