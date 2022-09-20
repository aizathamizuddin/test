// changed main.js to a C program
// use Ctrl+K and M

function div(a,b){
    // let x =   < testing for stash
    return a / b;
}

function div(a,b){
    return a + b;
}

console.log(div(10,5));

/*
Practice 4 (accidentally commit a BIG MISTAKE)
    - git reset --soft HEAD~    (resets to STAGED)
    - git restore --staged main.js
    - git restore main.js
*/

/*
Practice 5 (accidentally commit a BIG MISTAKE)
    - git reset HEAD~           (resets to UNSTAGED)
    - git restore main.js
*/