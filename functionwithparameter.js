function register(name, gender="unknown") {
    console.log(name)
    console.log(gender)
}

register("baco")
// rest parameter

function restParameter(name,...datas) {
    let total=0
for (const data of datas) {
    total+=data
}
return total
}

document.writeln(restParameter("yayat",1,2,3,4,5,6,7))
const array=[1,2,3,4,5]



function sum(name,...array) {
    let total=0
    for (const iterator of array) {
        total+=iterator
        document.writeln(`ini ${name} adalah ${total}`)
    }
}

sum('array',...[10,10,10,10])