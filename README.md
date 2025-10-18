# Banco Web Test Automation Project

## Objective

This project demonstrates how to automate end-to-end tests for a banking web application using [Cypress](https://www.cypress.io/) with JavaScript. The goal is to provide a clear example of structuring Cypress tests, utilizing Custom Commands, and generating detailed test reports.

## Project Components

- **Cypress**: Main test automation framework for writing and running browser-based tests.
- **Custom Commands**: Reusable commands to simplify and organize test logic, located in `cypress/support/commands/`.
- **Fixtures**: Test data stored in JSON files under `cypress/fixtures/`.
- **Reports**: Test execution reports generated with [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter), available in `cypress/reports/html/`.
- **Screenshots & Videos**: Automatically captured on test failures, stored in `cypress/screenshots/` and `cypress/videos/`.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- The API and Web App must be running locally:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

## Installation

1. **Clone this repository:**
   ```bash
   git clone <this-repo-url>
   cd t2-banco-web-tests
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the API and Web App:**
   - Follow the instructions in the [banco-api](https://github.com/juliodelimas/banco-api) and [banco-web](https://github.com/juliodelimas/banco-web) repositories to run both services locally.

## Running the Tests

- **Open Cypress Test Runner:**
  ```bash
  npx cypress open
  ```
- **Run tests in headless mode (with report generation):**
  ```bash
  npx cypress run
  ```
- **View HTML Reports:**
  Open `cypress/reports/html/index.html` in your browser after running tests.

## Test Structure

- **Test Files:** Located in `cypress/e2e/`
  - `login.cy.js`: Tests related to user authentication.
  - `transferencia.cy.js`: Tests for transfer operations.
- **Fixtures:**
  - `credentials.json`: Stores user credentials for login tests.
  - `example.json`: Example data for other test scenarios.

## Custom Commands

Custom Commands are defined to keep test code DRY and readable. They are located in:
- `cypress/support/commands/common.js`: General-purpose commands.
- `cypress/support/commands/login.js`: Commands for login actions.
- `cypress/support/commands/transferencia.js`: Commands for transfer actions.

To use a custom command in your test, simply call it on the `cy` object. For example:
```js
cy.login('username', 'password');
```

## Reporting

- Test results are automatically reported using Mochawesome.
- After running tests, open `cypress/reports/html/index.html` to view the detailed report, including screenshots and videos of failed tests.

## Contributing

Feel free to fork this repository and submit pull requests to improve the test coverage or structure.

---

**Author:** [Your Name]

**License:** MIT
