const app = document.getElementById('app');

function render(route) {
    switch (route) {
      case '':
      case '/':
        app.innerHTML = `
          <h2>🏠 Home</h2>
          <p>Welcome to our single-page application using hash-based routing.</p>
          <ul>
            <li>🔥 Fast loading</li>
            <li>💡 No backend needed</li>
            <li>⚡ JavaScript powered</li>
          </ul>
        `;
        break;
  
      case '/about':
        app.innerHTML = `
          <h2>ℹ️ About</h2>
          <p>This simple SPA was built using pure JavaScript to demonstrate client-side routing.</p>
          <blockquote>
            "SPAs feel like native apps. Fast and responsive."
          </blockquote>
          <p>Technologies used:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vanilla JS</li>
          </ul>
        `;
        break;
  
      case '/contact':
        app.innerHTML = `
          <h2>📬 Contact</h2>
          <p>Send us your feedback:</p>
          <form onsubmit="event.preventDefault(); alert('Message sent!');">
            <label>Name:<br><input type="text" required></label><br><br>
            <label>Email:<br><input type="email" required></label><br><br>
            <label>Message:<br><textarea required></textarea></label><br><br>
            <button type="submit">Send</button>
          </form>
        `;
        break;
  
      default:
        app.innerHTML = `
          <h2>❌ 404 - Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
        `;
    }
  }
  

function router() {
  const route = location.hash.slice(1); // remove '#'
  render(route);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
