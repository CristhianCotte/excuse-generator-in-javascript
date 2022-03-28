window.onload =()=>{
    document.getElementById('excuse').innerHTML = onload();
}

let onload = () =>{
    
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    
    let firstSentence = who[Math.floor(Math.random()* who.length)]; 
    let secondSentence = what[Math.floor(Math.random()* what.length)]; 
    let thirSetence = when[Math.floor(Math.random()* when.length)]; 

    return firstSentence + " "+ secondSentence + " " + thirSetence ;
};
