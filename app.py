from flask import Flask, request, jsonify
from flask_cors import CORS
from playwright.sync_api import sync_playwright
import google.generativeai as genai

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Set your Gemini API Key
genai.configure(api_key="api key")

def scrape_website(url):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto(url)

        data = {
            "url": url,
            "title": page.title(),
            "headings": [h.inner_text() for h in page.query_selector_all("h1, h2, h3")],
            "meta_description": page.query_selector("meta[name='description']").get_attribute("content") if page.query_selector("meta[name='description']") else "",
            "content": page.inner_text("body"),
        }

        browser.close()
        return data

def extract_entities_intent(text):
    prompt = f"Analyze the following text and extract named entities (brands, locations, products) and determine its search intent (Informational, Transactional, Navigational, Commercial):\n\n{text}"

    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    
    return response.text

@app.route('/analyze', methods=['POST'])
def analyze_url():
    data = request.json
    url = data.get('url')

    try:
        scraped_data = scrape_website(url)
        analysis = extract_entities_intent(scraped_data['content'])

        return jsonify({"scraped_data": scraped_data, "analysis": analysis})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
