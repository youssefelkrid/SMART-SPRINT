# SMART-SPRINT
Documentation -- Veilles et ateliers JavaScript
Présentation
Ce dépôt regroupe les recherches, les notions essentielles, les
démonstrations et les activités pratiques réalisées autour de JavaScript
et du développement frontend.

Les thèmes abordés sont :
1. jQuery : sélecteurs, DOM, événements et animations.
2. Parsley.js : validation des formulaires.
3. RGPD : protection et qualité des données personnelles.
4. Dates en JavaScript : création, formatage et comparaison.
5. Délégation d'événements : gestion d'un CRUD d'utilisateurs.
6. Formats de données : JSON, BSON, YAML et XML.
7. Higher-Order Functions : manipulation des tableaux en JavaScript.
1. jQuery
1.1 Qu'est-ce que jQuery ?
jQuery est une bibliothèque JavaScript qui simplifie plusieurs
opérations courantes du développement web, notamment la sélection des
éléments HTML, la manipulation du DOM, la gestion des événements et la
création d'animations.
1.2 Pourquoi utiliser jQuery ?
- Simplifier la sélection des éléments HTML.
- Réduire la quantité de code nécessaire pour manipuler le DOM.
- Faciliter la gestion des événements.
- Créer des animations avec des méthodes simples.
- Améliorer la compatibilité avec d'anciens navigateurs.
jQuery reste utile dans certains projets existants. Pour les nouveaux
projets, JavaScript moderne permet souvent de réaliser les mêmes
opérations sans bibliothèque supplémentaire.

1.3 Installation
Avec un CDN :
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="app.js"></script>
Le script jQuery doit être chargé avant le fichier app.js.

Avec npm :
npm install jquery
Dans un projet utilisant un système de modules :
import $ from "jquery";
1.4 Sélecteurs jQuery
  Sélecteur                   Signification                     Exemple
  $("p")                    Tous les paragraphes              $("p")
$("#title")               Élément ayant l'id title        $("#title")
$(".card")                Éléments ayant la classe card   $(".card")
$("div p")                Paragraphes situés dans un div    $("div p")
$("input[type='text']")   Champs texte                      $("input[type='text']")
1.5 Manipulation du DOM
// Lire ou modifier le contenu texte
$("#title").text("Bienvenue");

// Modifier le contenu HTML
$("#content").html("<strong>Bonjour</strong>");

// Modifier un attribut
$("#photo").attr("src", "image.jpg");

// Ajouter une classe
$("#card").addClass("active");

// Supprimer une classe
$("#card").removeClass("active");

// Ajouter un élément à la fin
$("#list").append("<li>Nouveau produit</li>");
1.6 Événements et animations
// Événement de clic
$("#button").on("click", function () {
    $("#message").text("Bouton cliqué !");
});

// Masquer un élément
$("#box").hide();

// Afficher un élément
$("#box").show();

// Faire apparaître progressivement
$("#box").fadeIn();

// Faire disparaître progressivement
$("#box").fadeOut();

// Modifier la hauteur progressivement
$("#box").slideToggle();
2. Validation des formulaires avec Parsley.js
2.1 Présentation
Parsley.js est une bibliothèque JavaScript qui permet de valider les
champs d'un formulaire côté client avant son envoi.

Elle permet notamment de vérifier les champs obligatoires, les formats,
les longueurs et certaines règles personnalisées.
2.2 Installation avec CDN
<form id="registerForm" data-parsley-validate>
    <label for="email">Email</label>
    <input
        id="email"
        name="email"
        type="email"
        required
        data-parsley-type="email"
    >

    <label for="username">Nom d'utilisateur</label>
    <input
        id="username"
        name="username"
        type="text"
        required
        data-parsley-minlength="3"
        data-parsley-maxlength="20"
    >

    <button type="submit">Envoyer</button>
</form>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/parsleyjs"></script>
<script src="app.js"></script>
2.3 Initialisation et gestion de l'envoi
const form = $("#registerForm");

// Initialiser Parsley sur le formulaire
const validator = form.parsley();

