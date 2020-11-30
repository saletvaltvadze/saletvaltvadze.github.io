const name = document.getElementById("name");
    const feedback = document.getElementById("feedback");
    const btnInsert = document.getElementById("btnInsert");
    
    
    btnInsert.onclick = function(){
    const int = name.value;
    const value = feedback.value;
    
    console.log(int);
    console.log(value);
    
    if (int && value) {
    localStorage.setItem(int, value);
    
    location.reload();
    }
    }