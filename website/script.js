 alert("leave a comment")
 
 document.addEventListener("DOMContentLoaded", function() {
  // Create the navigation bar HTML
  var navBarHTML = `
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
  `;
  
  // Find the location where you want to insert the navigation bar
  var navBarLocation = document.getElementById("nav-bar");
  
  // Insert the navigation bar HTML into the designated location
  if (navBarLocation) {
      navBarLocation.innerHTML = product.html;
  }
});


 const logo = document.getElementById('logo');
 logo.addEventListener('click',()=>{
   location.reload(true);
   window.scrollTo(0, 0);
 })
const page = document.getElementById('bat-img');
page.addEventListener('click',()=>{
 window.location = 'page2.html'
})
const page2 = document.getElementById('bat-img2');
page2.addEventListener('click',()=>{
 window.location = 'page3.html'
})
const page3 = document.getElementById('bat-img3');
page3.addEventListener('click',()=>{
 window.location = 'page4.html'
})
const page4 = document.getElementById('bat-img4');
page4.addEventListener('click',()=>{
 window.location = 'page5.html'
})
const page5 = document.getElementById('bat-img5');
page5.addEventListener('click',()=>{
 window.location = 'page6.html'
})
const allProducts = document.getElementById('products');
allProducts.addEventListener('click',()=>{
 window.location = 'produts.html'
})