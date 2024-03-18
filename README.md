
# Ticket Booking App

I created a flight ticket booking application using a tech stack called MERN, which includes MongoDB, React, Express.js, and Node.js. The goal was to design a simple user interface with easy navigation for booking tickets. I integrated Razorpay for payments and focused on providing a user-friendly seat selection interface.

To enhance the user experience, I used wireframes to design a straightforward UI. Additionally, I incorporated Faker.js to generate realistic data, ensuring a fresh look for new users or reviewers. However, the signup and signin processes experienced delays due to the data generation time (approximately 200ms).

For future updates, I plan to introduce features for updating bookings, users and optimize both the frontend and backend for improved performance.


## Installation

Project Setup Locally in VSCode Terminal

```
  git clone https://github.com/jameel-webdev/flight-ticket-booking-app-frontend.git
  cd flight-ticket-booking-app-frontend
  npm install
```
or

Download the zip file, Unzip it, open with VSCode and Run below code in terminal

```
  npm install
```


    
## How to Use the Project

#### Login or Signup:

If you're a new user, click on the "Signup" button to create an account. Fill in your details and click "Submit".
If you already have an account, simply enter your email and password and click "Login".
#### Browse Available Flights:

Once logged in, you'll be directed to the homepage where you can browse available flights. Use the search filters to narrow down your options by from, to and date. Choose your flight by clicking "Book Now" 
#### Choose Seats:

You'll be directed to the seat selection page where you can choose your preferred seats. Simply click on the available seats to add them to your booking.
#### Proceed to Payment:

After selecting your seats, click on the "Book Now" button. You'll be redirected to the payment page where you can choose your preferred payment method.
#### Complete Payment:

Kindly Wait for 25sec by following the instructions to complete the payment process. Once payment is successful, it will redirect you to successfull transaction page.
#### View Booking History:

To view your booking history, click on the "Go to my trips" button in transaction page or "My Trips" in the side navigation bar. Here, you can see a list of all your past and upcoming bookings.

#### Admin Credentials:
##### email : admin123@gmail.com
password : admin123
