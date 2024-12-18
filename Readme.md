Books Management Website (Full Stack)

This project is a Books Management Website built using React for the front-end and Node.js with Express for the back-end. The application allows users to manage a collection of books with functionalities for viewing, adding, updating, and deleting books.

Features
View Books: Displays a list of books with their title, description, price, and cover image.

Add Book: Allows users to add a new book to the list.

Update Book: Enables users to update the details of an existing book.

Delete Book: Allows users to delete a book from the collection.


Technologies Used

Client-Side (Frontend):

React: A JavaScript library for building user interfaces.

React Router: For client-side routing.

Axios: For making HTTP requests to the backend server.

CSS: For styling the application.


Server-Side (Backend):

Node.js: JavaScript runtime for building server-side applications.

Express: Web framework for building the API.

MySQL: Database for storing books information (or any other database you choose).

CORS: To allow cross-origin requests from the frontend.


Installation

Follow these steps to get the project running locally:

Prerequisites

Node.js (v14 or higher)

MySQL (or another database, if applicable)


Backend Setup

Clone the repository:

git clone https://github.com/your-username/Books-Management-Website-Using-CRUD-Operations.git
cd Books-Management-Website-Using-CRUD-Operations/backend


Install dependencies:

npm install


Start the backend server:

npm start

The backend API will now be available at http://localhost:8800.

Client Setup

Navigate to the client directory:

cd ../client


Install client-side dependencies:

npm install


Start the React development server:

npm start

The client will now be available at http://localhost:3000.

API Endpoints (Backend)

The backend exposes the following CRUD API endpoints:

GET /books: Retrieve all books.

POST /books: Add a new book.

PUT /books/:id: Update an existing book by its ID.

DELETE /books/:id: Delete a book by its ID.

Example API URL: http://localhost:8800/books


Running the Project

To run the project locally:

Start the Backend:

Open a terminal and navigate to the backend folder.

Run npm start to start the backend server. It will run on http://localhost:8800.

Start the Client:

Open a second terminal and navigate to the client folder.

Run npm start to start the client server. It will run on http://localhost:3000.


Troubleshooting

CORS Issues:

If you encounter CORS issues, ensure that you have cors installed and properly configured in your backend:

npm install cors

In your server.js file, add:

const cors = require("cors");

app.use(cors());