
function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    
    // padstart-ის გარეშე 20:00 იქნებოდა 20:0 რადგან სიმბოლოეაბს ამატებს

    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').textContent = timeString;
}

// Update the clock immediately, then every minute
updateClock();
setInterval(updateClock, 60000); // Update every minute




// 
// String(now.getSeconds()) კოდი გადაქცევს now.getSeconds() რიცხვს სტრინგად.

// დეტალები:
// now.getSeconds(): ეს არის მეთოდი Date ობიექტისთვის, რომელიც აბრუნებს მიმდინარე წამების რაოდენობას (0-დან 59-მდე).

// String(...): ეს ფუნქცია ახდენს რიცხვის სტრინგად გადაქცევას. მაგალითად, თუ now.getSeconds() აბრუნებს 9, მაშინ String(9) აბრუნებს '9'.

let isBlack = false; // დასაწყისი მდგომარეობა: ელემენტები არ არის შავი

// Turn off (make everything black)
document.getElementById("turnoff").addEventListener("click", function() {
    const inner = document.querySelector('.inner');
    const camera = document.querySelector('.camera');
    const navbar = document.querySelector('.navbar-main');
    const clickme = document.querySelector('.open-button'); // Fixed query for clickme

    if (isBlack) {
        // დაბრუნება პირველ მდგომარეობაში
        inner.style.backgroundColor = "";
        inner.style.backgroundImage = "";
        inner.style.color = "";

        camera.style.backgroundColor = "";
        camera.style.borderColor = "";

        navbar.style.backgroundColor = "";
        
        // Display the 'open-button' when everything is restored
        clickme.style.visibility = "visible";
    } else {
        // ელემენტების შავ ფერში გადაქცევა
        inner.style.backgroundColor = "black";
        inner.style.backgroundImage = "none";
        inner.style.color = "black";

        camera.style.backgroundColor = "black";
        camera.style.borderColor = "black";

        navbar.style.backgroundColor = "black";

        // Hide the 'open-button' when the screen is black
        clickme.style.visibility = "hidden";
    }

    isBlack = !isBlack; // მდგომარეობის შეცვლა
});

// // Open button functionality
// document.querySelector('.open-button').addEventListener("click", function() {
//     alert("Opened!"); // You can add more functionality here
// });



// let isBlack = false;:

// აქ ვიყენებთ ცვლად isBlack, რომელიც მონიშნავს, იმყოფება თუ არა ელემენტები შავ ფერში. დასაწყისში მისი ღირებულება false არის, რაც ნიშნავს, რომ ელემენტები არ არის შავი.
// document.getElementById("turnoff").addEventListener("click", function() { ... });:

// ვქმნით ღილაკზე (ID turnoff) მოსმენის ფუნქციას, რომელიც შესრულდება, როდესაც ღილაკზე კლიკდება.
// const inner = document.querySelector('.inner');:

// ამ წერტილს ვნიშნავთ inner კლასით ელემენტს.
// const camera = document.querySelector('.camera');:

// ამ წერტილს ვნიშნავთ camera კლასით ელემენტს.
// const navbar = document.querySelector('.navbar-main');:

// ამ წერტილს ვნიშნავთ navbar-main კლასით ელემენტს.
// if (isBlack) { ... } else { ... }:


// ვამოწმებთ isBlack ცვლადის ღირებულებას. თუ isBlack არის true, მაშინ ელემენტები დაბრუნდება პირვანდელ მდგომარეობაში. თუ isBlack არის false, მაშინ ელემენტები გადაიქცევა შავ ფერში.
// inner.style.backgroundColor = "";:

// აქ ვაბრუნებთ ელემენტის ფონს მისი დაწყებითი ფერში. ისევე როგორც დანარჩენი სტილები.
// isBlack = !isBlack;:

// ვცვლით isBlack ცვლადის ღირებულებას. თუ isBlack იყო false, გახდება true, და პირიქით. ეს საჭირო იყო იმისთვის, რომ დაემახსოვრებინა, ელემენტები ახლა შავ ფერშია თუ არა.



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




