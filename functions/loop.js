// activity 1
function arrayDoubled(originalArray){
  var originalArray = [1,2,3,4]
  for(i=0; i<originalArray.length; i++){
    var number = originalArray[i]*2;
    alert(number);
  }
}
// activity 2
function reverseArray(array){
  var array = [1,2,3,4,5];
  var reverseArray = [];
  var length = array.length
  for(i=0; i<length; i++){
    reverseArray.push(array.pop());
  }
  return (reverseArray)
}
// activity 3
function mergeArrays(array1, array2){
  var array1 = [1,2,3];
  var array2 = ["a","b","c","e"];
  var mergedArrays = [];
  var longestLength = Math.max(array1.length, array2.length);
  for(var i=0; i<longestLength; i++){
    if(array1[i]){
      mergedArrays.push(array1[i]);
    }
    if(array2[i]){
      mergedArrays.push(array2[i]);
    }
  }
  return mergedArrays;
}

//Javascript Review Activities
//1
function excitingjohnLennonFacts(){
  var johnLennonFacts = ["Son named Julian", "He is really cool"]
  var excitingFacts = []
  while (johnLennonFacts.length > 0){
    excitingFacts.push(johnLennonFacts.pop() + "!");
  }
  return excitingFacts;
}
//2
function beatlesRole(){
  var musicians = ["John", "Pual", "George", "Ringo", "Pete", "Stuart"]
  var instruments = ["Guitar", "Bass", "Guitar", "Drums", "Drums", "Bass"]
  var rolesOfBeatles = []
  var length = musicians.length;
  for (var i = 0; i < length; i++){
    rolesOfBeatles.push(musicians[i] + " plays the " + instruments[i]);
  }
  return rolesOfBeatles;
}
