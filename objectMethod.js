/**
 * function didalam property salah satu property data object
 */
// const dataObject={
// nama:"eko",
// funcMethod:function(umur){
// return umur;
// }

// }

const dataObject={//cara kedua
    nama:"yayat"
}

dataObject.funcMethod=(param)=>param;
const a=dataObject.nama
const b=dataObject.funcMethod(20)

console.info(a,b)