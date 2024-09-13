# [IZI](https://izi.netlify.app/) 🇻🇪🧳
 

IZI is a Property Management System (PMS) designed to enhance reservation services and overall property management for hotels and lodges in Venezuela.

![IZI App](https://media.giphy.com/media/MvcSVgUqz1yuBQktVr/giphy.gif?cid=790b7611w4tqrdwlo5cni3on5242389ega8jif7s67uszv8h&ep=v1_gifs_search&rid=giphy.gif&ct=g)

*(The suitcases are not for leaving, they are for getting to know)*

## Features

IZI provides a comprehensive solution for both hosts and guests, making property management and booking processes seamless and efficient.

### Use Cases

#### Host

The Host manages the accommodation and has full access to the system with the following functionalities:

- **Room Management:**
  - **Create Room:** Add new rooms with details such as type (single, double, suite), price per night, and location (state and city).
  - **View Rooms:** View a list of all rooms and their details.
  - **Update Room:** Edit the details of existing rooms.
  - **Delete Room:** Remove rooms that are no longer available.

- **Reservation Management:**
  - **View Reservations:** View a list of all reservations made.
  - **Cancel Reservations:** Cancel reservations if necessary.

- **User Management:**
  - **Manage Customer Profiles:** View and modify basic customer contact information if needed.

#### Guest

The Guest is the user who searches for and books accommodation. They have access to the following features:

- **Browse and Search Rooms:**
  - **View Room Details:** Access detailed information about available rooms, including photos, descriptions, prices, and location.

- **Make Reservations:**
  - **Create Reservation:** Make reservations by selecting stay dates.
  - **View Reservations:** View a list of past and future reservations.

- **User Profile:**
  - **View and Edit Profile:** Access and update personal information, such as email address and phone number.
  - **Booking History:** View a history of all past bookings.

## Data Model

The IZI data model supports the core functionalities of the system. Below is the schema for the main objects:

### Users
- **id:** objectId, auto-generated
- **name:** string, required
- **surname:** string, required
- **email:** string, required, email format
- **phone:** number, required
- **password:** string, required
- **role:** string, required, default 'guest', enum: 'guest' | 'host'
- **isBlocked:** boolean, default `false`

### Rooms
- **id:** objectId, auto-generated
- **nameRoom:** string, required
- **region:** string, required
- **city:** array, required
- **image:** string, required
- **description:** string, required
- **price:** string, required
- **manager:** objectId, required, reference to User
- **isBlocked:** boolean, default `false`

### Bookings
- **id:** objectId, auto-generated
- **userId:** string, required, reference to User
- **roomId:** string, required, reference to Room
- **startDate:** date, required
- **endDate:** date, required
- **isBlocked:** boolean, default `false`

## Installation

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (running and accessible)

### Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Johnnyrc26/IZI.git
   cd izi
   ```

2. **Install frontend dependencies:**

   ```bash
   cd app
   npm install
   ```

3. **Install backend dependencies:**

   ```bash
   cd ../api
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root of the project with the following variables:

   ```plaintext
   PORT=8080
   MONGODB_URL=mongodb://localhost:27017/your-database-name
   ```

5. **Start the server:**

   ```bash
   cd api
   npm start
   ```

6. **Start the frontend:**

   ```bash
   cd ../app
   npm start
   ```

## Usage

Once the server and frontend are up and running, you can access the application at `http://localhost:3000`. Here, you can:

- **Create Clients:** Add new clients with their respective details.
- **Manage Clients:** Edit and update existing client profiles.
- **View Invoices and Receipts:** Review all invoices and receipts associated with each client.
- **Create Invoices from Receipts:** Generate invoices directly from existing receipts.
- **Download and Share PDFs:** Using the React-PDF library, generate, download, and share receipts and invoices in PDF format with a single click.

## Project Structure

```plaintext
IZI/
├── api/                  
│   ├── coverage/             # Test coverage reports
│   ├── handlers/             # Route handlers and controller logic
│   ├── logic/                # Business logic and utility functions
│   ├── model/                # Mongoose data models
│   ├── test/                 # Unit tests with Mocha and Chai
│   ├── utils/                # Utility functions and helpers
│   ├── routes.js             # API route definitions
│   └── server.js             # Server configuration and startup
├── doc/                      # Project documentation
├── com/                      # Utility packages (validate, errors)
├── app/                      # Frontend source code
│   ├── dist/                 # Static files for production
│   ├── public/               # Public resources like images and favicons
│   ├── src/                  # Main application source code (React)
│   ├── utils/                # Frontend utility functions
│   ├── index.html            # Main HTML file
│   ├── tailwind.config.js    # TailwindCSS configuration
│   └── vite.config.js        # Vite configuration
├── .env                      # Environment variables
├── .gitignore                # Files and folders ignored by Git
├── README.md                 # Main project documentation
```

## Testing

To run the tests:

```bash
cd api
npm run test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Authors

- **Johnny Rojas** - Main Developer and Project Author
