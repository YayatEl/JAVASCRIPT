let say=function(name){

    console.info(`Halo ${name}`)
}


say("maria")
//function tanpa nama sebagai parameter


function giveName(callback){

callback('nadia')

}
giveName(say)

giveName(function(name){
    document.writeln(name)
})