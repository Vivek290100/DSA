// function reverse(str) {
//     if (str === "") {
//         return "";
//     } else {
//         return reverse(str.substr(1)) + str.charAt(0);
//     }
// }

// let str = 'vivek';
// console.log(reverse(str));


function reverse(string){
    if(!string==''){
        return reverse(string.substr(1))+string.charAt(0)
    }else{
        return ''
    }
}

console.log(reverse('vivek'))


