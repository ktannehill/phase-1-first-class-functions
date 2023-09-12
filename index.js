// function Monday() {
//     console.log("Go for a run");
//     console.log("Pump iron");
// }

// function Tuesday() {
//     console.log("Go for a run");
//     console.log("Swim 40 laps");
// }

// function Wednesday() {
//     console.log("Go for a run");
//     console.log("Go for a run");
// }

// function Thursday() {
//     console.log("Go for a run");
//     console.log("Pump iron");
// }

// function Friday() {
//     console.log("Go for a run");
//     console.log("Swim 40 laps");
// }

// // excessive, repetitive functions,
// // versus slightly cleaner

// function runFiveMiles() {
//     console.log("Go for a run")
// }

// function liftWeights() {
//     console.log("Pump iron");
// }

// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// // less ideal Monday function, can make more general
// function Monday() {
//     runFiveMiles();
//     liftWeights();
// }

// // better Monday function
// // calls routine func, which calls run & post
//     // with post activity func passed as an arg
//     // and called inside routine func
// function Monday() {
//     exerciseRoutine(liftWeights);
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// // can add inline func as arg to routine
// exerciseRoutine(function () {
//     console.log("Stretch! Work that core!");
// });

// // alternatively
// exerciseRoutine(() => console.log("Stretch! Work that core!"));

// // returning functions
// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//         breakfast = "kale smoothie";
//     } else {
//         breakfast = "granola bar";
//     }

//     exerciseRoutine(exercise);

//     // we could give this func a name, but since
//     // it's only available inside morningRoutine
//     // there's no need
//     return function() {
//         console.log(`Nom nom, this ${breakfast} is delicious!`);
//     };
// }

// const afterExercise = morningRoutine(liftWeights);
// // does not return breakfast until called
// afterExercise();



// actual lab

function receivesAFunction(movieQuotes) {
    movieQuotes("Mean Girls");
};

function movieQuotes(movie) {
    if(movie === "Star Wars") {
        return "I am your father.";
    } else if(movie === "Lion King") {
        return "Remember who you are.";
    } else {
        return "I'm King of the world!"
    }
};



function returnsANamedFunction() {
    return movieQuotes;
};



function returnsAnAnonymousFunction(cat) {
    return function() {
        console.log(`My cat is ${cat}`)
    };
};


