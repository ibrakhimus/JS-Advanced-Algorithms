async function postsByUser(userId) {  //async goes next to the function, await is inside the function
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts"); //fetching api

    const result = await promise.json(); //to read it in frontend  u have to convert it to json

    const posts = result.filter(element => element.userId === userId); // filet it out to have specific userid

    console.log(posts)
}

postsByUser(1);