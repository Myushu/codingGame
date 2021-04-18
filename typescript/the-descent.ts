while (true) {
    var montain = 0;
    var index = 0;
    for (let i = 0; i < 8; i++) {
        const currentMontain: number = parseInt(readline()); // represents the height of one mountain.
        if (currentMontain > montain) {
            montain = currentMontain
            index = i;
        }
    }
    console.log(index);
}
