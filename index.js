const inquirer = require('inquirer');
const fs = require('fs');

// Starting point for the app
function start() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter the name of the project / application.',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Please enter a description of the project.',
            name: 'projectDescription',
        },
        {
            type: 'list',
            message: 'Please select the type of license you would like to use for the project.',
            name: 'licenseType',
            choices: [
                'MIT', 
                'Apache License 2.0', 
                'GNU General Public License v3.0', 
                'BSD 2', 
                'BSD 3', 
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'Mozilla Public License 2.0',
                'The Unlicense',
                'N/A',
            ]
        },
        {
            type: 'input',
            message: 'Please enter the command used to install the dependencies for the project.',
            name: 'installInstructions',
        },
        {
            type: 'input',
            message: 'Please enter the command used to run tests.',
            name: 'testInstruction',
        },
        {
            type: 'input',
            message: 'Please enter any additional information about the repository.',
            name: 'repoAdditionalInfo',
        },
        {
            type: 'input',
            message: 'Please enter information for how to contribute to the repository.',
            name: 'contributionInfo',
        }
    ])
    .then(writeToFile);
}



// Generates the markup
function generateReadMe(data) {
    return (
    `## ${data.projectName}
${renderLicenseLink(data.licenseType)}
### Description
${data.projectDescription}
### Table of Contents
- [Installation](https://github.com/Anlubelni/${data.projectName}#installation)
- [Usage](https://github.com/Anlubelni/${data.projectName}#usage)
- [License](https://github.com/Anlubelni/${data.projectName}#license)
- [Contributing](https://github.com/Anlubelni/${data.projectName}#contributing)
- [Tests](https://github.com/Anlubelni/${data.projectName}#tests)
- [Questions](https://github.com/Anlubelni/${data.projectName}#questions)
### Installation
To install necessary dependencies, run the following command:
\`${data.installInstructions}\`
### Usage
${data.repoAdditionalInfo}
### License
${data.licenseType}
### Contributing
${data.contributionInfo}
### Test
\`${data.testInstruction}\`
### Questions
For additional information on the repo, visit my Github account [here](https://github.com/${data.username} ) or send any questions you have to ${data.email}. 
    `);
  }

  function renderLicenseLink(licenseType) {
    if (licenseType === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (licenseType === 'Apache License 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (licenseType === 'GNU General Public License v3.0') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else if (licenseType === 'BSD 2') {
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }
    else if (licenseType === 'BSD 3') {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    else if (licenseType === 'Boost Software License 1.0') {
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else if (licenseType === 'Creative Commons Zero v1.0 Universal') {
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    }
    else if (licenseType === 'Eclipse Public License 2.0') {
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    else if (licenseType === 'GNU Affero General Public License v3.0') {
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }
    else if (licenseType === 'GNU General Public License v2.0') {
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    }
    else if (licenseType === 'Mozilla Public License 2.0') {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else if (licenseType === 'The Unlicense') {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
    else {
      return ``
    } 
  }

// generates the read me file.
function writeToFile(data) {
    fs.writeFile('README.md', generateReadMe(data), (err) =>
        err ? console.error(err) : console.log('The readme has been made successfully!')
  );
}

// Runs the app
start();