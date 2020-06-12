// Your code here
 const mapToNegativize = function (sourceArray){
   let result = sourceArray.map(x => x* -1)
   return result
 }
 const mapToNoChange = function (sourceArray){
  let result = sourceArray.map(x => x)
   return result
   
 }
  const mapToDouble = function (sourceArray){
  let result = sourceArray.map(x => x*2)
   return result
   
 }
  const mapToSquare = function (sourceArray){
  let result = sourceArray.map(x => Math.pow(x, 2))
   return result
   
 }
 
 const reduceToTotal = function (sourceArray, startingPoint){
   let result = sourceArray.reduce()
 }
 function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer, false)
} 