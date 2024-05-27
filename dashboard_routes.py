from dotenv import load_dotenv
load_dotenv()
from flask import Flask, Blueprint, render_template, request

from supabase import create_client
import os

dashboard_bp = Blueprint('dashboard', __name__)

# Initialize Supabase client (same as in app.py)
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)


#####################################################
                  #DESIGNERS
#####################################################

# Add a new designer
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
        return render_template('dashboard.designers')  # Redirect to the designers page
    except Exception as e:
        return f"Error adding designer: {str(e)}", 500

# Update a designer
@dashboard_bp.route('/update_designer/<int:designer_id>', methods=['POST'])
def update_designer(designer_id):
    try:
        # Extract form data
        updated_name = request.form.get("updated_name")
        updated_portfolio_link = request.form.get("updated_portfolio_link")

        # Update designer information in the Supabase 'designers' table
        designers_data, error = supabase.table('designers').update({
            "name": updated_name,
            "portfolio_link": updated_portfolio_link
        }).eq('id', designer_id).execute()
        if error:
            return f"Error updating designer: {error.message}", 500
        return render_template('designers.html', designers=designers_data)  # Redirect to the designers page
    except Exception as e:
        return f"Error updating designer: {str(e)}", 500

# Remove a designer
@dashboard_bp.route('/remove_designer/<int:designer_id>', methods=['POST'])
def remove_designer(designer_id):
    try:
        # Delete the designer from the Supabase 'designers' table
        designers_data, error = supabase.table('designers').delete().eq('id', designer_id).execute()
        if error:
            return f"Error removing designer: {error.message}", 500
        return render_template('designers.html', designers=designers_data)# Redirect to the designers page
    except Exception as e:
        return f"Error removing designer: {str(e)}", 500

# Display all designers
@dashboard_bp.route('/designers', methods=['GET'])
def designers():
    try:
        # Fetch all designers from the Supabase 'designers' table
        designers_data, error = supabase.table('designers').select('*').execute()

        if error:
            return f"Error fetching designers: {error.message}", 500

        # Render the designers data (e.g., display it in a template)
        return render_template('designers.html', designers=designers_data)
    except Exception as e:
        return f"Error fetching designers: {str(e)}", 500

#####################################################
                  #PORTFOLIO
#####################################################


# Add a new portfolio item
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
        return render_template('designers.html', designers=designers_data)  # Redirect to the portfolio page
    except Exception as e:
        return f"Error adding portfolio item: {str(e)}", 500

# Update a portfolio item
@dashboard_bp.route('/update_portfolio/<int:portfolio_id>', methods=['POST'])
def update_portfolio(portfolio_id):
    try:
        # Extract form data
        updated_title = request.form.get("updated_title")
        updated_description = request.form.get("updated_description")

        # Update the portfolio item in the Supabase 'portfolio' table
        portfolio_data, error = supabase.table('portfolio').update({
            "title": updated_title,
            "description": updated_description
        }).eq('id', portfolio_id).execute()
        if error:
            return f"Error updating portfolio item: {error.message}", 500
        return render_template('designers.html', designers=designers_data)  # Redirect to the portfolio page
    except Exception as e:
        return f"Error updating portfolio item: {str(e)}", 500

# Remove a portfolio item
@dashboard_bp.route('/remove_portfolio/<int:portfolio_id>', methods=['POST'])
def remove_portfolio(portfolio_id):
    try:
        # Delete the portfolio item from the Supabase 'portfolio' table
        portfolio_data, error = supabase.table('portfolio').delete().eq('id', portfolio_id).execute()
        if error:
            return f"Error removing portfolio item: {error.message}", 500
        return render_template('designers.html', designers=designers_data)  # Redirect to the portfolio page
    except Exception as e:
        return f"Error removing portfolio item: {str(e)}", 500

# Display all portfolio items
@dashboard_bp.route('/portfolio', methods=['GET'])
def portfolio():
    try:
        # Fetch all portfolio items from the Supabase 'portfolio' table
        portfolio_data, error = supabase.table('portfolio').select('*').execute()

        if error:
            return f"Error fetching portfolio items: {error.message}", 500

        # Render the portfolio data (e.g., display it in a template)
        return render_template('portfolio.html', portfolio=portfolio_data)
    except Exception as e:
        return f"Error fetching portfolio items: {str(e)}", 500


#####################################################
                  #PROFILE
#####################################################

# Add a new profile
@dashboard_bp.route('/add_profile', methods=['POST'])
def add_profile():
    try:
        # Extract form data
        username = request.form.get("username")    
        email = request.form.get("email")
        
        # Add a new profile to the Supabase 'profiles' table
        profiles_data, error = supabase.table('profiles').insert([
            {"username": username, "email": email}
        ]).execute()
        if error:
            return f"Error adding profile: {error.message}", 500
        return "Profile added successfully!"
    except Exception as e:
        return f"Error adding profile: {str(e)}", 500

# Update profile info
@dashboard_bp.route('/update_profile', methods=['POST'])
def update_profile():
    try:
        # Extract form data
        updated_username = request.form.get("updated_username")
        updated_full_name = request.form.get("updated_full_name")
        updated_email = request.form.get("updated_email")

        # Update profile information in the Supabase 'profiles' table
        profiles_data, error = supabase.table('profiles').update({
            "username": updated_username,
            "full_name": updated_full_name,
            "email": updated_email
        }).execute()  # No need to specify 'id' here

        if error:
            return f"Error updating profile: {error.message}", 500
        return "Profile information updated successfully!"
    except Exception as e:
        return f"Error updating profile: {str(e)}", 500

# Remove a profile
@dashboard_bp.route('/remove_profile', methods=['POST'])
def remove_profile():
    try:
        # Extract form data
        user_id = request.form.get("id")  # Assuming you have a unique user ID

        # Delete the profile from the Supabase 'profiles' table
        profiles_data, error = supabase.table('profiles').delete().eq('id', id).execute()
        if error:
            return f"Error removing profile: {error.message}", 500
        return "Profile removed successfully!"
    except Exception as e:
        return f"Error removing profile: {str(e)}", 500


# Display all profiles
@dashboard_bp.route('/profiles', methods=['GET'])
def profiles():
    try:
        # Fetch all profiles from the Supabase 'profiles' table
        profiles_data, error = supabase.table('profiles').select('*').execute()

        if error:
            return f"Error fetching profiles: {error.message}", 500

        # Render the profiles data (e.g., display it in a template)
        return render_template('profiles.html', profiles=profiles_data)
    except Exception as e:
        return f"Error fetching profiles: {str(e)}", 500