form.on("submit", function (event) {
    event.preventDefault();

    // Vérifier toutes les règles de validation
    if (validator.isValid()) {
        console.log("Formulaire valide : on peut envoyer les données.");
        // Le fetch peut être exécuté ici.
    } else {
        console.log("Le formulaire contient des erreurs.");
    }
});
2.4 Règles de validation courantes
  Attribut                             Rôle
  required                           Champ obligatoire
data-parsley-type="email"          Vérifier le format email
data-parsley-minlength="3"         Minimum de 3 caractères
data-parsley-maxlength="20"        Maximum de 20 caractères
data-parsley-pattern="..."         Vérifier une expression régulière
data-parsley-equalto="#password"   Comparer avec un autre champ
2.5 Checklist de validation
- [ ] Les champs obligatoires ne sont pas vides.
- [ ] L'adresse email respecte le format attendu.
- [ ] Les longueurs minimales et maximales sont respectées.
- [ ] Les mots de passe ou champs à comparer correspondent.
- [ ] Les messages d'erreur sont visibles et compréhensibles.
- [ ] Le fetch ne démarre qu'après une validation réussie.
- [ ] Le loader apparaît uniquement après validation réussie.
2.6 Questions de réflexion
Pourquoi valider les données avant d'appeler l'API ?

Pour détecter rapidement les erreurs de saisie, éviter les requêtes
inutiles et améliorer l'expérience utilisateur.

Quand la validation côté client ne suffit-elle pas ?

Elle ne suffit jamais à garantir la sécurité. Un utilisateur peut
désactiver JavaScript ou modifier les données envoyées. Le serveur doit
donc toujours refaire les validations.

Que se passe-t-il si un champ obligatoire est vide ?

Parsley détecte l'erreur, affiche un message et empêche le traitement
normal de l'envoi tant que le formulaire n'est pas valide, si la
validation est correctement intégrée.
3. Protection des données personnelles -- RGPD
3.1 Définition
Le RGPD (Règlement général sur la protection des données) est un
règlement européen qui encadre le traitement des données personnelles.

Une donnée personnelle est une information permettant d'identifier
directement ou indirectement une personne : nom, adresse email, numéro
de téléphone, identifiant, etc.
3.2 Principes essentiels
- Finalité : collecter les données pour un objectif précis.
- Minimisation : ne collecter que les données nécessaires.
- Transparence : informer les personnes sur l'utilisation de leurs
  données.
- Exactitude : maintenir les données correctes et à jour.
- Durée de conservation : ne pas conserver les données plus
  longtemps que nécessaire.
- Sécurité : protéger les données contre les accès non autorisés.
- Responsabilité : pouvoir démontrer le respect des obligations
  applicables.
3.3 Anonymisation et pseudonymisation
  Notion                  Description             Réutilisation
  Anonymisation           Transformation          Les données réellement
irréversible empêchant  anonymisées ne sont
raisonnablement de      plus des données
réidentifier une        personnelles au sens du
personne                RGPD
Pseudonymisation        Remplacement des        Une réidentification
identifiants directs    reste possible avec des
par un code ou un       informations
pseudonyme              supplémentaires ; les
données restent
personnelles
3.4 Qualité des données
Le data profiling consiste à examiner un jeu de données pour mieux
comprendre sa structure, détecter les anomalies et évaluer sa qualité.
  Dimension               Signification           Exemple de contrôle
  Complétude              Les informations        Vérifier les emails
nécessaires sont        manquants
présentes               

  Unicité                 Les doublons sont       Vérifier les
évités                  identifiants répétés

  Cohérence               Les données respectent  Vérifier le format des
les règles définies     dates
Exactitude              Les données reflètent   Vérifier les
correctement la réalité informations auprès
d'une source fiable
3.5 Exemple de tableau de suivi RGPD
  Exigence          Question de       Statut            Action
contrôle                            
  Finalité          L'objectif de     À vérifier        Documenter la
collecte est-il                     finalité
défini ?                            

  Minimisation      Toutes les        À vérifier        Supprimer les
données                             champs inutiles
collectées
sont-elles
nécessaires ?                       

  Information       L'utilisateur     À vérifier        Ajouter une
est-il informé ?                    information
claire

  Base légale       Une base légale   À vérifier        Vérifier le
