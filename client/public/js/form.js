var url = new URL("http://localhost:3001/api/clients");

function handleSubmit() {
    //on recupere l'id du dernier client
    let idMax;
    $.ajax({
        url: url,
        async: false,
        success: function (data) {
            idMax = data.total;
        }
    });

    //on cree un objet client avec les valeurs du formulaire
    let client = {
        id: idMax + 1,
        email: document.getElementById("email").value,
        first: document.getElementById("name").value,
        last: document.getElementById("name2").value,
        company: document.getElementById("society").value,
        created_at: new Date(),
        country: document.getElementById("country").value
    };
    //on envoie le client au serveur
    $.ajax({
        url: url,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(client),
        //en cas de succes
        success: function () {
            $("#alert-message").attr('class', 'alert alert-success');
            $("#alert-message").html("Client ajouté");
            alert("Client ajouté");
            console.log("done");
        },

    //si erreur
        error: function (xhr) {
            $("#alert-message").attr('class', 'alert alert-danger');
            $("#alert-message").html(xhr.responseText);
        }
    });

}