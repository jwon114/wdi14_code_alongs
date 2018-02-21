var favColor = 'mistyrose';
favColor = 'pink';

function party() {
    // function scope
    var bottlesOfWine = 5;
}

if (true) {
    // global scope
    // var bottlesOfBeer = 10; // still global
    let bottlesOfBeer = 10; // block scope
}

// hoisting, variables are hoisted to the top of the scope
{
    // let gives you block scope
}