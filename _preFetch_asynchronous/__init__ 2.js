function paiseLena(friend) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Friend se paise mil gaye!");
            resolve(); // Success ka signal
        }, 1000);
    });
}

function chaiBanana() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Chai ban gayi!");
            resolve(); // Success ka signal
        }, 2000);
    });
}

function chaiPeena() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Chai pee kar relax kar rahe hain!");
            resolve(); // Success ka signal
        }, 500);
    });
}

// Ab kaam karte hain promises ke sath
paiseLena("Friend")
    .then(() => chaiBanana())  // Pehle paise lena, fir chai banana
    .then(() => chaiPeena())   // Fir chai peena
    .catch((error) => {
        console.log(error);    // Agar koi error ho toh handle karo
    });
