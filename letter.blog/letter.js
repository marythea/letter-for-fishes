var x = document.querySelector('.container');
x.style.display = "none";
typeBar=()=>{
    let y = document.getElementById('pas');
    var pas = 'Password';
    if(y.value == pas){
        y.style.border = "2px solid blue"; 
        x.style.display = "block"
        y.style.fontWeight = "bold"
        y.style.color = "#006400"
        document.querySelector('.para').innerHTML = "Correct, now click the heart";
        setTimeout(() => {
            document.querySelector('.pas').style.display = "none";
        }, 
        2000);
    }
    else if(y.value !== pas){
        y.style.color = "maroon"
        y.style.border = "2px solid red"; 
    }
    else{
        alert("Please try Again");
    }
}


