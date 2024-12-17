Books Management Website (Client)

This is the client-side application for the Books Management Website that allows users to view, add, update, and delete books. It is built using React, Axios, and React Router for routing.

Features

View Books: Displays a list of books with details such as title, description, price, and cover image.
Add Book: Allows users to add a new book with its details.
Update Book: Enables users to update the details of an existing book.
Delete Book: Provides the option to delete a book from the list.
Routing: Uses React Router to navigate between pages (view, add, update books).


Technologies Used
React: A JavaScript library for building user interfaces.
React Router: A library for routing in React applications.
Axios: A promise-based HTTP client for making requests to the backend server.
CSS: Used for basic styling of the application.


Installation

1.Clone the Repository:

git clone https://github.com/your-username/Books-Management-Website-Using-CRUD-Operations.git
cd Books-Management-Website-Using-CRUD-Operations/client


2.Install Dependencies: Make sure you have Node.js installed on your system. Then, install the required dependencies:

npm install


3.Run the Development Server: To run the client-side application, use:

npm start

This will start the application on http://localhost:3000.

API Integration
The client application communicates with the backend API to perform CRUD operations on the books. The API endpoints used are:

GET /books: Fetch all books from the server.
POST /books: Add a new book.
PUT /books/:id: Update an existing book by its ID.
DELETE /books/:id: Delete a book by its ID.

Ensure the backend server is running on http://localhost:8800 or update the API base URL in the code accordingly.

File Structure

client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Add.js          # Component for adding a new book
│   │   └── Update.js       # Component for updating a book
│   │   └── Books.js        # Component for displaying all books
│   ├── pages/
│   │   └── Addition.js     # Page for adding a new book
│   │   └── Novels.js       # Page for displaying books
│   ├── App.js              # Main React component, sets up routing
│   ├── style.css           # Styles for the application
├── package.json
└── README.md


Error Handling
The application shows an error message if there is a failure in performing CRUD operations.
The error message is displayed near the relevant action, such as during the addition or update of books.


Contributing
Feel free to fork this project and contribute. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.