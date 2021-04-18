const numberOfElement = parseInt(readline());
const numberOfFile = parseInt(readline());
const elements = {}

for (let index = 0; index < numberOfElement; ++index) {
    var inputs = readline().split(' ');
    elements[inputs[0].toLocaleLowerCase()] = inputs[1];

}
for (let index = 0; index < numberOfFile; index++) {
    try {
        const filename = readline();
        const fileChunks = filename.split('.')

        if (fileChunks.length <= 1)
            throw "No extension"
        
        extension = fileChunks.pop().toLocaleLowerCase()
        if (!(extension in elements))
            throw "Mine not found"
        console.log(elements[extension])
    } catch (e) {
        console.error(e)
        console.log('UNKNOWN');
    }
}
