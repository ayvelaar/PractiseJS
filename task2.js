// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to

const enterNumber = ()=>{
    return new Promise((resolve, reject)=>{

        const userNumber = Number(window.prompt("enter a number (1-6)"));
        const randomNumber = Math.floor(Math.random()* 6 + 1 );
        console.log(randomNumber)
        console.log(userNumber)

        if(isNaN(userNumber)){
            reject(new Error("Wrong input"))
        }

        if(randomNumber===userNumber){
            resolve({
                points: 3,
                randomNumber,
                userNumber
            });
        } else {
            resolve({
                points:1, 
                randomNumber,
                userNumber
        })
    }

        
    });
}

const continueGame = ()=>{
    return new Promise((resolve,reject)=>{
       if(window.confirm("Continue")){
           resolve(true)}else{ resolve(false)}
    })
}

const handleGuess = async ()=>{
    const result =await enterNumber();
    alert(`Dice: ${result.randomNumber} you choose ${result.userNumber} you get ${result.points} points`)

    const gaatdoor = await continueGame();

    if(gaatdoor){handleGuess()}else{alert("Game Over")}

}

const start = () => {
    handleGuess()
    // enterNumber()
    // .then((result)=>{
    //     alert(`Dice: ${result.randomNumber} you choose ${result.userNumber} you get ${result.points} points`)})
    // .catch((error)=>{alert(error)})
    // .finally(()=>{continueGame().then((result)=>{
    //     if(!result){alert("Game Over")}else{
    //         enterNumber();
    //         console.log("lets play another game")
    //     }
        
    // })})
};


start();
