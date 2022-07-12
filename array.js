/**
 * array dalam js dinamis
 */
const arrayjs=['aku', 2,'kamu',2.3];
arrayjs.push(1);
arrayjs[1]=19;
templatestring=`nilai array: ${arrayjs}
${arrayjs[0]}`


document.writeln('<pre>')
document.writeln(templatestring)
document.writeln('</pre>')
