var nama="yayat";
//document.writeln(nama);
var castingstring=1;
for (let index = 0; index < nama.length; index++) {
   // const element = array[index];
    document.writeln(nama);
}
for (var i = 0; i < nama.length; i++) {
    document.writeln("\n"+i)
}
nama.forEach(() => {
    document.writeln(nama);
  
});
for (const key in nama) {
    if (nama.hasOwnProperty.call(nama, key)) {
        document.writeln('\n'+key)
        
    }
}