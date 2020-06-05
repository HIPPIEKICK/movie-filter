
const moviesList = document.getElementById('list')
const filterButton = document.getElementById('filter')
const removeFilterButton = document.getElementById('remove-filter')
const filters = document.getElementById('filters')

const movies = [
    {
      "title": "Snow White and the Seven Dwarfs",
      "genre": "Musical",
      "rating": 8,
      "year": 1937
    },
    {
      "title": "Pinocchio",
      "genre": "Adventure",
      "rating": 7,
      "year": 1940
    },
    {
      "title": "Fantasia",
      "genre": "Musical",
      "rating": 9,
      "year": 1940
    },
    {
      "title": "Song of the South",
      "genre": "Adventure",
      "rating": 6,
      "year": 1946
    },
    {
      "title": "Cinderella",
      "genre": "Drama",
      "rating": 6,
      "year": 1950
    },
    {
      "title": "20,000 Leagues Under the Sea",
      "genre": "Adventure",
      "rating": 5,
      "year": 1954
    },
    {
      "title": "Lady and the Tramp",
      "genre": "Drama",
      "rating": 8,
      "year": 1955
    },
    {
      "title": "Sleeping Beauty",
      "genre": "Drama",
      "rating": 8,
      "year": 1959
    },
    {
      "title": "101 Dalmatians",
      "genre": "Comedy",
      "rating": 8,
      "year": 1961
    },
    {
      "title": "The Absent Minded Professor",
      "genre": "Comedy",
      "rating": 7,
      "year": 1961
    },
    {
      "title": "Babes in Toyland",
      "genre": "Musical",
      "rating": 5,
      "year": 1961
    },
    {
      "title": "Bon Voyage!",
      "genre": "Comedy",
      "rating": 5,
      "year": 1962
    },
    {
      "title": "The Sword in the Stone",
      "genre": "Adventure",
      "rating": 9,
      "year": 1963
    },
    {
      "title": "The Jungle Book",
      "genre": "Musical",
      "rating": 9,
      "year": 1967
    },
    {
      "title": "Blackbeard's Ghost",
      "genre": "Comedy",
      "rating": 5,
      "year": 1968
    },
    {
      "title": "The Aristocats",
      "genre": "Musical",
      "rating": 7,
      "year": 1970
    },
    {
      "title": "The Boatniks",
      "genre": "Comedy",
      "rating": 5,
      "year": 1970
    },
    {
      "title": "Bedknobs and Broomsticks",
      "genre": "Musical",
      "rating": 5,
      "year": 1971
    },
    {
      "title": "The Apple Dumpling Gang",
      "genre": "Comedy",
      "rating": 6,
      "year": 1975
    },
    {
      "title": "Freaky Friday",
      "genre": "Comedy",
      "rating": 8,
      "year": 1977
    },
    {
      "title": "The Many Adventures of Winnie the Pooh",
      "genre": "Comedy",
      "rating": 10,
      "year": 1977
    }
]

const showList = () => {
  moviesList.innerHTML = ''
  movies.forEach((movie) => {
    moviesList.innerHTML += `
    <div class="movie-card"> <h3>${movie.title} </h3> ${movie.year} | ${movie.genre} | ${movie.rating}</div>
    `
  })
}

showList()

const filterMovies = () => {
  const value = filters.value
  const category = filters.options[filters.selectedIndex].parentNode.label

  if (category === 'Genre:') {
    const filtered =  movies.filter((movie) => {
      return movie.genre === value
    })
    moviesList.innerHTML = ''
    filtered.forEach((movie) => {
      moviesList.innerHTML += `
      <div class="movie-card"> <h3>${movie.title} </h3> ${movie.year} | ${movie.genre} | ${movie.rating}</div>
      `
  })

  } else if (category === 'Rating:') {
    const filtered =  movies.filter((movie) => {
      return movie.rating === parseInt(value)
    })
    moviesList.innerHTML = ''
    filtered.forEach((movie) => {
    moviesList.innerHTML += `
    <div class="movie-card"> <h3>${movie.title} </h3> ${movie.year} | ${movie.genre} | ${movie.rating}</div>
    `
  })
  } else {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
}

filterButton.addEventListener('click', filterMovies)
removeFilterButton.addEventListener('click', showList)