appropriée                          fondement du
est-elle définie                    traitement
?                                   

  Conservation      Une durée de      À vérifier        Définir une durée
conservation
est-elle définie
?                                   

  Sécurité          Les accès         À vérifier        Limiter les accès
sont-ils protégés                   et sécuriser le
?                                   stockage
Droits            Les demandes des  À vérifier        Prévoir une
personnes                           procédure
peuvent-elles
être traitées ?
3.6 Questions de réflexion
Comment le choix entre anonymisation et pseudonymisation impacte-t-il
la réutilisation des données ?

L'anonymisation empêche la réidentification et permet, sous réserve
qu'elle soit effective, une utilisation hors du cadre des données
personnelles. La pseudonymisation conserve une possibilité de
réidentification : les données restent donc soumises au RGPD.

Quand la qualité des données peut-elle devenir un risque de
non-conformité ?

Lorsque des données incorrectes, excessives, obsolètes ou attribuées à
la mauvaise personne sont utilisées, elles peuvent porter atteinte aux
droits des personnes et contrevenir aux principes du RGPD.

Que se passe-t-il si une donnée personnelle est stockée sans
consentement explicite ?

Le consentement n'est pas l'unique base légale possible. Il faut
déterminer si le traitement repose sur une base légale valable et
respecter les obligations d'information et les droits des personnes. Si
aucune base légale ne justifie le traitement, celui-ci peut être
illicite.
4. Gestion des dates en JavaScript
4.1 Créer une date
const now = new Date();

const dateFromText = new Date("2026-11-13T09:30:00Z");

console.log(now);
console.log(dateFromText);
new Date() crée un objet Date représentant un instant. Une chaîne ISO
peut également être utilisée pour construire une date.
4.2 Lire les parties d'une date
const date = new Date();

console.log(date.getFullYear()); // Année
console.log(date.getMonth());    // Mois : de 0 à 11
console.log(date.getDate());     // Jour du mois
console.log(date.getHours());    // Heure locale
console.log(date.getMinutes());  // Minutes
console.log(date.getTime());     // Timestamp en millisecondes
Attention : getMonth() commence à 0 (janvier) et se termine à 11
(décembre).
4.3 Date.now() et timestamp
const timestamp = Date.now();

console.log(timestamp);
Date.now() retourne le nombre de millisecondes écoulées depuis le 1er
janvier 1970 à 00:00:00 UTC.
4.4 Formater une date
const date = new Date("2026-11-13T09:30:00");

console.log(date.toLocaleDateString("fr-FR"));
console.log(date.toLocaleTimeString("fr-FR"));
console.log(date.toLocaleString("fr-FR"));
Pour obtenir un affichage adapté à la langue et aux conventions locales,
toLocaleString() est généralement préférable à une concaténation
manuelle.
4.5 Comparer deux dates
const date1 = new Date("2026-11-10");
const date2 = new Date("2026-11-13");

if (date1 < date2) {
    console.log("La première date est plus ancienne.");
}
4.6 Calculer le temps écoulé
const createdAt = new Date("2026-11-13T09:00:00");
const now = new Date();

const difference = now.getTime() - createdAt.getTime();

const minutes = Math.floor(difference / (1000 * 60));
const hours = Math.floor(difference / (1000 * 60 * 60));
const days = Math.floor(difference / (1000 * 60 * 60 * 24));

console.log(minutes, hours, days);
Pour actualiser l'affichage sans recharger la page, on peut recalculer
la différence à intervalles réguliers avec setInterval().
4.7 Gérer une date invalide ou absente
function formatDate(value) {
    if (!value) {
        return "Date non disponible";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "Date invalide";
    }

    return date.toLocaleString("fr-FR");
}
4.8 Fuseaux horaires
Une date ISO terminée par Z représente une heure UTC. Un décalage
explicite, comme +01:00, indique également le fuseau ou décalage
utilisé.

Une chaîne sans fuseau horaire peut être interprétée différemment selon
son format. Il est préférable que les API transmettent des dates ISO
avec un fuseau ou un décalage explicite.
4.9 Checklist des dates
- [ ] Créer un objet Date à partir d'une date actuelle ou d'une
  chaîne ISO.
