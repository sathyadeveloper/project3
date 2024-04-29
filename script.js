function getlogin() {
    window.location.href="eduroa.html";
}



window.onload = function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let slideIndex = 0;
    let intervalID = null;
    const intervalSeconds = 5; // Change this to set the interval time in seconds

    function showSlide(index) {
        const slides = document.querySelectorAll('.slider img');
        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    window.prevSlide = function() {
        clearInterval(intervalID); // Clear interval when manually changing slide
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = document.querySelectorAll('.slider img').length - 1;
        }
        showSlide(slideIndex);
        startInterval(); // Restart interval after manually changing slide
    };

    window.nextSlide = function() {
        clearInterval(intervalID); // Clear interval when manually changing slide
        slideIndex++;
        if (slideIndex >= document.querySelectorAll('.slider img').length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
        startInterval(); // Restart interval after manually changing slide
    };

    function startInterval() {
        clearInterval(intervalID); // Clear any existing interval
        intervalID = setInterval(function() {
            slideIndex++;
            if (slideIndex >= document.querySelectorAll('.slider img').length) {
                slideIndex = 0;
            }
            showSlide(slideIndex);
        }, intervalSeconds * 1000); // Convert seconds to milliseconds
    }
      
    // Initial slide display
    showSlide(slideIndex);
    startInterval(); // Start the interval for automatic slide transition
};






// Automatic slide change (optional)
// setInterval(() => {
//     slideIndex++;
//     showSlide(slideIndex);
// }, 3000);












// Define variables
/*const slides = document.querySelectorAll(".slide img");
let slideIndex = 0;
let intervalID = null;

// Initialize slider when DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

// Function to initialize the slider
function initializeSlider() {
    // Add "slide" class to the first slide
    slides[slideIndex].parentElement.classList.add("slide");

    // Start the slideshow
    intervalID = setInterval(nextSlide, 5000);
}

// Function to show the next slide
function nextSlide() {
    // Remove "slide" class from the current slide
    slides[slideIndex].parentElement.classList.remove("slide1");

    // Increment slide index
    slideIndex++;

    // Check if index is out of bounds
    if (slideIndex >= slides.length) {
        slideIndex = 0; // If it's greater than or equal to the length, set index to 0 (first slide)
    }

    // Add "slide" class to the next slide
    slides[slideIndex].parentElement.classList.add("slide2");
}

// Function to show the previous slide
function prevSlide() {
    // Remove "slide" class from the current slide
    slides[slideIndex].parentElement.classList.remove("slide2");

    // Decrement slide index
    slideIndex--;

    // Check if index is out of bounds
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // If it's less than 0, set index to the last slide
    }

    // Add "slide" class to the previous slide
    slides[slideIndex].parentElement.classList.add("slide3");
/*


    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eduroa</title>
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>


</head>
<body>
    <div id="slider">
        <div class="slides">
            <img src="women.png" alt="Slide 1">
            <img src="women_2.png" alt="Slide 2">
            <img src="women_3.png" alt="Slide 3">
        </div>
        <a id="prevBtn" class="prev" onclick="prevSlide()"><i class="fa-solid fa-arrow-left"></i></a>
        <a id="nextBtn" class="next" onclick="nextSlide()"><i class="fa-solid fa-arrow-right"></i></a>
    </div>
</body>


    <div id="topbar"></div>
    <div id="container">
        <div id="header">
            <img src="logo original.png" alt="logo 1"/>
            <img src="title.png" width="50%" height="5" alt="title"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    <div id="content1">
        <h4 class="heading">Welcome </h4><br>
            <p class="para1">"Nourish, strengthen, and shine with Eduora Hair Oil.
                 Unlock the secret to luscious locks with our natural formula.
                  Embrace the beauty of healthy hair, every day."Indulge in the luxurious experience of our carefully crafted hair oil, 
                  designed to revitalize and replenish from root to tip.
                </p>
<div class="center-container"> 
<button class="more">Read More</button>
</div>
        

        </div>
        <div id="content2">
            <h4 class=special>Ingredients</h4>
            <ul class="item">
                <li>Bhringraj</li>
                <li>Henna leaves</li>
                <li>Hibiscus</li>
                <li>Amala</li>
                <li>Argan Oil</li>
                <li>Curry leaves</li>
                <li>Neem</li>
                <li>coconut</li>
            </ul>
    <div  class="center-container2">
            <a href="https://economictimes.indiatimes.com/industry/healthcare/biotech/healthcare/want-long-and-strong-hair-try-out-these-natural-ingredients/want-long-and-strong-hair/slideshow/102034054.cms">
                <button class="more1">Read More</button>
            </a>
    </div>
        </div>
        <div id="content3">
            <h4 class="more2">About us</h4>

            <ul class="Manufacturing">
                <li>Hand Made.</li>
                <li>NO chemical solutiion.</li>
                <li>Is not Satisfy you 50% amount return.</li>
                <li>Best product.</li>
                <li> Where Integrity Leads the Way.</li>
                <li>Building Trust, One Promise at a Time.</li>
                <li>Unlocking Dreams,One Sale at a Time!</li>
            </ul>
        </div>
        <div id="bottom1">
            <h2><b>"Discover Our Luxurious Hair Oil Solutions!"</b><br>
                <p>These are usually the base of the hair oil and can include oils like coconut oil, argan oil, jojoba oil, almond oil, etc.
                They help to moisturize and nourish the hair and scalp, 
                providing essential fatty acids and vitamins.</h2></p>
                <h2><p>It's important to note that the specific formulation of a hair oil product
                     will vary from brand to brand, and it's always a good idea to check the ingredient 
                     list for any potential 
                    allergens or irritants before use. Additionally, individual hair types and 
                    needs may require different formulations, so what works well for one person may
                     not work as effectively for another.</h2></p>
            </div>
            <div id="bottom2">
               <img src="oil bottle.png" width="100%" height="500px" alt="oil 1"/>
               <div>
                <button>Order Now</button>
               </div>
            </div>
        </div>
        </div>
        <div id="footer">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Whatsapp</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
                <p>&copy by 2024 | developed by sathya</p>
            </div>
        
        
    </body>
    </html>
    



                
       




                
        
*/