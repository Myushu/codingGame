type Coords = {
    x: number;
    y: number;
}


var inputs: string[] = readline().split(' ');
const light: Coords = {
    x: parseInt(inputs[0]),
    y: parseInt(inputs[1])
}
const thor: Coords = {
    x: parseInt(inputs[2]),
    y: parseInt(inputs[3])
}


// game loop
while (true) {
    const remainingTurns: number = parseInt(readline());
    let direction: string = "";

    if (thor.y < light.y) {
        direction = "S"
        ++thor.y;
    }
    if (thor.y > light.y) {
        direction = "N"
        --thor.y;
    }

    if (thor.x < light.x) {
        direction += "E"
        ++thor.x;
    }
    if (thor.x > light.x) {
        direction += "W"
        --thor.x;
    }

    console.log(direction);
}
