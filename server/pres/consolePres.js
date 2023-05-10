const chalk = require('chalk');
let readlineSync = require('readline-sync');

const business = require('../business/business');

let id,user, users, input;


const consolePres = {
    start: function () {

        /**
         * on a recupéré les données du fichier et on les stocke dans users
         */
        function getData() {
            users = business.getAllClients();
            return users; 
        }

        /**
         * on affiche le menu et les questions en couleur
         */
        function printQst() {
            console.log(chalk.red("                    Menu : \n"));
            console.log(chalk.blue(" -1- Afficher toute la liste"));
            console.log(chalk.blue(" -2- Ajouter un utilisateur "));
            console.log(chalk.blue(" -3- Modifier un utilisateur "));
            console.log(chalk.blue(" -4- Retirer un utilisateur "));
            console.log(chalk.blue(" -5- Quitter \n"));
            

            input = readlineSync.question(chalk.yellow('Quel est votre choix ? \n'));
        }

        function addUser() {
            var id = readlineSync.question(chalk.green('Quel est l`id ? \n')); //changer
            var email = readlineSync.question(chalk.green('Quel est l`email ? \n'));
            var first = readlineSync.question(chalk.green('Quel est le prenom ? \n'));
            var last = readlineSync.question(chalk.green('Quel est le nom? \n'));
            var company1 = readlineSync.question(chalk.green('Quel est le nom de la société ? \n'));
            var created = readlineSync.question(chalk.green('Quand a elle été créee ? \n'));
            var country1 = readlineSync.question(chalk.green('Quel est en est le pays ? \n'));

            user = {
                id: id,
                email: email,
                first: first,
                last: last,
                company: company1,
                created_at: created,
                country: country1
            };

            business.addUser(user);
        }

        function changeUser() {
            var id = readlineSync.question(chalk.green('Quel est l`id ? \n')); //changer
            var email = readlineSync.question(chalk.green('Quel est l`email ? \n'));
            var first = readlineSync.question(chalk.green('Quel est le prenom ? \n'));
            var last = readlineSync.question(chalk.green('Quel est le nom? \n'));
            var company1 = readlineSync.question(chalk.green('Quel est le nom de la société ? \n'));
            var created = readlineSync.question(chalk.green('Quand a elle été créee ? \n'));
            var country1 = readlineSync.question(chalk.green('Quel est en est le pays ? \n'));
            
            user = {
                id: id,
                email: email,
                first: first,
                last: last,
                company: company1,
                created_at: created,
                country: country1
            };
            business.updateUser(user);
        }

        function removeUser(){
            id = readlineSync.question(chalk.green('Quel est l`id ? \n')); 
            business.removeUser(id);
        }

        function cases(input) {
            if (input === '1') {
                console.log(users);
            } else if (input === '2') {
                addUser();
            } else if (input === '3') {
                changeUser();
            } else if (input === '4') {
                removeUser();
            } else if (input === '5') {
                console.log(chalk.red("Au revoir !"));
                process.exit();
            }
        }

        function main() {
            getData();
            printQst();
            // country = new Array(users.length);
            // company = new Array(users.length);
            cases(input);
        }

        main();

    }
};

module.exports = consolePres;