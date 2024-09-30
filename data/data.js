const marvelMovies = [
  { id: 1, title: "Iron Man", releaseYear: 2008 },
  { id: 2, title: "The Incredible Hulk", releaseYear: 2008 },
  { id: 3, title: "Iron Man 2", releaseYear: 2010 },
  { id: 4, title: "Thor", releaseYear: 2011 },
  { id: 5, title: "Captain America: The First Avenger", releaseYear: 2011 },
  { id: 6, title: "The Avengers", releaseYear: 2012 },
  { id: 7, title: "Iron Man 3", releaseYear: 2013 },
  { id: 8, title: "Thor: The Dark World", releaseYear: 2013 },
  { id: 9, title: "Captain America: The Winter Soldier", releaseYear: 2014 },
  { id: 10, title: "Guardians of the Galaxy", releaseYear: 2014 },
  { id: 11, title: "Avengers: Age of Ultron", releaseYear: 2015 },
  { id: 12, title: "Ant-Man", releaseYear: 2015 },
  { id: 13, title: "Captain America: Civil War", releaseYear: 2016 },
  { id: 14, title: "Doctor Strange", releaseYear: 2016 },
  { id: 15, title: "Guardians of the Galaxy Vol. 2", releaseYear: 2017 },
  { id: 16, title: "Spider-Man: Homecoming", releaseYear: 2017 },
  { id: 17, title: "Thor: Ragnarok", releaseYear: 2017 },
  { id: 18, title: "Black Panther", releaseYear: 2018 },
  { id: 19, title: "Avengers: Infinity War", releaseYear: 2018 },
  { id: 20, title: "Ant-Man and The Wasp", releaseYear: 2018 },
  { id: 21, title: "Captain Marvel", releaseYear: 2019 },
  { id: 22, title: "Avengers: Endgame", releaseYear: 2019 },
  { id: 23, title: "Spider-Man: Far From Home", releaseYear: 2019 },
  { id: 24, title: "Black Widow", releaseYear: 2021 },
  { id: 25, title: "Shang-Chi and the Legend of the Ten Rings", releaseYear: 2021 }
];

const marvelActors = [
  { id: 1, actor: "Robert Downey Jr.", age: 58, movie_id: 1 }, // Iron Man
  { id: 2, actor: "Chris Hemsworth", age: 40, movie_id: 4 }, // Thor
  { id: 3, actor: "Mark Ruffalo", age: 56, movie_id: 6 }, // The Avengers
  { id: 4, actor: "Chris Evans", age: 42, movie_id: 5 }, // Captain America: The First Avenger
  { id: 5, actor: "Scarlett Johansson", age: 39, movie_id: 6 }, // The Avengers
  { id: 6, actor: "Jeremy Renner", age: 53, movie_id: 6 }, // The Avengers
  { id: 7, actor: "Tom Hiddleston", age: 43, movie_id: 4 }, // Thor
  { id: 8, actor: "Samuel L. Jackson", age: 75, movie_id: 6 }, // The Avengers
  { id: 9, actor: "Don Cheadle", age: 59, movie_id: 3 }, // Iron Man 2
  { id: 10, actor: "Paul Rudd", age: 55, movie_id: 12 }, // Ant-Man
  { id: 11, actor: "Elizabeth Olsen", age: 35, movie_id: 11 }, // Avengers: Age of Ultron
  { id: 12, actor: "Benedict Cumberbatch", age: 48, movie_id: 14 }, // Doctor Strange
  { id: 13, actor: "Chadwick Boseman", age: 43, movie_id: 18 }, // Black Panther
  { id: 14, actor: "Tom Holland", age: 28, movie_id: 16 }, // Spider-Man: Homecoming
  { id: 15, actor: "Chris Pratt", age: 45, movie_id: 10 }, // Guardians of the Galaxy
  { id: 16, actor: "Zoe Saldana", age: 46, movie_id: 10 }, // Guardians of the Galaxy
  { id: 17, actor: "Dave Bautista", age: 55, movie_id: 10 }, // Guardians of the Galaxy
  { id: 18, actor: "Karen Gillan", age: 36, movie_id: 15 }, // Guardians of the Galaxy Vol. 2
  { id: 19, actor: "Brie Larson", age: 34, movie_id: 21 }, // Captain Marvel
  { id: 20, actor: "Anthony Mackie", age: 45, movie_id: 13 }, // Captain America: Civil War
  { id: 21, actor: "Sebastian Stan", age: 41, movie_id: 9 }, // Captain America: The Winter Soldier
  { id: 22, actor: "Josh Brolin", age: 56, movie_id: 19 }, // Avengers: Infinity War
  { id: 23, actor: "Evangeline Lilly", age: 44, movie_id: 20 }, // Ant-Man and The Wasp
  { id: 24, actor: "Florence Pugh", age: 28, movie_id: 24 }, // Black Widow
  { id: 25, actor: "Simu Liu", age: 35, movie_id: 25 } // Shang-Chi and the Legend of the Ten Rings
];

module.exports = {marvelActors, marvelMovies};