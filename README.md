# Gstudios

## Introduction
Gstudios is a Kenyan-based graphic design marketplace. The platform serves three main purposes: to showcase Kenyan designers, to exhibit a portfolio of high-quality designs, and to highlight the services offered by these designers. The platform is designed to cater to clients in search of graphic designers and to designers seeking collaborative opportunities. As the sole developer of this project, I was responsible for both front-end and back-end development, ensuring a comprehensive and user-friendly application.


[Final Project Blog Article](https://docs.google.com/document/d/1m114LHmCpiFQA72uDQxQ6zFyo29fUgTdBRBizUsCg90/edit?usp=sharing)
[Landing Page](https://gstudios-website.onrender.com/)
[LinkedIn](http://www.linkedin.com/in/gikonyomwema)


![Gstudios Website](https://raw.githubusercontent.com/gikonyo-mwema/Gstudios_MVP/main/static/images/gstudios%20website.png)


## The Journey
My journey as a self-taught graphic designer has been marked by challenges and opportunities. One of the significant challenges was marketing my skills and finding other Kenyan designers for collaboration. The existing platforms were not efficient, requiring one to join multiple groups and sift through numerous profiles. Recognizing this gap, I decided to create Gstudios, a platform that efficiently showcases Kenyan designers and their work. The platform simplifies the process of finding a suitable designer, providing quick access to their portfolios on Behance, Dribble, etc. Whether you're looking for a brand identity designer or a marketing designer, Gstudios makes the search process seamless and efficient, all within 5 minutes.

## Technical Details

Gstudios is a Flask application running from `app.py`. The application uses the Flask framework for server-side logic and routing, and JavaScript for client-side logic.

### Server-Side Logic

The server-side logic is handled by Flask and Python. Here's a snippet from `app.py`:

This script sets up the Flask application, loads environment variables, creates a Supabase client, and defines routes for the home page, sign-up page, and dashboard.

### Client-Side Logic
The client-side logic is handled by JavaScript. When a user clicks on the sign-up or designers section, methods from main.js are called. Here’s a snippet from `main.js`:

This script handles the sign-up process. It fetches input values from the sign-up form, validates the input, signs up the user using the Supabase client, and redirects the user to the dashboard.

### Database Interaction
The application interacts with a Supabase database to create and manage user profiles. When a user clicks on the dashboard, methods from dashboard.js are called to add, update, or remove designers. The designers section is displayed from the designers table in the Supabase database. Here’s a snippet from `dashboard.js`:

This script adds a new designer to the designers table in the Supabase database. It fetches input values from the form fields, sends the data to the Supabase database, and handles the response.



