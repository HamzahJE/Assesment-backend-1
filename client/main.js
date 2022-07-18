
const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn =document.querySelector("#fortuneButton")

const confidentText = document.querySelector("form")

const dogPicBtn = document.querySelector("#dogPicButton")

const catFactBtn = document.querySelector("#catFactButton")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const showText= (evt) => {
    evt.preventDefault()
    const input = document.querySelector("#textbox")
        text=[]
        text.push(input.value)
        const inputText = document.createElement('div')

    inputText.innerHTML=
    `<div>
    Use this for inspiration when you feel down! 
    <div>${text}</div>
    </div>`
    textContainer.appendChild(inputText)
    }

const getDogPic= () => {
    console.log("button Clicked for pic")
    axios
    .get(`https://dog.ceo/api/breeds/image/random`)
    .then(res => {
        let image=res.data.message;
        console.log(image)

        const imageArea= document.createElement(`section`)
        imageArea.innerHTML= `<div>Here is your cute dog Image! <div><img src=${image}></img></div></div>`
        dogImg.appendChild(imageArea)
    })
    }
    const getCatFact= () => {
        console.log("button Clicked for cat pic")

        axios
        .get(`https://catfact.ninja/fact?max_length=1000`)
        .then(res => {
            let fact=res.data.fact;
            console.log(fact)
    
            const factArea= document.createElement(`section`)
            factArea.innerHTML= `<div>Here is your random cat fact! <div >${fact}</div></div>`
            catFact.appendChild(factArea)
        })
    }

 


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
confidentText.addEventListener(`submit`,showText)
dogPicBtn.addEventListener('click', getDogPic)
catFactBtn.addEventListener('click', getCatFact)
