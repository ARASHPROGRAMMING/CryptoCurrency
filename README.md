Crypto Dashboard
This project is a simple cryptocurrency dashboard built with HTML, CSS, and JavaScript. It displays the real-time prices of multiple popular cryptocurrencies, fetching data from the CoinGecko API and updating every minute.

Features
Real-time Prices: Displays live prices for over 50 popular cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and more.
Auto-Refresh: Automatically refreshes prices every 60 seconds.
Price Change Colors: Prices are highlighted in green for an increase and red for a decrease.
Prerequisites
No special prerequisites are required. You can run this project in any modern web browser.

Installation and Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/crypto-dashboard.git
cd crypto-dashboard
Open the index.html file in your web browser.

File Structure
index.html: The main HTML file that contains the page structure and content.
app.js: JavaScript code to fetch data from the CoinGecko API and dynamically display it.
css/style.css: CSS styles for layout and design.
How It Works
API Call: A request is sent to the CoinGecko API every minute to fetch the latest cryptocurrency prices.
Dynamic Price Color: If a cryptocurrency price increases, it is displayed in green; if it decreases, in red.
Rendering Cryptocurrency Information: Each cryptocurrency's name, image, and price are displayed on cards for easy viewing.
Resources
CoinGecko API: The data source for cryptocurrency information.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
