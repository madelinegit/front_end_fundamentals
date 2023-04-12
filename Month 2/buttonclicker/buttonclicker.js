console.log("javascript")


function liked() {
    alert('liked')
}

function logout() {
    var loginbtn = document.getElementById("logout-id")
    loginbtn.innerText="Logout"
}

function definition() {
var defbutton = document.querySelector(".defbutton")
defbutton.remove()
}

{/* <script>
            $('body').contents().filter(function(){
            return this.nodeType != 1;
            }).remove();
        </script> */}

// <h2 class="defbutton" onclick="definition()">Add Definition </h2>