- [ ] Lire l'année, le mois, le jour et l'heure.
- [ ] Formater la date avec toLocaleString().
- [ ] Comparer deux dates.
- [ ] Calculer une durée en minutes, heures ou jours.
- [ ] Gérer les dates manquantes et invalides.
- [ ] Tenir compte du fuseau horaire.
- [ ] Actualiser dynamiquement le temps écoulé.
4.10 Questions de réflexion
Comment afficher « il y a 5 minutes » sans recharger la page ?

En calculant régulièrement la différence entre la date actuelle et la
date enregistrée, puis en mettant à jour le texte affiché avec
setInterval().

Que se passe-t-il si le serveur renvoie une date ISO sans fuseau
horaire ?

L'interprétation peut être ambiguë ou dépendre du format et de
l'environnement. Il vaut mieux transmettre un Z ou un décalage
explicite.

Pourquoi utiliser toLocaleString() ?

Cette méthode adapte le format à la langue et aux conventions locales,
ce qui évite de construire manuellement chaque partie de la date.
5. Délégation d'événements -- CRUD d'utilisateurs
5.1 Objectif
La délégation d'événements consiste à placer un seul écouteur sur un
élément parent pour gérer les événements déclenchés par ses éléments
enfants.

Elle est particulièrement utile lorsque les boutons sont créés
dynamiquement.
5.2 Structure HTML
<h1>Utilisateurs</h1>

<table id="usersTable">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<script src="app.js" defer></script>
5.3 Style CSS minimal
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

button {
    margin-right: 4px;
}
5.4 Données et affichage
const users = [
    { id: 1, name: "Youssef", email: "youssef@example.com" },
    { id: 2, name: "Amina", email: "amina@example.com" },
    { id: 3, name: "Rachid", email: "rachid@example.com" }
];

const tbody = document.querySelector("#usersTable tbody");

function renderList() {
    tbody.innerHTML = "";

    for (const user of users) {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button data-id="${user.id}" data-action="edit">Edit</button>
                <button data-id="${user.id}" data-action="delete">Delete</button>
            </td>
        `;

        tbody.appendChild(tr);
    }
}
5.5 Écouteur unique et suppression
tbody.addEventListener("click", async (event) => {
    const button = event.target.closest("button");

    if (!button) return;

    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "delete") {
        try {
            const response = await fetch(
                `https://api.example.com/users/${id}`,
                { method: "DELETE" }
            );

            if (!response.ok) {
                throw new Error("Erreur serveur");
            }

            const index = users.findIndex(user => user.id === id);

            if (index !== -1) {
                users.splice(index, 1);
            }

            renderList();
            alert("Utilisateur supprimé");
        } catch (error) {
            alert("Échec de la suppression : " + error.message);
        }
    }
});

renderList();
https://api.example.com est une adresse fictive utilisée comme
exemple. Pour une démonstration réelle, il faut la remplacer par une
API existante ou un service local simulé.

5.6 Comprendre les étapes
1. L'utilisateur clique sur un bouton dans une ligne.
2. L'événement remonte jusqu'au tbody : c'est la propagation de
   l'événement.
3. event.target désigne l'élément réellement cliqué.
4. closest("button") retrouve le bouton correspondant, même si
   l'utilisateur clique sur un élément situé à l'intérieur du bouton.
5. dataset.id et dataset.action permettent de récupérer
   l'identifiant et l'action.
6. fetch() envoie la requête DELETE.
7. Si la réponse est correcte, l'utilisateur est retiré du tableau
   local.
8. renderList() actualise l'affichage.
5.7 Questions de réflexion
Pourquoi la délégation est-elle plus efficace que plusieurs écouteurs
?

Elle évite d'ajouter un écouteur à chaque bouton. Un seul écouteur sur
le parent peut gérer les éléments présents et ceux ajoutés plus tard.

Comment gérer les erreurs réseau de façon centralisée ?

On peut créer une fonction de service API commune qui effectue les
appels, vérifie les réponses et uniformise la gestion des erreurs.
6. Comparaison des formats : JSON, BSON, YAML et XML
6.1 Présentation
  Format            Caractéristiques   Lisibilité        Utilisation
courante
  JSON              Format texte       Élevée            Échanges de
