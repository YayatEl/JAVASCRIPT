//function dapat disimpen sebagai variable


function sayHello(name){
    console.info(name)
    
    
}


const halo=sayHello('eko')
sayHello('budi')

const budi=sayHello;

//Function as parameter

let newHello=sayHello


function callName(callback){

    callback("maria");
}

callName(newHello);
callName(budi)
