**Introduction**
This is a full-stack application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to manage their profiles. Users can be added, updated, retrieved, and deleted using RESTful API endpoints.

**Technologies Used**
MongoDB: Database to store user information.
Express.js: Web framework for Node.js to handle server-side logic.
React.js: Frontend library for building user interfaces.
Node.js: JavaScript runtime for executing server-side code.
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
AsyncHandler: Utility for handling async routes in Express.
Custom Error Handling: Implementation of API errors for consistent error messaging.

**Features**
User Registration: Add new users with email, username, and favorite number.
User Retrieval: Fetch all users or a specific user by ID.
User Update: Update user details.
User Deletion: Remove users by ID.
Error Handling: Handles common errors such as missing fields and existing users.

**Installation**
1.Clone the repository:
git clone https://github.com/yourusername/your-repo-name.git
2.Navigate into the project directory:
cd your-repo-name
3.Install the dependencies:
npm install
4.Set up environment variables (e.g., MongoDB URI) in a .env file:
MONGODB_URI=your_mongodb_uri
PORT=your_port_number
5.Start the application:
npm run dev

**API Endpoints**
POST /api/users/addUser - Add a new user

Request Body: { "email": "user@example.com", "username": "username", "favNumber": 5 }
Response: Created user object.
GET /api/users/showAllUsers - Retrieve all users

Response: Array of user objects.
GET /api/users/getOneUser/:id - Retrieve a user by ID

Response: User object.
POST /api/users/updateUser/:id - Update a user by ID

Request Body: { "username": "newUsername", "email": "newEmail@example.com", "favNumber": 10 }
Response: Updated user object.
DELETE /api/users/deleteUserById/:id - Delete a user by ID

Response: Deleted user object.
z