structuré en                         données et API
objets et tableaux                   REST

  BSON              Représentation     Faible sans outil Stockage et
binaire de                           échanges internes
documents,                           MongoDB
utilisée notamment
par MongoDB                          

  YAML              Format texte basé  Élevée            Fichiers de
sur l'indentation                    configuration
XML               Format texte basé  Moyenne           Échanges avec des
sur des balises                      systèmes et
standards
existants
6.2 Exemple de données
JSON
{
    "name": "Youssef",
    "age": 25,
    "active": true
}
YAML
name: Youssef
age: 25
active: true
XML
<user>
    <name>Youssef</name>
    <age>25</age>
    <active>true</active>
</user>
BSON

BSON est une représentation binaire. Il ne se lit pas comme un fichier
texte JSON ou YAML. Dans un projet JavaScript, une bibliothèque adaptée
est nécessaire pour encoder ou décoder des documents BSON.
6.3 Tableau comparatif
  Critère        JSON           BSON           YAML            XML
  Taille         Généralement   Peut être plus Variable,       Souvent
compacte       volumineux ou  souvent lisible verbeux à
plus compact   mais verbeux    cause des
selon les                      balises
données                        

  Vitesse        Très bien pris Conçu pour le  Analyse         Dépend du
en charge      traitement de  généralement    parseur et de
documents      plus coûteuse   la structure
binaires       que JSON        

  Lisibilité     Bonne          Faible         Très bonne      Bonne, mais
humaine                                                      plus verbeuse
Usage          API web        Écosystème     Configuration   Systèmes XML
recommandé                    MongoDB                        et standards
existants
Les performances et les tailles dépendent des données, des bibliothèques
et de l'environnement. Il n'existe pas de classement universel valable
pour tous les cas.
6.4 Conversion JSON en JavaScript
const user = {
    name: "Youssef",
    age: 25
};

// Objet JavaScript vers chaîne JSON
const jsonData = JSON.stringify(user);

// Chaîne JSON vers objet JavaScript
const parsedData = JSON.parse(jsonData);

console.log(jsonData);
console.log(parsedData);
Pour convertir vers YAML, XML ou BSON, il faut utiliser une bibliothèque
adaptée à chaque format.
6.5 Quel format choisir ?
- JSON : pour communiquer avec la plupart des API web.
- BSON : lorsque le projet utilise MongoDB et son format de
  document binaire.
- YAML : pour des configurations que les développeurs doivent lire
  et modifier facilement.
- XML : lorsque le système cible ou un standard existant exige
  XML.
6.6 Questions de réflexion
Pourquoi BSON peut-il être préférable pour le stockage ?

BSON prend en charge des types supplémentaires et une représentation
binaire adaptée à MongoDB. Il n'est cependant pas automatiquement plus
compact que JSON dans tous les scénarios.

Quand YAML améliore-t-il la maintenabilité ?

Lorsqu'il s'agit de fichiers de configuration qui doivent être
facilement lus et modifiés par des humains.

Que se passe-t-il si une API attend du JSON et reçoit du XML ?

L'API peut refuser la requête ou retourner une erreur de format, car le
contenu ne respecte pas le format attendu.
7. Higher-Order Functions en JavaScript
7.1 Définition
Une Higher-Order Function (HOF) est une fonction qui reçoit une autre
fonction en argument, retourne une fonction, ou fait les deux.

Une callback est une fonction transmise à une autre fonction pour être
exécutée par celle-ci.
function sayHello(name) {
    console.log("Hello " + name);
}

function executeFunction(callback) {
    callback("Ahmed");
}

