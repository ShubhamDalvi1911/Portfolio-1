from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from .models import Msg


# Create your views here.

def App(request):
    return render(request, 'index.html')

def submit_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Create the object
        Msg.objects.create(name=name, email=email, message=message)

        return HttpResponse("""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Submission Success</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    color: #333;
                }
                .container {
                    background-color: #fff;
                    padding: 40px;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    width: 80%;
                    max-width: 600px;
                }
                h1 {
                    color: #4CAF50;
                    font-size: 36px;
                }
                p {
                    font-size: 18px;
                    margin-top: 20px;
                    color: #555;
                }
                .button {
                    display: inline-block;
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px 20px;
                    margin-top: 30px;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                    transition: background-color 0.3s ease;
                }
                .button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Form Submitted Successfully!</h1>
                <p>Your message has been sent successfully. We will get back to you shortly.</p>
                <a href="/" class="button">Go to Home</a>
            </div>
        </body>
        </html>
        """)  # Or redirect to another page

    return HttpResponse("Invalid request method", status=405)
    