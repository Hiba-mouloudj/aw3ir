window.onload = function () {
    console.log("DOM ready!");

    const form = document.querySelector("#myForm");
    const modal = new bootstrap.Modal(document.getElementById("myModal"));
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

     
        const name = document.getElementById("name").value.trim();
        const firstname = document.getElementById("firstname").value.trim();
        const birthday = document.getElementById("birthday").value;
        const address = document.getElementById("address").value.trim();
        const email = document.getElementById("email").value.trim();

        //VALIDATION 
        if (!name || !firstname || !birthday || !address || !email) {
            modalTitle.textContent = "Erreur dans le formulaire";
            modalBody.innerHTML = "<p>Tous les champs sont obligatoires</p>";
            modal.show();
            return;
        }

        if (name.length < 5 || firstname.length < 5 || address.length < 5) {
            modalTitle.textContent = "Erreur dans le formulaire";
            modalBody.innerHTML = "<p>Les champs texte doivent avoir minimum 5 caractères</p>";
            modal.show();
            return;
        }

        if (!validateEmail(email)) {
            modalTitle.textContent = "Erreur dans le formulaire";
            modalBody.innerHTML = "<p>Email non valide</p>";
            modal.show();
            return;
        }


        const birthdayDate = new Date(birthday);
        const now = new Date();
        if (birthdayDate > now) {
            modalTitle.textContent = "Erreur dans le formulaire";
            modalBody.innerHTML = "<p>La date de naissance ne peut pas être dans le futur</p>";
            modal.show();
            return;
        }

        // SUCCÈS :
        const formattedDate = birthdayDate.toLocaleDateString('fr-FR');
        modalTitle.textContent = `Bienvenue ${firstname}`;
        modalBody.innerHTML = `
            <p>Vous êtes né le <strong>${formattedDate}</strong> et vous habitez <strong>${address}</strong>.</p>
        `;
        modal.show();
    });
};