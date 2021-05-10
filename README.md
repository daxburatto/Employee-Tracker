# Employee-Tracker

By daxburatto

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

Employee Tracker is a console based application that will allow you to view departments, roles, and salaries in your company. Currenlty I am unable to get the database populating properly and as such only some features are working.
[Video Guide](https://drive.google.com/file/d/1hKpqk0pfLoZsoJ0VzM9jb61g6GPI8rdz/view)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

* Open Terminal
* Enter `npm init --y`
* Enter `npm install --save mysql2`
* Enter `npm install inquirer console.table node`

## Usage

* Enter mysql terminal using `mysql -u root -p`
* Enter `source db/schema.sql` and `source db/seeds.sql` then `quit`
* Update server.js file with personal information
* Enter `npm start`

## Credits

Credit to Paden Allen for help on the server.js file and including managers
[His Github](https://github.com/padenallen15)

## License

[MIT](https://choosealicense.com/licenses/mit/)
