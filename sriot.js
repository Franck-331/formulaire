 const form =document.getElementById("myform");

 form.addEventListener("submit",(e)=>{
    e.preventDefault();// empeche le rechargement de la page

    const nom=document.getElementById("nom").value ;
    const prenom=document.getElementById("prenom").value;
    const  email=document.getElementById("email").value;
    const password  =document.getElementById(" mot de passe").value;
    const buton =document.getElementById("buton").function;
    //verifier si les champs sont remplis
    if( nom && prenom && email && password){
        //envoie le message au serveur(ici nous allons juste afficher un message)
        alert  ("merci ${nom} ${prenom} ${email} ${password} pour votre inscription!");
    }
    else{
        alert("veiller remplir tous les champs");
    }
    
    });