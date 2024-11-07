//4. Async/Await Real-World Example (API Call)
//await fetch(...) ka use karke hum wait kar rahe hain jab tak data server se aa nahi jaata.


async function fetchData() {
    try {
        console.log("Data fetch kar rahe hain...");
        const response = await fetch("https://api.example.com/data"); // API call
        const data = await response.json();  // API se result ko JSON mein convert kar rahe hain
        console.log("Data mila:", data);
    } catch (error) {
        console.log("Error aayi:", error);
    }
}

fetchData();
