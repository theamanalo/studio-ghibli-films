const ghibliFilms = [
    {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        year: 2001,
        synopsis: "A young girl enters a world of spirits and must find a way to save her parents.",
        poster: "images/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        year: 1988,
        synopsis: "Two young girls encounter friendly forest spirits in rural Japan.",
        poster: "images/My_Neighbor_Totoro.webp"
    },
    {
        title: "Princess Mononoke",
        director: "Hayao Miyazaki",
        year: 1997,
        synopsis: "A young warrior gets caught in the struggle between forest gods and humans.",
        poster: "images/Princess_Mononoke.webp"
    },
    {
        title: "Howl's Moving Castle",
        director: "Hayao Miyazaki",
        year: 2004,
        synopsis: "A young woman is turned into an old woman by a witch and must find a way to break the spell.",
        poster: "images/6pZgH10jhpToPcf0uvyTCPFhWpI1.jpg"
    },
    {
        title: "Ponyo",
        director: "Hayao Miyazaki",
        year: 2008,
        synopsis: "A goldfish princess longs to become human after befriending a young boy.",
        poster: "images/4e3d805bb3c46870f79e6b9e4a345b5b.jpg"
    },
    {   
        title: "When Marnie Was There",
        director: "Hiromasa Yonebayashi",
        year: 2014,
        synopsis: "A lonely girl discovers a mysterious friendship with a girl named Marnie.",
        poster: "images/vug1dvDI1tSa60Z8qjCuUE7ntkO-scaled.jpg"
    },
    {
        title: "The Wind Rises",
        director: "Hayao Miyazaki",   
        year: 2013,
        synopsis: "A young engineer falls in love with a young woman and becomes involved in the development of an aircraft.",
        poster: "images/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg"
    },
    {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        year: 1986,
        synopsis: "A young boy discovers a magical floating castle and sets off on an adventure.",
        poster: "images/castle-in-the-sky-poster_02.webp"
    },
    {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        year: 1989,
        synopsis: "A young girl begins her journey as a young witch in a world of flying brooms and magic.",
        poster: "images/Aufa4YdZIv4AXpR9rznwVA5SEfd-scaled.jpg"
    },
    {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        year: 1988,
        synopsis: "A young boy and girl struggle to survive in post-war Japan.",
        poster: "images/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "The Secret World of Arrietty",
        director: "Hiromasa Yonebayashi",
        year: 2010,
        synopsis: "A young boy discovers a secret world of tiny people.",
        poster: "images/The_Secret_World_of_Arrietty.webp"
    },
    {
        title: "From Up on Poppy Hill",
        director: "Gorō Miyazaki",
        year: 2011,
        synopsis: "A young couple works to save their school's clubhouse from demolition.",
        poster: "images/From_Up_on_Poppy_Hill.webp"
    },
    {
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        year: 1995,
        synopsis: "A young girl discovers her passion for writing and falls in love with a boy who shares her interests.",
        poster: "images/Whisper_of_the_Heart.webp"
    },
    {
        title: "The boy and the Heron",
        director: "Hayao Miyazaki",
        year: 2023,
        synopsis: "A young boy embarks on a fantastical journey guided by a mysterious heron.",
        poster: "images/zbMRm6P6wPe9SQ6qJ7ZTAvCMS6e-scaled.jpg"
    },
    {
        title: "My neighbors the Yamadas",
        director: "Isao Takahata",
        year: 1999,
        synopsis: "A comedic look at the everyday life of a Japanese family.",
        poster: "images/My_Neighbors_the_Yamadas.webp"
    },
    {
        title: "Pom Poko",
        director: "Isao Takahata",
        year: 1994,
        synopsis: "A group of shape-shifting raccoon dogs fight to save their forest home from urban development.",
        poster: "images/Pom_Poko.webp"
    },
    {
        title: "Only Yesterday",
        director: "Isao Takahata",
        year: 1991,
        synopsis: "A woman reflects on her childhood while visiting the countryside.",
        poster: "images/Only_Yesterday.webp"
    },
    {
        title: "Tales from Earthsea",
        director: "Gorō Miyazaki",
        year: 2006,
        synopsis: "A young prince and a wizard embark on a journey to restore balance to their world.",
        poster: "images/Tales_From_Earthsea.webp"
    },
    {
        title: "The Cat Returns",
        director: "Hiroyuki Morita",
        year: 2002,
        synopsis: "A young girl saves a cat and is whisked away to the magical Cat Kingdom.",
        poster: "images/MV5BNDEwZDkyNWItYzM3OC00N2Q1LTk0YmEtYjIxZWJlNGFjNTE3XkEyXkFqcGc@._V1_.jpg"
    },
    {
        title: "The Red Turtle",
        director: "Michael Dudok de Wit",
        year: 2016,
        synopsis: "A man shipwrecked on a deserted island encounters a giant red turtle that changes his life.",
        poster: "images/how-have-i-never-heard-of-the-red-turtle-v0-zbucgvbcmsce1.webp"
    },
    {
        title: "Porco Rosso",
        director: "Hayao Miyazaki",
        year: 1992,
        synopsis: "A former World War I fighter pilot, now transformed into a pig, fights air pirates in the Adriatic Sea.",
        poster: "images/Porco_Rosso.webp"
    },
    {
        title: "The Tale of the Princess Kaguya",
        director: "Isao Takahata",
        year: 2013,
        synopsis: "A bamboo cutter finds a tiny princess inside a bamboo stalk and raises her as his own daughter.",
        poster: "images/The_Tale_of_the_Princess_Kaguya.webp"
    },
    {
        title: "Ocean Waves",
        director: "Tomomi Mochizuki",
        year: 1993,
        synopsis: "A coming-of-age story about high school students in a small coastal town.",
        poster: "images/Ocean_Waves_English.webp"
    }
];

