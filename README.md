# Website Entity & Intent Analyzer

## 📌 Overview
This project is an AI-powered tool that analyzes web pages to extract **named entities** (brands, products, locations) and determine **search intent** (Informational, Transactional, Navigational, Commercial). It uses:

✅ **Flask** (Backend) – API for scraping & AI analysis  
✅ **Playwright** – Scrapes webpage content  
✅ **Google Gemini AI** – Extracts entities & intent  
✅ **React** (Frontend) – User interface  
✅ **Axios** – Fetches API results  
✅ **CORS** – Enables cross-origin requests  

---

## 📂 Project Structure
```
projectreact/
│── app.py              # Flask Backend (API)
│── requirements.txt    # Python Dependencies
│── frontend/           # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│── README.md           # Documentation
```

---

## 🚀 Setup Instructions

### 1️⃣ **Backend (Flask API)**
#### **Install Dependencies**
Run the following commands in **Command Prompt (cmd)**:
```sh
cd C:\Users\Lenovo\Desktop\project\react1
pip install -r requirements.txt
playwright install
```

#### **Run Flask API**
```sh
python app.py
```
✅ Flask will start at `http://127.0.0.1:5000/`

---

### 2️⃣ **Frontend (React UI)**
#### **Install Dependencies**
```sh
cd frontend
npm install
```
#### **Run React Frontend**
```sh
npm start
```
✅ React will run at `http://localhost:3000/`

---

## 🛠 How to Use
1️⃣ Open the **React App** in your browser:  
   **`http://localhost:3000/`**  
2️⃣ Enter a **website URL** (e.g., `https://example.com`) and click **Analyze**  
3️⃣ The app will scrape the page and display:  
   - **Title, Meta Description, Headings**  
   - **Extracted Named Entities (Brands, Locations, Products)**  
   - **Search Intent Analysis**

---

## 📝 Example API Response
```json
{
    "scraped_data": {
        "title": "Create a Blog - Squarespace",
        "meta_description": "Create a blog and manage content on Squarespace...",
        "headings": ["Create a blog", "Publish faster", "Sell premium content"]
    },
    "analysis": "\n**Named Entities:**\n\n**Brands:** Squarespace\n**Products:** Website plans, Blogs\n**Search Intent:** Informational"
}
```

---

## ❓ Troubleshooting
### 🔹 **Backend Not Found (404 Error)?**
✔️ Ensure Flask is running with `python app.py`  
✔️ Try testing API manually using **Postman**

### 🔹 **React Not Connecting to Flask?**
✔️ Check if Flask is running on **`http://127.0.0.1:5000/`**  
✔️ Update `App.js` API URL if Flask runs on a different port

---

## 🌟 Future Enhancements
🔹 Add database (PostgreSQL) to store analysis history  
🔹 Improve UI with better visualization (charts & graphs)  
🔹 Convert to Chrome Extension for easier analysis  

---

## 📌 Author
👨‍💻 Developed by **Shanmugavel B**  

