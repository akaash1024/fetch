// Yeh ek function hai jo promise return karega
function paiseLena() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Paise mil gaye!");
        }, 2000); // 2 second ka wait
    });
}

// Async function jisme await ka use hoga
async function kaamKar() {
    console.log("Paise lene jaa rahe hain...");

    // Promise ka result directly await karke mil jayega
    const result = await paiseLena(); // Await ka matlab hai "promise ka result ka wait karo"
    
    console.log(result); // "Paise mil gaye!" yeh print hoga jab promise resolve hoga
    console.log("Kaam ho gaya!");
}

// Ab async function ko call karte hain
kaamKar();
