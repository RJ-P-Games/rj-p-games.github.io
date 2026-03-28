// Complete TV Shows collection - ALL 110 TV Shows
const ALL_TV_SHOWS = [
    import { TVShow } from './types';

export const TV_SHOWS: TVShow[] = [
    {
        id: 1,
        name: "200 Classic Cartoons",
        cover: "https://cdn.jsdelivr.net/gh/MKPlaza/assets@main/200-classic-cartoons.jpg",
        url: "https://drive.google.com/drive/folders/1_placeholder_cartoons",
        author: "Unknown",
        year: 2008,
        genre: ["Animation"]
    },
    {
        id: 2,
        name: "Alice in Borderland",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgZjeijDWglRq6OTEXDMoU8VV8E3Euv2GbMPAYphhTzrszAu3u",
        url: "https://drive.google.com/drive/folders/12m78G5R4YjPUCIDIHJ3VAnK7IJRbSw8A?usp=drive_link",
        author: "Unknown",
        year: 2020,
        genre: ["Action", "Drama", "Thriller"]
    },
    {
        id: 3,
        name: "Avatar: The Last Airbender",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU0R_b4XdGsZkrl1lyxtLp1gmPNuIbA2u9HDRqWJhGi616WKCY",
        url: "https://drive.google.com/drive/folders/1OFWN8hASAuNWSn9mK2gANJ0PSQhvIA2r",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 4,
        name: "Abbott Elementary",
        cover: "https://m.media-amazon.com/images/M/MV5BYjU5YTdlZTItNWM5Yi00OGM1LTk1NGItNjY5MGU3Y2JkOWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/13dLvT0_1TkcRmVmF6tZlm80xqeoWhxZp?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Comedy"]
    },
    {
        id: 5,
        name: "Adventure Time",
        cover: "https://m.media-amazon.com/images/M/MV5BMjkxMzIwNmQtMzM5Ni00YWJiLTg4YjQtNjBiN2IxMjZhMGQ2XkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1OwoKydzUQUUp6n-Nh7CCAQXGLfchU8Ta",
        author: "Unknown",
        year: 2010,
        genre: ["Animation", "Adventure", "Comedy"]
    },
    {
        id: 6,
        name: "Adventure Time: Fiona and Cake",
        cover: "https://m.media-amazon.com/images/M/MV5BMzE2MTA5YjQtMzU5Ni00MWY5LWJiMTktOWRjZjZkMDVjYjlkXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1TWYO4e4xYDMVou36cJHASEnJdV4FFkOt",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 7,
        name: "Arcane",
        cover: "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1TKueC2iWAFibt1ih645ZWfQljYODJzs1?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Action", "Drama"]
    },
    {
        id: 8,
        name: "Barbie Life in The Dreamhouse",
        cover: "https://m.media-amazon.com/images/M/MV5BMTg0MDc4MzU4NF5BMl5BanBnXkFtZTgwNjM5MTgyMjE@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/16XksTOld5HoYI8uCgOU8aCHtlAFgERQR?usp=share_link",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 9,
        name: "Batman Beyond",
        cover: "https://m.media-amazon.com/images/M/MV5BMDExYjNiYTYtZDkwZC00NDcxLTk3YWYtMmIyN2ZlZGYyY2E0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1rrz2S1Rc7wEw4jl-6tuKd3-WRZ6mK0-W?usp=share_link",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Action"]
    },
    {
        id: 10,
        name: "Batman The Animated Series",
        cover: "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/12O2UQcS1Xszcb-9kn-s19ruqvk7xnrf8?usp=sharing",
        author: "Unknown",
        year: 1992,
        genre: ["Animation", "Action"]
    },
    {
        id: 11,
        name: "Beauty In Black",
        cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Beauty_in_Black_%28TV_series%29.jpg",
        url: "https://drive.google.com/drive/folders/1F2G8LJaV2rJ2pUlvIeGngHEVV2x8mITp?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Drama"]
    },
    {
        id: 12,
        name: "Bluey",
        cover: "https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1QwcWtD6GwWRa58w0wQjIweHHQJf47BOx?usp=share_link",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Family"]
    },
    {
        id: 13,
        name: "Blues Clues",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8odUnQOPZRKQVPuHkxLaCSOuJ80A61Sr2n6ZaMUKQJE6l--Fk",
        url: "https://drive.google.com/drive/folders/1vDYQQUT_BEMS779FI2rfC-FnkoUG3g4Y?usp=share_link",
        author: "Unknown",
        year: 1996,
        genre: ["Family", "Educational"]
    },
    {
        id: 14,
        name: "Boondocks",
        cover: "https://m.media-amazon.com/images/M/MV5BYjFjZTAxZTItYjhjZS00MzNkLTk0NDYtYWMxYTQxNTE3YTQxXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1ujarzaX_90FGOiRC15OmXOAgwSbdI_kA",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 15,
        name: "Breaking Bad",
        cover: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1IY6qairkXpK2RXE0UVtqwm5ZjeiGYk3N",
        author: "Unknown",
        year: 2008,
        genre: ["Drama", "Crime", "Thriller"]
    },
    {
        id: 16,
        name: "BoJack Horseman",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhwYmu9V65--UQSqlyuOCBuBdObRlhvbvRft3w5GDCp5QSmLy6",
        url: "https://drive.google.com/drive/folders/1Tw9CC4dRnCJxrgihyuICqLpkMJO3TjCW?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Comedy", "Drama"]
    },
    {
        id: 17,
        name: "Cobra Kai",
        cover: "https://m.media-amazon.com/images/M/MV5BYjA3NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1idzqcZUju0ADDEWnm1D9AC344rIFiGRN?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Comedy", "Drama"]
    },
    {
        id: 18,
        name: "Danny Phantom",
        cover: "https://m.media-amazon.com/images/M/MV5BNjJlNzc4ODktOGVjYS00MTJkLTgzZTYtZGViMDNlNmM2MGE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1iZZSfbqgfu8YDIP-5g8qp8XQ4al5WrDC?usp=share_link",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 19,
        name: "Everybody Hates Chris",
        cover: "https://m.media-amazon.com/images/M/MV5BM2U1M2QxZDYtMzgyYS00OWQ5LWIyNGUtMmQ1MGQ2NTU2NzNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1RUZj9WQzdEBYYLeKhD_Y9GRcZbNZMSEy?usp=sharing",
        author: "Unknown",
        year: 2005,
        genre: ["Comedy"]
    },
    {
        id: 20,
        name: "Euphoria",
        cover: "https://m.media-amazon.com/images/M/MV5BZjVlN2M2N2MtOWViZC00MzIxLTlhZWEtMTIwNDIwMzE3ZWJiXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1BVkiWaMVA1mZ1J2bJcnE3_ywvNFg1IKP",
        author: "Unknown",
        year: 2019,
        genre: ["Drama"]
    },
    {
        id: 21,
        name: "Family Guy",
        cover: "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/11W6C-Jqv9iQVasqjfiaYz77puax1UTjH?usp=sharing",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 22,
        name: "Family Matters",
        cover: "https://m.media-amazon.com/images/M/MV5BN2YxNmI0NzgtMGM5Yi00YjJmLThjZmEtYTQ3ZTljYTU4MjdiXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1YX2tgiy_q_-FWYwv5puLRdWOhwlJVTQ3?usp=sharing",
        author: "Unknown",
        year: 1989,
        genre: ["Comedy"]
    },
    {
        id: 23,
        name: "Game of Thrones",
        cover: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1-kchkgMKhucUCfcyTZ5j5_GS8jWu9TQC?usp=sharing",
        author: "Unknown",
        year: 2011,
        genre: ["Drama", "Fantasy"]
    },
    {
        id: 24,
        name: "Gravity Falls",
        cover: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1fU-FrVZ12bAZYxtxrofKkEQg2kMrIjm3",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Adventure", "Comedy"]
    },
    {
        id: 25,
        name: "Harley Quinn",
        cover: "https://m.media-amazon.com/images/M/MV5BYWQyMjQzOGMtY2Y0Yy00NjJkLWE3YjItOGEwODE1MWRlMjVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1ap71sKGnRDDqySR6TlfL_sXpwoM5B1Q9?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Action", "Comedy"]
    },
    {
        id: 26,
        name: "Harvey Birdman",
        cover: "https://m.media-amazon.com/images/M/MV5BMGNkY2YxOGItMDhmYi00Y2E0LWIwNmUtM2FkNzgyY2IyMGNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/140J4Jyv5DvSnrcM7bI9kvqMPUmTR6vZS",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 27,
        name: "Hazbin Hotel",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCsC5plwy8AHI6JOBacDs0NqcDDV-C2J4I-jzr2PPyEXwX2nrm",
        url: "https://drive.google.com/drive/folders/1FnnwXwhzJgxIFFjp9I0uW6EFknZ8l6U7?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy", "Musical"]
    },
    {
        id: 28,
        name: "Hey Arnold",
        cover: "https://m.media-amazon.com/images/M/MV5BYzhiYTYwM2QtNTlmNy00MGM1LTllM2UtOGJmZTUxMmJmZjdiXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1tvjU4AqKfPOM_wPZA-pJsjYaOKguNaDD?usp=sharing",
        author: "Unknown",
        year: 1996,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 29,
        name: "Inside Job",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTN1-mfLCfHW6CGc7rFKuHo4dnWrkuPyjkQTE102YDJxQZmZr1U",
        url: "https://drive.google.com/drive/folders/1IFalooPss60gnsuzVd8C_szewNqEb6VF?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 30,
        name: "INVINCIBLE",
        cover: "https://m.media-amazon.com/images/M/MV5BZjE4ZDU4ZjMtZjliYS00M2ZmLThkNTItN2U3MmJjOGU0NmIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1S5OH4Rs78nCVUJX7CDrv9OEuW9UOYnvl",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Action", "Drama"]
    },
    {
        id: 31,
        name: "IT: Welcome to Derry",
        cover: "https://cdn.jsdelivr.net/gh/samtheskeleton/random-things@main/ITWelcomeToDerry.webp",
        url: "https://drive.google.com/drive/folders/1BmPAgeLnXjwEA5Dbj9T4jyGxCxZtUCG0?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Horror", "Drama"]
    },
    {
        id: 32,
        name: "KC Undercover",
        cover: "https://m.media-amazon.com/images/M/MV5BMTQ5MzQxMDA1NF5BMl5BanBnXkFtZTgwMzkxNzMwNDE@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1T8BbsKnX15lKidVFNmRuuKh8ErX5o5QI",
        author: "Unknown",
        year: 2015,
        genre: ["Comedy", "Action"]
    },
    {
        id: 33,
        name: "Kim Possible",
        cover: "https://m.media-amazon.com/images/M/MV5BMmIwNjQ5MzEtNTg4Zi00NWMyLThkZDktZDg0MGU4MmYzMjlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1OJgL1LyWu3FNJvsJ-Li3Vi18iJhKB_YY?usp=sharing",
        author: "Unknown",
        year: 2002,
        genre: ["Animation", "Action", "Comedy"]
    },
    {
        id: 34,
        name: "Kirby: Right Back At Ya!",
        cover: "https://m.media-amazon.com/images/M/MV5BZGVhYTMwODAtNzkzOC00ZjA5LTliNTUtYTkyYjA0MmFhNTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1LawIFQ48UCdP3-VUan7iWTm4l5EonWYw?usp=sharing",
        author: "Unknown",
        year: 2001,
        genre: ["Animation"]
    },
    {
        id: 35,
        name: "Lab Rats",
        cover: "https://m.media-amazon.com/images/M/MV5BNGI2NjU2ZGMtOWJhZC00OWFhLThjOTEtNDkyZGIyN2RhMDYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1Q8TzYtSqGaM7VkSsGtPCz4PikIWZQQI7?usp=share_link",
        author: "Unknown",
        year: 2012,
        genre: ["Action", "Comedy", "Sci-Fi"]
    },
    {
        id: 36,
        name: "Loki",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTStuhyop-i0Ld-YvRc4e4AtvwFRjOGCQT8W165zospxSJMloEt2",
        url: "https://drive.google.com/drive/folders/1688Cter0VKmjpR1g5YqyF2W9NfmPAbJ9?usp=sharing",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Adventure", "Fantasy"]
    },
    {
        id: 37,
        name: "Miraculous",
        cover: "https://m.media-amazon.com/images/M/MV5BODQ5NGFjZTQtNDkzNy00YWVjLWJiNGMtNTk1YzVmMmQ1YWQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1QsOt7Qy2e3OITwrO22moBpbnv3fpQ4MQ?usp=share_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 38,
        name: "Moon Knight",
        cover: "https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1nW610bRzpYobTHqK5k13LRkiZrRvDmZ8?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Adventure", "Fantasy"]
    },
    {
        id: 39,
        name: "Murder Drones",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTtDtu47UDguN2fsOWROWE6gg7nI78kItNa5-6xR1gcr-s__vNK",
        url: "https://drive.google.com/drive/folders/1QAiFXO6iG-IB2A2oGModfBP74aVHa6S8?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Action", "Horror"]
    },
    {
        id: 40,
        name: "My Adventures with Superman",
        cover: "https://m.media-amazon.com/images/M/MV5BMDdiYmU1ZGYtNzcyNC00NTMyLTlhYzUtMTQxOWI2MjdhMTgwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1tWh4y7PZNQuNaAjq-tZq3ivrhfo-fCni?usp=sharing",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 41,
        name: "Ninjago",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQRBBdnv67taam7wvG_n8182o2IYkMWTq7JFrreht2LAAOiuvVmL",
        url: "https://drive.google.com/folderview?id=15GtJc8NKaGoZyPoRXcJjTs6ZSQfKJ-xb",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Action"]
    },
    {
        id: 42,
        name: "One Piece Live Action",
        cover: "https://cdn.jsdelivr.net/gh/MKPlaza/assets@main/images/one-piece-live.jpg",
        url: "https://drive.google.com/drive/folders/1SIvo_3pKpUesX4ZDY2Y7Z59kXe632XWe?usp=sharing",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure", "Drama"]
    },
    {
        id: 43,
        name: "PJs",
        cover: "https://m.media-amazon.com/images/M/MV5BN2RiZTE5OWUtMDUxZC00ZGNmLTk1YTYtNzMxN2Y5MDdmZDU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/u/0/folders/1RUQMqskS3ybzT6w5WQGouH9EBd5pEcTh",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 44,
        name: "PeaceMaker",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Peacemaker_season_1_poster.jpg/250px-Peacemaker_season_1_poster.jpg",
        url: "https://drive.google.com/drive/folders/11RZjc9IzBxl1C26LUM4_LeF7ToNaLVLj?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Comedy"]
    },
    {
        id: 45,
        name: "Phineas and Ferb",
        cover: "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/15O2LLhprQNEUGA73u-jdNp3kL8UAHZUB?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Animation", "Comedy", "Family"]
    },
    {
        id: 46,
        name: "Pokémon: Indigo League 1997",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTN6UmgyAs2ys-Oj-z7xBq-U9WE0LPmKBrKP_TNFwyKeX7iP2Rs",
        url: "https://drive.google.com/drive/folders/1IPI30EquEp-SAFzT_piu4ROEK-N5F_MN?usp=sharing",
        author: "Unknown",
        year: 1997,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 47,
        name: "Pokémon: Adventures on the Orange Islands",
        cover: "https://m.media-amazon.com/images/I/71hw1ZpL1cL._AC_UF894,1000_QL80_.jpg",
        url: "https://drive.google.com/drive/folders/1w3zSI3aceZwV9rTfW6rFFtEXCt7CpP4C?usp=drive_link",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 48,
        name: "Pokémon: The Johto Journeys",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTp7tXfXovYQNUKQA7xsebEm_yntsfWH-cr9_1Q_JvZ9lMrR2_p",
        url: "https://drive.google.com/drive/folders/1R61bvEzEQNqqArO8X3P7WIDzl51NbL2u?usp=drive_link",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 49,
        name: "Pokémon: Johto League Champions",
        cover: "https://upload.wikimedia.org/wikipedia/en/2/2b/Pokemonseason4DVDvol1.jpg",
        url: "https://drive.google.com/drive/folders/15UwDr3yFoUUHC0If6TAwhI6bUNy27-RV?usp=drive_link",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 50,
        name: "Pokémon: Master Quest",
        cover: "https://upload.wikimedia.org/wikipedia/en/b/b4/Pokemonseason5DVDBoxSet.jpg",
        url: "https://drive.google.com/drive/folders/1DVgMJ8byBYNY4u8Tbozb3y3vYFyaaKWY?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 51,
        name: "Pokémon: Advanced",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTpRsPdQFuPNH5MNsllsTTQQuHCJ_Km6O8aP5cZbbT--TsC8CZgDv",
        url: "https://drive.google.com/drive/folders/1viWFHdfeZD83732j5O9TarHPwKzwg7gk?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 52,
        name: "Pokémon: Advanced Challenge",
        cover: "https://m.media-amazon.com/images/I/81Mtn7Si7NL._AC_UF894,1000_QL80_.jpg",
        url: "https://drive.google.com/drive/folders/1C_AhLMQGSfWl8S8yWuhAQM0lTfTbzLEm?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 53,
        name: "Pokémon: Advanced Battle",
        cover: "https://m.media-amazon.com/images/I/8134U8-xeSL._AC_UF894,1000_QL80_.jpg",
        url: "https://drive.google.com/drive/folders/1b_Boq9c-2JaQENUht994IdEwGxMMaf4-?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 54,
        name: "Pokémon: Battle Frontier",
        cover: "https://upload.wikimedia.org/wikipedia/en/2/27/Pok%C3%A9mon_Battle_Frontier_Complete_Collection_DVD.jpg",
        url: "https://drive.google.com/drive/folders/18JqFJFKlu-DgIuSuwmr5dcAhOdkJl_4v?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 55,
        name: "Pokémon: Diamond and Pearl",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTRe_K1W3nXyDIuRoxLg0Tk7GOKgIbC3siDRS3A03lOslKwkKXH_",
        url: "https://drive.google.com/drive/folders/1JqlS4GFiv35J0uNi2ac7M1aY_UWeMp4O?usp=drive_link",
        author: "Unknown",
        year: 2006,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 56,
        name: "Pokémon: DP Battle Dimension",
        cover: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9419422_b_v13_ag.jpg",
        url: "https://drive.google.com/drive/folders/1AWtvL-38qkaUUdym0fDbQEAV0Gq-YpQ-?usp=drive_link",
        author: "Unknown",
        year: 2007,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 57,
        name: "Pokémon: DP Galactic Battles",
        cover: "https://m.media-amazon.com/images/I/814FKzt9w2L._AC_UF894,1000_QL80_.jpg",
        url: "https://drive.google.com/drive/folders/1ROtMgoc6fkSZHkYEFyfwax1C5xJTRyfm?usp=drive_link",
        author: "Unknown",
        year: 2008,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 58,
        name: "Pokémon: DP Sinnoh League Victors",
        cover: "https://m.media-amazon.com/images/I/81e0dvUpCXL._AC_UF894,1000_QL80_.jpg",
        url: "https://drive.google.com/drive/folders/1uLr5MqHGx4Ac4BbJU_iIjcjd3HCnBFH0?usp=drive_link",
        author: "Unknown",
        year: 2010,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 59,
        name: "Pokémon: Black & White Complete",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTp_jHpvXtCnvvhfCY0aHnoVD_NaqpYGpGKOz43nPHsLvSo9XbJ",
        url: "https://drive.google.com/drive/folders/1diP15uMwjHiLcTOExHYM3vs0-BozvXeT?usp=drive_link",
        author: "Unknown",
        year: 2010,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 60,
        name: "Pokémon: XY",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTpSZFuNikZaGuPS-fYpNtsC0wN8SEkVCFoLlm--MIKBE8SlnyDwk",
        url: "https://drive.google.com/drive/folders/1_gC2TGwpgM4FOrLYKhZgaqbpC6aStDOZ?usp=drive_link",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 61,
        name: "Pokémon: XY Kalos Quest",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTpBB_cTazgVvMguN4Jsxi2mKpbmuas0fgmehS2sXYMn76Glr5mF",
        url: "https://drive.google.com/drive/folders/1B3lkLsMvzY46jNm3cW-oecLT3cV24wkj?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 62,
        name: "Pokémon: XYZ Complete",
        cover: "https://m.media-amazon.com/images/I/71tWpr9TCfL._AC_UF894,1000_QL80_.jpg",
        url: "https://drive.google.com/drive/folders/1GdptdijSMfbxlo_Q_pe1P2xe4rkGgGP8?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 63,
        name: "Pokémon: Sun & Moon Complete",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTpTW9SrkJfMkeK8dBR3LMl774Nkc4s3cy3MNQqNuTACKAQze2zdB",
        url: "https://drive.google.com/drive/folders/1knAcoOB7X5G2_luxTOEFcsqaRMjEwhio?usp=sharing",
        author: "Unknown",
        year: 2016,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 64,
        name: "Pokémon: Ultra Adventures",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTpQMpd6uO3eNiGRLSj3eKW22hFJSrcB6yGKCwlAkFpC6EE8-4myO",
        url: "https://drive.google.com/drive/folders/1Jdp67kPk2JUX3OhE5veQgRyo4kX2fvyw?usp=drive_link",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 65,
        name: "Pokémon: Ultra Legends",
        cover: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16663197_b_v8_aa.jpg",
        url: "https://drive.google.com/drive/folders/1XlhK3uNYxZMPeNsU8zZk-dtrR_MLcFze?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 66,
        name: "Pokémon: Horizons Complete",
        cover: "https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/Pokemon_Horizons_-_The_Search_for_Laqua_2025_Poster.webp",
        url: "https://drive.google.com/drive/folders/1zA-jxsnYr9NVEgsr7TfQeMAdB7MS7BjF",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 67,
        name: "Pokémon: Horizons: The Search for Laqua",
        cover: "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhM2JiNDQwMmI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1MaFFrLyA6NY92qJz6-mKnyAIH5B08V9E?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 68,
        name: "Pokémon: Journeys Series",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTpTv-Eg4tjVkmHk31IykBtJemKrZatPmUTRChapmJ3NoVrjyMj-y",
        url: "https://drive.google.com/drive/folders/1882yNi6g-xIqsp6rvzG3jIq9vOgcZv7O?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 69,
        name: "Pokémon: Master Journeys",
        cover: "https://cdn.jsdelivr.net/gh/MKPlaza/MKPlaza.github.io@main/Pok%C3%A9mon_S24_-_Posters.png",
        url: "https://drive.google.com/drive/folders/1sjzp8LdYsHaVF6UTmjJwH2EYafFZBBlW?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 70,
        name: "Pokémon: Ultimate Journeys",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Pok%C3%A9mon_S25_-_Posters.png/250px-Pok%C3%A9mon_S25_-_Posters.png",
        url: "https://drive.google.com/drive/folders/1owl3LPBqYHedZUU56V6ryIKaOXwsLtgG?usp=drive_link",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 71,
        name: "Pokémon: To Be a Pokémon Master Series",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Aim_to_be_a_Pok%C3%A9mon_Master_poster.jpg/250px-Aim_to_be_a_Pok%C3%A9mon_Master_poster.jpg",
        url: "https://drive.google.com/drive/folders/1Dxj1dB0i6By3jIYjpOtF27Kbfy5B3V9A?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 72,
        name: "Reccess",
        cover: "https://m.media-amazon.com/images/M/MV5BY2I4OTZhNGEtOTBmMi00ZDVjLWEzOTctOWFiOWRkMmViYTExXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/10frlZDyugiDyKuxu27PDvHf8r3_qxRLG?usp=share_link",
        author: "Unknown",
        year: 1997,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 73,
        name: "Rick and Morty",
        cover: "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1EhzdG061fossyvUWpAWzDB_b6WhAWvbS?dmr=1&ec=wgc-drive-hero-goto",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Comedy", "Sci-Fi"]
    },
    {
        id: 74,
        name: "Raising Dion",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTXArcVA3oKIA_JEpwH8_7vM_iHtB6_RLKJePLDGwtV9b7MSUk4",
        url: "https://drive.google.com/drive/folders/1CezJIUSiWvcBK0A0qRGWtCtqiDs4-zK1?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Drama", "Sci-Fi"]
    },
    {
        id: 75,
        name: "What's New, Scooby-Doo?",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTj5YWjjoWlnf82LQTLp8AFbtIyjMyurAMdnuVmfDW1tMzN163n",
        url: "https://drive.google.com/drive/folders/1lzhZ7zI8txmOQxERhfNrFewiU96kpnxZ?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Animation", "Mystery", "Comedy"]
    },
    {
        id: 76,
        name: "Scooby-Doo, Where Are You!",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTpRHBU_JBUES9RevRrrnp6Il66Div_VS5hTlkpQ4YSyIwO6Bie-j",
        url: "https://drive.google.com/drive/folders/1dq_qrg51SMtVW7SWAeYYrx-nKbfwKkXl?usp=drive_link",
        author: "Unknown",
        year: 1969,
        genre: ["Animation", "Mystery", "Comedy"]
    },
    {
        id: 77,
        name: "Scott Pilgrim Takes Off",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTldh0ID83lXukg4i4_2vKaguLHhDia9gC3WRXvnfaIAZaqhfn8",
        url: "https://drive.google.com/drive/folders/1HojWqmuk_1nHQkiYQ2oynmgjBUFkR2Eh",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Comedy", "Action"]
    },
    {
        id: 78,
        name: "Smiling Friends",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTpRbQWrP7TC_DzJciElD-Lhk9NnIYto4NdIhKuIsz8zh3l6aiKAo",
        url: "https://drive.google.com/drive/folders/19N-UdVDPOFmKkLtksBkZYwsNhfjmXA7r?usp=sharing",
        author: "Unknown",
        year: 2020,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 79,
        name: "Sonic BOOM",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTpTRS82ZTYwWQW6av4ZcXrKAiM1Y_EbQafn_OP4MWnekIi6inBbp",
        url: "https://drive.google.com/drive/folders/1XbAygEBBhC7K0d5ZrU1c3VMk1A2AEcXm",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Comedy", "Action"]
    },
    {
        id: 80,
        name: "Sonic For Hire",
        cover: "https://cdn.jsdelivr.net/gh/dino-cmxy/TV-Show-Posters@main/actor-sonic-for-hire-840596_small.jpg",
        url: "https://drive.google.com/drive/folders/1WORzHz85bNI-xPruLAEdcTvX9fRION4G",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 81,
        name: "Sonic Prime",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTpRxCbcbcd_Oi56H9uPBHgWwC7W3l8Ux5-HHIDyaQyTd4Z4LsOFt",
        url: "https://drive.google.com/drive/folders/1q_NeRaY-fU59j9eiZQMs5bu-uFDb7oK9",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 82,
        name: "Sonic X",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTpTLu7bQp9PaMRY2bNIiV6q_kKsCog8VDThCikwwmHimo4mT62aP",
        url: "https://drive.google.com/drive/folders/1HOYzXLzNkTTfzpAWmvMWSJaJ9kLo_PZF?usp=sharing",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 83,
        name: "South Park",
        cover: "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItMDRlYi00MWEzLTg4MDYtYjE2N2U5ODU1YjI4XkEyXkFqcGdeQXVyMTI5MTIzMg@@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1PzKaoaK4blzlaoxnwC20gZoeYE5mDxWL",
        author: "Unknown",
        year: 1997,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 84,
        name: "Spider-Man",
        cover: "https://m.media-amazon.com/images/M/MV5BYWRkN2M1NmQtZjhjMi00ODFjLTk2ODctYWJiOWNkNjg1OGY4XkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/11CP20VTJqf7a2gjsLLOOu88xBropDjl2",
        author: "Unknown",
        year: 1994,
        genre: ["Animation", "Action"]
    },
    {
        id: 85,
        name: "Spongebob Squarepants",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTpQ5Fs8tpg29mQcDhXJi_RMZsy2InmOJ5WO9XrOxreAnzC8ftuzl",
        url: "https://drive.google.com/drive/folders/1QpqcZWVMlzIru0g8xf5olhMeY75YKJkk?usp=sharing",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 86,
        name: "Squid Game",
        cover: "https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1Zs2H3Nxl-yQHm21RJNbh2bIAesJ5ouY9?usp=sharing",
        author: "Unknown",
        year: 2021,
        genre: ["Drama", "Thriller"]
    },
    {
        id: 87,
        name: "Static Shock",
        cover: "https://m.media-amazon.com/images/M/MV5BZGVmNWQyYmMtZDZkNC00NjAyLWFjZmMtYzJmZTMwMmYzYjk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1LquU3cM5cLHClNJYIzr3MMW3TWD7cFAf?usp=share_link",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Action"]
    },
    {
        id: 88,
        name: "Stranger Things",
        cover: "https://upload.wikimedia.org/wikipedia/en/b/b1/Stranger_Things_season_1.jpg",
        url: "https://drive.google.com/drive/folders/1nvlUoxv5y_55eN0yjkIGJ3u84p9wQGxm?usp=sharing",
        author: "Unknown",
        year: 2016,
        genre: ["Drama", "Horror", "Sci-Fi"]
    },
    {
        id: 89,
        name: "Steven Universe",
        cover: "https://m.media-amazon.com/images/M/MV5BZGJjMmI3ZDMtZTgyNi00MTZhLWE2ZjAtN2Q4YTUyMTg4OGY1XkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1DdwOFAilBai2kDZVmRDCoNkqxTu6_E_5",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Adventure", "Comedy"]
    },
    {
        id: 90,
        name: "Steven Universe Future",
        cover: "https://m.media-amazon.com/images/M/MV5BZjBkODlhZGMtZDRiYy00ODdjLThkN2YtMGQ5ZDAwY2Q1ZGVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1A-I64-vVIDKD14IzEh6mcMcvFmMH0NVr?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Drama"]
    },
    {
        id: 91,
        name: "Supergirl",
        cover: "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_.jpg",
        url: "#",
        author: "Unknown",
        year: 2015,
        genre: ["Action", "Adventure", "Drama"]
    },
    {
        id: 92,
        name: "TAWOG",
        cover: "https://m.media-amazon.com/images/M/MV5BNmEwYzNhODgtZDc2Yi00MDAyLTliNWYtMDRkMThmMWE0NGNkXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1BAI5pvu6W_DuBYOT9DW2LiUR62dgPmz-",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 93,
        name: "TWWWOG",
        cover: "https://upload.wikimedia.org/wikipedia/en/1/13/TAWOGTheWonderfullyWeirdWorldOfGumball.jpg",
        url: "https://drive.google.com/drive/folders/13oj-KiKH9dX2-q_yQT-XZV3xxXWNznt6",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 94,
        name: "Teen Titans",
        cover: "https://m.media-amazon.com/images/M/MV5BMjE5MjMzOTc1Ml5BMl5BanBnXkFtZTcwNDQxMDY5OQ@@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1vqoOxi2w4IJmPelqXsTmcNCczxb6hIO7?usp=share_link",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 95,
        name: "Teenage Mutant Ninja Turtles",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTpQV3DSM9bYeiNCni1x7Q_svGGwzNMlrt9q5jw&s",
        url: "https://drive.google.com/drive/folders/1h_pnGrifrJnpbP0H59oKqpo3dbCv5TSl?usp=sharing",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 96,
        name: "The Chi",
        cover: "https://m.media-amazon.com/images/M/MV5BMDlhYjhkMmYtNmUxMy00MjE3LTgyY2YtZGUwYjZlN2NlY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTpQmR3n8HCwwXduBya71Xfjm_4MYDu6cddK-Cg&s",
        author: "Unknown",
        year: 2018,
        genre: ["Drama"]
    },
    {
        id: 97,
        name: "The Cleveland Show",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTpQLWiVsQ5H1IOIn8dsH23CBVlOt5o-KKPQFpQJOoKnPKfKeX6hZ",
        url: "https://drive.google.com/drive/folders/12Hm67Xk3fNqRQ59pmZEBu1cq3PsC2KJH",
        author: "Unknown",
        year: 2009,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 98,
        name: "The Cuphead Show",
        cover: "https://m.media-amazon.com/images/M/MV5BZDA2Zjg3YmEtNGIzMS00YjM3LWJmZmUtNTc2ZDYzY2U5OTdlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1j_K1YV4w_sHAzwEAaUMl-qSk4qjrYSJ_?usp=share_link",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 99,
        name: "The Good Doctor",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTpR4uEfx9JopZDvlvvLB4W3cr8cN22vsDBO7xrJS4nqqpAzdXksx",
        url: "https://drive.google.com/drive/folders/1-xSt1mLjjtY87DSpKjVbnV1P37jv_CMs?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Drama"]
    },
    {
        id: 100,
        name: "The Last Of Us",
        cover: "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/12hjbl3XZmVF1WFsjWuiCMJ9USmenFV3L",
        author: "Unknown",
        year: 2023,
        genre: ["Drama", "Horror", "Action"]
    },
    {
        id: 101,
        name: "The Power Puff Girls",
        cover: "https://m.media-amazon.com/images/M/MV5BODY3YjMyOTktZWFiZS00MGNkLWExZjUtYjJjYjljMGM1YWY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1IYfB0oASMroneHQn8KansvGRnNIcYnFd?usp=sharing",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Action", "Comedy"]
    },
    {
        id: 102,
        name: "The Proud Family",
        cover: "https://m.media-amazon.com/images/M/MV5BMTRjYzdmYjctYTJjMy00MGVjLWFkZTItNGUxNGZmYzRmOWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/16Wl2PBxEjlETW1FzF7zZZ8vHH9WfO3eq?usp=sharing",
        author: "Unknown",
        year: 2001,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 103,
        name: "The Simpsons",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9CcRQTpSjBQ3mYHfXn9D5mOd5NIvOVtJtndaat3TYzgugN1q0RBhDS4X1",
        url: "https://drive.google.com/drive/folders/1tXo2krTMvXr-ATSqthy55PUpRRIu1HRr?usp=sharing",
        author: "Unknown",
        year: 1989,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 104,
        name: "The Summer I Turned Pretty",
        cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9CcRQTpS1v03xzkDtp2KAzL3n3mwuG32Db-UkFDTo2fP8UlqJIeF1Mbeu",
        url: "https://drive.google.com/drive/folders/1MYMY-BGuKDWgmcsuWjKX6uFV0yLukSBO?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Drama", "Romance"]
    },
    {
        id: 105,
        name: "The Walking Dead",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTpS4B03WCAkIK0U9kwizx8R70zP-FuHe7n22JkLmgIlrUy1pi8X1",
        url: "https://drive.google.com/drive/folders/1xtsZbxPaGypqsMTtRpgOEpSUyJvuYn1-",
        author: "Unknown",
        year: 2010,
        genre: ["Drama", "Horror"]
    },
    {
        id: 106,
        name: "The X-Files",
        cover: "https://m.media-amazon.com/images/M/MV5BZDA0MmM4YWYtYjY1Ny00N2RjLWFjNGQtYjJmYjM1YmVhY2Y1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/folderview?id=1ARvjA9abgf9qPCiAn0_A1tLjtGrNc_KP",
        author: "Unknown",
        year: 1993,
        genre: ["Drama", "Mystery", "Sci-Fi"]
    },
    {
        id: 107,
        name: "Thomas & Friends",
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9CcRQTpSiyJVbZqmXoYcYOvbUT2BhGADcrddaV1ouBGm81wfEF0fVgeSn",
        url: "https://drive.google.com/drive/folders/1OFWN8hASAuNWSn9mK2gANJ0PSQhvIA2r",
        author: "Unknown",
        year: 1984,
        genre: ["Animation", "Family"]
    },
    {
        id: 108,
        name: "Wednesday",
        cover: "https://m.media-amazon.com/images/M/MV5BMDE1NjNmZjgtZTg0OC00NjkxLWEzYzItMDNkMTc3YjgxZWQyXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1o99ZY5RLvFF1k0K-CU2Qu-MEm7rQZyap?usp=drive_link",
        author: "Unknown",
        year: 2022,
        genre: ["Comedy", "Horror", "Mystery"]
    },
    {
        id: 109,
        name: "X-Men",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9CcRQTpQTldYIoE2paN2vfxg4dvBC6AA7lRoKwaF_mA&s",
        url: "https://drive.google.com/drive/folders/18a_VCltjLCHu0UIgOrfRRxq7OIj7dw9i?usp=share_link",
        author: "Unknown",
        year: 1992,
        genre: ["Animation", "Action"]
    },
    {
        id: 110,
        name: "Yo-Kai Watch",
        cover: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/yokaiwatch_6.png",
        url: "https://drive.google.com/drive/folders/1yUIXCpBp86InMF8gNxKekCMbd0LBVAlP?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Adventure", "Comedy"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALL_TV_SHOWS };
}