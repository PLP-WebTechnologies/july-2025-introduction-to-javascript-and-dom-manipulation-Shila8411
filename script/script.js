
// Part 1: Movie Rating Check

const checkRatingBtn = document.getElementById('checkRatingBtn');
const ratingResult = document.getElementById('ratingResult');

checkRatingBtn.addEventListener('click', () => {
  const rating = parseInt(document.getElementById('ratingInput').value);

  if (isNaN(rating) || rating < 1 || rating > 10) {
    ratingResult.textContent = "⚠️ Enter a valid rating (1-10)";
    ratingResult.style.color = "orange";
  } else if (rating >= 8) {
    ratingResult.textContent = "🌟 Highly recommended movie!";
    ratingResult.style.color = "lightgreen";
  } else if (rating >= 5) {
    ratingResult.textContent = "👍 This movie is decent.";
    ratingResult.style.color = "yellow";
  } else {
    ratingResult.textContent = "👎 You might want to skip this one.";
    ratingResult.style.color = "red";
  }
});


// Part 2: Movie Functions

function totalRuntime(runtime1, runtime2) {
  return runtime1 + runtime2;
}
document.getElementById('runtimeResult').textContent = totalRuntime(120, 95);

function formatMovieTitle(title) {
  return `🎬 ${title.toUpperCase()} 🎬`;
}
document.getElementById('formatTitle').textContent = formatMovieTitle("Inception");


// Part 3: Loops

const movies = ["Inception", "Interstellar", "The Dark Knight", "Tenet"];
const movieList = document.getElementById('movieList');

for (let i = 0; i < movies.length; i++) {
  const li = document.createElement('li');
  li.textContent = movies[i];
  movieList.appendChild(li);
}

let days = 5;
const countdownEl = document.getElementById('countdown');
let countdownText = "Days until movie night: ";
while (days > 0) {
  countdownText += days + " ";
  days--;
}
countdownEl.textContent = countdownText;


// Part 4: DOM Manipulation

const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');
toggleBtn.addEventListener('click', () => {
  toggleText.classList.toggle('highlight');
});

const addMovieBtn = document.getElementById('addMovieBtn');
const dynamicMovieList = document.getElementById('dynamicMovieList');
let movieCount = 1;

addMovieBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `New Movie ${movieCount}`;
  dynamicMovieList.appendChild(li);
  movieCount++;
});
