/**
 * Antigravity Study Planner - Core Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('planner-form');
    const resultContainer = document.getElementById('result-content');
    const emptyState = document.getElementById('empty-state');
    const generateBtn = document.getElementById('generate-btn');

    // Simulate AI Generation logic based on the Spec
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // 1. UI State: Loading
        const originalBtnText = generateBtn.textContent;
        generateBtn.textContent = "Analyzing Constraints...";
        generateBtn.disabled = true;
        
        // Input Data
        const formData = {
            subjects: document.getElementById('subjects').value,
            hours: document.getElementById('hours').value,
            goal: document.getElementById('goal').value
        };

        // 2. Simulate Reasoning Delay (1.5s)
        await new Promise(r => setTimeout(r, 1500));
        
        // 3. Generate Content (Mocking the AI response for now based on spec)
        // In a real app, this would call the LLM API.
        const planMarkdown = generateMockPlan(formData);
        
        // 4. Render Output
        renderMarkdown(planMarkdown);
        
        // 5. UI State: Reset
        generateBtn.textContent = originalBtnText;
        generateBtn.disabled = false;
        
        // Switch View
        emptyState.classList.add('hidden');
        resultContainer.classList.remove('hidden');
    });

    function renderMarkdown(markdownText) {
        // Simple Markdown-to-HTML converter for the demo
        // Supports H2, H3, Bold, Lists
        let html = markdownText
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/^\* (.*$)/gim, '<li>$1</li>')
            .replace(/\n\n/gim, '<br><br>');
            
        // Wrap lists (naive implementation)
        html = html.replace(/<\/li><br><br><li>/gim, '</li><li>');
        html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');

        resultContainer.innerHTML = `<div class="markdown-body">${html}</div>`;
    }

    function generateMockPlan(data) {
        // This function mimics the "Golden Sample" from the spec
        const date = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        
        return `
## 📅 ${date} Strategy
**Goal:** ${data.goal || "Optimize Academic Performance"}
**Total Focus Time:** ${data.hours || 4} hours

### 🌅 Session 1: Deep Work
**09:00 - 10:30** | **${data.subjects.split(',')[0] || "Core Subject"}** - Deep Dive
* Review core concepts and theory.
* Complete 3 complex practice problems.
* **Success Metric:** Explain the concept aloud without notes.

**10:30 - 10:45** | ⏸️ *Break: Hydrate & Reset*

### 🌇 Session 2: Application
**11:00 - 12:30** | **${data.subjects.split(',')[1] || "Secondary Subject"}** - Practice Flow
* Review previous mistakes.
* Apply concepts to new scenarios.

### 🏁 End-of-Day Review
* [ ] Core concepts mastered?
* [ ] Application exercises completed with >80% accuracy?

### Next Actions
1. Prepare materials for tomorrow's session.
2. Review weak points from today's practice.
`;
    }
});
