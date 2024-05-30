// dashboard.js

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



// dashboard.js

// Fetch designers data from Supabase
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

// Add a new designer
function addDesigner() {
    // Implement the logic to add a new designer (e.g., fetch data from form fields)
    // Send an AJAX request to the server
}

// Update a designer
function updateDesigner(designerId) {
    // Implement the logic to update a designer (e.g., fetch updated data from form fields)
    // Send an AJAX request to the server
}

// Remove a designer
function removeDesigner(designerId) {
    // Implement the logic to remove a designer
    // Send an AJAX request to the server
}

// Add a new portfolio item
function addPortfolio() {
    // Implement the logic to add a new portfolio item (e.g., fetch data from form fields)
    // Send an AJAX request to the server
}

// Update a portfolio item
function updatePortfolio(portfolioId) {
    // Implement the logic to update a portfolio item (e.g., fetch updated data from form fields)
    // Send an AJAX request to the server
}

// Remove a portfolio item
function removePortfolio(portfolioId) {
    // Implement the logic to remove a portfolio item
    // Send an AJAX request to the server
}

// Add a new profile
function addProfile() {
    // Implement the logic to add a new profile (e.g., fetch data from form fields)
    // Send an AJAX request to the server
}

// Update profile info
function updateProfile() {
    // Implement the logic to update profile information (e.g., fetch updated data from form fields)
    // Send an AJAX request to the server
}

// Remove a profile
function removeProfile(profileId) {
    // Implement the logic to remove a profile
    // Send an AJAX request to the server
}

// Call fetchDesigners() when needed (e.g., on page load)
fetchDesigners();

