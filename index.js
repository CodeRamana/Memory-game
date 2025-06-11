//Selecting .container Element
const grid = document.querySelector('.container')
// console.log(grid)

//images for Cards
const img1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCBJGqx4mmSxs2ew0SFCEp9qCVQEx8KZ49EK6dqJu2ak0KWYodJazILUMdbmAys6BcJpg8_vSFCIievbsIkbfwiJAAPF5J_Va291lRegmy5poEhjQyIUn-oGuIr8eRb4u9ZagE1eXsuT11PsLigYULaccIONav7VtEF0mixaPyGOpslF-VuCT-EKVgbJiiAaMTZTAGaC6XmxjPJ39Etc92LY5A9CLY46dUpiLv4xs6AN6Lh3EPlmIh_Zb6bNAn5GwCzF2BebSAqSBj5";
const img2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBqruoUmbocvXerlH-pUNAZscHQinwYqSI3u13VcSFUCuv1rWJmyOQ604q7Rd4YPyIBhwuG-8zayuRpa56RtZ6HVs5NLCI1OS6XFZ1jqzch-yQ5Ng1bFPuxLqiZFYiQf5YWx_ssg-lFKEr0YolfBaHmK9r_a8kpFko769tTeM-0V2aaFISY2784UrLgWfKeUHYZu6ol6HHzfJ7UBX4m6JHfDHRf2adFCCUd1HGPWRMbbf89BobjuXom96tOkoGh_aibbHhxyrCNmHkl";
const img3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuALQQ_yQN4ZvTbKHHiobJRO7kvITMuRUr-8Mog-nG7L9V954u3z1_70wvXKkVsP6pXL-6zG3zwyLQw2lNBfarKx6x9nvpjM2x9FdBx8RWCS0nPQldgRo90JPabyV9dWhE1aZoTBGp3mRy-P7yqxJ4nmt5cHcnyqeaOyfF3wIwiffNAkYhsahOJisZgg9wFeeJq2mCe3Yz2IL__JVU93ChHeq6iDyiqll43YvJdQsm-zXW5vVD7KKvLP-F5q2BJakpx360jcbSFM7fAk";
const img4 = "https://lh3.googleusercontent.com/aida-public/AB6AXuD8K5XyK_Gg0am4h88e0ibgBzO7B0mLMwPqvJ4vXZ5jKsRwJYoOca1GL25a2UAOE5T1B0HlWcdPaII4mSAZEMENdT5wKg02uh9169WjZJAUhIK1GvbiEnfwtDlYuYZvdT6jlPOsvJQ_kaFlFeHkTFYjQgKIqy-97qYe_tZ9NrwNRD7B1_DyOKJ_W421gu75zOhZVuJcfs1yBiudkPtYnTkJFFZqP6X-1LyJeklw0ibGmQ5Vk9XE-RT6gmQ3jtWvXVpizXx3ycn4iLrk";
const img5 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCNUoUeVOiKuzn5qFCcuCwSqokTA2iw8qSWmPCv-Y3gXtc9NTMDx3lSGRspxKoe2Gd-AZYclpAdtavG9LuwsOYqvQSUPvuKfuojCGYtaDJx0wjMLbUXX7rpcfHhwnu8oAgZPN8PnRKzYCBq4W8POKiky0wNyNjw8A3J1vG5mAitdq7nwk8YGaWj1xn5KLSUhN99us-4qNPo10l1F5DLRawXF0kXw_ugzw0Jv2SSTOqrrYT5JYU9DiO5qLIYhHuSXe4pvAufR82M6Y-u";
const img6 = "https://lh3.googleusercontent.com/aida-public/AB6AXuC7ir4xreTNAMKElwsXrsos_Re13e3j3VDI5CiZwVg1TK_Es1QbS2UEEdX6tmKrPnxDO_L4G3I1-Nu7fvVrfA-N2_VQLrlJzabTAwB6v_4zEXoDvds8ehqIYzvvLv3GQKxP9M_39OzUlMZY512XktpiTVJAU6rhCZncZg_8dW52g5qWhSxfTSL0ERiMk10tNBxkf_4lCRcReWggFGhyDJWZ0IaaOT-kWmJYVU783vDYSxUi87UGtTDeyFVhXLFgnvm_aWqK_0uajHjI";

