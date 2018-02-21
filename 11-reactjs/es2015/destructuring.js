function getFavColor() {
    return ['mistyrose', 'pink'];
} 

let colors = getFavColor();
let firstColor = colors[0];
console.log(firstColor);

let [color1, color2] = getFavColor();
console.log(color1);
console.log(color2);

function getPersonDetails() {
    return {
        name: 'byteme',
        classroom: 1
    }
}

let { name, classroom } = getPersonDetails();
console.log(name);
console.log(classroom);