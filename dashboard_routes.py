from flask import Blueprint, render_template, request
from supabase import create_client
import os

dashboard_bp = Blueprint('dashboard', __name__)

# Initialize Supabase client (same as in app.py)
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)


# Add a new user
@dashboard_bp.route('/add_user', methods=['POST'])
def add_user():
    try:
        # Extract form data
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")

        # Add a new user to the Supabase 'users' table
        users_data, error = supabase.table('users').insert([
            {"name": username, "email": email}
        ]).execute()

        if error:
            return f"Error adding user: {error.message}", 500

        return "User added successfully!"
    except Exception as e:
        return f"Error adding user: {str(e)}", 500


# Update user info
@dashboard_bp.route('/update_user', methods=['POST'])
def update_user():
    try:
        # Extract form data
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")

        # Update user information in the Supabase 'users' table
        users_data, error = supabase.table('users').update({
            "name": username,
            "email": email
        }).eq('email', email).execute()

        if error:
            return f"Error updating user: {error.message}", 500

        return "User information updated successfully!"
    except Exception as e:
        return f"Error updating user: {str(e)}", 500


# Delete a user
@dashboard_bp.route('/delete_user', methods=['POST'])
def delete_user():
    try:
        # Extract form data
        username = request.form.get("username")

        # Delete a user from the Supabase 'users' table
        users_data, error = supabase.table('users').delete().eq('name', username).execute()

        if error:
            return f"Error deleting user: {error.message}", 500

        return "User deleted successfully!"
    except Exception as e:
        return f"Error deleting user: {str(e)}", 500


# Display all the users
@dashboard_bp.route('/get_users', methods=['GET'])
def get_users():
    try:
        # Fetch all users from the Supabase 'users' table
        users_data, error = supabase.table('users').select('*').execute()

        if error:
            return f"Error fetching users: {error.message}", 500

        # Render the users data (e.g., display it in a template)
        return render_template('users.html', users=users_data)
    except Exception as e:
        return f"Error fetching users: {str(e)}", 500
    

@dashboard_bp.route('/add_designer', methods=['POST'])
def add_designer():
    try:
        # Extract form data
        name = request.form.get("name")
        email = request.form.get("email")
        portfolio_link = request.form.get("portfolio_link")

        # Validate input (e.g., check if email is unique)
        # Add the designer to the Supabase 'designers' table
        designers_data, error = supabase.table('designers').insert([
            {"name": name, "email": email, "portfolio_link": portfolio_link}
        ]).execute()

        if error:
            return f"Error adding designer: {error.message}", 500

        return "Designer added successfully!"
    except Exception as e:
        return f"Error adding designer: {str(e)}", 500

@dashboard_bp.route('/update_designer', methods=['POST'])
def update_designer():
    try:
        # Extract form data
        designer_id = request.form.get("designer_id")
        updated_name = request.form.get("updated_name")
        updated_portfolio_link = request.form.get("updated_portfolio_link")

        # Update designer information in the Supabase 'designers' table
        designers_data, error = supabase.table('designers').update({
            "name": updated_name,
            "portfolio_link": updated_portfolio_link
        }).eq('id', designer_id).execute()

        if error:
            return f"Error updating designer: {error.message}", 500

        return "Designer updated successfully!"
    except Exception as e:
        return f"Error updating designer: {str(e)}", 500

@dashboard_bp.route('/delete_designer', methods=['POST'])
def delete_designer():
    try:
        # Extract form data
        designer_id = request.form.get("designer_id")

        # Delete the designer from the Supabase 'designers' table
        designers_data, error = supabase.table('designers').delete().eq('id', designer_id).execute()

        if error:
            return f"Error deleting designer: {error.message}", 500

        return "Designer deleted successfully!"
    except Exception as e:
        return f"Error deleting designer: {str(e)}", 500



# Add new portifolio item

@dashboard_bp.route('/add_portfolio', methods=['POST'])
def add_portfolio():
    try:
        # Extract form data
        title = request.form.get("title")
        description = request.form.get("description")
        image_url = request.form.get("image_url")
        project_type = request.form.get("project_type")

        # Add the portfolio item to the Supabase 'portfolio' table
        portfolio_data, error = supabase.table('portfolio').insert([
            {"title": title, "description": description, "image_url": image_url, "project_type": project_type}
        ]).execute()

        if error:
            return f"Error adding portfolio item: {error.message}", 500

        return "Portfolio item added successfully!"
    except Exception as e:
        return f"Error adding portfolio item: {str(e)}", 500


# updating a portfolio item
@dashboard_bp.route('/update_portfolio', methods=['POST'])
def update_portfolio():
    try:
        # Extract form data
        portfolio_id = request.form.get("portfolio_id")
        updated_title = request.form.get("updated_title")
        updated_description = request.form.get("updated_description")

        # Update the portfolio item in the Supabase 'portfolio' table
        portfolio_data, error = supabase.table('portfolio').update({
            "title": updated_title,
            "description": updated_description
        }).eq('id', portfolio_id).execute()

        if error:
            return f"Error updating portfolio item: {error.message}", 500

        return "Portfolio item updated successfully!"
    except Exception as e:
        return f"Error updating portfolio item: {str(e)}", 500
    
# Deleting a portfolio item
@dashboard_bp.route('/delete_portfolio', methods=['POST'])
def delete_portfolio():
    try:
        # Extract form data
        portfolio_id = request.form.get("portfolio_id")

        # Delete the portfolio item from the Supabase 'portfolio' table
        portfolio_data, error = supabase.table('portfolio').delete().eq('id', portfolio_id).execute()

        if error:
            return f"Error deleting portfolio item: {error.message}", 500

        return "Portfolio item deleted successfully!"
    except Exception as e:
        return f"Error deleting portfolio item: {str(e)}", 500

