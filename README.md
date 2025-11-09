# 🌃 Neon Reign - Cyberpunk Card Game

<div align="center">

**A web-based card game inspired by Reigns, set in a dystopian cyberpunk future**

[Play Now](#-quick-start) • [Features](#-features) • [How to Play](#-how-to-play) • [Development](#-development)

</div>

---

## 📖 Overview

Welcome to **Neo Tokyo, 2077**. You are the newly appointed CEO of MegaCorp Industries, thrust into a world of corporate espionage, AI sentience, street riots, and moral ambiguity. Every decision you make will ripple through four critical resources that determine your survival.

Balance **Power**, **Credits**, **Technology**, and **Public Opinion** as you navigate through encounters with hackers, scientists, mercenaries, and activists. One wrong move could trigger a revolution, economic collapse, or technological singularity.

**How long can you maintain control?**

## ✨ Features

### 🎮 Gameplay
- **Intuitive Swipe Mechanics** - Drag cards left or right (works with mouse and touch)
- **Resource Management** - Balance four interconnected resources
- **25+ Unique Scenarios** - Each with meaningful consequences
- **Dynamic Difficulty** - Resources affect each other in complex ways
- **Endless Replayability** - Randomized card order, multiple strategies

### 🎨 Cyberpunk Aesthetics
- **Neon Color Palette** - Vibrant greens, pinks, and cyans
- **Glitch Effects** - Authentic retro-futuristic animations
- **Grid Background** - Classic cyberpunk visual motif
- **Glowing UI Elements** - Immersive neon atmosphere
- **Responsive Design** - Looks great on desktop and mobile

### 🤖 Narrative Themes
- AI rights and sentience
- Corporate warfare and mergers
- Neural implant technology
- Social inequality and revolution
- Environmental disasters
- Black market dealings
- Genetic augmentation ethics
- Digital surveillance and privacy

## 🚀 Quick Start

### Option 1: Direct Play (Easiest)
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Click "JACK IN" and start playing!

### Option 2: Local Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/yourusername/neon-reign.git
cd neon-reign

# Start a local server (Python 3)
python -m http.server 8000

# Or use Node.js
npx serve

# Open http://localhost:8000 in your browser
```

### Option 3: GitHub Pages
Fork this repository and enable GitHub Pages in settings to host your own version!

## 🎯 How to Play

### Controls
- **Mouse**: Click and drag cards left or right
- **Touch**: Swipe cards on mobile devices
- **Keyboard**: *(Not currently supported)*

### Objective
Survive as many days as possible by keeping all four resources balanced between 0 and 100.

### Resources Explained

| Resource | Icon | Description | Danger Zone |
|----------|------|-------------|-------------|
| **Power** | ⚡ | Your political influence and control over the city | Too low: Lose authority<br>Too high: Authoritarian collapse |
| **Credits** | 💰 | Financial resources and economic stability | Too low: Bankruptcy<br>Too high: Market destabilization |
| **Tech** | 🤖 | Technological advancement and innovation | Too low: Obsolescence<br>Too high: AI singularity |
| **People** | 👥 | Public opinion and social stability | Too low: Revolution<br>Too high: Anarchy |

### Game Over Conditions
The game ends when **any resource reaches 0 or 100**. Each extreme triggers a unique failure scenario:
- Power grid failures
- Economic collapse
- Technological singularity
- Social revolution
- And more...

### Strategy Tips
1. **Balance is everything** - No single resource is more important
2. **Think ahead** - Some choices have delayed consequences
3. **Read carefully** - Character titles hint at their motivations
4. **Expect the unexpected** - Not all outcomes are obvious
5. **Learn from failure** - Each game teaches you about resource interactions

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Advanced animations and effects
- **Vanilla JavaScript** - No frameworks or dependencies
- **Responsive Design** - Mobile-first approach
- **Touch Events API** - Native mobile support

**No build process required!** Just open and play.

## 📁 Project Structure

```
neon-reign/
├── index.html          # Main game structure
├── styles.css          # Cyberpunk styling and animations
├── game.js            # Game logic and card database
└── README.md          # This file
```

## 🎨 Customization

### Adding New Cards
Edit `game.js` and add new entries to the `cardDatabase` array:

```javascript
{
    id: 26,
    character: "🎭",  // Emoji avatar
    name: "Your Character",
    title: "Their Role",
    text: "The scenario description",
    leftChoice: "Reject option",
    rightChoice: "Accept option",
    leftEffect: { power: 0, credits: 0, tech: 0, people: 0 },
    rightEffect: { power: 0, credits: 0, tech: 0, people: 0 }
}
```

### Changing Colors
Modify the CSS variables in `styles.css`:
- Primary neon: `#00ff9f`
- Secondary neon: `#ff00ff`
- Accent: `#00ffff`
- Danger: `#ff0055`

### Adjusting Difficulty
In `game.js`, change the starting resource values:
```javascript
resources: {
    power: 50,    // Start with different values
    credits: 50,
    tech: 50,
    people: 50
}
```

## 🎮 Game Design

### Inspiration
- **Reigns** (2016) - Card-swiping mechanic and resource balancing
- **Cyberpunk 2020** - Tabletop RPG themes and world-building
- **Cyberpunk 2077** - Visual aesthetic and dystopian setting
- **Blade Runner** - Noir cyberpunk atmosphere
- **Neuromancer** - Classic cyberpunk literature

### Design Philosophy
- **Meaningful choices** - No "correct" answer, only trade-offs
- **Emergent narrative** - Your choices create a unique story
- **Accessibility** - Easy to learn, challenging to master
- **No grinding** - Pure decision-making, no filler
- **Respect player time** - Quick sessions, instant restart

## 🤝 Contributing

Contributions are welcome! Here are some ideas:
- Add more scenario cards
- Create new character types
- Implement sound effects
- Add achievements system
- Create difficulty modes
- Translate to other languages
- Improve mobile UX

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development

### Local Development
No build tools needed! Just edit the files and refresh your browser.

### Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test touch controls on mobile devices
- Verify resource calculations are balanced
- Check for game-breaking scenarios

### Future Enhancements
- [ ] Sound effects and music
- [ ] Achievement system
- [ ] Multiple difficulty levels
- [ ] Story mode with progression
- [ ] Character unlocks
- [ ] Statistics tracking
- [ ] Leaderboard integration
- [ ] Multiple themes/skins

## 📄 License

This project is licensed under the **MIT License** - feel free to use, modify, and distribute for personal or commercial purposes.

## 🙏 Acknowledgments

- Inspired by the brilliant game design of **Reigns** by Nerial
- Cyberpunk aesthetic inspired by **CD Projekt Red's Cyberpunk 2077**
- Classic cyberpunk literature by William Gibson, Philip K. Dick, and others
- The open-source community for inspiration and tools

## 📧 Contact

Questions? Suggestions? Found a bug?
- Open an issue on GitHub
- Submit a pull request
- Share your high score!

---

<div align="center">

**Made with 💚 for cyberpunk fans everywhere**

*Remember: In Neo Tokyo, every choice matters. Choose wisely.*

[⬆ Back to Top](#-neon-reign---cyberpunk-card-game)

</div>