executeFunction(sayHello);
Résultat :
Hello Ahmed
7.2 Données de départ
const orders = [
    { id: 1, customer: "Ahmed", amount: 1200, status: "completed", category: "Electronics" },
    { id: 2, customer: "Sara", amount: 350, status: "pending", category: "Clothing" },
    { id: 3, customer: "Youssef", amount: 800, status: "completed", category: "Electronics" },
    { id: 4, customer: "Fatima", amount: 150, status: "cancelled", category: "Books" },
    { id: 5, customer: "Omar", amount: 2200, status: "completed", category: "Clothing" },
    { id: 6, customer: "Salma", amount: 450, status: "pending", category: "Books" },
    { id: 7, customer: "Khalid", amount: 950, status: "completed", category: "Electronics" }
];
Chaque commande contient un identifiant, un client, un montant, un
statut et une catégorie.
7.3 forEach() -- Parcourir un tableau
orders.forEach(function (order) {
    console.log(order.customer);
});
- Exécute la callback pour chaque élément.
- Sert principalement à effectuer une action.
- Ne retourne pas un nouveau tableau.
Version courte :
orders.forEach(order => console.log(order.customer));
7.4 map() -- Transformer les données
const customers = orders.map(function (order) {
    return order.customer;
});

console.log(customers);
map() retourne un nouveau tableau. Chaque valeur retournée par la
callback devient un élément du nouveau tableau.

Exemple avec une augmentation de 20 % :
const pricesWithTax = orders.map(order => {
    return order.amount * 1.20;
});
7.5 filter() -- Filtrer les éléments
const completedOrders = orders.filter(function (order) {
    return order.status === "completed";
});
filter() retourne un nouveau tableau contenant uniquement les éléments
pour lesquels la condition est vraie.
7.6 find() -- Rechercher un élément
const searchedOrder = orders.find(function (order) {
    return order.id === 3;
});
find() retourne le premier élément qui correspond à la condition. Si
aucun élément ne correspond, il retourne undefined.
const missingOrder = orders.find(order => order.id === 100);

console.log(missingOrder); // undefined
7.7 reduce() -- Calculer une valeur globale
const totalRevenue = orders.reduce((total, order) => {
    if (order.status === "completed") {
        return total + order.amount;
    }

    return total;
}, 0);

console.log(totalRevenue); // 5150
- total est l'accumulateur.
- order est l'élément actuel.
- 0 est la valeur initiale de l'accumulateur.
- La valeur retournée devient l'accumulateur du tour suivant.
Le chiffre d'affaires des commandes terminées est :

1200 + 800 + 2200 + 950 = 5150 DH.
7.8 Combiner plusieurs méthodes
Noms des clients ayant une commande terminée :
const completedCustomers = orders
    .filter(order => order.status === "completed")
    .map(order => order.customer);

console.log(completedCustomers);
Résultat :
["Ahmed", "Youssef", "Omar", "Khalid"]
Chiffre d'affaires des commandes Electronics terminées :
const electronicsRevenue = orders
    .filter(order =>
        order.category === "Electronics" &&
        order.status === "completed"
    )
    .reduce((total, order) => total + order.amount, 0);

console.log(electronicsRevenue); // 2950
7.9 sort(), some() et every()
// Trier les commandes du montant le plus élevé au plus faible
const sortedOrders = [...orders].sort((a, b) => {
    return b.amount - a.amount;
});

// Vérifier s'il existe une commande supérieure à 2000 DH
const hasExpensiveOrder = orders.some(order => order.amount > 2000);

// Vérifier si toutes les commandes ont un montant positif
const allPricesValid = orders.every(order => order.amount > 0);

console.log(sortedOrders);
console.log(hasExpensiveOrder); // true
console.log(allPricesValid);    // true
Attention : sort() modifie le tableau sur lequel il est appelé. La
copie [...orders] permet de préserver le tableau original.
7.10 Différences entre les méthodes
  Méthode                 Résultat                Utilité
  forEach()             undefined             Exécuter une action
pour chaque élément

  map()                 Nouveau tableau de même Transformer chaque
longueur                élément

  filter()              Nouveau tableau,        Garder les éléments qui
éventuellement vide     respectent une
condition

  find()                Un élément ou           Trouver le premier
undefined             élément correspondant

  reduce()              Une valeur finale       Accumuler ou calculer
un résultat

  some()                Booléen                 Vérifier si au moins un
élément respecte une
condition

  every()               Booléen                 Vérifier si tous les
éléments respectent une
condition
sort()                Tableau trié            Trier les éléments
7.11 Points d'attention
- Ne pas confondre map() et forEach().
- Ne pas oublier return lorsqu'une callback utilise des accolades.
- filter() retourne un tableau, contrairement à find().
- Bien comprendre le rôle de l'accumulateur dans reduce().
- Utiliser une copie si l'on ne souhaite pas modifier le tableau
  original avec sort().
