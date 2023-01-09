
function submitData(userName, userEmail){
    const UserInfo = {
        name : userName,
        email : userEmail
    }
   const request = {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(UserInfo)
   }
   return fetch("http://localhost:3000/users", request)
         .then(res => res.json())
         .then(function(object){

            let h3 = document.createElement("h3")
            h3.innerHTML= `${object.name}  ${object.id}` 
            document.querySelector("body").appendChild(h3)
         })
         .catch(function(error){
            document.body.innerHTML = error
         })
}
submitData("sarah","sarah@mail.com")