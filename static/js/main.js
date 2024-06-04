// Initialize Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://syaciuejmtfsntyotudm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5YWNpdWVqbXRmc250eW90dWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MjYwMDEsImV4cCI6MjAzMjAwMjAwMX0.VCoIbvcSZKARa6jru3gukVgWjkf5mM8ZSgAdpnx2oyo'
const supabase = createClient(supabaseUrl, supabaseKey)




// Assuming you have an element with ID 'designers-data'
const container = document.getElementById('designers-data'); 

// Fetch designer data from Supabase (specific columns)
async function fetchDesignersData() {
  try {
        const { data: designers, error } = await supabase
            .from('designers')
            .select('name, email, portfolio_link, profile_picture, bio, type_of_designer, "Gender"');

        if (error) {
            console.error('Error fetching data:', error.message);
            return;
        }

        // Clear any existing content
        // container.innerHTML = '';

       

        // Iterate through designers and display their information
        designers.forEach((designer) => {
          const designerInfo = document.createElement('div');
          //designerInfo.classList.add('d-block', 'bg-primary', 'text-white'); // Add Bootstrap classes
          designerInfo.innerHTML = `
          <div class="row row-cols-1 row-cols-md-4 g-4" >
          <div class="col-md-3">
          <div class="card">
         
          <img src="${designer.profile_picture}" class="card-img-top" alt="Profile Pic"></img>
          <div class="card-body">
          <h5 class="card-title">${designer.name}</h5>      
          <p class="card-text">${designer.type_of_designer}</p>
          <p>${designer.bio}</p>
          <a href="${designer.portfolio_link}" class="class="btn btn-primary"> See more </a>  
          </div>
          </div>
          </div>
          </div>
          </div>
        `;
      container.appendChild(designerInfo);
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }

   // Append the designerInfo div to your container (assuming you have an element with the ID "container")
 container.appendChild(designerInfo);
};
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

