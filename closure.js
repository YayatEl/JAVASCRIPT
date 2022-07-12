/**
 * closure adalah kombinasi function dan bundelreferensi ke data sekitarnya
 * dengan closure kita bisa membuat local scope diakses sekitarnya
 */ 

function createAdder(value){

    const owner="yayat"
    function add(param){

        console.info(owner)
        return value+param;
    }
    return add
}
const addTwo=createAdder(2)
// function addTwo(param){
// console.info("eko");
//     return 2+param
// }

/console.info(addTwo(10))
console.info(addTwo(20))