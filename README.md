# Big Brother Employee Manager
 <img src="https://img.shields.io/badge/License-MIT License-blue">

## Description

a node application that can be used to manage a company by providing creation to departments,roles, salaries, and employees. Currently Employees roles are the only thing that can be updated. This application uses node and sql

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

clone the repo from github and run **yarn** or **npm i** to install the required dependencies. it is assumed that you already have mySQL installed on your computer as well. 

Then create a .env in the root of the folder and add two variables **MY_SQL_USERNAME** and **MY_SQL_PASSWORD** and set those variables to your sql username and password. 

Open mysql in your terminal and run the provided sql files in the db folder at the root of this project in this order 

**-> source /db/db.sql;**

**-> source /db/schema.sql;**

**-> source /db/schema.sql;**


## Usage

Click [here](https://watch.screencastify.com/v/WuUqOrMIH1TgzccaHltX) for a video on how to use this application

After running all the commands to set up the project as described above run **npm start** or **yarn start** and follow the prompts on the screen.


## Credits

console.table, dotenv, inquirer, jest, mysql2

## License


MIT License

Copyright (c) 2022 Ryan Moon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Features

* Manage a company organization layout



## Contributing

If you would like to contribute to this project please fork the repo and submit a pull request with details on what features you are try to add


## Tests

run **npm test** or **yarn test**

## Questions

Find me on github here: [here](http://github.com/Moonryc)

If you have any additional question feel free to email me at [rycmoon@gmail.com](mailto:rycmoon@gmail.com)
