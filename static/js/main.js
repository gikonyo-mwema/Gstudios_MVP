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
          //designerInfo.classList.add('d-block', 'p-2', 'bg-primary', 'text-white'); // Add Bootstrap classes
          designerInfo.innerHTML = `          
          <img src="${designer.profile_picture}" class="card-img-top" alt="Profile Pic"></img>
          <h5 class="card-title">${designer.name}</h5>      
          <p class="card-text">${designer.type_of_designer}</p>
          <p>${designer.bio}</p>
          <a href="${designer.portfolio_link}" class="class="btn btn-primary"> See more </p>
        `;
      container.appendChild(designerInfo);
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Call the function to fetch data
fetchDesignersData();






        // Iterate through designers and display their information
        //designers.forEach((designer) => {
          //  const designerInfo = document.createElement('div');
         //   designerInfo.classList.add('designer-info'); // Add a CSS class if needed
      //      designerInfo.innerHTML = `
      //          <p>Name: ${designer.name}</p>
      //          <p>Email: ${designer.email}</p>
       //         <p>Gender: ${designer.Gender}</p> 
       //         <p>Type of Designer: ${designer.type_of_designer}</p>
       //         <p>Portfolio Link: ${designer.portfolio_link}</p>
       //         <p>Profile Pic: ${designer.profile_picture}</p>              
       //     `;
       //     container.appendChild(designerInfo);
       // });
 //   } catch (error) {
  //      console.error('Error fetching data:', error.message);
  //  }
//}

// Call the function to fetch data
//fetchDesignersData();











  
  /* Handle user signup
  function handleSignUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    // Validate email and password (you can add more validation here)
  
    // Sign up the user using Supabase Auth API
    fetch('/sign_up', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Sign-up response:', data);
        // Redirect to a success page or handle errors
      })
      .catch(error => console.error('Error signing up:', error));
  }
  
  // Handle user login
  function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Validate email and password (you can add more validation here)
  
    // Sign in the user using Supabase Auth API
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login response:', data);
        // Redirect to the dashboard or handle errors
      })
      .catch(error => console.error('Error logging in:', error));
  }
  
  // Call fetchDesigners() when needed (e.g., on page load)
  fetchDesigners();
  */