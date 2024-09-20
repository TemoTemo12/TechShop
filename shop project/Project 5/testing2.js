
function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    
    // padstart-ის გარეშე 20:00 იქნებოდა 20:0 რადგან სიმბოლოეაბს ამატებს

    const timeString = `${hours}:${minutes}`;
    document.getElementById('time-2').textContent = timeString;
}

// Update the clock immediately, then every minute
updateClock();
setInterval(updateClock, 60000); // Update every minute















let isBlack = false; // Initial state: elements are not black

// Turn off (make everything black)
document.getElementById("turnoff").addEventListener("click", function() {
    const inner = document.querySelector('.inner');
    const camera = document.querySelector('.camera');
    const navbar = document.querySelector('.navbar-main');
    const clickme = document.querySelector('.open-button'); // Fixed query for clickme

    if (isBlack) {
        // On second click, navigate to index.html
        window.location.href = "index.html";
    } else {
        // Turn elements black
        inner.style.backgroundColor = "black";
        inner.style.backgroundImage = "none";
        inner.style.color = "black";

        camera.style.backgroundColor = "black";
        camera.style.borderColor = "black";

        navbar.style.backgroundColor = "black";

        // Hide the 'open-button' when the screen is black
        clickme.style.visibility = "hidden";
    }

    isBlack = true; // Set the state to black after the first click
});







// Get the volume indicator element
const volumeIndicator = document.getElementById('volumeIndicator');
let volume = 50; // Set initial volume
let hideTimeout; // Timeout variable for hiding the volume indicator

// Function to show and hide the volume indicator
function showVolumeIndicator() {
    volumeIndicator.classList.add('show');

    // Clear any existing timeout to hide the indicator
    clearTimeout(hideTimeout);

    // Hide the volume indicator after 2 seconds of inactivity
    hideTimeout = setTimeout(() => {
        volumeIndicator.classList.remove('show');
    }, 2000); // 2 seconds delay before hiding
}

// Function to animate volume up
function volumeUp() {
    if (volume < 100) {
        volume += 10;
        volumeIndicator.textContent = `Volume: ${volume}%`;
    }
    volumeIndicator.classList.remove('animate-down');
    volumeIndicator.classList.add('animate-up');
    showVolumeIndicator(); // Show the volume indicator
}

// Function to animate volume down
function volumeDown() {
    if (volume > 0) {
        volume -= 10;
        volumeIndicator.textContent = `Volume: ${volume}%`;
    }
    volumeIndicator.classList.remove('animate-up');
    volumeIndicator.classList.add('animate-down');
    showVolumeIndicator(); // Show the volume indicator
}

// Event listeners for buttons
document.querySelector('.btn2').addEventListener('click', volumeUp);
document.querySelector('.btn3').addEventListener('click', volumeDown);




// showVolumeIndicator() აჩვენებს ვოლუმის ინდიკატორს და 2 წამში აჩენს მას.
// clearTimeout(hideTimeout) ანახლებს დამალვის დროს ყოველ ღილაკზე დაჭერისას, რომ სანამ ვაჭერთ ინდიკატორი დარჩეს ხილვადი.

// თუ ვოლუმი 100%-ზე ნაკლებია, მაშინ ვზრდით მას 10%-ით და ვაახლებთ ვოლუმის ინდიკატორზე ტექსტს.
// ვამატებთ animate-up კლასს, რომელიც ახორციელებს ამოწევის ანიმაციას.
// ბოლოს ვაჩვენებთ ინდიკატორს showVolumeIndicator()-ის მეშვეობით.


// თუ ვოლუმი 0%-ზე მეტია, ვამცირებთ მას 10%-ით.
// ვამატებთ animate-down კლასს, რომელიც აჩვენებს ვოლუმის დაწევის ანიმაციას.

// btn2 ღილაკზე დაჭერისას ჩართულია volumeUp() ფუნქცია.
// btn3 ღილაკზე დაჭერისას აქტიურდება volumeDown().




const daysContainer = document.getElementById('days');
const monthYearDisplay = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

const months = [
    'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
    'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
];

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // თარიღის ჩვენება
    monthYearDisplay.innerText = `${months[month]} ${year}`;

    // დღეების გაწმენდა
    daysContainer.innerHTML = '';

    // თვის პირველი დღის პოვნა
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    // ცარიელი ადგილების დამატება თვის დასაწყისში
    for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }

    // დღეების დამატება
    for (let day = 1; day <= lastDayOfMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerText = day;

        // დღევანდელი დღის მონიშვნა
        if (
            day === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()
        ) {
            dayDiv.classList.add('today');
        }

        daysContainer.appendChild(dayDiv);
    }
}

// თვეების გადაადგილება
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// კალენდარის გამოჩენა
renderCalendar();






// ახსნა:
// სექრეტარების შერჩევა:

// javascript

// const calendar = document.querySelector('.calendar');
// const prevMonthBtn = document.querySelector('.prev-month');
// const nextMonthBtn = document.querySelector('.next-month');
// const monthYear = document.querySelector('#month-year');
// const daysGrid = document.querySelector('.days-grid');
// აქ შერჩეულია HTML ელემენტები, რომლითაც ვიმუშავებთ: კალენდარი, ღილაკები, თვე/წელი, და დღეების ქსელი.

// currentDate განსაზღვრა:

// javascript

// let currentDate = new Date();
// აქ currentDate არის მიმდინარე თარიღი, რომელსაც ვმართავთ კალენდრის გაწვდვისას.

// renderCalendar ფუნქცია:

// javascript

// function renderCalendar() {
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     ...
// }
// თვე და წელი: ვასწორებთ monthYear ელემენტის ტექსტს.
// დღეების გაწმენდა: ძველი დღეების გაწმენდა daysGrid.innerHTML = '';.
// თვიური დღეების რაოდენობა: გაწვდავს დღეების რაოდენობას მიმდინარე თვეში.
// პირველი დღის გაწვდვა: პირველ დღეს კვირაში აჩვენებს firstDayOfMonth დღით.
// სასტუმრო დღეები: დამატება daysGrid-ში.
// დღის გაწვდვა: კალენდარში დღევანდელი დღის მარკირება.
// ღილაკების მოვლენა:

// javascript

// prevMonthBtn.addEventListener('click', () => {
//     currentDate.setMonth(currentDate.getMonth() - 1);
//     renderCalendar();
// });

// nextMonthBtn.addEventListener('click', () => {
//     currentDate.setMonth(currentDate.getMonth() + 1);
//     renderCalendar();
// });


// ღილაკებზე დაწკაპუნებისას თვეს წინ და უკან გადაადგილდება და კალენდარი განახლდება.

// პირველი render:

// javascript

// renderCalendar();
// გვერდი იტვირთება და კალენდარი პირველი render-ით გამოჩნდება


// render (რენდერინგი) გულისხმობს მიმდინარე მონაცემების ვიზუალურ პრეზენტაციას (ან ფიზიკური გამოჩენა) ინტერფეისზე, ჩვეულებრივ ვებსაიტზე ან აპლიკაციაში. კალენდარის კონტექსტში, render ნიშნავს კალენდრის უახლესი მდგომარეობის გამოხატვას ეკრანზე. სხვა სიტყვებით, ეს არის პროცესი, რომლის დროსაც გამოვლინდება ინფორმაცია მომხმარებლისთვის თვალსაჩინოდ

