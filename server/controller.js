module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["All will go well with your new project.", "A beautiful, smart, and loving person will be coming into your life.", "A faithful friend is a strong defense.","A friend is a present you give yourself." ,"A faithful friend is a strong defense."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    // showText: (req,res) => {
    //     text.push(req.data) 
    //     res.status(200).send(text);
    //     alert(text)
    //     console.log(text)
    // }

}