function paiseLena(friend, callback) {
    setTimeout(() => {
        console.log("Friend se paise mil gaye!");
        callback();
    }, 1000);
}

function chaiBanana(callback) {
    setTimeout(() => {
        console.log("Chai ban gayi!");
        callback();
    }, 2000);
}

function chaiPeena() {
    setTimeout(() => {
        console.log("Chai pee kar relax kar rahe hain!");
    }, 500);
}

// Ab kaam karte hain
paiseLena("Friend", function() {
    chaiBanana(function() {
        chaiPeena();
    });
});




