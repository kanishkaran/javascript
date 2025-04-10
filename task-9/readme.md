 🔄 Infinite Scrolling Content Loader

### 9. **Infinite Scrolling Content Loader**
- **Objective:** Create a web page that loads additional content as the user scrolls toward the bottom.
- **Requirements:**
  - Detect when the user is near the bottom of the page using the scroll event.
  - Use the Fetch API to load more data asynchronously (simulate with dummy data or an API).
  - Append new content to the page while ensuring smooth performance and user experience.

---

### ❓ What is this?
A responsive web page that implements **infinite scrolling** using the `scroll` event and real-time data fetched from the `jsonplaceholder.typicode.com/posts` API.

---

### 🧠 What does it do?
- Loads 10 posts at a time as the user scrolls
- Fetches data dynamically using the Fetch API
- Smooth UI with gradient backgrounds and styled content
- Prevents overlapping loads using a loading flag
- Shows a loading indicator during fetch

---

### 🖼️ Preview

![Infinite Scroll Preview](images/infinite%20scroll.gif)
