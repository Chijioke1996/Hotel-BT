

btn.addEventListener("click", () => {


    fetch("http://localhost:3000/feedback", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },

        body: JSON.stringify({
            name : req.body.name,
            email : req.body.email,
            message : req.body.message
        })


    })
    .then( res => {
        return res.json()
    })
    .catch(error => {
        console.error(error);
    })
  
    
})

// btn.addEventListener("click", () => {
    
// })