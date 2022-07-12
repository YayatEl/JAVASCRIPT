/**
 * tidak ada assicatif array yang ada tipe data object
 */
let mahasiswa={
nama:"sandika",//property
umur:20,
nim:"d0233190"

}
const orang={};
/**
 * menambahkan properti atau attribute ke tipe data object
 * 
 */

orang['nama']='yayat';
let nomd=orang.nim=34;
templateString=`nilai tipe data object:${mahasiswa['nama']}
${orang['nama']} ini cara paling umum ${orang.nama}${mahasiswa.umur}${nomd}
${'umur'in mahasiswa}`
document.writeln('<pre>')
document.writeln(templateString)
document.writeln('</pre>')
/**
 * mengecek property dalam tipe data object menggunakan in operator
 */

