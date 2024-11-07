function paiseLena(friend) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; // Paise lene mein fail ho gaye
            if (success) {
                resolve("Paise mil gaye!");
            } else {
                reject("Paise lene mein fail ho gaye."); // Reject kar diya
            }
        }, 2000);
    });
}

async function kaamKar() {
    try {
        console.log("Paise lene jaa rahe hain...");
        const result = await paiseLena(); // Agar fail hua toh yeh line error throw karegi
        console.log(result);  // Paise milne pe yeh chalega
    } catch (error) {
        console.log("Error: " + error);  // Agar koi error aayi toh catch mein aayega
    }
    console.log("Kaam ho gaya!");
}

// Ab async function ko call karte hain
kaamKar();
