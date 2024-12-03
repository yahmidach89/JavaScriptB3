async function fetchAndDisplayUsers() {
    try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) throw new Error('Erreur lors de la récupération des données');
        const users = await response.json();
        const tableBody = document.getElementById('tableau');
        tableBody.innerHTML = '';
        
        let maxId = 0;
        users.forEach(user => {
            maxId = Math.max(maxId, user.id);
            tableBody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.password}</td>
                    <td><button class="deleteBtn" onclick="deleteUser(${user.id})">Supprimer</button></td>
                </tr>
            `;
        });
        return maxId;
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const email1 = document.getElementById("email1").value;
    const email2 = document.getElementById("email2").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    if ((!email1.includes('@') || !email1.includes('.')) && 
        (!email2.includes('@') || !email2.includes('.'))) {
        alert("Le format de l'email est incorrect!");
    }

    if (email1 !== email2) {
        alert("Les emails ne correspondent pas.");
        return;
    }

    if (password1 !== password2) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password1)) {
        alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.");
        return;
    }

    const users = await fetchAndDisplayUsers();
    const newId = users + 1;

    const user = { id: newId, firstname, lastname, phone, email: email1, password: password1 };

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            alert("Utilisateur ajouté avec succès !");
            fetchAndDisplayUsers();
        } else {
            alert("Erreur lors de l'ajout de l'utilisateur.");
        }
    } catch (error) {
        console.error(error);
        alert("Une erreur est survenue.");
    }
});

window.onload = fetchAndDisplayUsers;

async function deleteUser(userId) {
    try {
        const response = await fetch(`http://localhost:3000/users/${userId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert("Utilisateur supprimé avec succès !");
            fetchAndDisplayUsers();
        } else {
            alert("Erreur lors de la suppression de l'utilisateur.");
        }
    } catch (error) {
        console.error(error);
        alert("Une erreur est survenue.");
    }
}