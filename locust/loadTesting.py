from locust import HttpUser, TaskSet, task, between
import re

def extract_csrf_token(page_content):
    """Extract the CSRF token from the login page content."""
    match = re.search(r'name="csrf_token" value="(.*?)"', page_content)
    if match:
        return match.group(1)
    return None

class UserBehavior(TaskSet):
    
    @task(1)
    def view_courses(self):
        """Simulate a user viewing the courses page."""
        self.client.get("/courses")

    @task(2)
    def view_devotion(self):
        """Simulate a user visiting the devotion page."""
        self.client.get("/devotion")

    @task(3)
    def view_sabbath_school(self):
        """Simulate a user visiting the sabbath school page."""
        self.client.get("/sabbathSchool")

    @task(4)
    def view_about_us(self):
        """Simulate a user visiting the About Us page."""
        self.client.get("/aboutUs")

    @task(5)
    def view_contact_us(self):
        """Simulate a user visiting the Contact Us page."""
        self.client.get("/contactUs")

    @task(6)
    def login(self):
        """Simulate a user logging in with valid credentials."""
        # Fetch CSRF token first if needed
        login_page = self.client.get("/logIn")

        csrf_token = extract_csrf_token(login_page.text)  # Extract the CSRF token

        response = self.client.post("/logIn", {
            "email": "ruth@gmail.com", 
            "password": "Ruth@1234",
            "csrf_token": csrf_token  # Include CSRF token if required
        })
        
        if response.status_code != 200:
            print(f"Login failed: {response.text}")

class WebsiteUser(HttpUser):
    """Define the user class for Locust."""
    tasks = [UserBehavior]
    wait_time = between(1, 5)  # Wait between 1 to 5 seconds after each task

if __name__ == "__main__":
    import os
    os.system("locust -f loadTesting.py")