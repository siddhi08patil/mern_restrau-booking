Restaurant Booking Web App (MERN Stack)
A full-stack restaurant booking web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This app allows users to make, view, and manage reservations at a restaurant.

Features
User Registration & Authentication: Secure user authentication with JWT tokens.
Restaurant Reservations: Users can make, view, and cancel reservations.
Date & Time Picker: Choose a date and time for booking the reservation.
Admin Dashboard: Admins can view all bookings, cancel reservations, and manage the restaurant's availability.
Mobile-Friendly: Responsive design that works across different devices.
Email Notifications: Receive email notifications for booking confirmations and cancellations.
Technologies Used
Frontend: React.js, React Router, Axios
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JSON Web Tokens (JWT)
Styling: CSS, Bootstrap (optional)
Email Service: Nodemailer (for sending booking confirmation emails)
Installation
Prerequisites
Node.js (v14.x or higher)
MongoDB (can be hosted locally or using a service like MongoDB Atlas)
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/siddhi08patil/mern_restrau-booking.git
cd restaurant-booking-app
Install Dependencies for the Backend:

Navigate to the backend directory and install the necessary dependencies:

bash
Copy code
cd backend
npm install
Install Dependencies for the Frontend:

Navigate to the frontend directory and install the necessary dependencies:

bash
Copy code
cd ../frontend
npm install
Set Up Environment Variables:

In the backend folder, create a .env file and add your environment variables, such as:

bash
Copy code
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
EMAIL_HOST=<Your SMTP Email Host>
EMAIL_PORT=<Your SMTP Email Port>
EMAIL_USER=<Your SMTP Email User>
EMAIL_PASS=<Your SMTP Email Password>
Run the Application:

Start the backend server:

bash
Copy code
cd backend
npm run dev
Start the frontend server:

bash
Copy code
cd ../frontend
npm start
Both servers should now be running. The frontend should be available at http://localhost:3000 and the backend at http://localhost:5000.

Usage
User Features:

Register/Login to create and manage reservations.
Select the date and time for the booking.
View, edit, or cancel upcoming bookings.
Admin Features:

View a list of all bookings.
Cancel reservations and manage the availability.
File Structure
bash
Copy code
/restaurant-booking-app
├── /backend
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── server.js
│   └── .env
├── /frontend
│   ├── /src
│   │   ├── /components
│   │   ├── /context
│   │   └── App.js
│   └── package.json
└── README.md
Contributing
Contributions are welcome! If you want to help improve the project, feel free to fork the repository and submit pull requests.

Steps to Contribute
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to your forked repository (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