const filmsGrid = document.getElementById('filmsGrid');

// Generate cards dynamically
ghibliFilms.forEach(film => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${film.poster}" alt="${film.title}">
            </div>
            <div class="card-back">
                <h3>${film.title}</h3>
                <p>Director: ${film.director}</p>
                <p>Year: ${film.year}</p>
                <p>${film.synopsis}</p>
            </div>
        </div>
    `;

    filmsGrid.appendChild(card);

    // Desktop hover background effect
    // We wrap this in a check to ensure it doesn't fire weirdly on touch
    card.addEventListener('mouseenter', () => {
        // Only change background on hover if the device supports hover
        if (window.matchMedia('(hover: hover)').matches) {
            document.body.style.backgroundImage = url(${film.poster});
            document.querySelectorAll('.card').forEach(c => {
                if (c !== card) c.classList.add('dimmed');
            });
        }
    });

    card.addEventListener('mouseleave', () => {
        if (window.matchMedia('(hover: hover)').matches) {
            document.body.style.backgroundImage = url("images/e9ddf542-dc9d-477b-ae48-68dba1412460.jpg");
            document.querySelectorAll('.card').forEach(c => {
                c.classList.remove('dimmed');
            });
        }
    });

    // 📱 Mobile + Desktop Click/Tap
    card.addEventListener('click', (e) => {
        // Prevent immediate closing if clicking a link inside (optional safety)
        e.stopPropagation();

        // Check if this card is already active
        const isActive = card.classList.contains('active');

        // 1. Reset ALL cards first
        document.querySelectorAll('.card').forEach(c => {
            c.classList.remove('active');
            c.classList.remove('dimmed');
        });

        // 2. Reset background to default
        document.body.style.backgroundImage = url("images/e9ddf542-dc9d-477b-ae48-68dba1412460.jpg");

        // 3. If the clicked card wasn't already active, make it active now
        if (!isActive) {
            card.classList.add('active');
            document.body.style.backgroundImage = url(${film.poster});
            
            // Dim other cards
            document.querySelectorAll('.card').forEach(c => {
                if (c !== card) c.classList.add('dimmed');
            });
        }
    });
});
