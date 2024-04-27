// Find All Nunbers Disappeared in an Array

const array = [2,3,4,8]
const set = new Set(array)
const array1 = []
const min = Math.min(...array)
for(i=min+1;i<min+array.length;i++){
    if(!set.has(i)){
        array1.push(i)
    }
}

console.log(array1);