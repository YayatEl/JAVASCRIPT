//function didalam function inner function hanya bisa diakses didddalam function
//function scope di nested
function outer(){
let paraName="nestedfunction"//ini jadi global scope
function inner(){

    console.info(paraName)
}

inner();
inner();

}

outer();

//inner() diluar funtion akan error