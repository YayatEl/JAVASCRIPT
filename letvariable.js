let fullname="nama saya faratriadi";
const tidakdpatdirubah="nama aplikasi";


document.writeln("<br>"+fullname+"<br>")
document.writeln("<br>"+tidakdpatdirubah+"<br>")

const stringTemplate=`name:${fullname}`;
document.writeln(stringTemplate)
const value1="1";
const value2=1;
let hasil=parseInt(value1)+value2
document.writeln(hasil)
const deskripsieko=`<p>nama saya eko, 
suka tidur suka makan
dan suka main game<p>`

document.writeln(deskripsieko)

let arrayKosong=[]

arrayKosong=["asfdafa",1,1,9.0,true]
document.writeln(arrayKosong)
document.writeln(arrayKosong[0])
const names=[]

names.push("adi","budi");
console.table(names);
/**
 * kita bisa memasukka array didalam array
 * javascript tidak dapat menggunakan assosisatif array yang index string
 */
let array1=[1,2,3];
let array2=[1,array1,6];
document.writeln(array2);

 /**
  * tipe data object dapat menggunakan string disebut attribute {}
  */


 const tipedataobject={
nama:"edi",
umur:30,

 };

//tipedataobject["nama"]="budi";

 document.writeln(tipedataobject.nama);
 console.table(tipedataobject);

 let name;


 if (name===undefined) {
     alert("undifined")
    } else {
     alert("difined")
     
}
const fullnames={
firstname:"ekot",
lastname:"kurniawan"

}

const prop= "firstname"in fullnames

if (prop==true) {
    alert("ada")
}
let parameter;
fullnames.firstname=="eko"? alert("selamat anda lulus"):alert("silahkan coba lagi")

data=parameter;

data=parameter?? "nilai default"

alert(data)
