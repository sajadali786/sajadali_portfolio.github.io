/* General Body Styles */
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

/* Hero Section Styles */
.hero {
    background-color: #333;
    color: #fff;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-text h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.hero-text p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

/* Button Styles */
.button {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
}

/* Main Content and Section Styles */
main {
    max-width: 960px;
    margin: 40px auto;
    padding: 20px;
}

section {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #007bff;
}

/* Project Section Styles */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.project-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}

.project-card img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;
}

.project-card h3 {
    margin-bottom: 10px;
}

.project-card a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

.project-card a:hover {
    text-decoration: underline;
}

/* Contact Section Styles */
#contact {
    text-align: center;
}

/* Footer Styles */
footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
}
