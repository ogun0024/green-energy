
function preloader() {
    const imagesPaths = [
       "./images/futuroscope.jpg",
       "./images/windmill.jpg",
       "./images/solar-panel.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    

// resource
const data = {
    button1: {
        heading: 'Hydrogen Energy',
        imageURL: "./images/futuroscope.jpg",
        imageAlt: 'Futoroscope image',
        bodyText: 'Nature is the best solar fuel energy storage machine known, so let’s figure out how it works. Light comes in four photons, and then it hits the leaf, and it splits water into oxygen and hydrogen. A leaf makes twice as much hydrogen as it does oxygen, and then it stores the result as a solid fuel. So you’ve stored the sunlight in a fuel, and the energy is in the chemical bonds. Then you eat that fuel, and you get all the sunlight back out in a time-released way. So you are literally chewing the sun.To take care of the average house in a day, you need 20 kilowatt-hours of electricity, which is equivalent to only 5.5 liters of water. To drive that point home, I’m holding the amount of water in my hands that you need to power a very big house on the California coast. That amount of water takes care of that house as well as powering a fuel cell car around town. So that’s the future. There’s no way to stop it. Nature already did this 2-billion-year experiment and decided on this process, and it’s coming soon.'
    },
    button2: {
        heading: 'Energy Efficiency',
        imageURL: './images/windmill.jpg',
        imageAlt: 'WindMill image',
        bodyText: 'Energy efficiency is the first fuel and must be at the core of our nation’s energy policy. Energy efficiency is not a sideshow. It is the main show, and we’ve only begun to tap it. To achieve it, there are dozens of things you can do, many of them strictly personal and cost-effective as well. You have to know which kind of lightbulb to get. Can you install a ground source heat pump? What about tightening the walls of your home to reduce air leakage, thereby saving on heating and cooling your home? Your landlord may be choosing what equipment to put in, but since he might not pay the energy bill, he might not care how efficient it is.You can also try to influence legislation to enact energy-efficiency policies. One such policy is the carbon cap. Current proposals are to set a limit on carbon dioxide and other greenhouse-gas emissions by issuing permits that limit those emissions to entities like power and industrial plants. These plants would be allowed to trade permits among themselves in a system known as cap-and-trade. By one independent estimate, a carbon cap bill would take energy demand—predicted to go up 15 percent over the next 40 years—and essentially hold it flat. Another policy would address building-energy codes. Buildings account for about two-fifths of the energy we use and are responsible for about two-fifths of the carbon emitted in this country. Right now building codes tend to say OK, can we get 1 percent, can we get 2 percent savings maybe? No, we need 30 percent savings. That’s a starting point. Then 50 percent savings, then more moving forward from that point.'
    },
    button3: {
        heading: 'Renewable Energy Storage',
        imageURL: './images/solar-panel.jpg',
        imageAlt: 'Solar Panel image',
        bodyText: 'Renewable energy sources like wind and solar need storage. It’s kind of funny; with all other commodities and manufactured products for the past 40 years, we’ve been on a kick to reduce inventory, but electricity has always been a zero-inventory product, until now. Our inability to store electricity meant that every time somebody in the house turned the light on or off, ultimately the source of electricity—the generation plant—had to wiggle up or down. But we’re at a cusp where we can start putting storage on the grid. This means that we can handle the fluctuations, the imbalance between demand and supply, with huge benefits.'
    }
};

const btns = document.querySelectorAll("button");
const container = document.querySelector(".content");
const active = document.querySelector(".buttons-container");



function eventClick(ev) {
    let btnLabel = ev.target.textContent;
    if (btnLabel === "Hydrogen Energy") {
        container.innerHTML =   `<h2>${data.button1.heading}</h2>
        <div class="content">
        <img src="${data.button1.imageURL}" alt="${data.button1.imageAlt}">
         <p>${data.button1.bodyText}</p>
        </div>`;
    } else if (btnLabel === "Energy Efficiency") {
        container.innerHTML =   `<h2>${data.button2.heading}</h2>
        <div class="content">
        <img src="${data.button2.imageURL}" alt="${data.button2.imageAlt}">
        <p>${data.button2.bodyText}</p>
        </div>`;
    } else {
        container.innerHTML =   `<h2>${data.button3.heading}</h2>
        <div class="content">
        <img src="${data.button3.imageURL}" alt="${data.button3.imageAlt}">
        <p>${data.button3.bodyText}</p>
        </div>`;
    }
}

for (let btn of btns) {
    btn.addEventListener('click', eventClick);
}


// Active Button ID Change
function handleClick(e) {
    let eventActive = e.target;
    
    for(let a of btns) {
        if(a.hasAttribute("id") == true) {
            a.removeAttribute("id");
        }
    }
    
    eventActive.setAttribute("id", "active-button");
}

for (let btn of btns) {
    btn.addEventListener('click', handleClick);
}





/*
// create the initial page markup:
let markup = `<h2>${data.partial1.heading}</h2>
<img src="${data.partial1.imageURL}" alt="" />`;

// getting references
let $dc = document.getElementById('dynamic-content');

$dc.innerHTML = markup;

*/

