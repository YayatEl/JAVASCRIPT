const value1='1';
const value2=parseInt(value1);

const fullnames={
firstname:"ekot",
lastname:"kurniawan",

}
with(fullnames){

    document.writeln(`<p>${firstname}`)
    document.writeln(`<p>${lastname}`)

}

for (const key in fullnames) {
    print(`<p>${fullnames[key]}
    </p>`)
}
/**
 * for of tidak bisa untuk iterasi object hanya array non iterable
 */

const batang =['baco','becce']//array
for (const names of batang) {
print(names)
    
}

function print(message) {
    document.writeln(message)
}

function penambahanValue(a ,b) {
    return a+b
    
}

print(penambahanValue(2,5))