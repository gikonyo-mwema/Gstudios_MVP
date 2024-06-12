// Initialize Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://syaciuejmtfsntyotudm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5YWNpdWVqbXRmc250eW90dWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MjYwMDEsImV4cCI6MjAzMjAwMjAwMX0.VCoIbvcSZKARa6jru3gukVgWjkf5mM8ZSgAdpnx2oyo'
const supabase = createClient(supabaseUrl, supabaseKey)





const container = document.getElementById('designers-data'); 

// Fetch designer data from Supabase (specific columns)
//async function fetchDesignersData() {
  //try {
        ///const { data: designers, error } = await supabase
        //    .from('designers')
        //    .select('name, email, portfolio_link, profile_picture, bio, type_of_designer, "Gender"');

        //if (error) {
        //    console.error('Error fetching data:', error.message);
        //    return;
        //}



        async function fetchDesignersData() {
          try {
            const { data: designers, error } = await supabase
              .from('designers')
              .select('name, email, portfolio_link, profile_picture, bio, type_of_designer, "Gender"');
        
            if (error) {
              console.error('Error fetching data:', error.message);
              return;
            }
        
            // Get the container element
            const container = document.getElementById('cards-container');
        
            // Create a card for each designer
            designers.forEach((designer) => {
              // Create the card elements
              const card = document.createElement('div');
              card.className = 'swiper-slide card';
        
              const cardImage = document.createElement('div');
              cardImage.className = 'card__image';
        
              const img = document.createElement('img');
              img.src = designer.profile_picture;
              img.alt = 'card image';
        
              const cardContent = document.createElement('div');
              cardContent.className = 'card__content';
        
              const cardTitle = document.createElement('span');
              cardTitle.className = 'card__title';
              cardTitle.textContent = designer.type_of_designer;
        
              const cardName = document.createElement('span');
              cardName.className = 'card__name';
              cardName.textContent = designer.name;
        
              const cardText = document.createElement('p');
              cardText.className = 'card__text';
              cardText.textContent = designer.bio;
        
              const cardBtn = document.createElement('button');
              cardBtn.className = 'card__btn';
              cardBtn.textContent = 'View More';
        
              // Append the elements to their parents
              cardImage.appendChild(img);
              cardContent.appendChild(cardTitle);
              cardContent.appendChild(cardName);
              cardContent.appendChild(cardText);
              cardContent.appendChild(cardBtn);
              card.appendChild(cardImage);
              card.appendChild(cardContent);
        
              // Append the card to the container
              container.appendChild(card);
            });
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        }
        
        // Call the function to fetch data
        fetchDesignersData();
        

        

        
      




// Sign Up Process
const handleSignUp = async (e) => {
  e.preventDefault(); // Prevent form submission (good practice)

  // Get form input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate input - Check if passwords match
  if (password !== confirmPassword) {
    console.error('Passwords do not match');
    return;
  }

  try {
    // Sign up the user
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('User signed up successfully:', data.user);

      // Redirect to the dashboard (dashboard.html)
      window.location.href = 'dashboard.html';
    }
  } catch (error) {
    console.error('An error occurred during sign-up:', error.message);
  }
};



// Attach the handleSignUp function to the form submission
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', handleSignUp);
  } else {
    console.error('Element with ID "signup-form" not found.');
  }
});



// Login Process
const handleLogin = async (e) => {
  e.preventDefault(); // Prevent form submission (good practice)

  // Get form input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Log in the user
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password
    });
    if (error) {
      console.error('Error logging in:', error.message);
    } else {
      console.log('User logged in successfully:', data.user);

      // Redirect to the dashboard (dashboard.html)
      window.location.href = 'dashboard.html';
    }
  } catch (error) {
    console.error('An error occurred during login:', error.message);
  }
};

// Attach the handleLogin function to the form submission
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  } else {
    console.error('Login form not found.');
  }
});