// Array of Object which has fruit name and image
const uniqueImages = [{ image: img1, fruit: "Apple" },
{ image: img2, fruit: "Banana" },
{ image: img3, fruit: "Cherry" },
{ image: img4, fruit: "Strawberry" },
{ image: img5, fruit: "Watermelon" },
{ image: img6, fruit: "Orange" },
]

//Shuffling Function that shuffles the images in different indexes and return Shuffled Array.
function shuffleCard(uniqueImages) {
    const shuffledArray = [];

    for (let i = 0; i < uniqueImages.length; i++) {
        let initial = true;
        while (initial) {
            let no1 = Math.floor(Math.random() * (2 * uniqueImages.length))
            let no2 = Math.floor(Math.random() * (2 * uniqueImages.length))
            if (no1 !== no2) {
                if (!shuffledArray[no1] && !shuffledArray[no2]) {
                    shuffledArray[no1] = uniqueImages[i];
                    shuffledArray[no2] = uniqueImages[i];
                    initial = false;
                }
            }
        }
    }

    return shuffledArray;
}

//Storing the Returned array
let shuffledImages = shuffleCard(uniqueImages);


const chances = 24;

//adding Two p tag to show chance and total flip made
const chanceEl = document.createElement('p');
chanceEl.textContent = "Total Flip Chance:"
const span = document.createElement('span');
span.textContent = chances;
chanceEl.append(span);

const flipMadeEl = document.createElement('p');
flipMadeEl.textContent = "Flips made:"
flipMadeEl.setAttribute('id', 'flipMade')
const span2 = document.createElement('span');
span2.textContent = 0;
flipMadeEl.append(span2);

const scoreEl = document.getElementById("score")
scoreEl.appendChild(chanceEl)
scoreEl.appendChild(flipMadeEl)

//Dynamically Creating cards and appending the img and card into container (Selected Element)

for (let i = 0; i < 12; i++) {
    //creating div and img element
    const div = document.createElement('div');
    const img = document.createElement('img');

    // provinding src and alt from shuffledImages Data
    img.src = shuffledImages[i].image;
    img.alt = shuffledImages[i].fruit;
    img.style.display = "none"
    var trackingCard = [];
    //when event mouseup occurs
    div.addEventListener('mouseup', (e) => {
        // flip count is dynamically Updated
        document.querySelector('#flipMade > span').textContent = parseInt(document.querySelector('#flipMade > span').textContent) + 1;
        if( parseInt(document.querySelector('#flipMade > span').textContent) > 24){
            const span = document.querySelector('#flipMade > span');
            span.style.color ="red"
        }
        const image = e.target.children[0]
        if (image !== undefined) {
            //clicked image is block and added class flipped
            image.style.display = "block"
            image.classList.add("flipped")
            //for comparing the result 
            if (trackingCard.length === 0) {
                trackingCard.push(image)
            }
            else {
                if (trackingCard[0].alt === image.alt) {
                    trackingCard[0].classList.remove("flipped")
                    image.classList.remove("flipped")
                    trackingCard[0].classList.add("matched")
                    image.classList.add("matched");
                }
                trackingCard.length = 0;

                const flipped = document.querySelectorAll(".flipped")
                setTimeout(() => {
                    flipped.forEach(value => {
                        value.style.display = "none"
                        value.classList.remove("flipped");
                    })
                }, 1000)
            }
        }
    })
    div.append(img)
    grid.append(div)
}

//logic for shuffle button
const shuffleBtn = document.getElementById('shuffle');

shuffleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    shuffledImages = shuffleCard(uniqueImages);
    const child = grid.children;
    const matchedCard = document.querySelectorAll('.matched , .flipped')
    matchedCard.forEach(value => {
        value.classList.contains("matched") ? value.classList.remove("matched") : value.classList.remove("flipped");
    })

    for (let i = 0; i < child.length; i++) {
        console.log(child[i].children[0].src)
        child[i].children[0].src = shuffledImages[i].image;
        child[i].children[0].alt = shuffledImages[i].fruit;
        child[i].children[0].style.display = "none"
    }

    document.querySelector('#flipMade > span').textContent = 0;
    trackingCard.length = 0;

     const span = document.querySelector('#flipMade > span');
     span.style.color ="#3b5bdb"
})

// logic for Reset Btn.

const restartBtn = document.getElementById('restart');

restartBtn.addEventListener('click', () => {
    document.location.reload();
})
