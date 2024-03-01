function showDetails(title, description, price, imageUrl) {
    document.getElementById('product-title').innerHTML = title;
    document.getElementById('product-description').innerHTML = description;
    document.getElementById('product-price').innerHTML = price;
    document.getElementById('product-popup-img').src = imageUrl;

    document.getElementById('overlay').style.display = 'flex';
}

function hideDetails() {
    document.getElementById('overlay').style.display = 'none';
}




function handleSubmitBit(event){
  
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value
 
 
    const user = {
     username: username,
     email: email,
     phone: phone
    }
   
    const storedUserDetails = localStorage.getItem("user Details")
    const existingUserDetails =  storedUserDetails ? JSON.parse(storedUserDetails) : {};
 
    const updateUserDetails = Object.assign({}, existingUserDetails, user)
 
    localStorage.setItem("user Details", JSON.stringify(updateUserDetails));
 
    alert("User details submitted and saved to Local Storage ")
 
 
 
 
 }