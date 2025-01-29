# Books Management System

This is a **Books Management System** that allows users to perform CRUD operations (Create, Read, Update, Delete) on a list of books. The app is built using **React** for the frontend and **Express.js** with **MySQL** for the backend.

## Features

- **Add a new book**
- **View the list of books**
- **Edit book details**
- **Delete a book**

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Express.js
- **Database**: MySQL (using MySQL Workbench for database management)
- **Other**: CORS, Axios

## Screenshots

Below are some screenshots of the application. You can find more in the **`Screenshots`** folder.

**Initial Page**
![Welcome Page](Screenshots/1.%20Welcome%20Page.png)

**Added A Book**
![Added a Book](Screenshots/2.%20Added%20a%20new%20Book.png)

**Empty Field Error**
![Input Error](Screenshots/3.%20No%20empty%20fields%20allowed.png)

**Data Stored**
![Data stored](Screenshots/5.%20Data%20Stored%20in%20Database.png)

**Deleted 2 books**
![removed books](Screenshots/8.%20Deleted%202%20books%20from%20book%20List.png)



## Prerequisites

Before running the project, ensure that you have the following installed:

- **Node.js** (for running both backend and frontend)
- **MySQL Workbench** (for managing the database)
- **MySQL** (for the database server)

### Setting Up the MySQL Database

1. Open **MySQL Workbench** and create a new database:

```sql
CREATE DATABASE bookstore;
```

2. Create the **books** table:

```
USE bookstore;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255)
);
```
3. Make sure to configure your MySQL connection details (username, password, database) in the backend's **`index.js`** file.

## Getting Started
### 1. Clone the Repository
Clone the repository to your local machine:

````
git clone https://github.com/MDAMMADHUSSAIN/Books-Management-System.git
cd Books-Management-System

````

### 2. Setup Backend (Node.js + MySQL)
  1. Navigate to the backend directory :

  ```
  cd backend
  ```

  2. Install the necessary dependencies :

  ```
  npm install
  ```

  3. Configure the MySQL database connection in the **`index.js`** file :
     
  ```
  const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Replace with your MySQL username
  password: "",  // Replace with your MySQL password
  database: "bookstore",  // The database you created
  });
  ```

  4. Start the backend server:
     
  ```
  node index.js
  ```
  The backend server will run on http://localhost:5000.

### 3. Setup Frontend (React)
  1. Navigate to the frontend directory:
     
  ```
  cd frontend
  ```

  2. Install the necessary dependencies:
     
  ```
  npm install
  ```

  3. Start the frontend development server:
     
  ```
  npm start
  ```
  The frontend will be available at http://localhost:3000.

## Disclaimer

This app is for learning and demonstration purposes only. Any book titles or author names are used as examples and do not represent real copyrighted works.
  
