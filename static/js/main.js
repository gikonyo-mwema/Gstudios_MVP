

// Fetch designers data from Supabase (similar to what you were doing in Flask)
function fetchDesigners() {
    fetch('/dashboard/designers')
        .then(response => response.json())
        .then(data => {
            // Process the designers data (e.g., create HTML elements)
            const designersContainer = document.getElementById('designers-container');
            data.forEach(designer => {
                const designerCard = document.createElement('div');
                designerCard.classList.add('col');
                designerCard.innerHTML = `
                    <div class="card">
                        <img src="${designer.profile_picture}" class="card-img-top" alt="${designer.name}">
                        <div class="card-body">
                            <h3 class="card-title">${designer.name}</h3>
                            <p class="card-text">${designer.bio}</p>
                            <p class="card-text">${designer.type_of_designer}</p>
                        </div>
                    </div>
                `;
                designersContainer.appendChild(designerCard);
            });
        })
        .catch(error => console.error('Error fetching designers:', error));
}

// Call fetchDesigners() when needed (e.g., on page load)
fetchDesigners();

  
  // Handle user signup
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
  