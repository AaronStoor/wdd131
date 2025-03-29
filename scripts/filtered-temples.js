// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';
});

// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://churchofjesuschristtemples.org/salt-lake-temple/photographs/#Gallery-3"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52500,
        imageUrl:
            "https://churchofjesuschristtemples.org/tokyo-japan-temple/photographs/#Gallery-12"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 21000,
        imageUrl:
            "https://churchofjesuschristtemples.org/johannesburg-south-africa-temple/photographs/#Gallery-2"
    }
];

// Function to create temple cards
function createTempleCards(filteredTemples) {
    const templeContainer = document.getElementById('temple-container'); // Ensure you have a container with this ID in your HTML

    // Clear the container before adding new cards
    templeContainer.innerHTML = '';

    filteredTemples.forEach(temple => {
        // Create card elements
        const card = document.createElement('div');
        card.classList.add('temple-card');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = 'lazy';

        const name = document.createElement('h3');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        // Append elements to card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        // Append card to container
        templeContainer.appendChild(card);
    });
}

// Function to filter temples based on criteria
function filterTemples(criteria) {
    let filteredTemples;

    switch (criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Show all temples for "home"
    }

    createTempleCards(filteredTemples);
}

// Add event listeners to navigation menu items
document.getElementById('nav-old').addEventListener('click', () => filterTemples('old'));
document.getElementById('nav-new').addEventListener('click', () => filterTemples('new'));
document.getElementById('nav-large').addEventListener('click', () => filterTemples('large'));
document.getElementById('nav-small').addEventListener('click', () => filterTemples('small'));
document.getElementById('nav-home').addEventListener('click', () => filterTemples('home'));

// Call the function to display all temples initially
createTempleCards(temples);

// Footer: Set the current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
// Call the function to display all temples initially
createTempleCards(temples);