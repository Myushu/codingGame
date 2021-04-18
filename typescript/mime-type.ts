const numberOfElement: number = parseInt(readline());
const numberOfFile: number = parseInt(readline());
const elements: {[key: string]: string} = {}

for (let index: number = 0; index < numberOfElement; ++index) {
    var inputs: string[] = readline().split(' ');
    elements[inputs[0].toLocaleLowerCase()] = inputs[1];

}
for (let index: number = 0; index < numberOfFile; index++) {
    try {
        const filename: string = readline();
        const fileChunks: string[] = filename.split('.')

        if (fileChunks.length <= 1)
            throw "No extension"
        
        const extension = fileChunks.pop().toLocaleLowerCase()
        if (!(extension in elements))
            throw "Mine not found"
        console.log(elements[extension])
    } catch (e) {
        console.error(e)
        console.log('UNKNOWN');
    }
}
