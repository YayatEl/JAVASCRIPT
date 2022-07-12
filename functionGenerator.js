/**
 * function untuk membuat data generator generator adalah data yang bisa di iterasi mirip dengan array
 * kata kunci yield
 */

function* dataGenerator(){
    yield "eko";
    yield "kurniawan";
    yield "kaneddy";
}

const names=dataGenerator();

for(const name of names){

    console.info(name)
}

function* ganjil(value2){
for(let i=1;i<=value2;i++){
    if(i%2==1){
   yield i
}
}

}
/**
 * data diambil satu2 atau bersifat lazy berlawanan dengan eager
 */
let nilaiGanjil=ganjil(13)
console.info(nilaiGanjil.next().value)
console.info(nilaiGanjil.next().value)
console.info(nilaiGanjil.next().value)
// for(let nilai of nilaiGanjil){

//     console.info(nilai)
// }