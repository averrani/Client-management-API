var url = new URL("http://localhost:3001/api/clients");

function getTotalClients() {
    //on recupere le nombre de clients
    let nbclients;
    $.ajax({
        url: url,
        async: false,
        success: function (data) {
            nbclients = data.total;
        }
    });
    return nbclients;
}

function handleSubmit() {
    let id = parseInt(document.getElementById("id").value);
        //on recupere l'url et on la transforme en objet url
        var search_params = url.searchParams;
        search_params.set("id", id);
        // replace current query string with new params
        url.search = search_params.toString();
        //on envoie le client au serveur
        $.ajax({
            url: url,
            method: "DELETE",
            contentType: "text/plain",
            success: function (response) {
                if (response.success) {
                    // Utilisateur supprimé avec succès
                    alert("success");
                  } else {
                    // Erreur lors de la suppression de l'utilisateur
                    alert("error");
                  }
            }
        });    
}