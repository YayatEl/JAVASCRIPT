/**
 * syncronous mengeksekusi baris perbaris karena menunggu eksekusi biasa disebut blocking
dieksekusi didalam thread di webroser di eksekusi di main thread 
decara default js itu syncrounous
*/

setTimeout(() => {
    document.writeln('afaskjbfkasbfajk')// call dipanggil setelah 5 detik
}, 5000);

setInterval(() => {
    document.writeln('method')
    
}, 5000);





