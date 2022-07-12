/**
 * object adalah tipe data yang berisikan field/properti/ attribute dan method/func/behavior
class adalah blueprint dari object atau cetakan untuk membuat object setiap object dibuat dari class dan dapat membuat object tanpa batas
*/


class Person {/**
 * blue print untuk object
 */constructor(){
    
       this.nama='budi'
       this.umur=10
       this.jenisKelamin=''

 }
}
// function PremiumMember() {//construtor function ini kelasnya
    
// }
// const Person={/**
//  * tipe data object/variabel
//  */
// nama2:"",
// umur2:"",
// jenisKelamin2:"",

// }
const person=new Person()
person.nama='yayat'


stringTmplate=`${person.nama}${person.umur}`
document.writeln(stringTmplate)