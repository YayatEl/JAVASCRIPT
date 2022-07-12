for (let index = 3; index < 2; index++) {
  console.info('hello')
}

array=[1,2,3,4]
array.forEach(element => {
    console.info(element)
});

const object2={
nama:'udin',
umur:10

}
for (const key in object2) {//jarang unutuk array tpi object
    console.info('in'+object2[key])
    
}

for (const iterator of array) {//untuk array
    console.info(iterator)
    
}
 let a=1
while (a<5) {
    console.info('halo')
    if (a==4) {
        break//keluar dari perulangan continue menskip dan kembali ke awal proses perulangan
    }
    a++
}

for (let index = 1; index < 20; index++) {
    if (index % 2 ==0) {
        continue
    }
    
    console.info('bilangan ganjil:'+ index)
}
/**
 * label untuk penanda perulangan ditandai dengan :
 */
 let b= 0
 const array2=[1,2,3,4]
 const object1={
 nama:'yayat',
 umur:0
 }

 for(i=0;i<array2.length;i++){
 console.info(array2[i])
 
 }
 
 for(const key in object1){
 
 console.info(object1[key])
 
 }
 
 for(const value of array2){
 
 console.info(value)
 }
 array.forEach(()=>{})
