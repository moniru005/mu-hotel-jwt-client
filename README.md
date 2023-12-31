
# Project Name: Hotel Booking Web Application


## Project Code and Live Link


Live Link: https://hotel-jwt-client.web.app/

Client Link: https://github.com/moniru005/mu-hotel-jwt-client 

Server Link: https://github.com/moniru005/mu-hotel-jwt-server



## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Features

Certainly, let's add a point about securing user data with JSON Web Tokens (JWT):

1. **Intuitive User Interface:** Craft a user-friendly interface that is easy to navigate. A clean and straightforward design will enable users to effortlessly browse through available hotels, select their preferences, complete bookings, and easily manage cancellations without unnecessary complexities.

2. **Advanced Search Filters:** Develop a robust search feature with a range of filters. Users should be able to refine their search based on location, price, amenities, and other relevant criteria. This ensures they can quickly find accommodations that align with their specific requirements and, if needed, cancel and modify bookings seamlessly.

3. **Real-Time Availability:** Provide real-time updates on room availability. Users should receive immediate confirmation of their bookings and have the flexibility to cancel reservations when necessary, adding transparency and assurance to the cancellation process.

4. **Booking Cancellation:** Implement a straightforward and user-friendly booking cancellation process. Ensure that users can cancel their reservations easily, with clear guidelines on any applicable policies or procedures for cancellations. This enhances user satisfaction and provides a hassle-free experience for those who need to modify their plans.

5. **Secure Data with JWT:** Implement JSON Web Tokens (JWT) to enhance the security of user data. Use JWT to securely transmit information between the client and server, ensuring that user authentication and authorization are handled with industry-standard encryption and verification mechanisms. This adds an extra layer of protection to sensitive user information.

6. **Private Routes:**

- Use private routes to protect certain parts of the application.
- Users must be authenticated to access specific pages (e.g., user profile, cart, order history).
- Redirect unauthenticated users to the login/registration page.

 
*Remember, the success of your hotel booking web application depends not only on the features but also on how well they come together to create a seamless and enjoyable experience for your users.*
## Tech Stack

**Client:** React, React Router, TailwindCSS, DaisyUI, 

**Server:** Node, Express, MongoDB, Dotenv


## Installation


Install my Project with NPM & React Router DOM
```bash
    npm create vite@latest my-project -- --template react
    cd my-project
    npm install react-router-dom localforage match-sorter sort-by
````
Install Tailwind CSS with Vite
```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```
Install PropTypes for prop validation
```bash
    npm install --save prop-types
```
Install sweetalert2 for showing beautiful messages
```bash
    npm install sweetalert2
```
Install AOS Animation
```bash
    npm install aos --save
```

## Importing on this project

Import for PropTypes validtion
```bash
    import PropTypes from 'prop-types'; // ES6
```
Import for Icons in sweetalert2
```bash
    import Swal from 'sweetalert2'
```
Import for AOS Animation
```bash
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // You can also use <link> for styles
    // ..
    AOS.init();
```