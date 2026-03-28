// Complete movie collection - ALL 381 movies
const ALL_MOVIES = [
   
    {
        id: 1,
        name: "Deadpool and Wolverine",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg",
        url: "https://drive.google.com/file/d/1B_eiKUt7N5OxyUN9c37LG0pxcErP4yJ6/view",
        author: "Unknown",
        year: 2024,
        genre: ["Action"]
    },
    {
        id: 2,
        name: "Captain America: The First Avenger",
        cover: "https://cdn.jsdelivr.net/gh/samtheskeleton/random-things@main/CaptainAmericaTheFirstAvengerComicConPoster.webp",
        url: "https://drive.google.com/file/d/1n_-YoXC2sFts08F4W2inaW1AGobt1C2y/view?usp=sharing",
        author: "Unknown",
        year: 2011,
        genre: ["Action", "Adventure"]
    },
    {
        id: 3,
        name: "Captain America: Brave New World",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/e72a581c-12cb-4e03-ae93-a1ebcb7d07fa.sized-1000x1000.jpg",
        url: "https://drive.google.com/file/d/1pJ5N0z8bQFpqeMx2UrZqrU1526ygzxDm/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Action", "Adventure"]
    },
    {
        id: 4,
        name: "Dog Man",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/redraw-of-the-dog-man-movie-poster-in-the-comic-book-covers-v0-6fajo4f1dmbe1.jpeg",
        url: "https://drive.google.com/file/d/1fGpb8UBbynGx9NaHDc5wPzYjjUAD7gLW/view",
        author: "Unknown",
        year: 2025,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 5,
        name: "Spider-Man: Into the Spider-Verse",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1V3Bq0lrDQUxJay5DDs3gK69ZvRNb1j2u/view",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Action"]
    },
    {
        id: 6,
        name: "Spider-Man: Across the Spider-Verse",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/spider-man-across-the-spider-verse-poster.jpg",
        url: "https://drive.google.com/file/d/1Sd1l_LhKRp_2OE5gRJJyPubnZjJccLgQ/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Action"]
    },
    {
        id: 7,
        name: "Moana 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/Moana_2_Official_Poster.jpg",
        url: "https://drive.google.com/file/d/1khAaDGsMt8pAGqtIPJERCqM_PgpiLShO/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 8,
        name: "The Lego Batman Movie",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/war-d619743d.jpg",
        url: "https://drive.google.com/file/d/1Xn4F4GNvfKOljko2ZE_JUQcBWIHhO0ql/view",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 9,
        name: "The Super Mario Bros. Movie",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/the-super-mario-bros-movie_7bqmuyso.jpg",
        url: "https://drive.google.com/file/d/1q2pk3lo5VIDWKQq2lCh_UTC_V9Zkv-_X/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 10,
        name: "Sonic the Hedgehog",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BYTg2Yjc5MzItNzVmMi00MTllLWI2MDQtOTYyOWNjYWIxNzEzXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1h1hi-3Hn1awll6u51WQnGjkHqm3uJejF/view",
        author: "Unknown",
        year: 2020,
        genre: ["Action", "Adventure"]
    },
    {
        id: 11,
        name: "Sonic the Hedgehog 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/MovieImages@main/sonic_the_hedgehog_two_ver13_xlg.avif",
        url: "https://drive.google.com/file/d/1cXe1a5ueZU9U_QZBU1-XpgNK0s6wi4o6/view",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Adventure"]
    },
    {
        id: 12,
        name: "Sonic the Hedgehog 3",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/IMG_4074-966x1200.jpg",
        url: "https://drive.google.com/file/d/1-zHQI9U47xaDtLR9qNpHGBmk63Nnc07b/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Adventure"]
    },
    {
        id: 13,
        name: "Sonic OVA",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/MovieImages@main/SonicanimeVHS.jpg",
        url: "https://drive.google.com/file/d/1_vnuQWGnvMa4uvt9c2MVYYznq_FjgHav/view",
        author: "Unknown",
        year: 1996,
        genre: ["Animation", "Action"]
    },
    {
        id: 14,
        name: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/teenage_mutant_ninja_turtles_mutant_mayhem.jpg",
        url: "https://drive.google.com/file/d/1IZNQlKBJi5HwRJDokQ-YuxfteFKgLZI5/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Action"]
    },
    {
        id: 15,
        name: "Inside Out",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/71PFAPwyZRL.jpg",
        url: "https://drive.google.com/file/d/1BEPGPg_iR7L5QFJ91SizjlA6khwj6j1e/view",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 16,
        name: "Inside Out 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/81do41OmwiL.jpg",
        url: "https://drive.google.com/file/d/148ae2JtLzIZwy-AKjtRgLZPNf3vEmQOE/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 17,
        name: "The Lego Movie",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/s-l1200.jpg",
        url: "https://drive.google.com/file/d/1j2kFu1apjVp0E2_xojdiqASlQOc8RBit/view",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 18,
        name: "The Lego Movie 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/71ghbVie4TL._UF894%2C1000_QL80_.jpg",
        url: "https://drive.google.com/file/d/1_sb4Ogn-0xQX3Znf21COpLMrfs_x6Nuv/view",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 19,
        name: "The Regular Show: The Movie",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BYWZlYjM3ZTAtOWE1YS00NzgyLThjYjctNzU5MDhhODExYWJhXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1q1PFmdU3DJRopHbRU5Xmg2zJxA3hjfzX/view?usp=sharing",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 20,
        name: "Scooby-Doo! and the Witch's Ghost",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVsxspVRryos59ijGqPcRiyKkmxXZbHVXboKCPkcoSaJuZO6fa",
        url: "https://drive.google.com/file/d/1_hkjpVLPviBFV8320Drj4jjC9DfSzueB/view?usp=drive_link",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 21,
        name: "Scooby-Doo",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZIUYUCfJcsDzCnY0sMs4qyxrN8y5xtzEBeof2qalnxiTaZWm",
        url: "https://drive.google.com/file/d/1mwMlE9sWCZLVtQ4ljJEeLxtVrKknnfUB/view?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Comedy", "Mystery"]
    },
    {
        id: 22,
        name: "Scooby-Doo 2: Monsters Unleashed",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlIxulitrCkIyE27MEdcCv1Ib8UW0pXkNQUmda6cVNW39ztOC",
        url: "https://drive.google.com/file/d/1VXxo8cvPI7-zigV3FR5JP3-C2WSXvkXt/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Comedy", "Mystery"]
    },
    {
        id: 23,
        name: "Scooby-Doo! and Krypto, Too!",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAHISH3_gLAP4ACIZXSRtTxXMbFsb9Rya89s1iX_szQAkiOuQn",
        url: "https://drive.google.com/file/d/1A3KkhmxtAok0WhO2iaSR4GPwOWBs_T6w/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 24,
        name: "Scooby-Doo! Music of the Vampire",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRE3QdVIF94LtWH8Wu2-abqOT1LFpzdaHU24l-Tg1a7FLoZR-z",
        url: "https://drive.google.com/file/d/1w88R5d11KA2RHZjDMF44PGiVTC-aSOVU/view?usp=drive_link",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 25,
        name: "Straight Outta Nowhere: Scooby-Doo! Meets Courage the Cowardly Dog",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTx5NAhcCnK8vduTG0z5PP3Nxc79t5Pa8yhcAs0uJQgIZrspB",
        url: "https://drive.google.com/file/d/1Zh_wuLiteAQpM9MYo3CKdmjvPv11QDtB/view?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 26,
        name: "Scooby-Doo! Frankencreepy",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToCujbfSAL1lC5eAoUyH72vTO9e_JmlU8IaATBfw5tviqYavpc",
        url: "https://drive.google.com/file/d/16C2WJoTqTo_6uk28EHxGW0ZP3IhHv8XW/view?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 27,
        name: "Scooby-Doo! Haunted Holidays",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1REfyPBNIkPfuvSHfXgsTBEzpfZcuIGLrt0fYlWj0wEKHrpdCpj-rlMnj3ktLr_uVhvFVw&s",
        url: "https://drive.google.com/file/d/1ZfMbvwDt282Fy6R0lkPxxdg80sdGInqt/view?usp=drive_link",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 28,
        name: "Scooby-Doo! in Where's My Mummy?",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSB71tzCjWmiG8bVzzhS0Q-uaXu_Wt3FTjyQMrcH9tFNafugXwv",
        url: "https://drive.google.com/file/d/1xsSHSR4XkvHqsJBgFVxBDnBgfS24JUvA/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 29,
        name: "Scooby-Doo! Moon Monster Madness",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-utTMNm14-vPMY4LJFQ3KPKqd31bhim9szqIqxMAlrSBiIqN",
        url: "https://drive.google.com/file/d/1uCF6cq6_ZVy5TSNX2FRQAC923Q7qMW1J/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 30,
        name: "Scooby-Doo! and the Legend of the Vampire",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPQAIrKJx6dJ9ZTqcZdj73vbfADGTft5Ct0boJczZvuAoCQ5k",
        url: "https://drive.google.com/file/d/1V7dZ668NX5phvFK2jK_TnLH4ouoTSwxp/view?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 31,
        name: "Scooby-Doo and the Cyber Chase",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSirsUYg6wGyqE1hsBWtjHo7ZijQ4KClRqBxtFZtbWelCXJ4wD2",
        url: "https://drive.google.com/file/d/1Yy740jq-YYGWMqLOMafB0ihcL11HVdO4/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 32,
        name: "Scooby-Doo and the Alien Invaders",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSP1C4j5gz9wMG30Yt4B-83ysgcNXheQGLTQkfXs33DYtM6a2Jl",
        url: "https://drive.google.com/file/d/1ESXgNjFYNYCwCsoMRxPRlZuhNNYaxZDz/view?usp=drive_link",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 33,
        name: "Scooby-Doo Goes Hollywood",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgpQWv2QJVG7bQw7iuJae6Qv2O_SiW8PrM6L4IM_s5KsbxkTb",
        url: "https://drive.google.com/file/d/1GkXfdC_nRSW_7esZeydw59kPjHhc7m3z/view?usp=drive_link",
        author: "Unknown",
        year: 1979,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 34,
        name: "Five Nights at Freddy's",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/Fnaf_Movie_Poster.png",
        url: "https://drive.google.com/file/d/1tyzXrXFux15AXpZxtiM61p1R1zO6NbSF/view",
        author: "Unknown",
        year: 2023,
        genre: ["Horror"]
    },
    {
        id: 35,
        name: "Five Nights At Freddy's 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-RYGDp-9XprIb9yX1zLUOy6kpm8iUOuHbw&s",
        url: "https://drive.google.com/file/d/16qbI4SsI7sgv2osM_r6bGkNoj1gtjX6T/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Horror"]
    },
    {
        id: 36,
        name: "Willy Wonka & the Chocolate Factory",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/91U0TwNG23L._UF894%2C1000_QL80_.jpg",
        url: "https://drive.google.com/file/d/1hYH5eFoapAh_9LJZwNREIta4hWBvBAdK/view",
        author: "Unknown",
        year: 1971,
        genre: ["Family", "Musical"]
    },
    {
        id: 37,
        name: "Oppenheimer",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/Oppenheimer.jpg",
        url: "https://drive.google.com/file/d/1GLqywDPqfZSLmLAiKC8j2l0o52cAGP8S/view",
        author: "Unknown",
        year: 2023,
        genre: ["Drama", "History"]
    },
    {
        id: 38,
        name: "The Bad Guys",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BZTljOGJiNjYtYTY1Ni00Yzk4LWI2YTUtNTdhYmYyMTgyNDMxXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1Ep4I8JdvH8NlbcqxiNMA8c7U_UAOpewT/view",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 39,
        name: "The Bad Guys 2",
        cover: "https://cdn.jsdelivr.net/gh/samtheskeleton/random-things@main/The_Bad_Guys_2_Official_Poster.webp",
        url: "https://drive.google.com/file/d/1V9yPZr0YlrSthlfU2Df3mgrs9Mcnok4q/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 40,
        name: "Barbie",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/p13472534_p_v8_am.jpg",
        url: "https://drive.google.com/file/d/1K88LvZ6q9KRwsdiVQ72Wrh5DQqWVLkd3/view",
        author: "Unknown",
        year: 2023,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 41,
        name: "Iron Man",
        cover: "https://www.dropbox.com/scl/fi/ia7uylbhw3lrkx2qczjdk/Iron_Man_-2008_film-_poster.jpg?rlkey=d1jlafqgohehies361s2rmmrt&st=67f204bk&dl=1",
        url: "https://drive.google.com/file/d/1etZlXVkk2dmSbB5m2J4EK80c7FggVF4V/view",
        author: "Unknown",
        year: 2008,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 42,
        name: "Iron Man 2",
        cover: "https://www.dropbox.com/scl/fi/uzk3a5tns2ddhvc8zg255/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=jo9a7p4midx1ah0y2qw2fxidx&st=tvisen1p&dl=1",
        url: "https://drive.google.com/file/d/1u1glpdPyZvJ1MAgTrxAnTrS8Wvys3Bdt/view",
        author: "Unknown",
        year: 2010,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 43,
        name: "Iron Man 3",
        cover: "https://www.dropbox.com/scl/fi/n3rfvl45n1c77n6yz8dz9/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTgwNzM2NjcyOQ-._V1_FMjpg_UX1000_.jpg?rlkey=nfvtg4t9azcqwy58z5k7e6wpt&st=3doq8h5u&dl=1",
        url: "https://drive.google.com/file/d/1f7AlYvxrURwU7138fr2CzyTmN0qK43rp/view",
        author: "Unknown",
        year: 2013,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 44,
        name: "Teen Titans: Trouble in Tokyo",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNTc0NjM3NTI3NV5BMl5BanBnXkFtZTgwODE4NjAwNzE%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1LZ4gHDxFw3OAbO55sfd0xDMyYTF_91sT/view",
        author: "Unknown",
        year: 2006,
        genre: ["Animation", "Action"]
    },
    {
        id: 45,
        name: "The Flash",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/The_Flash.jpg",
        url: "https://drive.google.com/file/d/1ApUHMkZM-j3vM-rSG-kvjk3KuvJNAsXp/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 46,
        name: "Who Framed Roger Rabbit",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/Who-Framed-Roger-Rabbit-Poster-scaled.jpg",
        url: "https://drive.google.com/file/d/13qCLa-UbWgLKDkm5EYs7y3-n5NVx7-73/view",
        author: "Unknown",
        year: 1988,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 47,
        name: "Black Panther",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/black-panther-poster.jpg",
        url: "https://drive.google.com/file/d/1wdUOiz7tI3R5vTz779h7CesAW5h0kUh1/view",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Adventure"]
    },
    {
        id: 48,
        name: "Diary of a Wimpy Kid",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/p7876903_p_v8_ar.jpg",
        url: "https://drive.google.com/file/d/1Ue1CO7ytynvfWaucCDckWaH4smgpB28e/view",
        author: "Unknown",
        year: 2010,
        genre: ["Comedy", "Family"]
    },
    {
        id: 49,
        name: "Diary of a Wimpy Kid: Rodrick Rules",
        cover: "https://www.dropbox.com/scl/fi/uef6ksbtfp7y72rvu12j6/MV5BMTcxNDYwOTEzMl5BMl5BanBnXkFtZTcwOTA3MzY3NA-._V1_.jpg?rlkey=9bbc2hq3ibhndr6ce3lqlzsjv&st=8i3zzgnw&dl=1",
        url: "https://drive.google.com/file/d/1rKRsgdNioFs3rtkZai7Gz97FtAX0jdJ_/view",
        author: "Unknown",
        year: 2011,
        genre: ["Comedy", "Family"]
    },
    {
        id: 50,
        name: "Diary of a Wimpy Kid: Dog Days",
        cover: "https://cdn.jsdelivr.net/gh/samtheskeleton/random-things@main/Diary_of_a_Wimpy_Kid_-_Dog_Days_movie_poster.jpg",
        url: "https://drive.google.com/file/d/0B6fv-OkwXRTzZ090UHlWcHY2dkk/view?resourcekey=0-TgoMzBEyMorySYhDqB9uGA",
        author: "Unknown",
        year: 2012,
        genre: ["Comedy", "Family"]
    },
    {
        id: 51,
        name: "Captain America: The Winter Soldier",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1TanQJC8ws1tk_dyW05HzfNtaBgBxKPPx/view?usp=drivesdk",
        author: "Unknown",
        year: 2014,
        genre: ["Action", "Thriller"]
    },
    {
        id: 52,
        name: "Ford v Ferrari",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BOTBjNTEyNjYtYjdkNi00YzE5LTljYzUtZjVlYmYwZmJmZWYxXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1NPB0oCsIuiPAc471b_XOGDnchbCZ72yh/view",
        author: "Unknown",
        year: 2019,
        genre: ["Drama", "Sport"]
    },
    {
        id: 53,
        name: "Wicked",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1fG4xZ8p6mptdbf-Vji5rhlIoXeKG6Dcd/view",
        author: "Unknown",
        year: 2024,
        genre: ["Musical", "Fantasy"]
    },
    {
        id: 54,
        name: "Wicked: For Good",
        cover: "https://cdn.jsdelivr.net/gh/samtheskeleton/random-things@main/vertical_646a9560-ea7c-45f4-837a-70a1a748f21d.jpg",
        url: "https://drive.google.com/file/d/15_hovtVOgCS5m-YgrtbqE7l21Dbcm_Xg/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Musical", "Fantasy"]
    },
    {
        id: 55,
        name: "Minecraft: The Movie",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/wii2fLImjhitYMaiVNvrH7NGdS0.jpg",
        url: "https://drive.google.com/file/d/1jpCB0o5aQI1pam7Eg4GW0VEGKi6z-RHB/view",
        author: "Unknown",
        year: 2025,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 56,
        name: "Mufasa: The Lion King",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/Mufasa.jpg",
        url: "https://drive.google.com/file/d/1yQk-dgii93W2ZWfBxCORDQUj7bqzj7gr/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Drama"]
    },
    {
        id: 57,
        name: "The Wild Robot",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BZWNiZjVlZTUtNGUwYi00MjJmLTg2MDctNWEzYTJiMzY1ODc4XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1_N9iHDAM3RbU2a0GTfgcNXDGuZDT_yZ-/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 58,
        name: "South Park: Joining the Panderverse",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/South-Park-Joining-the-Panderverse-2023-movie-poster.jpg",
        url: "https://drive.google.com/file/d/18WPSLAkLd7xTWJJonaCoRYKvkYJWw981/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 59,
        name: "Borderlands",
        cover: "https://www.dropbox.com/scl/fi/8qdlutuj9dos2w5thv1p5/MV5BMDhkMzQzZmQtOGQ1NS00Y2FhLTkzYjAtNWE1MmRiOWM1MjUzXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=mkoczxtg679bbzsldg7sp7xxc&st=j71a8fop&dl=1",
        url: "https://drive.google.com/file/d/1AgTOBADfQftPEIhiG8bRL2fkQsmIAmSb/view",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Comedy"]
    },
    {
        id: 60,
        name: "Terrifier",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNzY5ZTAxZDgtN2E3Zi00NTUxLWJmZDUtZTliMTA3Y2Y1NjU0XkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1_pQ3kbz_a8l3B7SKfdP9dYQwKax0WHUD/view",
        author: "Unknown",
        year: 2016,
        genre: ["Horror"]
    },
    {
        id: 61,
        name: "Terrifier 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BYTUyZWM1MDgtMGZiZi00OWZlLTgwNzItZGU3NTkwN2I4OWNiXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1_Jjo7rOcCkYt3UryVkV2XvTfrL4QvHTE/view",
        author: "Unknown",
        year: 2022,
        genre: ["Horror"]
    },
    {
        id: 62,
        name: "Terrifier 3",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/T3_7627.jpg",
        url: "https://drive.google.com/file/d/1sAj4FqfEIzHPIW7ZUPGGSOFTTaJr5AGI/view",
        author: "Unknown",
        year: 2024,
        genre: ["Horror"]
    },
    {
        id: 63,
        name: "The Day The Earth Blew Up",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BOTgxODk4OTQtMjc2MC00NGRmLWJlMmMtNTdlZjI1NDE0NzE0XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1EDmMpex-Xs1V9CT4J4UarVDEs0zRyLqt/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 64,
        name: "The Underdoggs",
        cover: "https://www.dropbox.com/scl/fi/2b3m0c5husuhwm7z3or74/Underdoggs_poster.jpg?rlkey=w8kfa8wqw5ffei7nkz6kcbg84&st=0068c08p&dl=1",
        url: "https://drive.google.com/file/d/18qSFllMJr4gLotZx7-XIhMxLXlU2l1UD/view",
        author: "Unknown",
        year: 2024,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 65,
        name: "Alien: Romulus",
        cover: "https://www.dropbox.com/scl/fi/rylalrbkjgfhm1et1eqyj/Alien_Romulus_2024_-poster.jpg?rlkey=w0i19ej1kt8ksp6botibr0pxf&st=thr689eu&dl=1",
        url: "https://drive.google.com/file/d/122SQiB6invgpsu7KpWiYbix5KPUW2WN4/view",
        author: "Unknown",
        year: 2024,
        genre: ["Horror", "Sci-Fi"]
    },
    {
        id: 66,
        name: "Migration",
        cover: "https://github.com/dino-cmxy/Chillkirbcentrall/blob/main/MV5BYjdlYWJjZTctODViZS00ODVlLTljOTEtOTZhYWZhZTRkZDM1XkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1pV4ujRFH3wIRE0GPZAWeEMFmnLMzvwYE/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 67,
        name: "South Park: The End of Obesity",
        cover: "https://www.dropbox.com/scl/fi/2q2q6b6tnp6daku7yc28f/South_Park_The_End_of_Obesity.jpg?rlkey=auh8irc4fxnqjymulg9zstusw&st=m6cmq8av&dl=1",
        url: "https://drive.google.com/file/d/1k_Bk1E4vLdzymXcGOA92axzicOgmarFp/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 68,
        name: "Cocaine Bear",
        cover: "https://www.dropbox.com/scl/fi/vs19rooh55jdfkr25h6ak/MV5BMjg3MmNiNWQtOWI1OS00MjE2LWFhYzYtMWY0NWRhZmVkMGFiXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=xqxk9suonebgtlrf5iu3h482k&st=4l6miu3f&dl=1",
        url: "https://drive.google.com/file/d/1vrClp3nIYkdIBRPzZDxxq7ICIOWHioAh/view",
        author: "Unknown",
        year: 2023,
        genre: ["Comedy", "Thriller"]
    },
    {
        id: 69,
        name: "Detective Pikachu",
        cover: "https://www.dropbox.com/scl/fi/re37586v68y8y0qq7kyl0/-mon_Detective_Pikachu_teaser_poster.jpg?rlkey=zlwb1mjl98m4dppujehri1otx&st=grggi7r0&dl=1",
        url: "https://drive.google.com/file/d/1q5wcbuy536XQKTBAF7ImApMAlNMVHM5T/view",
        author: "Unknown",
        year: 2019,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 70,
        name: "Beavis and Butt-Head Do America",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNzA2NjczNmEtYjYxYi00ZjE2LTkzYTctYzhkZDdmMjlkY2FmXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1BTKq8RC65IOZVgI0VfdRekLzVY_SMKQ_/view?usp=sharing",
        author: "Unknown",
        year: 1996,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 71,
        name: "American Psycho",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/s-l1200%20(1).jpg",
        url: "https://drive.google.com/file/d/1XLbBFM6yQ48V1yXIfrenbhpMyZeUryV7/view",
        author: "Unknown",
        year: 2000,
        genre: ["Drama", "Thriller"]
    },
    {
        id: 72,
        name: "Space Jam",
        cover: "https://www.dropbox.com/scl/fi/wgxc7i8ekj8frz6olu8vs/MV5BZGQ3ZDk0M2MtZDNmNi00OWE3LThiODUtMTU3NmVjMTA0ZGQyXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=ea7opi435qdmvz8cah9wjtz78&st=hkojq77k&dl=1",
        url: "https://drive.google.com/file/d/1K7_z3vNvLOBRMnxr7J0jYf-4FlLms70K/view",
        author: "Unknown",
        year: 1996,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 73,
        name: "Space Jam: A New Legacy",
        cover: "https://www.dropbox.com/scl/fi/wfctkpx9di9hx4gia76lc/SpaceJamANewLegacyOfficialPoster.jpg?rlkey=o5spkyzqumpwbtqa1643iugrz&st=66blryo7&dl=1",
        url: "https://drive.google.com/file/d/1v2xqKQcAvndfcqsctZH73NR2AjFXsrUr/view",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 74,
        name: "Interstellar",
        cover: "https://www.dropbox.com/scl/fi/51zml3kk8f9hfmy9ufie5/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc-._V1_.jpg?rlkey=1idesuay1es1a1z7aptgtife2&st=er19c5aa&dl=1",
        url: "https://drive.google.com/file/d/1rjx6-12dB11LWwj5jFEFX2QMuZiEVUFk/view",
        author: "Unknown",
        year: 2014,
        genre: ["Sci-Fi", "Drama"]
    },
    {
        id: 75,
        name: "Pixels",
        cover: "https://www.dropbox.com/scl/fi/hhdaaa8gx4qtat00bof0v/PixelsOfficialPoster.jpg?rlkey=86aiir0kfi10ezmlic6t1hkrf&st=uvu0hb1e&dl=1",
        url: "https://drive.google.com/file/d/1J0qrB84b2-uI9Trqk9rPRHZvPuH_gdOK/view",
        author: "Unknown",
        year: 2015,
        genre: ["Action", "Comedy"]
    },
    {
        id: 76,
        name: "South Park: Bigger, Longer & Uncut",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BOTUzYmVmNDEtMTdkYy00MDdjLWE2OWUtZGZjY2FjM2I4MzFmXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1lS4FEithc1bSHzfCW-Yt3cpeQOloaZBc/view",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 77,
        name: "South Park: Post Covid",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNjNiOWJhZTQtYzBkNi00NzU3LWE2MzktOWIyMzE5YTExODJmXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1w9f4WudGBkXyYTWReinBq7QqaWfHfZTo/view",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 78,
        name: "Piece by Piece",
        cover: "https://www.dropbox.com/scl/fi/6vjc3e5ujf65vz8pjwmqr/MV5BMjUxMjE2YWQtY2YwMS00MTdkLTg0ZWQtMTQ0NzExY2U4NGZkXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=dkxlz6xx9q1e25xo471ftmu7h&st=uy7apgbm&dl=1",
        url: "https://drive.google.com/file/d/1-jDMQ_cuszKjHUqWJJ8SykiHGTcsjlX6/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Documentary"]
    },
    {
        id: 79,
        name: "Deadpool",
        cover: "https://www.dropbox.com/scl/fi/s7etndvr7zq2fdl37lk3y/Deadpool_-2016_poster.png?rlkey=wz84wtyrxzyentatjkj8gueiz&st=w4a4xs8v&dl=1",
        url: "https://drive.google.com/file/d/17QTeEVPc-E4YsWm-tQ4toG-DpLefpx4E/view",
        author: "Unknown",
        year: 2016,
        genre: ["Action", "Comedy"]
    },
    {
        id: 80,
        name: "Deadpool 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNGY3N2ZhYmMtYTlmYi00ZWIzLWJiZWMtMjgxMjljYTk3MDAwXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1tF1C-2tktolFSAJaLG0C2sE_2sGyH3YI/view",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Comedy"]
    },
    {
        id: 81,
        name: "Tyler Perry's Madea's Big Happy Family",
        cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Madea%27s_Big_Happy_Family_Poster.jpg",
        url: "https://drive.google.com/file/d/1okgnOOn7fMk8JtNaePOZa9hU0CEuO_ox/view?usp=sharing",
        author: "Unknown",
        year: 2011,
        genre: ["Comedy"]
    },
    {
        id: 82,
        name: "Boo! A Madea Halloween",
        cover: "https://www.dropbox.com/scl/fi/c88abvzgfpnrrhgi0pljd/MV5BMTUxNTE2MTM0NF5BMl5BanBnXkFtZTgwNjE5MTIxMDI-._V1_QL75_UX190_CR0-2-190-281_.jpg?rlkey=zefa7tpxmtspn5twumoxqwf09&st=4tcxaquz&dl=1",
        url: "https://drive.google.com/file/d/12b-Jxqp6kiWuFeCOYbTXgWi5ka3B7kGI/view",
        author: "Unknown",
        year: 2016,
        genre: ["Comedy", "Horror"]
    },
    {
        id: 83,
        name: "Madea's Destination Wedding",
        cover: "https://cdn.jsdelivr.net/gh/samtheskeleton/random-things@main/MV5BYzRkM2JmM2EtNTgzZi00MzdlLTkxM2ItNTlhNmQzZjM2NjA2XkEyXkFqcGc@._V1_QL75_UY281_CR19,0,190,281_ (1).jpg",
        url: "https://drive.google.com/file/d/1Mb8GuPdo9NaUOYnY5Cqyi9myVAydYtRl/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Comedy"]
    },
    {
        id: 84,
        name: "Smile",
        cover: "https://www.dropbox.com/scl/fi/sl21795mdwqbfm3oxbru2/MV5BNTlmOWI2ZDctZDM4Ny00YzljLTlmYTAtOTgxZmI5MGU1Yzk3XkEyXkFqcGc-._V1_.jpg?rlkey=jg1hco0h14c35hz7imhi01c8e&st=mqc6sp59&dl=1",
        url: "https://drive.google.com/file/d/1J3-6Qgkhk0MPBpsTvgQp6O209EVL2iJH/view",
        author: "Unknown",
        year: 2022,
        genre: ["Horror"]
    },
    {
        id: 85,
        name: "Smile 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BYTg5OTMyMGMtYzMwNC00NDMyLWE0OGUtMTQ1ODcwM2FjOTM4XkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1PeOUtsdJfWRqJvGwBhRmeBc2fLiQyTJY/view",
        author: "Unknown",
        year: 2024,
        genre: ["Horror"]
    },
    {
        id: 86,
        name: "Twisters",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNjM4MWEwMTEtNTcwYi00ZDI4LWEwMzUtNDMzODBhZmI5MWE1XkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/12UeDOq7tCcbfvEo_EtzkL3Gxho45UOl4/view",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Thriller"]
    },
    {
        id: 87,
        name: "A Quiet Place: Day One",
        cover: "https://www.dropbox.com/scl/fi/ovgpyo48x22x25b70a7ir/MV5BMDdjZTljZWMtMDIwNi00MTA5LTkxZmItNmY0NDA3ZDM0N2M2XkEyXkFqcGc-._V1_.jpg?rlkey=l2w7gf7rxl0t1l0bepzxutb0k&st=983ceec4&dl=1",
        url: "https://drive.google.com/file/d/1YEt3ZJoK6SeV0CjH6vVJJvoKQ6oyStpE/view",
        author: "Unknown",
        year: 2024,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 88,
        name: "Cars",
        cover: "https://www.dropbox.com/scl/fi/1z3ciqnpzudaguwqbc2ep/Cars_2006.jpg?rlkey=07pig9tiqvr202kzsri46j8s6&st=ntj611p6&dl=1",
        url: "https://drive.google.com/file/d/106N7zd611ShtPMOx97XwFSxkg8theQLN/view",
        author: "Unknown",
        year: 2006,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 89,
        name: "Cars 2",
        cover: "https://www.dropbox.com/scl/fi/larb382c1rnyx5it18b9y/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA-._V1_FMjpg_UX1000_.jpg?rlkey=78pemjyc1k7o6yrjberja0jfi&st=3bavzhu9&dl=1",
        url: "https://drive.google.com/file/d/1YinG1kmgSqWI5kQwfDsQO6vK1xzM6K7o/view",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 90,
        name: "Cars 3",
        cover: "https://www.dropbox.com/scl/fi/kt80faj4j7o5fl3avfj7g/p_cars3_19643_3ab8aca1.jpg?rlkey=g3zz93nam2stp67o5t0bcw2ki&st=w98zvdzw&dl=1",
        url: "https://drive.google.com/file/d/1AyxjkNdXzke5aY3GnOwAAabrsEc4msXS/view",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 91,
        name: "The Lego Ninjago Movie",
        cover: "https://www.dropbox.com/scl/fi/5aq3m32t1agz36rjp2gnk/images.jpg?rlkey=tfi4h23k5ebsi5v3tumxnbbp5&st=3a54jjt2&dl=1",
        url: "https://drive.google.com/file/d/1wQIj-ZVsTxgTktceYFgyFei_XX-eXAt-/view",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Action"]
    },
    {
        id: 92,
        name: "Turbo",
        cover: "https://www.dropbox.com/scl/fi/fzb58obw6giaozhgrr3ua/MV5BMTA4NTgwMjM5MzheQTJeQWpwZ15BbWU3MDg2ODA1ODk-._V1_.jpg?rlkey=ulx0gvgwgmuibyjxzcu9pgcae&st=xjmks8oi&dl=1",
        url: "https://drive.google.com/file/d/1IgeNjhQouNWwUnd6a2Qb0r6XmIjOxdfA/view?usp=sharing",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 93,
        name: "Us",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/us-adv1sheet-rgb-2-small-5c1c422026bb0-1-5d3a4e5f87325-1.jpg",
        url: "https://drive.google.com/file/d/1ij57VuW6Bjxq713L53oKgAIx4iR8yoVB/view",
        author: "Unknown",
        year: 2019,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 94,
        name: "Transformers One",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/transformers-one-2024-film-official-poster.jpg",
        url: "https://drive.google.com/file/d/10cwJT2ssiHVBeRWMdEVHKt0bhk8PVOHY/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Action"]
    },
    {
        id: 95,
        name: "Shrek",
        cover: "https://www.dropbox.com/scl/fi/6ah5ai9owpyj3zgunha1b/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=ycbj9vjrkgfsrarppveqzc056&st=6dcqef89&dl=1",
        url: "https://drive.google.com/file/d/1ps_r1YV8y5h93_mUu4OFlPVVkPzT0Rui/view",
        author: "Unknown",
        year: 2001,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 96,
        name: "Mortal Kombat",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNmRmN2I5M2EtNDA1Ny00N2ZmLWE3YWYtMjQ1NTFjY2Q4NWM5XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1temXH9CFHCd7gjIsu8TMCFiqxMy8jXfj/view",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Fantasy"]
    },
    {
        id: 97,
        name: "Major Payne",
        cover: "https://github.com/dino-cmxy/Chillkirbcentrall/blob/main/MV5BYTY5MGUxNjUtM2VjNy00MWQxLTg0NjEtMGU4NTZiYjhlOGJlXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1HOBF8qYxnEXjbjouFThL4B3ttoBiNUOY/view",
        author: "Unknown",
        year: 1995,
        genre: ["Comedy"]
    },
    {
        id: 98,
        name: "Thor: Ragnarok",
        cover: "https://www.dropbox.com/scl/fi/7xrunnfnzgp8ro1orpqg1/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI-._V1_.jpg?rlkey=1lkvruxp6qfp06euoisuc2fmj&st=7qu7n920&dl=1",
        url: "https://drive.google.com/file/d/1RqAtiuHbEphQTki4GolLXncnpboseZmv/view?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Comedy"]
    },
    {
        id: 99,
        name: "Zootopia",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/p11993845_p_v8_aq.jpg",
        url: "https://drive.google.com/file/d/1HYeIrbf8A-vfvJsvYP59AQzG9l8nt03h/view",
        author: "Unknown",
        year: 2016,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 100,
        name: "Zootopia 2",
        cover: "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1-PX9OZ8C3YrvjFtGhnH-YRO8kz75chAW/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 101,
        name: "The SpongeBob SquarePants Movie",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzF33bj8wuOJgcH2rvLYHXAxQt2FgW4YqXLn46xOAPLDLTQucJ",
        url: "https://drive.google.com/file/d/11mVla6Y3qLX4pplfnxMavSczJ200_8dl/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 102,
        name: "Saving Bikini Bottom: The Sandy Cheeks Movie",
        cover: "https://resizing.flixster.com/YPxmePH0javyxa_6obXzzGlwgGM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkOTdlZjJmLTQ0M2QtNDE2Yy04ZWYyLWZjOTdiOGRmMDk4My5qcGc=",
        url: "https://drive.google.com/file/d/17fAM9sipu3BPElFpqFrG3ukYahbUEZQJ/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 103,
        name: "Plankton: The Movie",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTeAhF9MjfBqFF9Y5D31MZ8s_tT8iuef18F1416xkWnSl5vW9",
        url: "https://drive.google.com/file/d/1GhJnl35m05XYpjooWoxeg0lw54VpjCEx/view?usp=drive_link",
        author: "Unknown",
        year: 2025,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 104,
        name: "Superman",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1nO646VaJQBN725tPVe9TLFnLBFPJ-jbL/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Action", "Adventure"]
    },
    {
        id: 105,
        name: "Avengers: Infinity War",
        cover: "https://www.dropbox.com/scl/fi/n0m9lddipro8al8at1pp5/Avengers_Infinity_War_poster.jpg?rlkey=y8pm491al2jezeuk5g5velk2b&st=gez6ur5v&dl=1",
        url: "https://drive.google.com/file/d/1zpl7Dngm7ESW_yLZvcQMm9AhmR1izyus/view?usp=sharing",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Adventure"]
    },
    {
        id: 106,
        name: "Avengers: Endgame",
        cover: "https://www.dropbox.com/scl/fi/6960dcl1s0tn4g27f0oim/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM-._V1_FMjpg_UX1000_.jpg?rlkey=c7je20mvdls88tyr6rv5cpvqc&st=j1chpl50&dl=1",
        url: "https://drive.google.com/file/d/1bqXaAnYlzvDN8Ic21OTHu7mQ2eBsEBha/view?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Adventure"]
    },
    {
        id: 107,
        name: "Spider-Man",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/ourazguupfx71.jpg",
        url: "https://drive.google.com/file/d/1sqWGrmbGc5lBmoFbtfMSIaqb60eXppvF/view",
        author: "Unknown",
        year: 2002,
        genre: ["Action", "Adventure"]
    },
    {
        id: 108,
        name: "Spider-Man 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/p34442_p_v10_aq.jpg",
        url: "https://drive.google.com/file/d/1yV7ZmEkfOVOLdV51wN6vSeDf3_tQqBvf/view",
        author: "Unknown",
        year: 2004,
        genre: ["Action", "Adventure"]
    },
    {
        id: 109,
        name: "Spider-Man 3",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1ExTfRPC3YGmCSg8W2uFSYkUMw7a1vcTR/view",
        author: "Unknown",
        year: 2007,
        genre: ["Action", "Adventure"]
    },
    {
        id: 110,
        name: "The Amazing Spider-Man",
        cover: "https://www.dropbox.com/scl/fi/y9jzf700ot68a4oa46p0k/The_Amazing_Spider-Man_-film-_poster.jpg?rlkey=haw4kfono86zfbqfew9p70n73&st=qj4ouuh9&dl=1",
        url: "https://drive.google.com/file/d/1Xf8xZcY3kneGFln8NPsQMt7CLtmGhEeD/view",
        author: "Unknown",
        year: 2012,
        genre: ["Action", "Adventure"]
    },
    {
        id: 111,
        name: "The Amazing Spider-Man 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BODM1MWMwOTktMzdlNS00NWUzLWI4ZDItYmY5MGNkYmIzZjg0XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1hnYa-Pkxqu6Qhhp56QXE34Rnctia_3yw/view",
        author: "Unknown",
        year: 2014,
        genre: ["Action", "Adventure"]
    },
    {
        id: 112,
        name: "Spider-Man: Homecoming",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1jGHx1i3EqHKmQmE42APmxUk4bYHrINQ_/view",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Adventure"]
    },
    {
        id: 113,
        name: "Spider-Man: Far From Home",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/primer-poster-spider-man-far-from-home-original.jpeg",
        url: "https://drive.google.com/file/d/1vPNUTkubVVmguVfwstRQm5xgbkRRii6z/view",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Adventure"]
    },
    {
        id: 114,
        name: "Spider-Man: No Way Home",
        cover: "https://www.dropbox.com/scl/fi/nqpads9ou4kjb9xnendrf/Spider-Man_No_Way_Home_poster.jpg?rlkey=pi9wlrjkdfjtmdeali6yszqos&st=la942sha&dl=1",
        url: "https://drive.google.com/file/d/1mUF4PcT0_ZKofV0KHHdjxgTQdhF2BliQ/view",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Adventure"]
    },
    {
        id: 115,
        name: "Venom",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScPG3UmTgVKpeabQe4MFFwTXMmk4c1sijxO-USZQ0D6O8WGZk4",
        url: "https://drive.google.com/file/d/1iRN197XeJCQnZGza599ZTXsayEG1mdRB/view",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 116,
        name: "Venom: Let There Be Carnage",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkQKSmvEv3JJet-PWG11mRbpM5527J36mfNZPjA2TaHYcAo0V8",
        url: "https://drive.google.com/file/d/1N6kL0SF4qR6wFpwfGIZUZjFnz3lQDGGz/view",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 117,
        name: "Toy Story",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1fW6Ov5NIaRh4h78-qBpWeln_Vs9oEXOQ/view?usp=sharing",
        author: "Unknown",
        year: 1995,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 118,
        name: "Toy Story 2",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNzVmODlhMDEtY2YxZi00OTVjLTlkNTktN2Q2OTRlM2I4M2FhXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1k3RVDc_Vah1H9lFsXQZJ6mE3KqdDcK_T/view?usp=sharing",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 119,
        name: "Toy Story 3",
        cover: "https://www.dropbox.com/scl/fi/xuu1o6pgj1r6o6udwz937/Toy_Story_3_poster.jpg?rlkey=6led78gy5scox91s8sjmtb6eu&st=ysr3sas7&dl=1",
        url: "https://drive.google.com/file/d/12OyWGGokKPPKQLtjsLXB42q6acvLV7qt/view?t=1",
        author: "Unknown",
        year: 2010,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 120,
        name: "Toy Story 4",
        cover: "https://www.dropbox.com/scl/fi/61vtpt07aykw241c87ns2/Toy_Story_4_poster.jpg?rlkey=ytpwdaf9e3o8hxf08m4fq4v3e&st=u7tqekuw&dl=1",
        url: "https://drive.google.com/file/d/1-3BhV5qghqkqn2-xvlawSEvFNLvejMpn/view",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 121,
        name: "Top Gun: Maverick",
        cover: "https://www.dropbox.com/scl/fi/7g76mxl68ag5l8mq166aw/Top_Gun_Maverick_Poster.jpg?rlkey=w8z8dhi6n5c3p44emoaec1b8r&st=btx7kn8s&dl=1",
        url: "https://drive.google.com/file/d/1nmGDHktR96jkaYl2lf-d-XTtNtFh4PTv/view",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Drama"]
    },
    {
        id: 122,
        name: "A Goofy Movie",
        cover: "https://www.dropbox.com/scl/fi/7i0du953nx9zzvdzc1ess/A_Goofy_Movie_poster.jpg?rlkey=jj3yz1rpf0mpq256lzjwh883g&st=daz6j3u6&dl=1",
        url: "https://drive.google.com/file/d/1ify_EMaQW-ZAn2F0STztn2AGU-jE7aHL/view",
        author: "Unknown",
        year: 1995,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 123,
        name: "An Extremely Goofy Movie",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BYTY2OTIxYzYtODRkZC00ZTEyLTgyOTQtYzA0NWY4ZWQ5YmI5XkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/14ksjNU4K06d4hmBgURx_Oh9JD_Nzpb5I/view?usp=sharing",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 124,
        name: "Home Alone",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/image_ed8d7a4e.jpeg",
        url: "https://drive.google.com/file/d/1l7dSSnBmw9Fnku5lxl7zYk7CsQa4JU3d/view",
        author: "Unknown",
        year: 1990,
        genre: ["Comedy", "Family"]
    },
    {
        id: 125,
        name: "Home Alone 2: Lost in New York",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/homealone2_7706aa6d.jpeg",
        url: "https://drive.google.com/file/d/1sH3RXs-OiYr7ROKCtmB5miWVpX9G2b4Q/view",
        author: "Unknown",
        year: 1992,
        genre: ["Comedy", "Family"]
    },
    {
        id: 126,
        name: "Scream",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/p18852_p_v10_al.jpg",
        url: "https://drive.google.com/file/d/1pPzT8Ri09tg11w_9SPBhtDQuq7KH26XH/view?usp=sharing",
        author: "Unknown",
        year: 1996,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 127,
        name: "Scream 2",
        cover: "https://www.dropbox.com/scl/fi/t5em8vl7q6zo67ei3da7i/Scream_2.jpg?rlkey=8dxv14zuvsawd2665nu6ikyts&st=a703pf27&dl=1",
        url: "https://drive.google.com/file/d/16TD5egSCItF4mL1rcPS6n5oDrOTpUbGT/view?usp=sharing",
        author: "Unknown",
        year: 1997,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 128,
        name: "Scream 3",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/bb2d73f16e71e36f5e1ca9f8701c2ae5d97729414288e5e4f9e9d4b00fbd36cc.jpg",
        url: "https://drive.google.com/file/d/1i79Tg-esuzP4KBdyC4DUJsh_9XpWJgpY/view?usp=sharing",
        author: "Unknown",
        year: 2000,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 129,
        name: "Scream 4",
        cover: "https://www.dropbox.com/scl/fi/qjyolk2j5vy7pgr3cllty/Scream4Poster.jpg?rlkey=juk3t9jpxwergn0dhfk89h4oq&st=j3eym3f2&dl=1",
        url: "https://drive.google.com/file/d/11Nleq_MM9hhFYFxw_jI9YVAWmUxdjT4A/view?usp=sharing",
        author: "Unknown",
        year: 2011,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 130,
        name: "Scream (2022)",
        cover: "https://www.dropbox.com/scl/fi/eno7nijxi6i5g5tjzp7cf/Scream2022film.jpg?rlkey=x1gndjloxxc2nwefhdn6k84t0&st=4dczrs67&dl=1",
        url: "https://drive.google.com/file/d/1WGU_asa-pD9tkZI5YK72qsAPksvkkDJN/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 131,
        name: "Scream VI",
        cover: "https://www.dropbox.com/scl/fi/tpfcjmpt2usr17k9mjbk5/Scream_VI_poster.jpg?rlkey=zx8f5y3vqt682c0j3kj23e5np&st=kglhr7rb&dl=1",
        url: "https://drive.google.com/drive/folders/1hkelXNLx1nac4EhdU1LZyQn4y_z8zkiP",
        author: "Unknown",
        year: 2023,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 132,
        name: "It",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1BhQDbp8lXDwS-Q-pq4axufeZI-5TklpR/view?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Horror"]
    },
    {
        id: 133,
        name: "It Chapter Two",
        cover: "https://www.dropbox.com/scl/fi/g06sw6lge2qbztqff41n3/ItChapterTwoTeaser.jpg?rlkey=yp9ww1udes4o21s51ksj6e9s2&st=qml8wyu0&dl=1",
        url: "https://drive.google.com/file/d/1oKaFEyWb5bq2_y9mU-RwA9Tt9bfSJys6/view?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Horror"]
    },
    {
        id: 134,
        name: "The Nun",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi49U-7alumxu_CBlDWp1xl5WkY2JBGAVszrFluxBQN1elyelm",
        url: "https://drive.google.com/file/d/1f54gZFt1PT6TllWwa-5SjtkRuOITxLNs/view?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Horror"]
    },
    {
        id: 135,
        name: "Beavis and Butt-Head Do the Universe",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BZDAzMzk0NjktZDBiNS00ODNlLWI4NTItZDAzZTMxYTY2YTk4XkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/18Y0uInnJ7cNwwGsbJWlH3zPr4LtccmyR/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 136,
        name: "Henry Danger: The Movie",
        cover: "https://www.dropbox.com/scl/fi/c64653mht2lmd8goha7lx/Henry_Danger_The_Movie_Poster.png?rlkey=7vlfng51om8s5nybcfr4qo1o4&st=1leczcr5&dl=1",
        url: "https://drive.google.com/file/d/1siTn1l8gYcgh3nbITJVAiCUZrDdQG-wD/view?usp=sharing",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Comedy"]
    },
    {
        id: 137,
        name: "Gladiator",
        cover: "https://www.dropbox.com/scl/fi/qqdmx1cyflflkm3cn20mt/Gladiator_-2000_film_poster.png?rlkey=t1smwff0rwqlugfwzbjwks909&st=q957bip0&dl=1",
        url: "https://drive.google.com/file/d/1Hd90lotAZQPfB8rfJ219MTTe9xy59TZ0/view",
        author: "Unknown",
        year: 2000,
        genre: ["Action", "Drama"]
    },
    {
        id: 138,
        name: "Gladiator II",
        cover: "https://www.dropbox.com/scl/fi/8rg40mmttcfv3nt8sxnfj/Gladiator_II_-2024-_poster.jpg?rlkey=44r5l4unuzjq0n0mreqhvmq62&st=8h0rbkaf&dl=1",
        url: "https://drive.google.com/file/d/1Ji_gULD2I1eReo2_mf9_0EMKYy0GwFHC/view",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Drama"]
    },
    {
        id: 139,
        name: "Minions",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BODI4NzMyNjE0MF5BMl5BanBnXkFtZTgwMTcwNzI0MzE%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1Wz1VPwDHWA3t8n54e-YpRM18ad1mQuSG/view",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 140,
        name: "Minions: The Rise of Gru",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/Minions_The_Rise_of_Gru_-_poster_(English).jpg",
        url: "https://drive.google.com/file/d/1lrJNkBON3H_5n8lF3WKCaUT6AUl9qbh4/view",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 141,
        name: "Minions and More 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JbrS6Q5ztUmw5Xa8CvezcM_bRyGKQ2Q_SJCjpx2Z11jn3rf44L6rEj51LNbW6i-M53IpLX6Gqnm3JcqfbHVneq2qNS-Ak4H_dVGmag&s=10",
        url: "https://drive.google.com/file/d/1SH1liTGeW3xZT37iIIzNmyIyqNZVEaWT/view?usp=drive_link",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 142,
        name: "Despicable Me 4",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnZGXMNERS8l6sBYL9QaPgFTdp3Pkxyu-ff1WVuq1CWpp65ITa",
        url: "https://drive.google.com/file/d/1siki1wYP3LpfjFpUT8Z9lJuJzl7MdBhX/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 143,
        name: "M3GAN",
        cover: "https://www.dropbox.com/scl/fi/b8g18123piymxit8vk7e7/M3GAN_Poster.jpg?rlkey=0awe2343tw0v6zwnfyuu9tmpi&st=ezun8tdm&dl=1",
        url: "https://drive.google.com/file/d/1MMl1EYr_OYdc9R-va2IIdPUmkqcj1UpR/view",
        author: "Unknown",
        year: 2022,
        genre: ["Horror", "Sci-Fi"]
    },
    {
        id: 144,
        name: "The Little Rascals",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BZTlhMjA5MGYtZDYyNS00MDQ4LWI0ZDAtZjJiODJjODI0N2I3XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1eiY3r9KqM3Dmjtq38eRtR_eJFSGeciPz/view",
        author: "Unknown",
        year: 1994,
        genre: ["Comedy", "Family"]
    },
    {
        id: 145,
        name: "Ant-Man and the Wasp: Quantumania",
        cover: "https://www.dropbox.com/scl/fi/zz0449lgrqllpbf0j2e52/Blue_Beetle_-film-_poster.jpg?rlkey=gnk91admj7ixeizr90iytu6es&st=r2rx3fhc&dl=1",
        url: "https://drive.google.com/file/d/1AW3Zm8256tzZ-37lmgYmIGse4knu8IdA/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 146,
        name: "Blue Beetle",
        cover: "https://www.dropbox.com/scl/fi/zz0449lgrqllpbf0j2e52/Blue_Beetle_-film-_poster.jpg?rlkey=gnk91admj7ixeizr90iytu6es&st=r2rx3fhc&dl=1",
        url: "https://drive.google.com/file/d/1T2XMXtDAlohPcGdi-u2p9zXF9Os9zkY1/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 147,
        name: "Home",
        cover: "https://www.dropbox.com/scl/fi/i5bn04vm02d7coqusm36z/Home_-2015_film-_poster.jpg?rlkey=978810ebdduqp3vgezwlnqdcd&st=xrmea84x&dl=1",
        url: "https://drive.google.com/file/d/1PvzOPEZp09GjSj3PEDuxb0Y1ceQvo1AX/view",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 148,
        name: "Wreck-It Ralph",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA%40%40._V1_.jpg",
        url: "https://drive.google.com/file/d/11NQ1_ecO2FTIhofVPIfakshgSBnR6ngC/view",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 149,
        name: "Ralph Breaks the Internet",
        cover: "https://www.dropbox.com/scl/fi/hvxsrjrr05kecylmbj3qz/Ralph_Breaks_the_Internet_-2018_film_poster.png?rlkey=6xqj9shaw6rivkmt2fpq1kyf3&st=1blcnhgb&dl=1",
        url: "https://drive.google.com/file/d/1MQMWT5mYBF07GXiqgzAU8h9BcFe0phu9/view",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 150,
        name: "White Men Can't Jump (1992)",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BZTE1ZmEyNDgtMjQyOS00YzUyLTlkMjYtNmJkYWUyZDJjYjczXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1MXghG0Dnn9XJ9iSGE6-bIuM7vysIxBfy/view",
        author: "Unknown",
        year: 1992,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 151,
        name: "The Lorax",
        cover: "https://www.dropbox.com/scl/fi/rsjcbqx48x9w7ixg7lyf8/Lorax_teaser_poster.jpg?rlkey=lg5s470yi2xadh8mml1v0x4d8&st=drq4ny4a&dl=1",
        url: "https://drive.google.com/file/d/1Kl4ieKALPoEYbllsRy7V8AYiPtJATg7W/view?usp=sharing",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 152,
        name: "White Men Can't Jump (2023)",
        cover: "https://www.dropbox.com/scl/fi/yunmhoma6lr4alo8nemvf/White_men_cant_jump_2023.png?rlkey=lb2lg4hgnd17k6fobgcnsbdiq&st=5kl93v1y&dl=1",
        url: "https://drive.google.com/file/d/1-WrSZaYE3Sq_bHifzyd4UJP7tc6Ea0Ur/view",
        author: "Unknown",
        year: 2023,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 153,
        name: "The Batman",
        cover: "https://www.dropbox.com/scl/fi/006blxoep735f1xsfo2ty/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=e2wjbx8jiys52k425mdzus6nv&st=4mj0y56a&dl=1",
        url: "https://drive.google.com/file/d/16si_yvGyZn5mgvNIHil5xXOR3I8RaTKb/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Crime"]
    },
    {
        id: 154,
        name: "Back to the Future",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1uF72lGglIGHt-bkPY_PQXcrk1ja0JzZ7/view?usp=sharing",
        author: "Unknown",
        year: 1985,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 155,
        name: "Back to the Future Part II",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/Chillkirbcentrall@main/MV5BNzI2MGFkZDctOGVkMS00MDkwLTg5MDQtM2JkMWY5NGJiMjdiXkEyXkFqcGc%40._V1_.jpg",
        url: "https://drive.google.com/file/d/1vmA2LTkSzbtUJve8TTy2UVkPAfHMtGwK/view",
        author: "Unknown",
        year: 1989,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 156,
        name: "Back to the Future Part III",
        cover: "https://www.dropbox.com/scl/fi/kyoxnwx23ejm34pthhm1b/Back_to_the_Future_Part_III.jpg?rlkey=4k8dm8enjm4smo56sg8e4r0fx&st=r744gwut&dl=1",
        url: "https://drive.google.com/file/d/16A4hzHFTcNduq6F-u4zQw7iTha5aEKD-/view",
        author: "Unknown",
        year: 1990,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 157,
        name: "Guardians of the Galaxy Vol. 3",
        cover: "https://www.dropbox.com/scl/fi/kdvxh0289yv6sfj3qgkbu/Guardians_of_the_Galaxy_Vol._3_poster.jpg?rlkey=j8wetwdey9c1zrzbmfbzoizs5&st=mqqx42d2&dl=1",
        url: "https://drive.google.com/file/d/1pFavPs7Mi9rx_BrAjxbeHNWg7ClAB2_K/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure"]
    },
    {
        id: 158,
        name: "The Dark Knight",
        cover: "https://www.dropbox.com/scl/fi/dlbt4rw3oasxpw4dit6sy/The_Dark_Knight_-2008_film.jpg?rlkey=5anaankzjrc3julp9lsf8eeaz&st=iq502ya5&dl=1",
        url: "https://drive.google.com/file/d/1CZvw1MgSLVQR9Z9L8qpl8j1oI7DnMDWr/view",
        author: "Unknown",
        year: 2008,
        genre: ["Action", "Crime"]
    },
    {
        id: 159,
        name: "The Godfather",
        cover: "https://www.dropbox.com/scl/fi/sf7zqkmwszilmkiktx1a3/Godfather_ver1.jpg?rlkey=u6alzbuee2twjksjfy2acjayi&st=gyhdwcpr&dl=1",
        url: "https://drive.google.com/file/d/1xvoWT4fa3OGjov7mxBj3Geou3iinPvE2/view?usp=sharing",
        author: "Unknown",
        year: 1972,
        genre: ["Crime", "Drama"]
    },
    {
        id: 160,
        name: "The Godfather Part II",
        cover: "https://www.dropbox.com/scl/fi/uotecfms8g3m4i6vw986k/Godfather_part_ii.jpg?rlkey=ygj4hkmqaj2buueemawt55kok&st=2fkod7ay&dl=1",
        url: "https://drive.google.com/file/d/1N_J07djJSdfRoykvlxPUariYa45nfKff/view?usp=sharing",
        author: "Unknown",
        year: 1974,
        genre: ["Crime", "Drama"]
    },
    {
        id: 161,
        name: "The Incredibles",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg/250px-The_Incredibles_%282004_animated_feature_film%29.jpg",
        url: "https://drive.google.com/file/d/1XZrELbZbBqHShrCiPr4I4_pmOeT_gvwY/view",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Action"]
    },
    {
        id: 162,
        name: "Incredibles 2",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Incredibles_2_%282018_animated_film%29.jpg/250px-Incredibles_2_%282018_animated_film%29.jpg",
        url: "https://drive.google.com/file/d/1XZ0pSe4bccOpJeF_VkXhkOhxQ3Tzp8RB/view",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Action"]
    },
    {
        id: 163,
        name: "Yo-kai Watch Movie: It's the Secret of Birth, Meow!",
        cover: "https://upload.wikimedia.org/wikipedia/en/5/58/Yo-Kai_Watch_Tanj%C5%8D_no_Himitsu_da_Nyan%21_poster.jpeg",
        url: "https://drive.google.com/drive/folders/1zT6oqWBTJUpYfkU4ocRKtnc_UEcD0KSc?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation"]
    },
    {
        id: 164,
        name: "Yo-kai Watch the Movie - The Great King Enma and the Five Tales, Meow!",
        cover: "https://upload.wikimedia.org/wikipedia/en/0/04/Eiga_Yo-Kai_Watch_Enma_Daioh_to_Itsutsu_no_Monogatari_da_Nyan%21_poster.jpeg",
        url: "https://drive.google.com/drive/folders/1HT7fYeNLZznNJ1f2ruaRk9Q2pNZnQ7FZ?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation"]
    },
    {
        id: 165,
        name: "Yo-Kai Watch: the Movie: The Flying Whale and the Grand Adventure of the Double Worlds, Meow!",
        cover: "https://m.media-amazon.com/images/M/MV5BYWRiMmUwMTAtYjEzYi00NDQwLTk5YTUtMDQ1MWEyMzkxNThhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1Ue0xhF-YhUtgu42DsJETbyJ0KxGlWaqi?usp=sharing",
        author: "Unknown",
        year: 2016,
        genre: ["Animation"]
    },
    {
        id: 166,
        name: "Yo-kai Watch Shadowside: The Return of the Oni King!",
        cover: "https://livedoor.sp.blogimg.jp/youkaijinjya/imgs/6/8/6893b107.jpg",
        url: "https://drive.google.com/drive/folders/1ITSWePMRNo5fqIRmpDm8w9BC98K0ul0S?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Animation"]
    },
    {
        id: 167,
        name: "Yo-kai Watch the Movie: Forever Friends",
        cover: "https://m.media-amazon.com/images/M/MV5BNDhiOTZmMDItODYwYy00OGRkLThiN2QtZTlkN2M3YzMyMzNjXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1oyYc6a_zBF-ah7RijEoWgSrOyQcYj3KT?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Animation"]
    },
    {
        id: 168,
        name: "Yo-kai Watch Jam: Yo-kai Academy Y - Can a Cat Be a Hero?",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRiUTxfnzM90Pf63i_ssoZCj6uowSMxduEWZspSlEGSf29UzxvF",
        url: "https://drive.google.com/file/d/1agaUOrpagc2qgxTBQirz086vP1RlFF6G/view?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Animation"]
    },
    {
        id: 169,
        name: "Pokémon: The First Movie",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRKFveu_G8LP_ICAk9uQPbL7Iii4WQ2kKKh7gd8vFsWLuCNf_w",
        url: "https://drive.google.com/file/d/1_5PiiaO_lwVMh3_4Px-TU0modiH11V8r/view",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 170,
        name: "Pokémon The Movie 2000",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNCmwY5mfW7txHXn3zrJQ-EjPuJjG6P0EZnfx4igSAv12w8nKO",
        url: "https://drive.google.com/file/d/1AoToS8Ettg_wVvjDxQz3BiWLu-ewi6RG/view?usp=drive_link",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 171,
        name: "Pokémon 3: The Movie",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-hyaVqMdO_5e6lFDPkOGRkqfiaMZlc4a_u7lSDDjJrUFcUtUa",
        url: "https://drive.google.com/file/d/13fTi-G4RAShFYX_UK0GMP4byLOjL8Tzf/view?usp=drive_link",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 172,
        name: "Pokémon 4Ever",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqUo6SsvWgaCEeyR5jodW14zA_kUTi22ckhnJMJVnxhu1GmY_",
        url: "https://drive.google.com/file/d/1BE--u5k8B7YLOuAhwm-HV2kjy2cchfSC/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 173,
        name: "Pokémon Heroes",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7Wz2CWUTpvQ81B6jsVHBQnqiJaTn7yH-U-VJ5fikxOtbUxioV",
        url: "https://drive.google.com/file/d/1W98n3aU8Ad4PDHe9Z_1DzxvWy3i2jSR4/view?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 174,
        name: "Pokémon: Jirachi, Wish Maker",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ91V3e-jbDXZlQB1JORh10zFREd2SBz74HicRx8SY0ttZCQ2jW",
        url: "https://drive.google.com/file/d/1yrnL1o47TUJrs37KXj6XwdwuJMwig5Yg/view?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 175,
        name: "Pokémon: Destiny Deoxys",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-KnfuSU0nF--0EJmfncgTVcBZ0r48rPGyF-iOgAVAxaD1OInr",
        url: "https://drive.google.com/file/d/10n-r278IQVFulwHRVZSoZ8QHYTLpR0T5/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 176,
        name: "Pokémon: Lucario and the Mystery of Mew",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRRB1Gvm7navCKUy-Eo3KGlaacFGQh6C0cTMvzuYEX8vGRNBQq",
        url: "https://drive.google.com/file/d/1DGWSLLeneKVXA6F9U9J7AbzA7iGpXywA/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 177,
        name: "Pokémon: Giratina & the Sky Warrior",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRX4US1Iu1LIW7wExc3Pns11rqOUOd_KDeuMjS7N2g4ruvnyEaA",
        url: "https://drive.google.com/file/d/1xvRPznwbkzDZMSHDFr-R4JLpvH45jR9g/view?usp=drive_link",
        author: "Unknown",
        year: 2008,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 178,
        name: "Pokémon: Black - Victini and Reshiram",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-y16vtXqscUG088gQZKoMZdfUkzfU08xcag_thVHGizOYz_7jSNfsxhuW7F-nzqAjt2lk&s",
        url: "https://drive.google.com/file/d/1ONsADI2D1QtmyFpyW4zIo8zFDBrO4OL2/view?usp=drive_link",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 179,
        name: "Pokémon: White - Victini and Zekrom",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKhDT38lbM3gnHkR7MLc7O1OmZHfXTLemDKT1NcJhoHJAAe20f",
        url: "https://drive.google.com/file/d/1p2abgfDqQ-5eDtoKU0A_TCApI0SIaPQ6/view?usp=drive_link",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 180,
        name: "Pokémon the Movie: Diancie and the Cocoon of Destruction",
        cover: "https://m.media-amazon.com/images/M/MV5BMTY2OTc4NTU1OF5BMl5BanBnXkFtZTcwMTg0MzI1MQ@@._V1_FMjpg_UX1000_.jpg",
        url: "#",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 181,
        name: "Pokémon: Hoopa and the Clash of Ages",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpO-wkuLcLQJn-ervUkKJlLoUs1e6YMEyGpWcih8NYNQ9ZlexIuMu_F1KwiKLqJLw9uK1wg&s",
        url: "https://drive.google.com/file/d/1aH2Ivp60TpCGVc8RcXpf4-ywN4GICKEa/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 182,
        name: "Pokémon the Movie: Volcanion and the Mechanical Marvel",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIZubOB9epl6oNZp5U2VRneraeCVj6QWkdFlNLgmd_LBnbHUX6",
        url: "https://drive.google.com/file/d/1LtS0Qupkv4L3aYFoPXSdEgYiL0VF0FIg/view?usp=drive_link",
        author: "Unknown",
        year: 2016,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 183,
        name: "Pokémon the Movie: I Choose You!",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOv4wBotNhaeFIM-AB_F1zitmaIKR0ZH6QIN5yZmdt2G2K_jmP",
        url: "https://drive.google.com/file/d/1UKCK7zdXb374ZiDB-79zubOVtBU-8Q2D/view?usp=drive_link",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 184,
        name: "Pokémon the Movie: The Power of Us",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcMOzczb-ZXfONC6bYLiiOqoPP82zGG3tkGnbqaI-Z8Mb_E7o_",
        url: "https://drive.google.com/file/d/1H6OdAhiap0D_T5ayTNy_Z8DZTHhU8-lw/view?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 185,
        name: "Pokémon: Mewtwo Strikes Back Evolution",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDmHizn_nTe3EtICFKQglF-b6-xOkKfWsr4o-lFB_RYaKi0ZzRs_efGJl6-lQOzcaJtFR&s",
        url: "https://drive.google.com/file/d/17faKYkcJ9wTp2ZWXx9w-s0oC8603ukZ_/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 186,
        name: "Pokémon Detective Pikachu",
        cover: "https://encrypted-tbn0.gstati...(truncated)...",
        url: "#",
        author: "Unknown",
        year: 2019,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 187,
        name: "Beetlejuice",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVsxspVRryos59ijGqPcRiyKkmxXZbHVXboKCPkcoSaJuZO6fa",
        url: "#",
        author: "Unknown",
        year: 1988,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 188,
        name: "Beetlejuice Beetlejuice",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSFaafiBGhb6Y7dRHfr1rmKkbSQcr3RUiZNfIArPpwOvZ9WPT0",
        url: "https://drive.google.com/file/d/1OsCtW4NUV94utDNxmFejUFoH6euf8Ind/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 189,
        name: "Birds of Prey",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLSTWWsDJh0QSv9tgF2_GKhzaTVtn9PnjxUH1Jv8xrH2rgSDvO",
        url: "https://drive.google.com/file/d/1AShi8tLLzbPiPO6vDokf8ew-qBbzh5Pb/view?usp=sharing",
        author: "Unknown",
        year: 2020,
        genre: ["Action", "Comedy"]
    },
    {
        id: 190,
        name: "Boyz n the Hood",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9RKSCGfUksDY4BHPsnQnVWmpLA4QE45VcQF3bHZnQYPuShPwS",
        url: "https://drive.google.com/file/d/1fCv2dJuy8k_NQWAxbNRxqW0_zKetF-uy/view",
        author: "Unknown",
        year: 1991,
        genre: ["Drama", "Crime"]
    },
    {
        id: 191,
        name: "The Blackening",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSchewZTTpUzZ1pc0NJv5WgaxzJZIJZae8_jjUs4q8xH4yYnEdb",
        url: "https://drive.google.com/file/d/1VBG7WXqeiZ3BSvPuWUPCL1_iF9znvPI5/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Comedy", "Horror"]
    },
    {
        id: 192,
        name: "The Black Phone",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmv-gEI1UoFDwWp8YW9q_VNl07zUd6W0hfK8m9Nx5NDJHfBMM7",
        url: "https://drive.google.com/file/d/140S8bCV6Ht2WticzegM_jfRayS2_Mvn_/view?usp=sharing",
        author: "Unknown",
        year: 2021,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 193,
        name: "Coraline",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRIZmgYj_evmVo3En7TAGQ59EPhVFxrU0Jbp0-JtZ9-oH2Qkfeg",
        url: "https://drive.google.com/file/d/1TFiL16cNmQmG5pSi-s6od4xgymFqK1kJ/view",
        author: "Unknown",
        year: 2009,
        genre: ["Animation", "Fantasy"]
    },
    {
        id: 194,
        name: "Creed",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQBPPVNJsedotEncVKYqR5kzr-64FdBMo8Yz2mM0b2vRXdqDSxt",
        url: "https://drive.google.com/file/d/1w9nVBGOKDax-xCr-caqekW4hcjRUQWZA/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Drama", "Sport"]
    },
    {
        id: 195,
        name: "Creed II",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRK47d574YOXxZBLKbzpU5X7wdSobBbo-yX_dL5ynJwOPbmLSCt",
        url: "https://drive.google.com/file/d/1KnW-KW6LV-fH0S0R_2sbsEKkKhSFK-OP/view",
        author: "Unknown",
        year: 2018,
        genre: ["Drama", "Sport"]
    },
    {
        id: 196,
        name: "Creed III",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRmC62EfM6OLg4sXdCnYVVqTr41rNjBX4T7TuhgQxqeHR76ONKj",
        url: "https://drive.google.com/file/d/1j8pGyNx9PHk_Gicns9JlDaX82qBIi1_m/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Drama", "Sport"]
    },
    {
        id: 197,
        name: "Coco",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRThbVbZLOG2S4gJp_tVSAjaEy8WMSMvNNoxHE6of7rd5TXS5mTu",
        url: "https://drive.google.com/file/d/194M4dGCwh1hTxVM1-_axnLSdt4trnbK2/view?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 198,
        name: "Child's Play",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQfrrvtB4lkIc-azxeU_DurGHMixcW4iOiel5ajtiinH5RYqghw",
        url: "https://drive.google.com/file/d/1FPO2K8Oqb1O3qm1qb57NhZHhaGCvQjAz/view?usp=sharing",
        author: "Unknown",
        year: 1988,
        genre: ["Horror"]
    },
    {
        id: 199,
        name: "Corpse Bride",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQiVf-tXwc3xDT66-w2GOf4P-FHwN9CRW5fQlwSwAaj7CXfXFOR",
        url: "https://drive.google.com/file/d/1AHqrYm4cItyiEquPHJV5z3H81Cc0cCfI/view?usp=sharing",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Fantasy"]
    },
    {
        id: 200,
        name: "Captain Underpants: The First Epic Movie",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRSrtfW-GLrbaeCM7OI8jtAznah1Z3dSWe8K39gsurQdfFMEQD5y",
        url: "https://drive.google.com/file/d/1BW7yv_y4uk99Nsjbc--z1beQ_bYYmUXk/view?usp=share_link",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 201,
        name: "Dungeons & Dragons: Honor Among Thieves",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQjzgH8k-lQVZeIEMFty27rVHbBXuOfkLG2UWnQmkPnzwtxDdoB",
        url: "https://drive.google.com/file/d/1iX6QbaV3Oi_yGDvqRcFvrJ4_gzIOisnT/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure"]
    },
    {
        id: 202,
        name: "Descendants: The Rise of Red",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRTL5aXrsAHJCBA4dw1YqSaAcfQsIIwLIppgysKhi6i6iTDcd6K",
        url: "https://drive.google.com/file/d/14uIYHn4xepm1GLF2USxyBkUE6nQfueoE/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 203,
        name: "Dune: Part Two",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRSYcWh7tLxKT9zfhqv9pWB99jZgkp0kMELvBn8iAd6nBQ7KesxS",
        url: "https://drive.google.com/file/d/14VeNSqVtt5gcibZOfjPcjkBoasPrpiEG/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Drama"]
    },
    {
        id: 204,
        name: "The Mighty Ducks",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRSamGBMl975zktkj-1jH-E7HicNIeQbspMZw7Hti3-d7QBX2jkr",
        url: "https://drive.google.com/file/d/1MKL3dbjVCDH4cmnPtBoT8SeQeoK8bRYN/view?usp=drive_link",
        author: "Unknown",
        year: 1992,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 205,
        name: "D2: The Mighty Ducks",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRTQxQPA0hACkefqwiEIH9P_Y75jBBHUov1GLO2PccOyTYTKWUIa",
        url: "https://drive.google.com/file/d/1xqucoWKrHYKgkPtIH504nV_QWrezUcC9/view?usp=drive_link",
        author: "Unknown",
        year: 1994,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 206,
        name: "Elf",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRT08ZFpbAwAL_jQFtQfMjut1_T6oNgxRCQiOPA6S1twJLXZq_Wi",
        url: "https://drive.google.com/file/d/1-cJP_6uvuboesHkiYPgfIg49eKvsBsF0/view?usp=sharing",
        author: "Unknown",
        year: 2003,
        genre: ["Comedy", "Family"]
    },
    {
        id: 207,
        name: "The Evil Dead",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQeHkDzNZ__URsNeXrL_1PYGF11yj-Kb1fMIhjAF3vJuuOj4iIA",
        url: "https://drive.google.com/file/d/1E2Epz2Y7Ji5xCnKT0RtqMz7r0ENBT4YB/view?usp=drivesdk",
        author: "Unknown",
        year: 1981,
        genre: ["Horror"]
    },
    {
        id: 208,
        name: "Evil Dead II",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRT1j6j2DwCb5CGZdJWBsecYkNC9OmXP_9CbrSk9HvUn5QdPU9Ns",
        url: "https://drive.google.com/file/d/1BklK_O-rTRNrk0q7xOhXt_LEiBmmYan8/view?usp=drivesdk",
        author: "Unknown",
        year: 1987,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 209,
        name: "8 Mile",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQKj1gi40z19Q1xgB8HDqUruRT0z9PtXjT7rs1iy9Zj-vgf3BBF",
        url: "https://drive.google.com/file/d/13KF2oQ-b1WRvbjL0vMMAMlI0Vj8TYBuM/view?usp=sharing",
        author: "Unknown",
        year: 2002,
        genre: ["Drama", "Music"]
    },
    {
        id: 210,
        name: "Friday",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRSmPlQJ0P8q0Th4Widyxcr61BI9Ylv-8ZMwBgOxRTZMX_N4W8oO",
        url: "https://drive.google.com/file/d/1SKE9sQ-DnHRRVGxU10Qk2QJ1Ws2jvv5M/view?usp=share_link",
        author: "Unknown",
        year: 1995,
        genre: ["Comedy"]
    },
    {
        id: 211,
        name: "Finding Nemo",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRSPMuT84H7cjZKS_L6KLxTDZA_12G-zUMA7w0xLO9hHj275KFAa",
        url: "https://drive.google.com/file/d/1jP7PoHapLf_S_n75Afdc0RvzSwRqPcwm/view?usp=sharing",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 212,
        name: "Friday the 13th",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRRCJMiZzQl60gseXR0r81HkVP4WMO0Oz5KBWLXuT-zkqm46hPIL",
        url: "https://drive.google.com/file/d/1Tu0WxRUC-gADzYFEnSvudZ3MZ7Y735jH/view?usp=drive_link",
        author: "Unknown",
        year: 1980,
        genre: ["Horror"]
    },
    {
        id: 213,
        name: "Friday the 13th Part 2",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQ2K7lI4QBMqnIwqUFvcRWsgUtyylKtqE2GaWC8V0yVmUxr0hod",
        url: "https://drive.google.com/file/d/1ROenMVwRyMGW0EIsf4Xg67EvRAAT5kcX/view?usp=drive_link",
        author: "Unknown",
        year: 1981,
        genre: ["Horror"]
    },
    {
        id: 214,
        name: "Friday the 13th Part III",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQT6HUOhY4svwFpBOm6ettw5QeVvCbzz9dLo9Bv0oKEqFtGCPBF",
        url: "https://drive.google.com/file/d/1Ak82TmSBG3_lpbUgsDq22AcZ5gzGvTTB/view?usp=drive_link",
        author: "Unknown",
        year: 1982,
        genre: ["Horror"]
    },
    {
        id: 215,
        name: "Friday the 13th: The Final Chapter",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQT1LWqItlMh8EExhC5Qj0uxTsOYtS4wPqb0jXe3SsLmYHZLpIdck",
        url: "https://drive.google.com/file/d/1M2OD-EPO3AjkzwYNvJLXCNe4B7y6bmM6/view?usp=drive_link",
        author: "Unknown",
        year: 1984,
        genre: ["Horror"]
    },
    {
        id: 216,
        name: "Friday the 13th: A New Beginning",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRBSz0VcvLfe196y7AvwiNI7oLvSePtZES_uxUTRv8-loYoNnl_",
        url: "https://drive.google.com/file/d/1cB43qNpCCf90tHch87EC4hBywV0Ao5-V/view?usp=drive_link",
        author: "Unknown",
        year: 1985,
        genre: ["Horror"]
    },
    {
        id: 217,
        name: "Friday the 13th Part VI: Jason Lives",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQllcCCiLuWG-a0-dcYm2PdBGYbsgxh_rStL1DCAH2iPQnuBjg_",
        url: "https://drive.google.com/file/d/1Yug3RMr7f8z5P7TjxWgRN0geoWL7UnU4/view?usp=drive_link",
        author: "Unknown",
        year: 1986,
        genre: ["Horror"]
    },
    {
        id: 218,
        name: "Friday the 13th Part VII: The New Blood",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQl2b73WIdF25DGByhxqolp6gHbGiErZ3benE7HIZ84X99F1g_P",
        url: "https://drive.google.com/file/d/1CG5Te-vXcvPrEuJtQsN3HZigm6bz33Os/view?usp=drive_link",
        author: "Unknown",
        year: 1988,
        genre: ["Horror"]
    },
    {
        id: 219,
        name: "Friday the 13th Part VIII: Jason Takes Manhattan",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTzT4qnbBPOYOTNORJOCmR8_F69iYLStaCSjBhdEV8XsVrHF8YP",
        url: "https://drive.google.com/file/d/1oRePBRxnrhk8feVEE3OtTNnE0Y70a4ZN/view?usp=drive_link",
        author: "Unknown",
        year: 1989,
        genre: ["Horror"]
    },
    {
        id: 220,
        name: "Jason Goes to Hell: The Final Friday",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQSjbY6O1EVMWqooPvVojTr0JF6whQomlq6qNFZ1YKHuWWJvUY3Z",
        url: "https://drive.google.com/file/d/1mvOr1kr0lX3XzbYIVJps-Mkz7UxjLUhP/view?usp=drive_link",
        author: "Unknown",
        year: 1993,
        genre: ["Horror"]
    },
    {
        id: 221,
        name: "Jason X",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQqqMkllrTF2Q0vVPkLNS2RtUCKIvf98OeZYtg3BDnFq8_Xsg_f",
        url: "https://drive.google.com/file/d/1f_m_NTsYbbVFh1FBqXC1TOuS_4Yp6uSd/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Horror", "Sci-Fi"]
    },
    {
        id: 222,
        name: "Frozen",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRRtOzQ7EBgKQEtfGoCrVqTgNqCgvrvvqZiDGMwIzr9Zpl1YmGEt",
        url: "https://drive.google.com/file/d/1XIuN4Zp35mW0iN4p0ME5APxH18-6Zqft/view?usp=drive_link",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Musical"]
    },
    {
        id: 223,
        name: "Frozen II",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRR1TZavriAaHssS7E7_s1iM5QNLDQiGemN_okufuqpCb3eIOl3o",
        url: "https://drive.google.com/file/d/1hpUpKEdeT9ta-8FjSpMUAXw17E-8uwIY/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Musical"]
    },
    {
        id: 224,
        name: "Good Burger",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRTJMe_giUYZnRRte0Ffjp-rc99Spq2_VOF6WA4gjh0blDYqdJyy",
        url: "https://drive.google.com/file/d/1jucPocCb8aq23Bh-GFLcniAk-k5UU-wC/view",
        author: "Unknown",
        year: 1997,
        genre: ["Comedy"]
    },
    {
        id: 225,
        name: "Good Burger 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQT6fOZznl8uNSlVMuRL_9rhjv-dKMLj7mKcEp8VN6VgKODD77Jw",
        url: "https://drive.google.com/file/d/1TOjPbqSF5UqnPrn1zFqEWvkUeBNiyMax/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Comedy"]
    },
    {
        id: 226,
        name: "Ghostbusters",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRTprKyBsyOnMx2akR5sMxaQI-ZW-Azqq39biFuowDPJX6eaAFh2",
        url: "https://drive.google.com/file/d/1Kur_TXv1AOx8hhs0qGc_IwZXKmWvD6Y7/view",
        author: "Unknown",
        year: 1984,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 227,
        name: "Ghostbusters: Frozen Empire",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQ6NthsSmt0iCv7PiwyR3QyuOpkGD8BmghbMJXezuW8u-wo15RO",
        url: "https://drive.google.com/file/d/1JSj4AbrcqmjOLKWJJS7u7IxyMGJiQmzY/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 228,
        name: "Grease",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRTOO07bZ2gSzP6RzqDJFUqm0FsgtwVNa07gU5Rcu2_kXNPUFJ1u",
        url: "https://drive.google.com/file/d/1W77S931ShuhZ2RVeiNrfdQQUcR4pKsD0/view?usp=drive_link",
        author: "Unknown",
        year: 1978,
        genre: ["Musical", "Romance"]
    },
    {
        id: 229,
        name: "Garfield: The Movie",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRTnvG8s3BGX6PVrqXcH-X22X9aXb2Wvr7GfaUa68Upf_r6Xhjsp",
        url: "https://drive.google.com/file/d/1xMRDhscsmtcrECXXuOsqpAADTHJ0FxGS/view",
        author: "Unknown",
        year: 2004,
        genre: ["Comedy", "Family"]
    },
    {
        id: 230,
        name: "Hidden Figures",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQQF8_Sg5Rt8Bjl274YHnB4nT2q0o8bW6TCFYAucbtCtnyNyC9H",
        url: "https://drive.google.com/file/d/1sfjv_SEQZQ4QPgPAeS8xckKHORr3gLiG/view",
        author: "Unknown",
        year: 2016,
        genre: ["Drama", "History"]
    },
    {
        id: 231,
        name: "Hotel Transylvania",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRSu1KjAyHvPR6U9qTaIN-XFOLRG5ke6KBWiIYEBsbKCY9KSUOj8",
        url: "https://drive.google.com/file/d/1gZ4FVX5GLCSv2-i_sabXWhgl9u_3FeOB/view",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 232,
        name: "Hotel Transylvania 2",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRTf8LX6seZ1pdRKRwDPo7oZY-8dua0RuGOCcEQ6G_bAGSfeb1IN",
        url: "https://drive.google.com/file/d/1LZI5E52J_R_Cx6f3EXLl-BAn6vuhUduD/view",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 233,
        name: "Hotel Transylvania 3: Summer Vacation",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRRyhcdiIgxpoGceo0W9XMQWWgj4IzD58vi4q8jLbtSulRZveYRF",
        url: "https://drive.google.com/file/d/1aS3rHee1w5zNTGGmSFM57DSVlC1hSvIs/view",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 234,
        name: "Hotel Transylvania: Transformania",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQgEtsiUlUoB6Rp3uI_RhG-T20y7WvWEGL8uz_TK8ka5BD7gVlV",
        url: "https://drive.google.com/file/d/1_Ujbv8ONdcmV8TrYw8WzTwdD93deiiZp/view",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 235,
        name: "Hercules",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRTiFBHW_mtPYUb1oaR5oLENwqhP-3s3bo2E58JZkuoIP1lUN8K-",
        url: "https://drive.google.com/file/d/1sXad7VvXVn7qIilwdspq5RtjmInpa7mQ/view?usp=sharing",
        author: "Unknown",
        year: 1997,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 236,
        name: "Hamilton",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRTP-pSnQ05mF5LOfsau5VE_gDmQoZERJixfIpUJd86krYZ02wkyQ",
        url: "https://drive.google.com/file/d/1c47Nko9vdJfe-KKF4nkpd-U-aMT_ZaQe/view?usp=sharing",
        author: "Unknown",
        year: 2020,
        genre: ["Musical", "Drama"]
    },
    {
        id: 237,
        name: "Harry Potter and the Sorcerer's Stone",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQcZT3sdwr1NiJytvJb95icJJKPWpWRNv35l_uuVYxjlzBJS-hb",
        url: "https://drive.google.com/file/d/1bJMKhvzwuVfAYECLheyA_h38T9oYvkgX/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 238,
        name: "Harry Potter and the Chamber of Secrets",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQT5CR-nVjDTALNu4lZS1-6e5rU70K7kG1luvw2NDpfpKPI40MJ1",
        url: "https://drive.google.com/file/d/1AC6j5pNVDl6fcvdT3e3hsAUkkBU-o3xD/view?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 239,
        name: "Harry Potter and the Prisoner of Azkaban",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQT5NG-dDSzu9O4NRE8ZtIY1LiuoF3cYIBPy4MzXxK9UVzxnn4Xx",
        url: "https://drive.google.com/file/d/1Zu15ykGtc1xxKIKfAeUV_L1vAbCt--zO/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 240,
        name: "Harry Potter and the Goblet of Fire",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQynNka8fnGlaaWkc8FP2VD1Zu8kldj6GqQL4XH3UFZjWr5xT4r",
        url: "https://drive.google.com/file/d/1yYxqmSv99zFBsJkT0cZYd4C4PTNC9bUU/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 241,
        name: "Harry Potter and the Order of the Phoenix",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRTT0_CEAvkHUMP09LzfSOwkPQ87R70DH51cqpi8LAD9Y-lJlZaX",
        url: "https://drive.google.com/file/d/1eVK_s8Sp-Gvv1J65ocyLbwyqC7vkuoFK/view?usp=drive_link",
        author: "Unknown",
        year: 2007,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 242,
        name: "Harry Potter and the Half-Blood Prince",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRUzubDECMqS6BWV8RT3r1BWxinjYWVXplxXIVVAdpbvaP6iJh",
        url: "https://drive.google.com/file/d/1QfAnvJtU3oR7IV2CrN2qRx4vFThjbbe1/view?usp=drive_link",
        author: "Unknown",
        year: 2009,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 243,
        name: "Harry Potter and the Deathly Hallows – Part 1",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRTuKvH7JMJC0qJ4YGX4h_O5hObauagk90fiJconjJ4fQ6S32SPI",
        url: "https://drive.google.com/file/d/17UlhT2qVX10O8AksEEdWuaUqoVF78-oH/view?usp=drive_link",
        author: "Unknown",
        year: 2010,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 244,
        name: "Harry Potter and the Deathly Hallows – Part 2",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRRmfY22YsznTZ7ocT4Q4f_13aoowRRhrtssBb6QIE9vWjvbvyqu",
        url: "https://drive.google.com/file/d/16jXkeJny6L8MrC_7issz4AtANAzNDJqw/view?usp=drive_link",
        author: "Unknown",
        year: 2011,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 245,
        name: "High School Musical",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRSDXTpRrd79ne8KoMU-Z2FFD0uXpzc_Yp-RsQ9eN61_nwIbUwH_",
        url: "https://drive.google.com/file/d/1tg84YPuUqFUMlVpGzjkhoEehBHV8W9ZF/view?usp=drive_link",
        author: "Unknown",
        year: 2006,
        genre: ["Musical", "Comedy"]
    },
    {
        id: 246,
        name: "High School Musical 2",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRSlYMhPNmBLnRZrqjqEkHeWJi31TmnGlKH0iD79dIoBo-mhy_AR",
        url: "https://drive.google.com/file/d/1iE1foAQrNAMJJg3aOd37GECWBkXmAEi7/view?usp=share_link",
        author: "Unknown",
        year: 2007,
        genre: ["Musical", "Comedy"]
    },
    {
        id: 247,
        name: "High School Musical 3: Senior Year",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQ3FsS105Ir9OHlK0xZ1XtDDsSG8cBkNwNLg1UoMmxf-c9uSwuG",
        url: "https://drive.google.com/file/d/1aGq7saEhWkyACQlOmGIAmylSTeEOL864/view?usp=share_link",
        author: "Unknown",
        year: 2008,
        genre: ["Musical", "Comedy"]
    },
    {
        id: 248,
        name: "Hairspray",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQ7Wn0kgDUD-KKuzBqlHNg3Qyto8F6mDsaHR8d0hJg8JjtICX_1",
        url: "https://drive.google.com/file/d/12X1rfnx0NrQUAhDRLRQxKdaqvAi_LqJa/view?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Musical", "Comedy"]
    },
    {
        id: 249,
        name: "I Know What You Did Last Summer",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTbwG4c7g7A3b8b5tMfuy0HjmipBt6N_CSQMaeUyGMiwc3HO_dJ",
        url: "https://drive.google.com/file/d/1sSPtR3lcvTcjtDHvv3sOHw8qHbuaeQY1/view?usp=sharing",
        author: "Unknown",
        year: 1997,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 250,
        name: "Indiana Jones and the Dial of Destiny",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQWsCXahFpkdsfQRNJ4-OBolI2eUZ8qro3DcYjd3tmQfRcmyQw8",
        url: "https://drive.google.com/file/d/1BuNmXFmhFBoSKvcnbi5W1_hQkVLTrzwu/view?usp=sharing",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure"]
    },
    {
        id: 251,
        name: "The Instigators",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTVxkEHSiMBgJZU66H3TUvTEMuStkAgVs7RKQqi8pHUu4BFl_NF",
        url: "https://drive.google.com/file/d/1LPBpsJpE56zpdSZUi8f6tEkHPzaMceYo/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Comedy"]
    },
    {
        id: 252,
        name: "Thirteen",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQRZr-6NLAoYeUpmlG5p8Wfg9fZeUnGSwn6pgLcbCp3SS7TUZpel",
        url: "https://drive.google.com/file/d/10HMzcDDav-A9xTydLioxLEfcou7SICYL/view?usp=sharing",
        author: "Unknown",
        year: 2003,
        genre: ["Drama"]
    },
    {
        id: 253,
        name: "Jurassic Park",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTcHXFtCmBOq73akbRR6lFVKje6ky8OB1KRay6qRKvYRWHT09Yz",
        url: "https://drive.google.com/file/d/1QGXy2lJU4B0z4s7zPSOLizN8jMHfnZQm/view",
        author: "Unknown",
        year: 1993,
        genre: ["Adventure", "Sci-Fi"]
    },
    {
        id: 254,
        name: "The Lost World: Jurassic Park",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQ_At9BMX3gTT1Vv_WWpDqsR-ZuEfELrRopGLUegXF_NaS7ONpx",
        url: "https://drive.google.com/file/d/15okru5XkkghrsKUfQJaFUTUHxHF_o9a1/view?usp=drive_link",
        author: "Unknown",
        year: 1997,
        genre: ["Adventure", "Sci-Fi"]
    },
    {
        id: 255,
        name: "Jurassic Park III",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTGd5VtCqjQNuViRSEsQpkSrzegmGxvhR0AoARlJgu_gKPWNmm",
        url: "https://drive.google.com/file/d/1W9RJS1N_rBcNFAA73Y3B6leLhhjXXY9k/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Adventure", "Sci-Fi"]
    },
    {
        id: 256,
        name: "Jurassic World",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRRAhiD1zplxxzrmecY1L6PnNP_xTRO-kTW1ufH54wsKXLy_lWlO",
        url: "https://drive.google.com/file/d/1oD0MwA_C9OVb7HeO70m9gAAs-dbm9SJG/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Action", "Adventure"]
    },
    {
        id: 257,
        name: "Jurassic World Dominion",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRRSrcWio-ZbeiNU_y8qzZ88wL5F8ICXaDQvmHivByFKBT6O8CS2E",
        url: "https://drive.google.com/file/d/1x84uwAQzm7-j9MhDdNF5sb_jCRQFhjIa/view?usp=drive_link",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Adventure"]
    },
    {
        id: 258,
        name: "Jurassic World: Rebirth",
        cover: "https://www.dropbox.com/scl/fi/1qsdnk4bgzys2s73j79kk/Jurassic_World_Rebirth_poster.jpg?rlkey=awafkakx81wynmq0erbmsx09z&st=u4zifiyi&dl=1",
        url: "https://drive.google.com/file/d/1x0n_tZPq79HxAnV2ZwnVPTkBenFGZjx-/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Action", "Adventure"]
    },
    {
        id: 259,
        name: "Joker",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQc373yboAw6UaeuzJMGhgSN6JubsGFMgWOA_XC3jtbxvPuZ7LH",
        url: "https://drive.google.com/file/d/1czY5u0zA3TPQh97OFth_1GkaK9nUo-Lq/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Crime", "Drama"]
    },
    {
        id: 260,
        name: "Joker: Folie à Deux",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQS4BJI74r_5SFzhoWMG3dO63aS9ZKmmxDvurw2VPZxkQIzW6aoN",
        url: "https://drive.google.com/file/d/1wiipkIcZ8r4itPij4w7CpOvC6uz-2wCS/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Crime", "Drama"]
    },
    {
        id: 261,
        name: "Jingle All the Way",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQR_D3-200sB-uftpjO5ou3DG7nSr4881WrPwa_vSJS_qvIZZjy8",
        url: "https://drive.google.com/file/d/1gdQba6i5IcBe7_a4eyU75cuAkbyJEpt4/view?usp=share_link",
        author: "Unknown",
        year: 1996,
        genre: ["Comedy", "Family"]
    },
    {
        id: 262,
        name: "John Wick",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQT2gCKp_FAhhyFwULWedj5TJ3v997GtTNmnzI4a528rolv4Nt_v",
        url: "https://drive.google.com/file/d/1o-u405CtHzkRFAjDRxnlwIV1MKzmpQYa/view",
        author: "Unknown",
        year: 2014,
        genre: ["Action", "Thriller"]
    },
    {
        id: 263,
        name: "John Wick: Chapter 2",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQT581lV1qvox1QN7kDBtsMAHmrS_3TqY-k-Ab3bVapiVd9ezSJN",
        url: "https://drive.google.com/file/d/1gzsZEVTNEb93tSa0nuzlpR2n20D4Dyx9/view",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Thriller"]
    },
    {
        id: 264,
        name: "John Wick: Chapter 3 - Parabellum",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRhD2WYV8AtuJuFkps4KHY_i38KJ6ZqN0nj-3KSLXG0IIpDBvf_",
        url: "https://drive.google.com/file/d/1CsIZrKGXn557DdOJrdz5ty7nkg0i4CWR/view",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Thriller"]
    },
    {
        id: 265,
        name: "John Wick: Chapter 4",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQStoEdgmuVFv-U8ZgSlCMwkN9EN7WqqZW-PC4quRBqAWYrzsVM",
        url: "https://drive.google.com/file/d/10LUlcX6Hu9pn3c3xmPlfJOf20Qjwgxq_/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Thriller"]
    },
    {
        id: 266,
        name: "Kill Bill: Vol. 1",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQQJfAmi0Yv1yC5KiIjnwENJR7xWFpH_R8ChhpcWmQaocwqEsGaf",
        url: "https://drive.google.com/file/d/1O7IPP73pLpqj6qH4mfqjDhwNbeDMSU7N/view?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Action", "Thriller"]
    },
    {
        id: 267,
        name: "Kill Bill: Vol. 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTkS01zo_LpuiaTbp7Pu7XbAoFGW4SRSaw6ndBWYc5jnC2zQtGr",
        url: "https://drive.google.com/file/d/1p5DfNhB87k8bE-OQi7ELONmPkIhJIjC-/view?usp=sharing",
        author: "Unknown",
        year: 2004,
        genre: ["Action", "Thriller"]
    },
    {
        id: 268,
        name: "Kung Fu Panda 4",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQQ7JjEKTO61is55MO9oWgqxOJ48o60Aux8iprkQ0jEswoBVFNaw",
        url: "https://drive.google.com/file/d/1boIeWj09LNCdGhmasx5f5YnClj0IyDWe/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Action"]
    },
    {
        id: 269,
        name: "The Karate Kid",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQSWTVXH7T24IU2aMO2KCl09NAkYuoiS81MTP5Hvw86hNkndTTb6",
        url: "https://drive.google.com/file/d/1tMJAooF8bG9ghav9CU4GPYF3t07ySMXL/view?usp=sharing",
        author: "Unknown",
        year: 1984,
        genre: ["Action", "Drama"]
    },
    {
        id: 270,
        name: "Labyrinth",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTc3VE1kltRLL2RVyE75CJQy-BNEBnYLefCUAttHONu8nwP1o6n",
        url: "https://drive.google.com/file/d/13TgTB15A99LLWI_ROcci18FT8ijuq8RC/view?usp=drivesdk",
        author: "Unknown",
        year: 1986,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 271,
        name: "Leprechaun",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQQN-98t3jLkkzRPUiU83QfWpLGjtk52gFDLmNellsDB2j-YauaJ",
        url: "https://drive.google.com/file/d/1pktrP3sKl90GQnM6wpRmxqlxgkv4sYaP/view?usp=drivesdk",
        author: "Unknown",
        year: 1993,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 272,
        name: "Leprechaun 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQR-R-JfzR64CD7aSLKaW2DWJD2ue3k0sIATw19GJ3IxtA0_ENfh",
        url: "https://drive.google.com/file/d/1gVMT8Aad2F51JdRYkjwkTw7tH88zgZxg/view?usp=drivesdk",
        author: "Unknown",
        year: 1994,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 273,
        name: "Leprechaun 3",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQR7RMQU0e4Tl6hbf_D8HbMP-twYteklmOgXnqRVbX3xMRL0vbDX",
        url: "https://drive.google.com/file/d/1Tzy2eFt1almlNxZkXfiOVvA-hkGLCvch/view?usp=drivesdk",
        author: "Unknown",
        year: 1995,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 274,
        name: "Leprechaun 4: In Space",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQSAdWzqh0TdZcph7yVA8thcVhZuSD8IpM6aVK8_cGGpRy5BP4sM",
        url: "https://drive.google.com/file/d/153R-JCEBqmgs3WrcHkEabTynjwa0Ryxs/view?usp=drivesdk",
        author: "Unknown",
        year: 1997,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 275,
        name: "Miraculous World: New York – United HeroeZ",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRcjvDqFCJXTkYOUZUfrcV3Oerm69alJf8N5lqc3s5LtAXWRgz3",
        url: "https://drive.google.com/file/d/1jTfxqP7BrcbIv5SVAxHP7FFIdt8A51ZJ/view?usp=share_link",
        author: "Unknown",
        year: 2020,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 276,
        name: "Maleficent",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRpRgqNe-M0A4Q7RxPDug03C5tTdmxIyPZuvauntFLu8odAg5cA",
        url: "https://drive.google.com/file/d/1yx66GkjBaCwjcMNoovV8w9yPNlZ7Q4Gu/view?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 277,
        name: "Mean Girls",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQRgbjtg_EtFEK89VttC4Zu4y4asqjtIb02DGiu1kJtwMCFvH289",
        url: "https://drive.google.com/file/d/1Hab49OuPK37MngOtQolLsVIzJ4AK9cNA/view?usp=sharing",
        author: "Unknown",
        year: 2004,
        genre: ["Comedy"]
    },
    {
        id: 278,
        name: "Moana",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTq7M1d9ljrLzBxmn-vxceGdGGgoD8vg6ITrscZYUrHPANgz7-E",
        url: "https://drive.google.com/file/d/1Zkep5HZHk6daQhYjAN5Y9fBGy-K9dCu3/view?usp=drive_link",
        author: "Unknown",
        year: 2016,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 279,
        name: "Mulan",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRp9CxshAq-rdiP3GQLuYN-xrDh9RMiW7ubZIvf4z79VOEdlpR",
        url: "https://drive.google.com/file/d/1ye-qQ6ZmBW98Xab4sjDJw1oxmUw_piBz/view?usp=sharing",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 280,
        name: "Norbit",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQRqOuaBShpD-3pcGaBsL5bDgzNfr898Mu029eYaO9OXCWu3zuDO",
        url: "https://drive.google.com/file/d/1PUIzjrlfRen4M7CqwIcmVdABNBpMWt5s/view",
        author: "Unknown",
        year: 2007,
        genre: ["Comedy"]
    },
    {
        id: 281,
        name: "Mighty Morphin Power Rangers: The Movie",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQSrv4uj6AR7uuyy0YyYh7zFqdJ4UkiFGk1dD-XhEgQS_Oi_KuBG",
        url: "https://drive.google.com/file/d/1e-f3lzrTrRV3iVT7Ft-KLSd6fHbyUT2i/view",
        author: "Unknown",
        year: 1995,
        genre: ["Action", "Adventure"]
    },
    {
        id: 282,
        name: "The Peanuts Movie",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQSpi_GztV05NV6T_X8SJ38nft97S_qLTIA-p-OM6znkNpAIkXvV",
        url: "https://drive.google.com/file/d/16Ze08q_XKmANPNYreDVZnEbZEZTSLwOa/view?usp=share_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 283,
        name: "The Polar Express",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQRh2MtEDbfjWSqt7sSfkoro22E5JxOvU_1ShcBP-VJDPXze5LG3",
        url: "https://drive.google.com/file/d/19KYYKqlEQyEuUTUQv32U53WoIDvKTRrx/view?usp=sharing",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 284,
        name: "PAW Patrol: The Mighty Movie",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQSPMgZRFdZuJnoNp9ZRzZAxBUF7HknfjBZFFpqp7jwgjBS2jZuw",
        url: "https://drive.google.com/file/d/13PKSmF1dnXkByra1B5NLarzB_ux4cU0T/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 285,
        name: "Power Rangers",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQSXjLPkoQZ-nzSNezpXY1Mjhw2PJ08kRJ3GD4EjQZNbU08Koh6H",
        url: "https://drive.google.com/file/d/1bAS1zgiXsYJVXzhra9Fg2PHWBbVDU8lJ/view?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Adventure"]
    },
    {
        id: 286,
        name: "Ready Player One",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQRXABLPrBzGZLTKsr-ljq0DZep8RlVArEiQ7zKeHVj9pQCYMV1N",
        url: "https://drive.google.com/file/d/1vCPMrNGFL3Kyf1J4qaySzKnACtg8eAqj/view?usp=drivesdk",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Adventure"]
    },
    {
        id: 287,
        name: "Rio",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQRNwt48_T7xAOZ2RiDpF-ALaS1uCiUhvUlzGG7gCCcLY7YNCCn8",
        url: "https://drive.google.com/file/d/1DIHKkPm7JVwOWWgM5RvYgOhAbFXWOAhf/view?usp=share_link",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 288,
        name: "Rio 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQSVzgpmxZOMe7dBUXw6F8EfNIxXiWxZcdc_m0vAJ2vAWYmFdKhW",
        url: "https://drive.google.com/file/d/12oiUUNl2_I7l1GsXLD74FA0wJlrRX7v_/view?usp=share_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 289,
        name: "Real Steel",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQQB-CEqDyKq4ZlSvDj8w79lfBDZ0OQRO574m4djlt5RxkH9gd1e",
        url: "https://drive.google.com/file/d/1zamnVJgx2cGGc4r2w9jWiEqRIG9WJREE/view",
        author: "Unknown",
        year: 2011,
        genre: ["Action", "Drama"]
    },
    {
        id: 290,
        name: "Ratatouille",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQRUYn6k1MCkCJiy9cpwzwrmH272y6kt_GomQxiwwmqhyu0QXED",
        url: "https://drive.google.com/file/d/1kjVDdXtZ3-O0SndMHeIwMXe4jNZJ4w2C/view?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 291,
        name: "Ron's Gone Wrong",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQRB6qRbfbRP_khKgg-MqS6n4GyNceZ55VC4fnj_ABsU-dQ_Xqj_",
        url: "https://drive.google.com/file/d/1nKl-oBgmnWygnF7xm6CfSWikp22ElVZY/view?usp=share_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 292,
        name: "Rambo III",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQSsTzJT8w-5JhuFp-yrjjibl89saPuRaBq0XveackrhbCl6EfLe",
        url: "https://drive.google.com/file/d/1KDIkm6VSTb_QrvSb8Gvbus8z-L3BGySI/view?usp=sharing",
        author: "Unknown",
        year: 1988,
        genre: ["Action", "Adventure"]
    },
    {
        id: 293,
        name: "The Rugrats Movie",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQRiOAeMAk2uW2KU9usy3dKfEk46zjkLEi9u25_VnKUwXUwnIg0o",
        url: "https://drive.google.com/file/d/157WJal3P65gdyFlDbP4DcRfNku-Oursg/view",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 294,
        name: "Rugrats in Paris: The Movie",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQQO1Ns5Kfrc1vUiFLOrXD3uanfUqTgt5J3jjO2BD3S7G5yZ6DNU",
        url: "https://drive.google.com/file/d/1w3PdNgN0AXDmG1CYRv7v0kMYrC1Ywu_0/view",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 295,
        name: "Romeo + Juliet",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQQmmA175WYmKPVV6XjJd8DFeJ8dmt7iDoSQs2rRxx3yx-uzZAXK",
        url: "https://drive.google.com/file/d/12_qQEuH75vHIqFjIwmDlawqQmav5RG-u/view?usp=drive_link",
        author: "Unknown",
        year: 1996,
        genre: ["Drama", "Romance"]
    },
    {
        id: 296,
        name: "Rush Hour",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQQoqWyMA-oJ1QcTyS_7Uj461RDVzXpWOIswGRsrg4jQTKY-BWTh",
        url: "https://drive.google.com/file/d/1ZcBKqjCxKjyddbVmb8sdOtCo-14v6fTp/view?usp=drive_link",
        author: "Unknown",
        year: 1998,
        genre: ["Action", "Comedy"]
    },
    {
        id: 297,
        name: "Rush Hour 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQRV3GU_IDg_CWuOPL7VjJ7wZfLiks4euuhSXaVx7xa3qTd2uSJC",
        url: "https://drive.google.com/file/d/1mnNpYvlG_QNVxpq8LniD4hOPLPinnBEP/view?usp=sharing",
        author: "Unknown",
        year: 2001,
        genre: ["Action", "Comedy"]
    },
    {
        id: 298,
        name: "Rush Hour 3",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQT3JA11_F2PmlB8GtzIYc7R_EH4mQ0BxFEH15eu71VyiLsONOs2",
        url: "https://drive.google.com/file/d/1fIOuM1hV1Ga0O6eQrhvozLNc35Rw-XB8/view?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Action", "Comedy"]
    },
    {
        id: 299,
        name: "Saw",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQb6EWw3r6jNkS1hOAhWEMBXIgDq1yJWn15dJSwnkSgm2B6Yc4B",
        url: "https://drive.google.com/file/d/1nZn3QfKiiZgg4nx3GRA4-K6obuJLlepm/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 300,
        name: "Saw II",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRwJBLJjiLwk3Iiq_WHYRtf_kbs-jK_f54IEs9qpS3WDMRzv2L",
        url: "https://drive.google.com/file/d/1eQLt5qFXYBjdvN05Jryfkc0MUF6eLZfS/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 301,
        name: "Saw III",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQJBYrNm7WZU0_PGxF7HVV0yqNCY8wWHGtjg0uRRS2n6W0F2DDe",
        url: "https://drive.google.com/file/d/1afqsupX8WtCzEt3AbeKe_Ffwfb4oXzsa/view?usp=drive_link",
        author: "Unknown",
        year: 2006,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 302,
        name: "Saw IV",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQR08gfuHHprttVGmGve8B2zABdPys90DeBIy0LObnePgXQQIYRm",
        url: "https://drive.google.com/file/d/1XmKqBrU4I1QqPnKG5WGpVImeTFvBjy0n/view?usp=drive_link",
        author: "Unknown",
        year: 2007,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 303,
        name: "Saw V",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTZeTRVXSqiPGCezubN3vhobUFMAa0MHeESq9rqVtJEI3kaD35X",
        url: "https://drive.google.com/file/d/1Rng7E07HcEPZmWvxYHk2gnrhArp_0MsS/view?usp=drive_link",
        author: "Unknown",
        year: 2008,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 304,
        name: "Saw VI",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTv_fqql_iAIszlP5qG5735UX8NVGXXFud/view?usp=drive_link",
        url: "https://drive.google.com/file/d/1v_fqql_iAIszlP5qG5735UX8NVGXXFud/view?usp=drive_link",
        author: "Unknown",
        year: 2009,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 305,
        name: "Scrooged",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQT17VEfXZPdkqmtWv3Qqdyp9T2Tm1TpJNfw0Ct5j08K9_QayuhT",
        url: "https://drive.google.com/file/d/1zmDJ-0X5qV2niOZe7ZsL_sPk6w7XvDnr/view?usp=drivesdk",
        author: "Unknown",
        year: 1988,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 306,
        name: "Scream 7",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTFeYb9DChjSMlrefx6Di1cDkQ003gLICOVe63jn7xUB165_JQZ",
        url: "https://drive.google.com/file/d/1RtaN8_Xsodf4Ub5K_yRp6eOx62tbj7Ap/view?usp=drivesdk",
        author: "Unknown",
        year: 2026,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 307,
        name: "Shazam!",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQR4sh8JNl4f6f7KUmSWExoj6G13bJS8Vle44d5A_p9vd_qO90kz",
        url: "https://drive.google.com/file/d/111DMVHuhGLLFunQ1ixi_OG8ui0ckXbfU/view?usp=share_link",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Comedy"]
    },
    {
        id: 308,
        name: "Shazam! Fury of the Gods",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTvoNq1HXBYEV-SPdP79CLBLxZ377JOW_77QrA9GG6mts7rkKeg",
        url: "https://drive.google.com/file/d/1LC17KNt1pxG1zJ43CwIBNGXaCN3cmLPc/view?usp=share_link",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure"]
    },
    {
        id: 309,
        name: "Suicide Squad",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTcBMCsMHdRilWB2GfG2gll0D8RKLuXBj7lOd5Q-pXD2T46QVia",
        url: "https://drive.google.com/file/d/1m2m6kudeN5pivaeCWfMR88xXEyZg8nFK/view?usp=sharing",
        author: "Unknown",
        year: 2016,
        genre: ["Action", "Adventure"]
    },
    {
        id: 310,
        name: "The Suicide Squad",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTnVJ6rICHStjDqhu0ZCUD1noA3_1dD0nUxPJhM6mccDKl8XAX",
        url: "https://drive.google.com/file/d/11nKqV7QKkATlvO7pt8eHlfS32rSHeOVZ/view?usp=sharing",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Adventure"]
    },
    {
        id: 311,
        name: "Star Wars: Episode II – Attack of the Clones",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQQDrLeiB4Fv66hgfkgsosdiFoDyAt9rClQWN4GifqTv5UwdJqAV",
        url: "https://drive.google.com/file/d/1u0ZRN7s8rgAMYtvnGf3zTjpM7Fu6TmW_/view?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Action", "Adventure"]
    },
    {
        id: 312,
        name: "Star Wars: Episode III – Revenge of the Sith",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTZTS3juXvMCxUdbrvxQEmfZpiCZQfNOkqeov_v2CVh4W-qljHb",
        url: "https://drive.google.com/file/d/1lEszWnr2BinTfzBGqtoDV1W9wMIlTQtb/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Action", "Adventure"]
    },
    {
        id: 313,
        name: "Star Wars: Episode IV – A New Hope",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRzI0IBVHQqfBNxpZy4lM6mq6biSRd9vUw7FHQPkaRQv2JEJ16r",
        url: "https://drive.google.com/file/d/1nDgCNAuFgSI6fDKbRZFkDhzViib1ixYS/view?usp=drive_link",
        author: "Unknown",
        year: 1977,
        genre: ["Action", "Adventure"]
    },
    {
        id: 314,
        name: "Star Wars: Episode V – The Empire Strikes Back",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQR1GTV79PCln0jJ0XS0jpi-2rgOOa1Do42GZu7s98kUWKY6a2j",
        url: "https://drive.google.com/file/d/1q0Jof59Il_So2z5Q38ANn55qB2GCpOx3/view?usp=drive_link",
        author: "Unknown",
        year: 1980,
        genre: ["Action", "Adventure"]
    },
    {
        id: 315,
        name: "Star Wars: The Last Jedi",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQRlIy4GXVK2e5tkxIixayYlkMGDFGJ-GqZzHxdi6btn2ulMqkAT",
        url: "https://drive.google.com/file/d/1vCdep3QXu8GE9IaNUdVmCGLiG24kFrWb/view?usp=drive_link",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Adventure"]
    },
    {
        id: 316,
        name: "Star Wars: The Force Awakens",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQSobobwiNCS-SLNNTuB-wrJkaO5N0h6PmNKNG4pALt5M7J_iBCL",
        url: "https://drive.google.com/file/d/1D-T-C4PNPbZ61wiHqXgQlQqYy_NTcsKa/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Action", "Adventure"]
    },
    {
        id: 317,
        name: "Star Wars: The Rise of Skywalker",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQmVGbrPTbutvVAiOQtGVoo-jAZawOoog77H02_ReMnfcSXBxtz",
        url: "https://drive.google.com/file/d/1viDV-Gu6yGHOpyaDefPH3Id9fXSHuTsi/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Adventure"]
    },
    {
        id: 318,
        name: "Solo: A Star Wars Story",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQS45q1X-awjLEUlX0P0lbFkg-WgtMjOjMI5cgYKn5jGHVsLwuZm",
        url: "https://drive.google.com/file/d/1cVMCqyg7byeajsDkn4cyHQe7SSLfxVPL/view?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Adventure"]
    },
    {
        id: 319,
        name: "Star Wars: The Clone Wars",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQT2mhuclPglqUKmZXVYzsadpnr2joqY1YxnHzC_K5PaTr9W5-s",
        url: "https://drive.google.com/file/d/16dO2t6nMYzRFTKGBVByMPYtru6kwix7H/view?usp=drive_link",
        author: "Unknown",
        year: 2008,
        genre: ["Animation", "Action"]
    },
    {
        id: 320,
        name: "Snitch",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTjU91tgPhOMiFWDodmN-odGo5vKtykRa_BTMP6qNxlg-zGEr6O",
        url: "https://drive.google.com/file/d/17hMZl5qq3Khflm_xUYZW9b8nGCJ6OBfA/view?usp=sharing",
        author: "Unknown",
        year: 2013,
        genre: ["Action", "Drama"]
    },
    {
        id: 321,
        name: "Scary Movie",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQS8U5l6FdSR58uF2yH-1aWMvidsVB-v0994kOlaCaE7RjXWZbc",
        url: "https://drive.google.com/file/d/1-61Fls8_MDTVq3r5dHP58joVRiUloxZQ/view?usp=drive_link",
        author: "Unknown",
        year: 2000,
        genre: ["Comedy"]
    },
    {
        id: 322,
        name: "Scary Movie 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQT--k7is8XGFIrpMxxjebnWbhQtvbjuCZlesOJyZwHh4uUN0Gy7",
        url: "https://drive.google.com/file/d/1Jmeyjhlpg6A-W-XJPoqC8uhtWztuQe-F/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Comedy"]
    },
    {
        id: 323,
        name: "Scary Movie 3",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQQ3N_lHoXqL8IDIUzZcsRHUr9MCvT9nlLpk22KxrCf4Vd7sJd6b",
        url: "https://drive.google.com/file/d/1KN1dzjj-d6MhY47MIgWdT2Au10Ft7Bf1/view?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Comedy"]
    },
    {
        id: 324,
        name: "Scary Movie 4",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQRJ2iM679lxF9AYAILe1fYYINn2W7Zm5FNoje_hOzXo8_y072q2",
        url: "https://drive.google.com/file/d/1pgH5VfJEi5NRVEtp2y_vZMSOk_rh3Har/view?usp=drive_link",
        author: "Unknown",
        year: 2006,
        genre: ["Comedy"]
    },
    {
        id: 325,
        name: "Sleepy Hollow",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQT66qHTJZ1TpW4oUgPQi3ITduoKcv-rGwoNnqSaoTCvzbu8Zzn",
        url: "https://drive.google.com/file/d/18gseXON5RP2ipsWcd0XGZH9k4TyaeYYR/view?usp=drive_link",
        author: "Unknown",
        year: 1999,
        genre: ["Fantasy", "Horror"]
    },
    {
        id: 326,
        name: "The Lion King",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQSPSpeAmNyoi3aUuqH9CBI7JTocyQgXRS1Q9rceFOUe5tpVS3sx",
        url: "https://drive.google.com/file/d/1GrJxp4D9XrmYBG_bqRgp1UvQaapyjoV7/view",
        author: "Unknown",
        year: 1994,
        genre: ["Animation", "Drama"]
    },
    {
        id: 327,
        name: "The Lion King II: Simba's Pride",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQSBqScQjUvLBeK7EE9BOK0XqDWqvf4FIujCLeW-znj-EtHaJBr",
        url: "https://drive.google.com/file/d/1-sT4cdDqG6tt4wI0ba7Z3FhDoX8ded8L/view",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Drama"]
    },
    {
        id: 328,
        name: "The Sandlot",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTbNpqLEb51Rrfr5S6IRSDmOwLNZkH9raRMHMoC1-0MjFBAgx4f",
        url: "https://drive.google.com/file/d/1G9qRpMiBq5HD-vqKQs9sq8csZCFccaiD/view",
        author: "Unknown",
        year: 1993,
        genre: ["Comedy", "Family"]
    },
    {
        id: 329,
        name: "The Green Mile",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQT3-k6Fs1JapvhcPmLikUW9X_zqVmDkIPPqg1u6t2_swGi8UDwQ",
        url: "https://drive.google.com/drive/folders/1Yaled5HTPlCdoX_7MAhu937sGTlP7PV4",
        author: "Unknown",
        year: 1999,
        genre: ["Drama", "Fantasy"]
    },
    {
        id: 330,
        name: "The Brave Little Toaster",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRtOc9wuxibxMgycUhHZEDM1gjgF3ueyP0jxC337r2xhcsXWxwF",
        url: "https://drive.google.com/file/d/1qZxoOGQTxqwlJtOQbwN8jeyD_yVvX7yc/view?usp=share_link",
        author: "Unknown",
        year: 1987,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 331,
        name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQT5qcfHWWzWW03_X_AoCseNckVNSSPcsoTSc5vKbzsg34jvDHtu",
        url: "https://drive.google.com/file/d/14TYyfl0ogVnDyw_yKCrU_jKGPIDBM3Nu/view?usp=share_link",
        author: "Unknown",
        year: 2005,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 332,
        name: "The Chronicles of Narnia: Prince Caspian",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTNQIOt5NojZOPGwCa_cXX0AnnZY65EhYPDFriMoz2s9bGLgi28",
        url: "https://drive.google.com/file/d/1DxOEqY1EzxcJYSNk2s6xXLf2SSP-hTRI/view?usp=share_link",
        author: "Unknown",
        year: 2008,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 333,
        name: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQSqN6ygDHiOltNd4NTsxiGxT-lh9QCJyQZlGtK1BMRf3_YNaVfu",
        url: "https://drive.google.com/file/d/12_UK0B8umPhjw5c5WOge3PtcGoDB9Uk2/view?usp=share_link",
        author: "Unknown",
        year: 2010,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 334,
        name: "The Princess Bride",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQR4O1DGDc5x_3pDsKSsls9hhu7sOzDW524LQyu9QQQIgK8HrowQ",
        url: "https://drive.google.com/file/d/1YnPym55TCYUgdEe65MHELL13ygweFutT/view?usp=drivesdk",
        author: "Unknown",
        year: 1987,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 335,
        name: "The Wizard of Oz",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTzd3g7vD23lu1PbkrsrVUUqSdbzkA0klXqx0X6esomxCpieiyZ",
        url: "https://drive.google.com/file/d/1ZfNxrVWB0U1Nwsrc03i5v9vGJtMJ9Ts3/view?usp=drivesdk",
        author: "Unknown",
        year: 1939,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 336,
        name: "Return to Oz",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQQEpSWurtvfWpPb2Yobu0aW3PZ6Ee4HGQEKULOHasXZqQTugNvP",
        url: "https://drive.google.com/file/d/1qINcGAx8SUBfoh3O-HeVLetY_rSVueAG/view?usp=drivesdk",
        author: "Unknown",
        year: 1985,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 337,
        name: "Transformers",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQQsoMJd0WyTnWOV06jp_zbsy_PfcKXIuKAHDGdaCtj1CWGdmlUs",
        url: "https://drive.google.com/file/d/17FH0E-XliQ0VAWNnxrwkvhUrCCGLKx2A/view?usp=share_link",
        author: "Unknown",
        year: 2007,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 338,
        name: "Transformers: Dark of the Moon",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQT_wf3Rkc65Zdo8kSkRBdIjuVl7_46uZcvVbGZSvyhbeg15MmY9",
        url: "https://drive.google.com/file/d/19dfiTEEqIVE9cxVBsyNVoG5c4UebhS0F/view?usp=share_link",
        author: "Unknown",
        year: 2011,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 339,
        name: "Transformers: Age of Extinction",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQR4Zqyz71oScjVbQ_Fm8TgwEgAG_N8BduPMo3jCrE9Qm2x8EreF",
        url: "https://drive.google.com/file/d/1evgnLc_0TRlHQ8_tcMcZYaYY-2_RmKWZ/view?usp=share_link",
        author: "Unknown",
        year: 2014,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 340,
        name: "Transformers: The Last Knight",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTcaimbsJ-RlOtxO_6xv7A_li4j1m3tab9agdmXy8gk2rjYl5Xl",
        url: "https://drive.google.com/file/d/1b9ZHT2vDIp-JJ9JD0PWbEbyU1bDZMcPl/view?usp=share_link",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 341,
        name: "Bumblebee",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQd7jrtaOp4wqOlX6orcwS65hSn9SQUeTLjbXoKWomQYA2VqDxP",
        url: "https://drive.google.com/file/d/1wqi9Wk--koq0SqRkoVZWXLVJBtABkjPy/view?usp=share_link",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 342,
        name: "Tron",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQSXASaaKsH11l2GtAVigW8sRtzBkoOVsnbRjxjY0VDuFMiSd2-",
        url: "https://drive.google.com/file/d/1hbhWcI11gA5EcXAxXGJkIjzq7VQIpZGp/view?usp=drivesdk",
        author: "Unknown",
        year: 1982,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 343,
        name: "Teenage Mutant Ninja Turtles",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQRvL3L_bahxM8z4nz-QnHFTvo19Rog_75lVmdBm3xskw3jFN9Ay",
        url: "https://drive.google.com/file/d/1ivJXBaVGvN_HQJf-h46ko2DjyHHBZMH1/view",
        author: "Unknown",
        year: 1990,
        genre: ["Action", "Adventure"]
    },
    {
        id: 344,
        name: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQQe-oFfILzMrkzjz1Nz6dq7dNXhUOxv9X_copc3FJ3Ez9YzUtNx",
        url: "https://drive.google.com/file/d/1Bp9ioxFqOCfmEbQM90cbLcFAn9bPysDu/view",
        author: "Unknown",
        year: 1991,
        genre: ["Action", "Adventure"]
    },
    {
        id: 345,
        name: "Teenage Mutant Ninja Turtles III",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQbNwXgJ8rmH25hH_opHQbzD6JiNDAazHlFO7sazCAA8EXz4pxJ",
        url: "https://drive.google.com/file/d/1gdIpjtTCHV_a8p9KPQaQg1ljIcanpu5S/view",
        author: "Unknown",
        year: 1993,
        genre: ["Action", "Adventure"]
    },
    {
        id: 346,
        name: "Turning Red",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQYGcDQZPX0Ghja5A8R0Vk9OT-ewrl6pbh0OPRXl0v38q74pnH9",
        url: "https://drive.google.com/file/d/1joF2I_zdjepCD9ukmjV672HTICUfp4tO/view",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 347,
        name: "Teenage Mutant Ninja Turtles: Out of the Shadows",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQQ5s9EeJQtwO7TlBYwEI3Qv9y7kZRKyYej7Z_GHsf2fNSw3kknC",
        url: "https://drive.google.com/file/d/1Bp9ioxFqOCfmEbQM90cbLcFAn9bPysDu/view",
        author: "Unknown",
        year: 2016,
        genre: ["Action", "Adventure"]
    },
    {
        id: 348,
        name: "TMNT",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTkXkpFp8nb09lazNxAC7YhcRTT-khLQdvUqW0CePZZ480Cs2W7",
        url: "https://drive.google.com/file/d/18iqYAOVbRHOT7jzJ3sqlyxi8RS5AH5sM/view?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Animation", "Action"]
    },
    {
        id: 349,
        name: "The Good Dinosaur",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQRhFB5EB5O5Y4KI08D8bNoJGisuJvhahBApemjOPLflXsMJYGTK",
        url: "https://drive.google.com/file/d/1vELzmz9u6vQ18YtMipK9nSWJhZLP6KaH/view?usp=sharing",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 350,
        name: "The Little Mermaid",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQcIBCSngOPWrqGbjFB8DTlTdJXrc6NXp-qHjP-OjFniTrRl2ZJ",
        url: "https://drive.google.com/file/d/1GM7QyJzFwEKM2fM42SWb7oIRN2UPUzqM/view?usp=sharing",
        author: "Unknown",
        year: 1989,
        genre: ["Animation", "Musical"]
    },
    {
        id: 351,
        name: "The Brady Bunch Movie",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQSn-MWfPJUHnEOZjkEcwYhM-bjy0Y1a4LDHVenQVrg_QXcc9mst",
        url: "https://drive.google.com/file/d/18i5j4gguKnfjNXVcfPKLz3GbxaiWbhrh/view?usp=drive_link",
        author: "Unknown",
        year: 1995,
        genre: ["Comedy"]
    },
    {
        id: 352,
        name: "The Purge",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQSB42KBjwptX7K_YMYpgmIHQcYSiTBSRBUsi5cgwKO0vosFeOCW",
        url: "https://drive.google.com/file/d/1PFz-u8_kVFY8Z--NyloACB1DUwiT0oK4/view?usp=drive_link",
        author: "Unknown",
        year: 2013,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 353,
        name: "The Purge: Election Year",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQQealOoCUe2m6tjoQT6V5AveTE1CUAL9_XfUkW8Zb6kgrhlqoc_",
        url: "https://drive.google.com/file/d/1TmtXANeLZHYqnxcjn5JsiO2LMi6J7H_z/view?usp=drive_link",
        author: "Unknown",
        year: 2016,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 354,
        name: "The Purge: Anarchy",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTnn5WNrVimVnmVjtPcUIrDiKlRArDt3gWWytXZoQ66YWxOz2EY",
        url: "https://drive.google.com/file/d/1d7FFXzRf0u7L23AqH-HsUua_kA8a_edQ/view?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 355,
        name: "Purge of Kingdoms",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTLx2_UEBgBYZT3de0KHddetgE7cNPV9WIVehrvRqJglY_nzgtH",
        url: "https://drive.google.com/file/d/1tfdoWD6V8uopSbpIE5GJUg0dZI-2P-yD/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Comedy"]
    },
    {
        id: 356,
        name: "The Forever Purge",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQRBCPBd-SsIu02SmLfCEAT7tVNaBD2D8M4cUmkoNQ6lHcoBYYXv",
        url: "https://drive.google.com/file/d/1gl4AuWnS848wnWlbH9ToOi7Ga1OV7y_1/view?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 357,
        name: "A Very Brady Sequel",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQS6C25A0p5vZFYIU23MnSmq4rZ3bT2_ExpPvtcPT30SRau2BVy5",
        url: "https://drive.google.com/file/d/139xwpHkb9tF64bSc0PnKZMBGtdCHh7pW/view?usp=drive_link",
        author: "Unknown",
        year: 1996,
        genre: ["Comedy"]
    },
    {
        id: 358,
        name: "The Mask",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQS07A8VeApODwJzJ8pL2VKFGTyC__tlwe64kfna-El4rmkKZfe3",
        url: "https://drive.google.com/file/d/13IzLS6dOFDxCk_mNWpttFncqs1hQoJ3L/view?usp=sharing",
        author: "Unknown",
        year: 1994,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 359,
        name: "The Addams Family",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQR5ehZCJ4nhEDd2QLl-FzEB-wODuejQAOul7vXwHkJDbR4ebA8G",
        url: "https://drive.google.com/file/d/19ZYLs_076nTJtl7bEUtkwpfbwwj-GevJ/view?usp=sharing",
        author: "Unknown",
        year: 1991,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 360,
        name: "The Little Mermaid",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQSzgEMr-b0r6azURMgMKJBsejBnyS80leit3BuXsTbNNONXcttO",
        url: "https://drive.google.com/file/d/1sFYkkRX85JK-a2LRl8_QmZPhYkYIn6KG/view",
        author: "Unknown",
        year: 2023,
        genre: ["Fantasy", "Musical"]
    },
    {
        id: 361,
        name: "The Smurfs 2",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTv4e-nTK65R73wKGqZVIxRzYpsJddKft8FDbtUBKr3LzYuAiN2",
        url: "https://drive.google.com/file/d/1FYgtU8rAKF32RjDRgYqODXzOHV0mQuBy/view?usp=share_link",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 362,
        name: "The Book of Life",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQS5f5iIe-zjJKQ-RI8WsFZgWAK83uExcrbw-Gwv-BtMDAt8aBg",
        url: "https://drive.google.com/file/d/1_MkoFWTqhvJM4YNqGFzSabwKSSL4fa55/view?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 363,
        name: "The Nightmare Before Christmas",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQSOgiKvYkIrCXt6eUC8cDtsMci6OPlooJ3BGr5XOOMP62zhrBgd",
        url: "https://drive.google.com/file/d/1BPYV-xYt77pQYztFM14VHk3wBZZ_l0ng/view?usp=sharing",
        author: "Unknown",
        year: 1993,
        genre: ["Animation", "Fantasy"]
    },
    {
        id: 364,
        name: "Twilight",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQmjt0QnOesE-4q_MTAF4cbDr9vs5H6MUlltEBXXU_KXN90SOcC",
        url: "https://drive.google.com/file/d/1YEIurV6IBGg7IYqTE9EX2vHLUQeEfBjH/view?usp=sharing",
        author: "Unknown",
        year: 2008,
        genre: ["Fantasy", "Romance"]
    },
    {
        id: 365,
        name: "The Twilight Saga: Breaking Dawn – Part 1",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQkJGta5x_f_d8L3xAHRml8CijY6rk4rYoB40N4U0p_KertM9wG",
        url: "https://drive.google.com/file/d/1GTUALkIJ4mkxae00sdbQdGUhUl4i8lGm/view?usp=drive_link",
        author: "Unknown",
        year: 2011,
        genre: ["Fantasy", "Romance"]
    },
    {
        id: 366,
        name: "The Twilight Saga: Breaking Dawn – Part 2",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQSmm3ZE2UOm2LjJZzC_8It0YdBsCLiXvVtIbUfgJPEzaWDJN2d3",
        url: "https://drive.google.com/file/d/12J1e35T-HQtLoTvfs70-TlZ4oJsXsxvX/view?usp=drive_link",
        author: "Unknown",
        year: 2012,
        genre: ["Fantasy", "Romance"]
    },
    {
        id: 367,
        name: "The Menu",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQRATQt6BNZVdY6jntTafu1unrvk2Bkads1CNNsSI_ukqkchd41l",
        url: "https://drive.google.com/file/d/14Audx3RqZPMTyLzErPzkKuCQPVWhTC0y/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Thriller", "Comedy"]
    },
    {
        id: 368,
        name: "The Princess and the Frog",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTUp5AzSoG_sHJ_J2erRI0DI6pT6KCXzF1635hYMQzM2VYO4kWQ",
        url: "https://drive.google.com/file/d/1PIQExpRvAPANHRDAZ-On7ld9je2O-5He/view?usp=sharing",
        author: "Unknown",
        year: 2009,
        genre: ["Animation", "Musical"]
    },
    {
        id: 369,
        name: "The Greatest Showman",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQRzC8YDonTuBVmDTALNQLc9476-WNyxpgBkKHziaVzQ2WeuP81a",
        url: "https://drive.google.com/file/d/1ErElLX4tetXsqWfpivPg3JlEht4ERibn/view?usp=drive_link",
        author: "Unknown",
        year: 2017,
        genre: ["Musical", "Drama"]
    },
    {
        id: 370,
        name: "Tangled",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQSD4LXFpI_Z1E-RnINQ3YNDiA5SWRrXWTyQH-EsJLMfkTi6Wbwh",
        url: "https://drive.google.com/file/d/1eirKJt3ulfEusRJ6OM0jwpJ_YbL8iExC/view?usp=sharing",
        author: "Unknown",
        year: 2010,
        genre: ["Animation", "Musical"]
    },
    {
        id: 371,
        name: "War Dogs",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQz118ZgeREdaftTv6pbVwDOEQFj3Eu41xL40YlUwcs-SkcyA0c",
        url: "https://drive.google.com/drive/u/0/folders/1dAcCk18ksPVX1vOSmwuwXA8IFoYpZ6eX?ths=true",
        author: "Unknown",
        year: 2016,
        genre: ["Comedy", "Drama"]
    },
    {
        id: 372,
        name: "Wish",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTiz1j_f6CY7G4Hom1g_dOxhKeQp9y60A_mE9FNi-fmIGtLhrJw",
        url: "https://drive.google.com/file/d/1KOmgE1jMV0jT2QkWFFd3ieEzwf4GbVOw/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Musical"]
    },
    {
        id: 373,
        name: "West Side Story",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQRarOYUceawAtewfDzZ_fKv41A8iqJa_a08B9x7beMyPajAVYnD",
        url: "https://drive.google.com/file/d/1CBGr82HWTP2XM-HJPURXFGV1uqE5-ip-/view?usp=drive_link",
        author: "Unknown",
        year: 1961,
        genre: ["Musical", "Romance"]
    },
    {
        id: 374,
        name: "West Side Story",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTLu6vPTCNv4CIe2PjMfOUfkqx4-sr-n7N21RTeGpX-3jyz6F3y",
        url: "https://drive.google.com/file/d/1XCfKDI8cKvYQO2UGFOKBe5qlmcL8Vsry/view?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Musical", "Romance"]
    },
    {
        id: 375,
        name: "X-Men",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTs686YIkHVvGXiyOSJ6cIwZdN_rJ32xKrT3RjY3gSmPBChqD6d",
        url: "https://drive.google.com/file/d/1BIJIiG8fdpyudl-1vXHIU3TBb3XMXJaa/view",
        author: "Unknown",
        year: 2000,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 376,
        name: "X2",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQQi7H7EH3feLf08W_zr_fhMdZEioOw4sayHEEmQnNtEMigSTeDU",
        url: "https://drive.google.com/file/d/16fA19e1MhAZaUaosRHey_c1VAZoM1iB8/view",
        author: "Unknown",
        year: 2003,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 377,
        name: "X-Men: The Last Stand",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQBJkBF8kdLTa4fwuCtojCFtkYhE5vzUYcnI9ZYSIqMFt2nODCh",
        url: "https://drive.google.com/file/d/176dVR22sSEaJMY5TfITCW9TIC2fNYBMm/view",
        author: "Unknown",
        year: 2006,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 378,
        name: "Zapped",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQRtBBV3nPyIgvfqzw371YvgS2hNhHObE5qzYNQT9qBSKXIP5tyg",
        url: "https://drive.google.com/file/d/1gO0OtMfAoVUaZGxX825aH48OySgHYd5n/view?usp=sharing",
        author: "Unknown",
        year: 2014,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 379,
        name: "Hoppers",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQRmZawCA6nU54kqX2dugkNQi4A58G-yqWyUu0E3YwbaVp5GgTC",
        url: "https://drive.google.com/file/d/1NkmCNf5CUML_KZvNi4fgGKA8r7fpXIdd/view?usp=drive_link",
        author: "Unknown",
        year: 2026,
        genre: ["Sci-Fi"]
    },
    {
        id: 380,
        name: "Red One",
        cover: "https://m.media-amazon.com/images/M/MV5BMjA4NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/file/d/1_placeholder_red_one/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Comedy"]
    },
    {
        id: 381,
        name: "Joe's College Road Trip",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQSQ2dnKKC8DQp0G9BNla7b5oE_-0LMZxR7zwolrwnUlWM-6_xQ0",
        url: "https://drive.google.com/file/d/1bIHwYf80n_DovwE2D7irPbgkyaVZOChx/view?usp=drive_link",
        author: "Unknown",
        year: 2026,
        genre: ["Comedy"]
    }
];