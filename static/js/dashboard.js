// dashboard.js

const { SupabaseAuthClient } = require("@supabase/supabase-js/dist/module/lib/SupabaseAuthClient");

// Get a referencee to the form element
const designerForm = document.getElementById('designer-form');

// Add a new designer
async function addDesigner(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Fetch data from form fields
    const name = designerForm.elements['name'].value;
    const email = designerForm.elements['email'].value;
    const portfolioLink = designerForm.elements['Portfolio link'].value;
    const portfolioPic = designerForm.elements['portfolio picture'].value;
    const bio = designerForm.elements['Bio'].value;
    const typeOfDesigner = designerForm.elements[' Type of Designer'].value;
    const gender = designerForm.elements['Gender'].value;

    // Send the data to the supabase database
    const { data, error } = await supabase 
        .from('designers')
        .insert([
            {
                name: name,
                email: email,
                portfolio_link: portfolioLink,
                portfolio_pic: portfolioPic,
                bio: bio,

                type_of_designer: typeOfDesigner,
                gender: gender
            },
        ]);

    // Handle the response (e.g. show a success message or handle the error)
    if (error) {
        console.error('Error adding designer:', error);
    } else {
        console.log('Designer added successfully:', data)
    }
}

// Add the event listener to the form submission event
designerForm.addEventListener('submit', addDesigner);




// Update a designer
async function updateDesigner(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Fetch data from form fields
    const name = designerForm.elements['name'].value;
    const email = designerForm.elements['email'].value;
    const portfolioLink = designerForm.elements['Portfolio link'].value;
    const portfolioPic = designerForm.elements['portfolio picture'].value;
    const bio = designerForm.elements['Bio'].value;
    const typeOfDesigner = designerForm.elements[' Type of Designer'].value;
    const gender = designerForm.elements['Gender'].value;

    // Send the updated data to the Supabase database
    const { data, error } = await supabase
        .from('designers')
        .update({ 
            name: name, 
            email: email, 
            portfolio_link: portfolioLink, 
            portfolio_pic: portfolioPic, 
            bio: bio, 
            type_of_designer: typeOfDesigner, 
            gender: gender 
        })
        .eq('email', email);

    // Handle the response (e.g., show a success message or handle errors)
    if (error) {
        console.error('Error updating designer:', error);
    } else {
        console.log('Designer updated successfully:', data);
    }
}


// Remove a designer
async function removeDesigner(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Fetch the email of the designer to be removed
    const email = designerForm.elements['email'].value;

    // Remove the designer from the Supabase database
    const { error } = await supabase
        .from('designers')
        .delete()
        .eq('email', email);

    // Handle the response (e.g., show a success message or handle errors)
    if (error) {
        console.error('Error removing designer:', error);
    } else {
        console.log('Designer removed successfully');
    }
}
