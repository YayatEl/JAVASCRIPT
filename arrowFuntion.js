/**
 * arrow function memiliki keterbatasan
 * tidak memiliki fitur arguments object
 * tidak mendukung function generator
 * tidak bisa mengakses this
 * tidak bisa mengaksess super
 */



const sayhello=(parameter)=>console.info(`halo ini parematermu ${parameter}`)
const sayhello2=(parameter)=>{console.info(`halo ini parematermu ${parameter}`)}

sayhello2('budi')


sayhello("yayat");

const arrowReturnValue=(first,second)=>first+second;
const arrowReturnValue2=(first,second)=>{
    return first+second;
}


const result=arrowReturnValue(50,50);

console.info(result)
/**
 * ArrowFunctionSebagai parameter
 */

const arrowNames=(names)=>console.info(`halo ${names}`)

function giveNames(callback){
callback('maria');

}
giveNames((names)=>console.info(`halo ${names}`))