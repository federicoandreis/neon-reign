# Contributing to Neon Reign

Thank you for your interest in contributing to Neon Reign! This document provides guidelines and instructions for contributing.

## 🎯 Ways to Contribute

### 1. Report Bugs
- Use the GitHub Issues tab
- Describe the bug clearly
- Include steps to reproduce
- Mention your browser and OS

### 2. Suggest Features
- Open a GitHub Issue with the "enhancement" label
- Explain the feature and its benefits
- Discuss implementation ideas

### 3. Add Content
- **New scenario cards** - The easiest way to contribute!
- **Character types** - New roles and personalities
- **Game endings** - More unique failure scenarios

### 4. Improve Code
- Fix bugs
- Optimize performance
- Improve mobile experience
- Add accessibility features

### 5. Documentation
- Improve README
- Add code comments
- Create tutorials or guides
- Translate to other languages

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your machine
- A GitHub account

### Setup
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/neon-reign.git
   cd neon-reign
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes
5. Test thoroughly in multiple browsers

## 📝 Adding New Scenario Cards

The easiest way to contribute! Edit `game.js` and add to the `cardDatabase` array:

```javascript
{
    id: 26,  // Use the next available number
    character: "🎭",  // Choose an appropriate emoji
    name: "Character Name",
    title: "Their Role/Title",
    text: "The scenario description. Keep it concise but engaging.",
    leftChoice: "Brief left option",
    rightChoice: "Brief right option",
    leftEffect: { 
        power: 0,    // Range: -30 to +30 (typical)
        credits: 0, 
        tech: 0, 
        people: 0 
    },
    rightEffect: { 
        power: 0, 
        credits: 0, 
        tech: 0, 
        people: 0 
    }
}
```

### Card Design Guidelines
- **Theme**: Keep it cyberpunk (AI, corporations, tech, dystopia)
- **Balance**: Effects should range from -30 to +30 typically
- **Trade-offs**: No purely good or bad choices
- **Clarity**: Make choices clear but outcomes surprising
- **Length**: Keep text under 200 characters
- **Variety**: Mix different character types and dilemmas

### Example Scenarios
- Corporate decisions
- Technological ethics
- Social issues
- Environmental problems
- Security threats
- Economic choices
- Personal dilemmas

## 🎨 Code Style

### JavaScript
- Use `const` and `let`, avoid `var`
- Use camelCase for variables and functions
- Add comments for complex logic
- Keep functions small and focused

### CSS
- Use meaningful class names
- Group related styles together
- Comment major sections
- Maintain the cyberpunk aesthetic

### HTML
- Use semantic HTML5 elements
- Keep structure clean and organized
- Add ARIA labels for accessibility

## ✅ Testing Checklist

Before submitting a pull request:

- [ ] Test in Chrome, Firefox, and Safari
- [ ] Test on mobile devices (touch controls)
- [ ] Verify all resources update correctly
- [ ] Check that game over conditions work
- [ ] Ensure no console errors
- [ ] Test card swipe in both directions
- [ ] Verify new cards have balanced effects
- [ ] Check for typos and grammar
- [ ] Ensure code follows style guidelines

## 📤 Submitting Changes

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add: brief description of changes"
   ```

2. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Open a Pull Request on GitHub:
   - Use a clear title
   - Describe what you changed and why
   - Reference any related issues
   - Add screenshots if relevant

4. Wait for review:
   - Respond to feedback
   - Make requested changes
   - Be patient and respectful

## 📋 Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add: new scenario cards about AI ethics`
- `Fix: card swipe not working on iOS Safari`
- `Improve: mobile responsive design`
- `Update: README with better examples`
- `Refactor: simplify resource calculation logic`

## 🐛 Bug Reports

Include:
- **Browser and version** (e.g., Chrome 120)
- **Operating System** (e.g., Windows 11)
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)

## 💡 Feature Requests

Include:
- **Clear description** of the feature
- **Use case** - why is it needed?
- **Proposed implementation** (if you have ideas)
- **Alternatives considered**

## 🎮 Game Balance

When adding or modifying cards:
- Test multiple playthroughs
- Ensure no single strategy dominates
- Verify resources can reach both 0 and 100
- Check that games last 10-30 days typically
- Make sure all endings are reachable

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the project
- Show empathy towards others

## ❓ Questions?

- Open a GitHub Issue with the "question" label
- Check existing issues and pull requests
- Read the README thoroughly first

## 🎉 Recognition

Contributors will be:
- Listed in the README (if desired)
- Credited in release notes
- Thanked in the community

Thank you for contributing to Neon Reign! Every contribution, no matter how small, helps make the game better for everyone.

---

**Happy coding, and welcome to Neo Tokyo!** 🌃