7.12 Questions de réflexion
1. Qu'est-ce qu'une callback ?
2. Qu'est-ce qui différencie une fonction classique d'une Higher-Order
   Function ?
3. Quelle est la différence entre map() et forEach() ?
4. Pourquoi map() conserve-t-il le même nombre d'éléments ?
5. Quelle est la différence entre filter() et find() ?
6. Pourquoi reduce() utilise-t-il un accumulateur ?
7. Que se passe-t-il si on oublie le return dans une callback ?
8. Peut-on chaîner plusieurs Higher-Order Functions ?
9. Quelle est la différence entre some() et every() ?
8. Activités et tests de connaissances
Activité 1 -- jQuery
1. Sélectionner un élément avec un id.
2. Ajouter une classe CSS à cet élément.
3. Écouter un événement click.
4. Masquer puis afficher un élément avec jQuery.
Activité 2 -- Parsley.js
Créer un formulaire d'inscription avec les champs suivants :
- Nom : obligatoire, entre 3 et 20 caractères.
- Email : obligatoire et doit respecter le format email.
- Mot de passe : obligatoire, avec une longueur minimale.
- Confirmation : doit correspondre au mot de passe.
Test : vérifier que l'envoi est bloqué lorsqu'un champ est invalide
et que le traitement ne commence qu'après validation.
Activité 3 -- RGPD
À partir d'une liste fictive d'utilisateurs :
1. Identifier les données personnelles.
2. Repérer les champs inutiles.
3. Détecter les emails manquants et les identifiants en double.
4. Proposer une durée de conservation et des mesures de sécurité.
5. Compléter le tableau de suivi de conformité.
Activité 4 -- Dates
Créer une liste d'utilisateurs contenant une date d'inscription ISO.
Afficher :
- Le nom de l'utilisateur.
- La date formatée en français.
- Le temps écoulé depuis l'inscription.
Prévoir les cas où la date est absente ou invalide.
Activité 5 -- Délégation d'événements
À partir du tableau d'utilisateurs :
1. Afficher les utilisateurs.
2. Ajouter un seul écouteur click sur le tbody.
3. Identifier le bouton cliqué avec closest().
4. Supprimer un utilisateur avec une requête DELETE.
5. Mettre à jour le tableau sans recharger la page.
6. Afficher un message en cas de succès ou d'erreur.
Activité 6 -- Formats de données
Représenter une même liste de livres en JSON, YAML et XML, puis utiliser
une bibliothèque pour encoder et décoder les données en BSON. Comparer
la lisibilité et la taille des représentations obtenues.
Activité 7 -- Higher-Order Functions
À partir du tableau orders :
1. Afficher les clients avec forEach().
2. Extraire les noms avec map().
3. Récupérer les commandes terminées avec filter().
4. Rechercher la commande d'identifiant 5 avec find().
5. Calculer le chiffre d'affaires avec reduce().
6. Calculer le chiffre d'affaires de la catégorie Electronics.
7. Trier les commandes par montant décroissant.
9. Ressources utiles
Formulaires et validation
- MDN -- Apprendre les
  formulaires
- JavaScript.info -- Validation de
  formulaire
- Documentation Parsley.js
Protection des données
- MDN -- Réglementations sur la
  confidentialité
- MDN --
  localStorage
Dates JavaScript
- MDN -- Objet
  Date
- JavaScript.info -- Date et heure
- MDN --
  Intl.DateTimeFormat
JavaScript et formats de données
- MDN --
  JSON
- JavaScript.info -- JSON
- jQuery -- Documentation officielle
- BSON -- Spécification
10. Conclusion
Ces veilles et ateliers permettent de renforcer les compétences frontend
en JavaScript : sélectionner et manipuler des éléments HTML, valider les
formulaires, protéger les données, traiter les dates, gérer les
événements et manipuler des données structurées.

L'objectif est de savoir non seulement utiliser les méthodes et
bibliothèques, mais aussi expliquer leur rôle, identifier leurs limites
et choisir une solution adaptée au besoin du projet.