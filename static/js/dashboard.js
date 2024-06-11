// dashboard.js

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'your-supabase-url';
const supabaseAnonKey = 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Get a reference to the form element
const designerForm = document.getElementById('designer-form');

// Add a new designer
async function addDesigner(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Fetch data from form fields
    const name = designerForm.elements['name'].value;
    const email = designerForm.elements['email'].value;
    const portfolio_link = designerForm.elements['portfolio_link'].value;
    const portfolio_pic = designerForm.elements['portfolio_pic'].value;
    const bio = designerForm.elements['bio'].value;
    const type_of_designer = designerForm.elements['type_of_designer'].value;
    const gender = designerForm.elements['gender'].value;

    // Send the data to the Supabase database
    const { data, error } = await supabase
        .from('designers')
        .insert([
            {
                name,
                email,
                portfolio_link,
                portfolio_pic,
                bio,
                type_of_designer,
                gender
            },
        ]);

    // Handle the response (e.g., show a success message or handle errors)
    if (error) {
        console.error('Error adding designer:', error);
    } else {
        console.log('Designer added successfully:', data);
        designerForm.reset();
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
    const portfolio_link = designerForm.elements['portfolio_link'].value;
    const portfolio_pic = designerForm.elements['portfolio_pic'].value;
    const bio = designerForm.elements['bio'].value;
    const type_of_designer = designerForm.elements['type_of_designer'].value;
    const gender = designerForm.elements['gender'].value;

    // Send the updated data to the Supabase database
    const { data, error } = await supabase
        .from('designers')
        .update({
            name,
            email,
            portfolio_link,
            portfolio_pic,
            bio,
            type_of_designer,
            gender
        })
        .eq('email', email);

    // Handle the response (e.g., show a success message or handle errors)
    if (error) {
        console.error('Error updating designer:', error);
    } else {
        console.log('Designer updated successfully:', data);
        designerForm.reset();
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
        designerForm.reset();
    }
}
