let a1=2
let a2=3
let c=null

function Menambahkan(a,b){
c=a+b;
console.info(c)
}



Menambahkan(a1,a2)
 //function return value
 function returnValue(firstName,lastName){
    const say=`say hello${firstName}${lastName}`
    return say
}

const result= returnValue('baco','becce')
console.info(result)
const object4={
    nam:'sada',
    umur:30
}

with(object4){
  console.info(nam)
  console.info(umur)
    
}
let c2=null
function cekNilai(a,b){
 let c2=a+b
    if(c2>60){
    return c2 +'kamu lulus'
    }else if (c2<30){
    return c2+'kamu tidak lulus'
    }else{}
}
const result2=cekNilai(30,70)
console.info(result2)

//return value untuk menghentikan

function searchArray(array,searchvalue){
    for(key of array){
    if(searchvalue==key)
    return key
    }
}
    
 const result3=searchArray([2,3,4,5,6],4)
 console.info(result3)   