//contoh factorial pertama kita akan memakai looping biasa


let array=[1,2,3,4,5];

let total=0;
for(let i=1;i<=array.length;i++){

console.info(i)
total=i*i;
}
console.info(total)

function factorial(value){
let total2=1;
for(let i=1;i<=value;i++){
    total2 *=i
}
return total2;

}

let result=factorial(5);

console.info(result)
/**
 * contoh recrusive
 */
function recrusive(value2){

if(value2==1){
    return 1
}else{

    return value2 * recrusive(value2-1);
}

}

let factor=recrusive(5)

console.info(factor)