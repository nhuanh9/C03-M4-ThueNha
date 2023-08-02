function  loadHome(){
    let str=`
        <button>Home</button>
        <button onclick="loadLogin()">login</button>
        <button onclick="logout()">logout</button>
        <input type="text"> <button > search </button>
        <div id="main"></div>
        <div id="user"></div>

      `
    document.getElementById('display').innerHTML= str
    loadListUser()
}
function logout(){
    loadHome()
}