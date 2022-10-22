async function firstSixIncompleted(completed) {  //async goes next to the function, await is inside the function
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos"); //fetching api

    const result = await promise.json(); //to read it in frontend  u have to convert it to json
    
    const incompleteTasks = result.filter(element => !element.completed).slice(0.6); // filet it out to have specific completed

    console.log(incompleteTasks);
}
    firstSixIncompleted(6);