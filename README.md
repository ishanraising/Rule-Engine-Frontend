
# Rule Engine Application Frontend
    
    This project is the frontend for a rule engine application, built using Angular. The frontend allows users to create, modify, and evaluate rules based on user attributes like age, department, income, and spending. It provides a simple UI for interacting with the rule engine.

## Features
- Create new rules using form fields.
- Modify existing rules by combining them with operators.
- Evaluate rules against user attributes.
- Fetch rules and evaluation results from the backend via API.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (v18.x or later)

## Installation Guide

Follow these steps to install and run the Angular frontend application:

### Step 1: Clone the Repository

Clone the repository to your local machine.

```bash
git clone https://github.com/ishanraising/Rule-Engine-Frontend
```

### Step 2 : Open the project in Vs Code
1) Open Visual Studio Code.
2) From the menu, click on File > Open Folder.
3) Browse to the location where the project was cloned and select the project folder.

### Step 3 : Install Dependencies 
   Open Once the project is open in VS Code, open a new terminal (you can do this from Terminal > New Terminal in VS Code) 
   and run the following command to install all necessary dependencies:
```bash
npm install
```

### Step 4: Run the Application

Before running the application, ensure that the backend is up and running (i.e., run your backend first) and that you have an internet connection on your laptop.

To run the application on your local machine, use the following command in the terminal:

```bash
ng serve
```
### How To Use Application ###
 **Format to create rule** 
- Condition 1 + Operator + Condition 2

 **How to write condition**
  - Parameter [space] Operator [space] Value
 - Note : Parameters allowed - age, salary, department and experience. All parameters are numeric and consider department as department number.
  - Example : age > 3
 **Rule Example**
  - Condition 1 : age > 30
  - Operator    : AND
  - Condition 2 : salary > 5000        

### Key Directories and Files

-**`src/app/components/`**: Contains Angular components used in the application, including:
    - CreateRuleComponent: For creating rules.
    - ModifyRuleComponent: For modifying and combining existing rules.
    - EvaluateRuleComponent: For evaluating rules against user attributes.

- **`src/app/services/`**:Contains services for making HTTP requests to the backend API and managing data.
- **`src/environments/`**: Holds environment configuration files for different build environments (e.g., development and production).
- **`src/index.html`**: The main HTML file where the root component is rendered.
- **`src/main.ts`**: The entry point for the Angular application, which bootstraps the root module.
- **`angular.json`**: Configuration file for Angular CLI, containing project settings and build configurations.
- **`package.json`**: Lists the project dependencies, scripts, and metadata for the project.
- **`tsconfig.json`**: TypeScript configuration file that defines the compiler options and project settings.

## Contact

For any questions or feedback, feel free to reach out to me:

- [Ishan Raising](ishanraising98@gmail.com)
- [GitHub Profile](https://github.com/ishanraising)

## Acknowledgments

- Thanks to [Angular](https://angular.io/) for providing an excellent framework.
- Thanks to [OpenWeather API](https://openweathermap.org/api) for weather data.

## Further Reading

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

