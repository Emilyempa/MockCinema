# Mock Cinema - A Movie Booking App

## This project was developed as a team school assignment to demonstrate full-stack development skills using Next.js and MongoDB.


#  Features

### Movie Listings – Browse available movies with details like title, description, and showtimes.

### User Authentication – Sign up, log in, and manage your profile.

### Booking System – Reserve seats to book a screenings.

### Search Functionality – Find movies by title, genre, or release date.

### Reviews & Ratings – Dynamic reviews, Logged-in users can leave reviews and rate movies.

### Dynamic Member Page where members can change contact info and see their upcoming bookings.

### Static Pages – Information about the cinema, kids party, and movie experience page.


# 🛠 Tech Stack

### Frontend: Next.js, Tailwind CSS

### Backend: Next.js API Routes

### Database: MongoDB (using Mongoose for schema modeling)

### Authentication: NextAuth.js with custom JWT-based auth

### Deployment: Vercel

## Steps I took to deploy on Vercel

### 1. Log in to Vercel and connect the GitHub repository.
### 2. Add environment variables.
### 3. Resolved linting issues to ensure a smooth build.
### 4. Deploy the application.
### 5. Update next.config.js to resolve image rendering issues on Vercel
### 6. Fix dynamic routing issues to ensure the app worked correctly after deployment
### 7. 

## Visit at: https://mock-cinema-xi.vercel.app/

## How to Run Locally
To set up and run the project locally, follow these steps:

```sh
# 1️. Clone the repository
git clone https://github.com/Emilyempa/MockCinema.git

# 2️. Install dependencies
npm install

# 3️. Set up environment variables
cp .env.example .env.local

# 4️. Start the development server
npm run dev


