
//restparameter hanya boleh ditaruh posisi paling akhir kalau bhasa pemograman lain restparameter
function restParameter(name,...array){

let total=0
for(item of array){
total+=item
}
console.info(total)
}

const array1=[10,10,10]
restParameter('feral',1,2,3,4,5,)
restParameter('feral',...array1)//spread syntax

//old ways
function sum(){
let total=0

for(item of arguments){
total+=item

}
console.info(total)
}

sum(1,3,4,5)