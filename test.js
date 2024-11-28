/*Task 01:
Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values
and logs each value with a delay of 1 second between logs.
*/

const iterateWithAsyncAwait = async (arr) => {
    for(val of arr){
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    });
    console.log(val)
}
}

// iterateWithAsyncAwait([1,2,3,4,5])

/* 
Task 02:
Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API.
Use await to wait for the API response and then log the data.

++

Task 03:
Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully.
If the API call fails, catch the error and log a user-friendly error message.
*/

const awaitCall = async () => {
    const url = "https//www.nomdeapi.com";
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json()
            console.log(data);
        }else{
            throw new Error("Données pas normales")
        }
    } catch (error) {
        console.error("error fetching data");
    }
    
}

// awaitCall()

/*
Task 04:
Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all().
Log the combined results after both requests have resolved.
*/

const concurrentRequests = async () => {
    try {
        const [response1, response2] = await Promise.all([
            fetch("https://www.url1.com"),
            fetch("https://www.url2.com")
        ])
        const data1 = await response1.json()
        const data2 = await response2.json()

        console.log({data1,data2});
    } catch (error) {
        console.error(error)
    }
}

/*
Task 5:
Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data
from each URL concurrently using Promise.all(). Log the responses once all requests are complete.
*/

const parallelCalls = async (arrUrls) => {
    try {
        let promisesTab = [];
    for(url of arrUrls){
        promisesTab.push(fetch(url));
    }
    const responses = await Promise.all(promisesTab);
    const data = await Promise.all(responses.map(response => response.json()))
    console.log(data)
    } catch (error) {
        console.error("Error fetching data")
    }
}