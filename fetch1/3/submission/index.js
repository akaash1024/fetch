const show = document.getElementById("show")
const getMovie = document.getElementById("getMovieButton").addEventListener("click",fetchMovieData)

const displayMovieData = (data) => {
    show.innerHTML="";
    
    if (data.Response === "False") {
        show.innerHTML = `<p>Movie not found!</p>`;
        return;
    }

    const div = document.createElement("div")
    // movie title, release year, plot, and poster

    const movieTitle = document.createElement("h1");
    movieTitle.innerText = data.Title;

    const poster = document.createElement("img");
    poster.src = data.Poster;

    const title = document.createElement("p");
    title.innerText = `Released: ${data.Released}`;

    const plot = document.createElement("p");
    plot.innerText = `Plot: ${data.Plot}`;

    div.append(movieTitle,poster,title,plot)
    // console.log(div);
    show.append(div)
}



async function fetchMovieData() {
    const movieInput = document.getElementById("movieInput").value;
    if (!movieInput) {
        show.innerHTML = `<p>Please enter a movie name!</p>`;
        return;
    }

    try {
        const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieInput)}&apikey=61c584d6`);
        const data = await res.json()
        console.log(data);  
        displayMovieData(data)
    } catch(err){
        console.log("Error",err);
        show.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
}