/**scope adalah daerah akses data
 * ada dua scope local scope dan  global scope
 */

let counter=0// global scope
//funtion hitme berada di global scoper
function hitMe(){
//local scope hitme
    counter++
}
hitMe();
hitMe();
console.info(counter);