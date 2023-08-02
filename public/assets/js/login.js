function loadLogin(){
    let str=`
        <input type="text" id="username" name="username">
        <input type="text" id="password" name="password">
        <button onclick="checklogin()"> Login </button>
        <button onclick="LoadRegister()"> Register</button>
        `
    document.getElementById('display').innerHTML= str
}
function checklogin(){
    alert('Ban da dang nhap thanh cong')
    loadHomeUser()
}