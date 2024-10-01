const movies = [
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
  { id: 25, title: "Shang-Chi and the Legend of the Ten Rings", releaseYear: 2021 },

  { id: 26, title: "Superman", releaseYear: 1978 },
  { id: 27, title: "Batman", releaseYear: 1989 },
  { id: 28, title: "Batman Returns", releaseYear: 1992 },
  { id: 29, title: "Superman Returns", releaseYear: 2006 },
  { id: 30, title: "The Dark Knight", releaseYear: 2008 },
  { id: 31, title: "Watchmen", releaseYear: 2009 },
  { id: 32, title: "The Dark Knight Rises", releaseYear: 2012 },
  { id: 33, title: "Man of Steel", releaseYear: 2013 },
  { id: 34, title: "Batman v Superman: Dawn of Justice", releaseYear: 2016 },
  { id: 35, title: "Suicide Squad", releaseYear: 2016 },
  { id: 36, title: "Wonder Woman", releaseYear: 2017 },
  { id: 37, title: "Justice League", releaseYear: 2017 },
  { id: 38, title: "Aquaman", releaseYear: 2018 },
  { id: 39, title: "Shazam!", releaseYear: 2019 },
  { id: 40, title: "Joker", releaseYear: 2019 },
  { id: 41, title: "Birds of Prey", releaseYear: 2020 },
  { id: 42, title: "Wonder Woman 1984", releaseYear: 2020 },
  { id: 43, title: "Zack Snyder's Justice League", releaseYear: 2021 },
  { id: 44, title: "The Suicide Squad", releaseYear: 2021 },
  { id: 45, title: "The Batman", releaseYear: 2022 },
  { id: 46, title: "Black Adam", releaseYear: 2022 },
  { id: 47, title: "Shazam! Fury of the Gods", releaseYear: 2023 },
  { id: 48, title: "The Flash", releaseYear: 2023 },
  { id: 49, title: "Blue Beetle", releaseYear: 2023 },
  { id: 50, title: "Aquaman and the Lost Kingdom", releaseYear: 2023 }
];

const actors = [
  { id: 1, name: "Robert Downey Jr.", age: 58, movie_id: 1 }, // Iron Man
  { id: 2, name: "Chris Hemsworth", age: 40, movie_id: 4 }, // Thor
  { id: 3, name: "Mark Ruffalo", age: 56, movie_id: 6 }, // The Avengers
  { id: 4, name: "Chris Evans", age: 42, movie_id: 5 }, // Captain America: The First Avenger
  { id: 5, name: "Scarlett Johansson", age: 39, movie_id: 6 }, // The Avengers
  { id: 6, name: "Jeremy Renner", age: 53, movie_id: 6 }, // The Avengers
  { id: 7, name: "Tom Hiddleston", age: 43, movie_id: 4 }, // Thor
  { id: 8, name: "Samuel L. Jackson", age: 75, movie_id: 6 }, // The Avengers
  { id: 9, name: "Don Cheadle", age: 59, movie_id: 3 }, // Iron Man 2
  { id: 10, name: "Paul Rudd", age: 55, movie_id: 12 }, // Ant-Man
  { id: 11, name: "Elizabeth Olsen", age: 35, movie_id: 11 }, // Avengers: Age of Ultron
  { id: 12, name: "Benedict Cumberbatch", age: 48, movie_id: 14 }, // Doctor Strange
  { id: 13, name: "Chadwick Boseman", age: 43, movie_id: 18 }, // Black Panther
  { id: 14, name: "Tom Holland", age: 28, movie_id: 16 }, // Spider-Man: Homecoming
  { id: 15, name: "Chris Pratt", age: 45, movie_id: 10 }, // Guardians of the Galaxy
  { id: 16, name: "Zoe Saldana", age: 46, movie_id: 10 }, // Guardians of the Galaxy
  { id: 17, name: "Dave Bautista", age: 55, movie_id: 10 }, // Guardians of the Galaxy
  { id: 18, name: "Karen Gillan", age: 36, movie_id: 15 }, // Guardians of the Galaxy Vol. 2
  { id: 19, name: "Brie Larson", age: 34, movie_id: 21 }, // Captain Marvel
  { id: 20, name: "Anthony Mackie", age: 45, movie_id: 13 }, // Captain America: Civil War
  { id: 21, name: "Sebastian Stan", age: 41, movie_id: 9 }, // Captain America: The Winter Soldier
  { id: 22, name: "Josh Brolin", age: 56, movie_id: 19 }, // Avengers: Infinity War
  { id: 23, name: "Evangeline Lilly", age: 44, movie_id: 20 }, // Ant-Man and The Wasp
  { id: 24, name: "Florence Pugh", age: 28, movie_id: 24 }, // Black Widow
  { id: 25, name: "Simu Liu", age: 35, movie_id: 25 }, // Shang-Chi and the Legend of the Ten Rings

  { id: 26, name: "Christopher Reeve", age: 52, movie_id: 26 }, // Superman
  { id: 27, name: "Michael Keaton", age: 72, movie_id: 27 }, // Batman
  { id: 28, name: "Michelle Pfeiffer", age: 65, movie_id: 28 }, // Batman Returns
  { id: 29, name: "Brandon Routh", age: 44, movie_id: 29 }, // Superman Returns
  { id: 30, name: "Christian Bale", age: 50, movie_id: 30 }, // The Dark Knight
  { id: 31, name: "Jackie Earle Haley", age: 62, movie_id: 31 }, // Watchmen
  { id: 32, name: "Tom Hardy", age: 46, movie_id: 32 }, // The Dark Knight Rises
  { id: 33, name: "Henry Cavill", age: 41, movie_id: 33 }, // Man of Steel
  { id: 34, name: "Ben Affleck", age: 52, movie_id: 34 }, // Batman v Superman: Dawn of Justice
  { id: 35, name: "Margot Robbie", age: 34, movie_id: 35 }, // Suicide Squad
  { id: 36, name: "Gal Gadot", age: 39, movie_id: 36 }, // Wonder Woman
  { id: 37, name: "Jason Momoa", age: 45, movie_id: 38 }, // Aquaman
  { id: 38, name: "Zachary Levi", age: 43, movie_id: 39 }, // Shazam!
  { id: 39, name: "Joaquin Phoenix", age: 49, movie_id: 40 }, // Joker
  { id: 40, name: "Mary Elizabeth Winstead", age: 39, movie_id: 41 }, // Birds of Prey
  { id: 41, name: "Connie Nielsen", age: 59, movie_id: 42 }, // Wonder Woman 1984
  { id: 42, name: "Ray Fisher", age: 36, movie_id: 43 }, // Zack Snyder's Justice League
  { id: 43, name: "Idris Elba", age: 51, movie_id: 44 }, // The Suicide Squad
  { id: 44, name: "Robert Pattinson", age: 38, movie_id: 45 }, // The Batman
  { id: 45, name: "Dwayne Johnson", age: 52, movie_id: 46 }, // Black Adam
  { id: 46, name: "Helen Mirren", age: 79, movie_id: 47 }, // Shazam! Fury of the Gods
  { id: 47, name: "Ezra Miller", age: 31, movie_id: 48 }, // The Flash
  { id: 48, name: "Xolo Maridueña", age: 23, movie_id: 49 }, // Blue Beetle
  { id: 49, name: "Patrick Wilson", age: 51, movie_id: 50 }, // Aquaman and the Lost Kingdom
  { id: 50, name: "Amber Heard", age: 38, movie_id: 50 } // Aquaman and the Lost Kingdom
];

module.exports = {actors, movies};