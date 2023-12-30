# Meta Front-End Developer Capstone Project

## Overview

This is the README file for the Meta Front-End Developer Capstone Project. It provides instructions on how to clone the project, install dependencies, and start the application.

## Technologies Used

The project utilizes the following technologies:

- HTML
- CSS
- JavaScript
- React
- React Bootstrap
- JSON Server

## Features

The project includes the following features:

- Reservation booking
- Home page with reservation button
- Navigation bar

## Installation

To get started with the project, follow these steps:

1. Clone the project repository:

```bash
git clone https://github.com/Syfrezia/meta-final-project.git
```

2. Navigate to the project directory:

```bash
cd meta-final-project
```

3. Install the project dependencies:

```bash
npm install
```

Before starting the server, you need to decide whether you want to use the local database or the remote database hosted on Vercel.

In your code, find the `dbUrl` variable and follow these instructions:

To use the remote database, uncomment this line or keep it uncommented:
  ```javascript
  const dbUrl = "https://api-little-lemon.vercel.app/reservations";
  ```

To use the local database, comment out the above line and uncomment this line:

```javascript
// const dbUrl = "http://localhost:4000/reservations";
```

After you've made your choice, you can proceed with the installation instructions.

4. Start the json-server (if you want to use the local database):

  ```bash
  npx json-server --watch db.json --port 4000
  ```

This will start the json-server on [http://localhost:4000](http://localhost:4000). The json-server will serve the data in the `db.json` file. You can go to [http://localhost:4000/reservations](http://localhost:4000/reservations) to see the data.

5. Finally, start the app:

```bash
npm start
```

This will start the app on [http://localhost:3000](http://localhost:3000). You can click on the "Reservations" in the navigation bar to go to the booking page. Alternatively, you can click the "Reserve a table" button on the home page to go to the booking page.

## Usage

To use the application, follow the installation instructions and navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

## License

This project is licensed under the [MIT License](LICENSE).
