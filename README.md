# Next.js Flooring Calculator Project Implementation Checklist

This checklist outlines the features and tasks to implement for our flooring calculator application. The project uses Next.js with TailwindCSS for the frontend and an Express server with MongoDB for the backend. As you complete each task, check it off below.

---

## Client (Next.js with TailwindCSS)

- [x] **Setup Next.js App**
  - [x] Initialize a new Next.js project (e.g., `npx create-next-app@latest client --use-npm`)
  - [x] (Optional) Configure TypeScript if desired

- [x] **TailwindCSS Integration**
  - [x] Install TailwindCSS, PostCSS, and Autoprefixer:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

  - [x] Initialize TailwindCSS:

    ```bash
    npx tailwindcss init -p
    ```

  - [x] Configure `tailwind.config.js` to include content paths:

    ```js
    // tailwind.config.js
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

  - [x] Add Tailwind directives to your global CSS (e.g., `styles/globals.css`):

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- [x] **Measurement Input UI**
  - [x] Create pages and components for entering measurements (houses/rooms)
  - [x] Implement form validation and user feedback

- [ ] **Calculation Logic (Client-Side)**
  - [ ] Implement functions to calculate total square meters
  - [ ] Implement functions to calculate required lineal meters
  - [ ] Display computed values in the UI

- [ ] **Vinyl Cutting Optimization UI**
  - [ ] Create input fields for vinyl roll dimensions (width, length, roll count)
  - [ ] Integrate client-side logic to calculate the optimal cutting plan

- [ ] **Interactive Diagrams**
  - [ ] Choose and integrate a diagram/chart library (e.g., Chart.js, D3.js, or Mermaid)
  - [ ] Create diagrams to display:
    - Measurement layout
    - Vinyl cutting plan

- [ ] **API Integration**
  - [ ] Set up API calls (using `fetch` or `axios`) to connect with the backend
  - [ ] Handle loading states and error messages when fetching data

- [ ] **UI Enhancements**
  - [ ] Ensure responsive design for mobile and desktop devices
  - [ ] Add animations or transitions to improve user experience

---

## Server (Express with MongoDB)

- [ ] **Setup Express Server**
  - [ ] Create a `server` folder and initialize with `npm init -y`
  - [ ] Install necessary packages:

    ```bash
    npm install express mongoose dotenv cors
    ```

  - [ ] Set up a basic Express server in `app.js`:

    ```js
    // server/app.js
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    require('dotenv').config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

    // Basic test route
    app.get('/', (req, res) => {
      res.send('Hello from Express!');
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
    ```

- [ ] **MongoDB Integration**
  - [ ] Set up environment variables in a `.env` file (e.g., `PORT`, `MONGO_URI`, `JWT_SECRET`)
  - [ ] Create Mongoose models/schemas for project and measurement data

- [ ] **API Endpoints**
  - [ ] **Measurement Submission:**  
    - Create a POST endpoint (`/api/measurements`) to receive measurement data
  - [ ] **Calculation Processing:**  
    - Create endpoints to calculate total area, lineal meters, and optimize vinyl cutting
  - [ ] **Project Data Management:**  
    - Add endpoints to save and retrieve project data

- [ ] **Calculation Logic (Server-Side)**
  - [ ] Implement functions to calculate:
    - Total square meters
    - Required lineal meters
  - [ ] Implement the vinyl roll cutting optimization algorithm

- [ ] **Security & Authentication**
  - [ ] Implement JWT-based authentication for protected endpoints
  - [ ] Add middleware for input validation and error handling

- [ ] **Testing & Deployment**
  - [ ] Write unit and integration tests for endpoints and calculation logic
  - [ ] (Optional) Containerize the application with Docker for deployment

---

## Additional Tasks

- [ ] **Project Documentation**
  - [ ] Update this README with setup and usage instructions
  - [ ] Document API endpoints and their expected request/response formats

- [ ] **Version Control & CI/CD**
  - [ ] Set up a git repository with proper branching
  - [ ] (Optional) Configure a CI/CD pipeline for automated testing and deployment

- [ ] **Future Enhancements**
  - [ ] Explore exporting diagrams or reports
  - [ ] Enhance optimization algorithms for other flooring materials

---

Use this checklist as your guide during development. As you complete each task, mark it off to keep track of progress.

Happy coding!
