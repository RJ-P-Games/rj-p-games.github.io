// Complete TV Shows collection
const ALL_TV_SHOWS = [
    {
        id: 1,
        title: "200 Classic Cartoons",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=200+Classic+Cartoons+(2008)",
        link: "https://drive.google.com/drive/folders/1_placeholder_cartoons",
        description: "A massive collection of classic animated shorts from the golden age of animation.",
        year: "2008"
    },
    {
        id: 2,
        title: "Alice in Borderland",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Alice+in+Borderland+(2020)",
        description: "Obsessed gamer Arisu and his friends are forced to compete in a series of sadistic games to survive in a strange, empty Tokyo.",
        year: "2020",
        link: "https://drive.google.com/drive/folders/12m78G5R4YjPUCIDIHJ3VAnK7IJRbSw8A?usp=drive_link"
    },
    {
        id: 3,
        title: "Avatar: The Last Airbender",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Avatar+The+Last+Airbender+(2005)",
        description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
        year: "2005",
        link: "https://drive.google.com/drive/folders/1OFWN8hASAuNWSn9mK2gANJ0PSQhvIA2r"
    },
    {
        id: 4,
        title: "Abbott Elementary",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYjU5YTdlZTItNWM5Yi00OGM1LTk1NGItNjY5MGU3Y2JkOWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "A mockumentary following a group of dedicated teachers in a Philadelphia public school.",
        year: "2021",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/13dLvT0_1TkcRmVmF6tZlm80xqeoWhxZp?usp=drive_link" },
            { part: "Season 2", url: "https://drive.google.com/drive/folders/1gAtljQ6SnEWUS8HXW-y5jtbcKILcUnFU?usp=drive_link" }
        ]
    },
    {
        id: 5,
        title: "Adventure Time",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjkxMzIwNmQtMzM5Ni00YWJiLTg4YjQtNjBiN2IxMjZhMGQ2XkEyXkFqcGc@._V1_.jpg",
        description: "A young boy and his magical dog go on adventures in the Land of Ooo.",
        year: "2010",
        link: "https://drive.google.com/drive/folders/1OwoKydzUQUUp6n-Nh7CCAQXGLfchU8Ta"
    },
    {
        id: 6,
        title: "Adventure Time: Fiona and Cake",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMzE2MTA5YjQtMzU5Ni00MWY5LWJiMTktOWRjZjZkMDVjYjlkXkEyXkFqcGc@._V1_.jpg",
        description: "A spin-off of Adventure Time following the gender-swapped versions of Finn and Jake.",
        year: "2023",
        link: "https://drive.google.com/drive/folders/1TWYO4e4xYDMVou36cJHASEnJdV4FFkOt"
    },
    {
        id: 7,
        title: "Arcane",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Set in the universe of League of Legends, it follows the origins of two iconic champions.",
        year: "2021",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/1TKueC2iWAFibt1ih645ZWfQljYODJzs1?usp=drive_link" },
            { part: "Season 2", url: "https://drive.google.com/drive/folders/1DteIHGPT-Ef8UfjO8wXG3dJivygYJVM_?usp=drive_link" }
        ]
    },
    {
        id: 8,
        title: "Barbie Life in The Dreamhouse",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTg0MDc4MzU4NF5BMl5BanBnXkFtZTgwNjM5MTgyMjE@._V1_.jpg",
        description: "A web series following Barbie and her friends in their dreamhouse.",
        year: "2012",
        link: "https://drive.google.com/drive/folders/16XksTOld5HoYI8uCgOU8aCHtlAFgERQR?usp=share_link"
    },
    {
        id: 9,
        title: "Batman Beyond",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMDExYjNiYTYtZDkwZC00NDcxLTk3YWYtMmIyN2ZlZGYyY2E0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "A teenager becomes the new Batman under the tutelage of an elderly Bruce Wayne.",
        year: "1999",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/1rrz2S1Rc7wEw4jl-6tuKd3-WRZ6mK0-W?usp=share_link" },
            { part: "Season 2", url: "https://drive.google.com/drive/folders/1fvCT82F2qUXkC83CDjMvmSildfD1-Dtr?usp=share_link" },
            { part: "Season 3", url: "https://drive.google.com/drive/folders/1c9yUs9q822bPBSAFpHi71mjCZnt7wawP?usp=share_link" }
        ]
    },
    {
        id: 10,
        title: "Batman The Animated Series",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_.jpg",
        description: "The iconic animated series following the adventures of the Dark Knight.",
        year: "1992",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/12O2UQcS1Xszcb-9kn-s19ruqvk7xnrf8?usp=sharing" },
            { part: "Season 2", url: "https://drive.google.com/drive/folders/1a04KgdspaWaR2xmlATayoCXIPxWfnkfA?usp=sharing" },
            { part: "Season 3", url: "https://drive.google.com/drive/folders/1jgzyDn8t28foGqkEugEzz9PPRk-YLKty?usp=drive_link" },
            { part: "Season 4", url: "https://drive.google.com/drive/folders/1UOb87g133XE5L5GRZ6RRYFPZSvy3SOf1?usp=drive_link" },
            { part: "Season 5", url: "https://drive.google.com/drive/folders/1B3EpDItVJdqA9XSJV1aq5FFT6mb4yAxB?usp=drive_link" },
            { part: "Season 6", url: "https://drive.google.com/drive/folders/1blktqO0FTXsh5r4hileTyJ-MO5o7YVS4?usp=drive_link" }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALL_TV_SHOWS };
}
// Adding more TV shows to the collection
ALL_TV_SHOWS.push(
    {
        id: 11,
        title: "Beauty In Black",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Beauty_in_Black_%28TV_series%29.jpg",
        description: "A Tyler Perry series following two women whose lives collide.",
        year: "2024",
        link: "https://drive.google.com/drive/folders/1F2G8LJaV2rJ2pUlvIeGngHEVV2x8mITp?usp=sharing"
    },
    {
        id: 12,
        title: "Bluey",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_.jpg",
        description: "An Australian animated series following a Blue Heeler puppy and her family.",
        year: "2018",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/1QwcWtD6GwWRa58w0wQjIweHHQJf47BOx?usp=share_link" },
            { part: "Season 2", url: "https://drive.google.com/drive/folders/1haRPCouOzgl1HUFzLvEq6txibXJFXSS4?usp=share_link" },
            { part: "Season 3", url: "https://drive.google.com/drive/folders/1TNnG3i1upD2L4oiSZnjSIb86LUFuRDqj?usp=share_link" }
        ]
    },
    {
        id: 13,
        title: "Blues Clues",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Blues+Clues+(1996)",
        description: "An educational children's series following Steve and his dog Blue.",
        year: "1996",
        link: "https://drive.google.com/drive/folders/1vDYQQUT_BEMS779FI2rfC-FnkoUG3g4Y?usp=share_link"
    },
    {
        id: 14,
        title: "Boondocks",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYjFjZTAxZTItYjhjZS00MzNkLTk0NDYtYWMxYTQxNTE3YTQxXkEyXkFqcGc@._V1_.jpg",
        description: "An animated series following two brothers who move from Chicago to the suburbs.",
        year: "2005",
        link: "https://drive.google.com/drive/folders/1ujarzaX_90FGOiRC15OmXOAgwSbdI_kA"
    },
    {
        id: 15,
        title: "Breaking Bad",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
        description: "A high school chemistry teacher turns to a life of crime after being diagnosed with cancer.",
        year: "2008",
        link: "https://drive.google.com/drive/folders/1IY6qairkXpK2RXE0UVtqwm5ZjeiGYk3N"
    },
    {
        id: 16,
        title: "BoJack Horseman",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=BoJack+Horseman+(2014)",
        description: "BoJack Horseman, the washed-up star of the 1990s sitcom 'Horsin' Around,' navigates life in Hollywood with his human sidekick Todd and feline agent Princess Carolyn.",
        year: "2014",
        link: "https://drive.google.com/drive/folders/1Tw9CC4dRnCJxrgihyuICqLpkMJO3TjCW?usp=drive_link"
    },
    {
        id: 17,
        title: "Cobra Kai",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYjA3NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_.jpg",
        description: "A sequel series to The Karate Kid following Johnny Lawrence and Daniel LaRusso.",
        year: "2018",
        link: "https://drive.google.com/drive/folders/1idzqcZUju0ADDEWnm1D9AC344rIFiGRN?usp=drive_link"
    },
    {
        id: 18,
        title: "Danny Phantom",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNjJlNzc4ODktOGVjYS00MTJkLTgzZTYtZGViMDNlNmM2MGE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "A teenager gains ghost powers and protects his town from spectral threats.",
        year: "2004",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/1iZZSfbqgfu8YDIP-5g8qp8XQ4al5WrDC?usp=share_link" },
            { part: "Season 2", url: "https://drive.google.com/drive/folders/1PEEIDi7H157aYS5y1SPf7m4d1kM786Wn?usp=share_link" },
            { part: "Season 3", url: "https://drive.google.com/drive/folders/19EBjseVtK6BcEITdVfvpxG9dbQO6mpFF?usp=share_link" }
        ]
    },
    {
        id: 19,
        title: "Everybody Hates Chris",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BM2U1M2QxZDYtMzgyYS00OWQ5LWIyNGUtMmQ1MGQ2NTU2NzNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "A sitcom based on the childhood of comedian Chris Rock.",
        year: "2005",
        link: "https://drive.google.com/drive/folders/1RUZj9WQzdEBYYLeKhD_Y9GRcZbNZMSEy?usp=sharing"
    },
    {
        id: 20,
        title: "Euphoria",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZjVlN2M2N2MtOWViZC00MzIxLTlhZWEtMTIwNDIwMzE3ZWJiXkEyXkFqcGc@._V1_.jpg",
        description: "A drama series following a group of high school students navigating love and trauma.",
        year: "2019",
        link: "https://drive.google.com/drive/folders/1BVkiWaMVA1mZ1J2bJcnE3_ywvNFg1IKP"
    }
);
// Adding more popular TV shows
ALL_TV_SHOWS.push(
    {
        id: 21,
        title: "Family Guy",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "An animated sitcom following the dysfunctional Griffin family.",
        year: "1999",
        link: "https://drive.google.com/drive/folders/11W6C-Jqv9iQVasqjfiaYz77puax1UTjH?usp=sharing"
    },
    {
        id: 22,
        title: "Family Matters",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BN2YxNmI0NzgtMGM5Yi00YjJmLThjZmEtYTQ3ZTljYTU4MjdiXkEyXkFqcGc@._V1_.jpg",
        description: "A sitcom following the Winslow family and their annoying neighbor Steve Urkel.",
        year: "1989",
        link: "https://drive.google.com/drive/folders/1YX2tgiy_q_-FWYwv5puLRdWOhwlJVTQ3?usp=sharing"
    },
    {
        id: 23,
        title: "Game of Thrones",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "An epic fantasy series based on George R.R. Martin's novels.",
        year: "2011",
        link: "https://drive.google.com/drive/folders/1-kchkgMKhucUCfcyTZ5j5_GS8jWu9TQC?usp=sharing"
    },
    {
        id: 24,
        title: "Gravity Falls",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg",
        description: "Two siblings spend the summer with their great-uncle in a mysterious town.",
        year: "2012",
        link: "https://drive.google.com/drive/folders/1fU-FrVZ12bAZYxtxrofKkEQg2kMrIjm3"
    },
    {
        id: 25,
        title: "Harley Quinn",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYWQyMjQzOGMtY2Y0Yy00NjJkLWE3YjItOGEwODE1MWRlMjVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "An animated series following Harley Quinn after her breakup with the Joker.",
        year: "2019",
        link: "https://drive.google.com/drive/folders/1ap71sKGnRDDqySR6TlfL_sXpwoM5B1Q9?usp=sharing"
    },
    {
        id: 26,
        title: "Harvey Birdman",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMGNkY2YxOGItMDhmYi00Y2E0LWIwNmUtM2FkNzgyY2IyMGNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "A former superhero becomes a lawyer for other cartoon characters.",
        year: "2000",
        link: "https://drive.google.com/drive/folders/140J4Jyv5DvSnrcM7bI9kvqMPUmTR6vZS"
    },
    {
        id: 27,
        title: "Hazbin Hotel",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Hazbin+Hotel+(2024)",
        description: "An animated series about the princess of Hell opening a hotel for sinners.",
        year: "2024",
        link: "https://drive.google.com/drive/folders/1FnnwXwhzJgxIFFjp9I0uW6EFknZ8l6U7?usp=drive_link"
    },
    {
        id: 28,
        title: "Hey Arnold",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYzhiYTYwM2QtNTlmNy00MGM1LTllM2UtOGJmZTUxMmJmZjdiXkEyXkFqcGc@._V1_.jpg",
        description: "An animated series following a fourth-grader living in a boarding house.",
        year: "1996",
        link: "https://drive.google.com/drive/folders/1tvjU4AqKfPOM_wPZA-pJsjYaOKguNaDD?usp=sharing"
    },
    {
        id: 29,
        title: "Inside Job",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Inside+Job+(2021)",
        description: "For employees of Cognito Inc., conspiracies aren't just theories — they're a full-time job. Inside Job is an adult animated comedy about the shadow government and the dysfunctional team whose daily grind is committing the world's conspiracies.",
        year: "2021",
        link: "https://drive.google.com/drive/folders/1IFalooPss60gnsuzVd8C_szewNqEb6VF?usp=drive_link"
    },
    {
        id: 30,
        title: "INVINCIBLE",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZjE4ZDU4ZjMtZjliYS00M2ZmLThkNTItN2U3MmJjOGU0NmIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "An animated superhero series based on the comic book by Robert Kirkman.",
        year: "2021",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/1S5OH4Rs78nCVUJX7CDrv9OEuW9UOYnvl" },
            { part: "Season 2", url: "https://drive.google.com/drive/folders/1BXvMJEsw-zNzRc4JHwSSOJUCv0tyee3s" },
            { part: "Season 3", url: "https://drive.google.com/drive/folders/1k_nWuyVsCfmIcHAuWfrpysdHE2gwBKDK" },
            { part: "Season 4", url: "https://drive.google.com/drive/folders/1wz5Ftg5Y8sRfRxplk57oLKRhscw-eSxu" }
        ]
    },
    {
        id: 31,
        title: "Rick and Morty",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg",
        description: "An animated series following a scientist and his grandson on interdimensional adventures.",
        year: "2013",
        link: "https://drive.google.com/drive/folders/1EhzdG061fossyvUWpAWzDB_b6WhAWvbS?dmr=1&ec=wgc-drive-hero-goto"
    },
    {
        id: 32,
        title: "South Park",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=South+Park+(1997)",
        description: "A long-running animated sitcom following four boys in a Colorado town.",
        year: "1997",
        links: [
            { part: "Main", url: "https://drive.google.com/drive/folders/1PzKaoaK4blzlaoxnwC20gZoeYE5mDxWL" },
            { part: "Mines", url: "https://drive.google.com/drive/folders/1EvDzzcMmYt8Wol75Ip5PtEfu78USEHH-?usp=share_link" }
        ]
    },
    {
        id: 33,
        title: "SpongeBob SquarePants",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=SpongeBob+SquarePants+(1999)",
        description: "An animated series following the adventures of a sponge in Bikini Bottom.",
        year: "1999",
        link: "https://drive.google.com/drive/folders/1QpqcZWVMlzIru0g8xf5olhMeY75YKJkk?usp=sharing"
    },
    {
        id: 34,
        title: "Squid Game",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "A South Korean survival drama series.",
        year: "2021",
        link: "https://drive.google.com/drive/folders/1Zs2H3Nxl-yQHm21RJNbh2bIAesJ5ouY9?usp=sharing"
    },
    {
        id: 35,
        title: "Stranger Things",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/Stranger_Things_season_1.jpg",
        description: "A group of friends in a small town uncover supernatural mysteries.",
        year: "2016",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/1nvlUoxv5y_55eN0yjkIGJ3u84p9wQGxm?usp=sharing" },
            { part: "Season 5", url: "https://drive.google.com/drive/folders/1y2ynRtvKVJFoOiXtNxPj098z33ymZquc" }
        ]
    },
    {
        id: 36,
        title: "Steven Universe",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZGJjMmI3ZDMtZTgyNi00MTZhLWE2ZjAtN2Q4YTUyMTg4OGY1XkEyXkFqcGc@._V1_.jpg",
        description: "A boy with magical powers lives with three alien warriors.",
        year: "2013",
        link: "https://drive.google.com/drive/folders/1DdwOFAilBai2kDZVmRDCoNkqxTu6_E_5"
    },
    {
        id: 37,
        title: "Teen Titans",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjE5MjMzOTc1Ml5BMl5BanBnXkFtZTcwNDQxMDY5OQ@@._V1_FMjpg_UX1000_.jpg",
        description: "A group of teenage superheroes fight crime and deal with growing up.",
        year: "2003",
        links: [
            { part: "Season 1", url: "https://drive.google.com/drive/folders/1vqoOxi2w4IJmPelqXsTmcNCczxb6hIO7?usp=share_link" },
            { part: "Season 2", url: "https://drive.google.com/drive/folders/1rJxtTqih-pPjiFpF5ZbqKQmRyd9AK7jg?usp=share_link" },
            { part: "Season 3", url: "https://drive.google.com/drive/folders/1pDw-FSyAcNLLeSHiwyBLeg-6Pr3KQWvP?usp=share_link" },
            { part: "Season 4", url: "https://drive.google.com/drive/folders/1HvR1tsCeTnXVV6K1CJbfEoU0RpBLGe6h?usp=share_link" },
            { part: "Season 5 PT.1", url: "https://drive.google.com/drive/folders/14rLPyemnSo-5fe6I9cXj1AvEekaBuaEb?usp=share_link" },
            { part: "Season 5 PT.2", url: "https://drive.google.com/drive/folders/1TlBloSMfzBvPUUwkvRBQ-GZAjKbTjutS?usp=share_link" }
        ]
    },
    {
        id: 38,
        title: "The Simpsons",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Simpsons+(1989)",
        description: "The long-running animated sitcom following the Simpson family.",
        year: "1989",
        link: "https://drive.google.com/drive/folders/1tXo2krTMvXr-ATSqthy55PUpRRIu1HRr?usp=sharing"
    },
    {
        id: 39,
        title: "The Walking Dead",
        imageUrl: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Walking+Dead+(2010)",
        description: "Survivors of a zombie apocalypse try to stay alive.",
        year: "2010",
        link: "https://drive.google.com/drive/folders/1xtsZbxPaGypqsMTtRpgOEpSUyJvuYn1-"
    },
    {
        id: 40,
        title: "Wednesday",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMDE1NjNmZjgtZTg0OC00NjkxLWEzYzItMDNkMTc3YjgxZWQyXkEyXkFqcGc@._V1_.jpg",
        description: "Wednesday Addams investigates a series of murders at her new school.",
        year: "2022",
        link: "https://drive.google.com/drive/folders/1o99ZY5RLvFF1k0K-CU2Qu-MEm7rQZyap?usp=drive_link"
    }
);