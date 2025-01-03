# Project Overview

The MISK Stock Prediction project is a comprehensive application designed to forecast stock prices. It integrates a Flask-based backend with a React frontend, utilizing machine learning models for predictive analytics. The system incorporates real-time data from the Alpaca API and employs OpenAI's GPT for natural language processing tasks. Additionally, it features a PostgreSQL database for data storage and is deployed on Heroku for cloud-based accessibility.


Link to a presentation of the app: 
https://drive.google.com/file/d/1HPeyJ_1_vnzPnBuqyvN-My-i61ro1Vrj/view?usp=sharing

# Some video demonstrations
Demos of new users and their tickers being added to the database:
https://www.youtube.com/watch?v=Ww9wg4RvuDM

https://www.youtube.com/watch?v=56g3UfrS4Ek

# Final Project Build Instructions



## Alpaca Client Changes

For the project to connect to the database and interact with external services correctly, certain configuration changes are required in `alpaca_client.py`, libraries must be installed, and specific variables at the top of the file should be updated with appropriate values.

### Python Libraries Configuration

### Installation Script

Run the following pip command in your terminal to install all required libraries:

```bash
pip install aiohttp websockets openai asyncpg aiosmtplib requests pandas matplotlib tiingo scikit-learn torch pytest pytest-asyncio numpy flask_socketio Flask asyncio
```

### Database

The database configuration within `alpaca_client.py` now runs on Heroku, so there is no need to set up on postgres.

#### Required Variables

In addition to configuring the database connection, there are several variables at the top of alpaca_client.py that must be replaced with actual values found in .env files. These are critical for the functionality related to Alpaca API, OpenAI, and Gmail notifications.


## Notes

- The gmail account is set to send emails from mshvorin@gmail.com, and to recieve emails, you will need to create an account with your email address, then subscribe to a good amount of tickers such as AAPL, MSFT, TSLA, and other popular companies in order to get live reports after running app.py and starting the flask app. (You will know once you start getting pings and pongs) Otherwise, you can subscribe to a ticker like TSLA, and in the bottom of alpaca_client.py, you can uncomment in line 566
```python
asyncio.run(tiingoML("TSLA",5))
```
and run the alpaca_client.py file.
- When connected, you should be able to see that the flask app has been ran in the console. You will see something similar to `(19168) wsgi starting up on http://127.0.0.1:5000/`, and should click on the link to connect to the webhook.


## Server Setup

Make sure you have Node.js installed before running the following commands.


To run the server, navigate to the “server” directory and follow these steps:

1. **Install ts-node**:
   - Ensure ts-node is installed:
     ```sh
     npm install -g ts-node
     ```
     Or if you prefer to install it locally:
     ```sh
     npm install ts-node --save-dev
     ```
   - Verify the installation:
     After installing ts-node, you can verify its installation by running:
     ```sh
     ts-node --version
     ```

2. **Install the 'cors' module**:
   ```sh
   npm install cors

Ensure that the types for 'cors' are available:
Sometimes TypeScript requires type declarations for modules. In this case, 'cors' might not have its own types, but you can install the types from DefinitelyTyped:
```sh
npm install @types/cors --save-dev
 ```

3.**Begin running the server**:
```sh
nodemon index.ts
 ```


## Client Setup

To run the client, navigate to the “frontend” directory and follow these steps:

1. **Install TypeScript as a development dependency**:
   ```sh
   npm install typescript --save-dev
   ```

2. **Begin running the client**:
  ```sh
  nodemon index.ts
  ```
 - Access the web application:
     Navigate to localhost:3000 in your web browser.
