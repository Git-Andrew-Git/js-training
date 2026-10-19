# 📚 Topic 09: Markdown Parser Utility

## 🧠 Theory & Concepts

### 1. Custom Lightweight Markdown-to-HTML Parser
Markdown is a lightweight markup language used for formatting text. A simple markdown parser uses regular expressions (`RegExp`) and string replacement methods (`.replace()`) to convert syntax like headers (`#`), bold (`**`), and italics (`*`) into HTML tags (`<h1>`, `<strong>`, `<em>`).

```javascript
function parseMarkdown(mdText) {
    return mdText
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}
```

---

## 🛠️ Exercises for Topic 09

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Basic Regex Replacers):**
   - Write a function `parseSimpleMarkdown(text)` that converts `# Header` to `<h1>`, `**bold**` to `<strong>`, and `*italic*` to `<em>`.

2. **Exercise 2 (Lists & Links Parser):**
   - Extend your markdown parser to support unordered list items (`- item`) and links (`[title](url)`).

3. **Exercise 3 (Live Markdown Previewer UI):**
   - Create a textarea for markdown input and a live preview container in `#ui-sandbox` that renders formatted HTML as you type.
