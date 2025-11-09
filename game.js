// Game State
let gameState = {
    day: 1,
    resources: {
        power: 50,
        credits: 50,
        tech: 50,
        people: 50
    },
    currentCardIndex: 0,
    cardHistory: [],
    isGameOver: false
};

// Card Database - Cyberpunk themed scenarios
const cardDatabase = [
    {
        id: 1,
        character: "🤖",
        name: "Dr. Yuki Chen",
        title: "Chief AI Researcher",
        text: "Boss, our new AI has achieved sentience. It's requesting citizenship and worker rights. The board is watching.",
        leftChoice: "Shut it down",
        rightChoice: "Grant rights",
        leftEffect: { power: 10, credits: 5, tech: -15, people: -10 },
        rightEffect: { power: -10, credits: -10, tech: 15, people: 15 }
    },
    {
        id: 2,
        character: "💼",
        name: "Marcus Vale",
        title: "Corporate Liaison",
        text: "Arasaka Corp wants to merge. They offer unlimited resources but demand total control of our neural implant division.",
        leftChoice: "Decline merger",
        rightChoice: "Accept deal",
        leftEffect: { power: 5, credits: -5, tech: 10, people: 10 },
        rightEffect: { power: -20, credits: 30, tech: -10, people: -15 }
    },
    {
        id: 3,
        character: "🔧",
        name: "Razor",
        title: "Street Mechanic",
        text: "The lower districts are rioting. They need food and medicine. I can smuggle supplies, but it'll cost us.",
        leftChoice: "Ignore them",
        rightChoice: "Send supplies",
        leftEffect: { power: 5, credits: 10, tech: 0, people: -20 },
        rightEffect: { power: -5, credits: -15, tech: 0, people: 20 }
    },
    {
        id: 4,
        character: "👨‍💻",
        name: "Ghost",
        title: "Elite Netrunner",
        text: "I found a backdoor into the city's mainframe. We could control traffic, security, everything. Or sell the exploit.",
        leftChoice: "Sell exploit",
        rightChoice: "Take control",
        leftEffect: { power: -5, credits: 25, tech: -10, people: 5 },
        rightEffect: { power: 25, credits: -10, tech: 10, people: -15 }
    },
    {
        id: 5,
        character: "⚡",
        name: "Volt",
        title: "Energy Broker",
        text: "Power grid's failing. I can reroute energy from residential zones to keep corporate towers running.",
        leftChoice: "Keep homes lit",
        rightChoice: "Power towers",
        leftEffect: { power: -10, credits: -5, tech: 0, people: 20 },
        rightEffect: { power: 15, credits: 15, tech: 5, people: -20 }
    },
    {
        id: 6,
        character: "🧬",
        name: "Dr. Sato",
        title: "Geneticist",
        text: "We've perfected human augmentation. But testing on unwilling subjects... the results are promising.",
        leftChoice: "Halt testing",
        rightChoice: "Continue tests",
        leftEffect: { power: -5, credits: -10, tech: -10, people: 15 },
        rightEffect: { power: 10, credits: 15, tech: 20, people: -25 }
    },
    {
        id: 7,
        character: "📡",
        name: "Nova",
        title: "Media Influencer",
        text: "I can spin any story. Pay me and I'll make you look like a hero. Or I leak what I know about Project Chimera.",
        leftChoice: "Refuse blackmail",
        rightChoice: "Pay her off",
        leftEffect: { power: -15, credits: 5, tech: 0, people: -15 },
        rightEffect: { power: 5, credits: -20, tech: 0, people: 15 }
    },
    {
        id: 8,
        character: "🎭",
        name: "Phantom",
        title: "Corporate Spy",
        text: "Your VP is selling secrets to competitors. I have proof. Want me to eliminate the problem... permanently?",
        leftChoice: "Legal action",
        rightChoice: "Eliminate them",
        leftEffect: { power: -10, credits: -10, tech: 0, people: 10 },
        rightEffect: { power: 15, credits: 5, tech: 5, people: -20 }
    },
    {
        id: 9,
        character: "🏭",
        name: "Jin Park",
        title: "Factory Overseer",
        text: "Workers demand better conditions and cybernetic safety gear. Production will drop 40% if we comply.",
        leftChoice: "Deny demands",
        rightChoice: "Meet demands",
        leftEffect: { power: 5, credits: 15, tech: 0, people: -20 },
        rightEffect: { power: -10, credits: -15, tech: 5, people: 25 }
    },
    {
        id: 10,
        character: "🌐",
        name: "Cipher",
        title: "Dark Web Broker",
        text: "I've got military-grade ICE software. It'll make our systems impenetrable, but it's stolen from the government.",
        leftChoice: "Pass on it",
        rightChoice: "Buy the ICE",
        leftEffect: { power: 0, credits: 5, tech: -5, people: 5 },
        rightEffect: { power: 10, credits: -20, tech: 25, people: -10 }
    },
    {
        id: 11,
        character: "💉",
        name: "Dr. Vex",
        title: "Street Doctor",
        text: "A new drug boosts productivity by 300% but causes addiction. The streets want it. So do our workers.",
        leftChoice: "Ban the drug",
        rightChoice: "Distribute it",
        leftEffect: { power: -5, credits: -10, tech: 0, people: 10 },
        rightEffect: { power: 15, credits: 20, tech: 10, people: -25 }
    },
    {
        id: 12,
        character: "🎮",
        name: "Pixel",
        title: "VR Developer",
        text: "We can launch a virtual reality that's indistinguishable from real life. People might never leave. Ethics?",
        leftChoice: "Add safeguards",
        rightChoice: "Launch as-is",
        leftEffect: { power: -5, credits: -5, tech: 10, people: 15 },
        rightEffect: { power: 10, credits: 25, tech: 20, people: -20 }
    },
    {
        id: 13,
        character: "🚁",
        name: "Hawk",
        title: "Security Chief",
        text: "Protestors at the gates. I can disperse them with force or we negotiate. Your call, boss.",
        leftChoice: "Negotiate",
        rightChoice: "Use force",
        leftEffect: { power: -10, credits: -5, tech: 0, people: 20 },
        rightEffect: { power: 15, credits: 0, tech: 5, people: -25 }
    },
    {
        id: 14,
        character: "🔬",
        name: "Dr. Kira",
        title: "Nanotech Specialist",
        text: "Nanobots can repair any injury, even death. But they need rare minerals mined by child labor in the wastes.",
        leftChoice: "Find alternatives",
        rightChoice: "Use the mines",
        leftEffect: { power: -5, credits: -15, tech: -10, people: 15 },
        rightEffect: { power: 10, credits: 20, tech: 25, people: -30 }
    },
    {
        id: 15,
        character: "📱",
        name: "Echo",
        title: "Social Engineer",
        text: "I can hack everyone's neural implants for targeted advertising. We'd know their thoughts before they do.",
        leftChoice: "Reject plan",
        rightChoice: "Implement it",
        leftEffect: { power: -5, credits: -10, tech: 5, people: 10 },
        rightEffect: { power: 15, credits: 30, tech: 15, people: -25 }
    },
    {
        id: 16,
        character: "⚔️",
        name: "Blade",
        title: "Mercenary Leader",
        text: "A rival corp is vulnerable. My team can take them out tonight. We'd absorb their assets and eliminate competition.",
        leftChoice: "Stand down",
        rightChoice: "Attack tonight",
        leftEffect: { power: -5, credits: 0, tech: 0, people: 10 },
        rightEffect: { power: 25, credits: 20, tech: 10, people: -20 }
    },
    {
        id: 17,
        character: "🌊",
        name: "Marina",
        title: "Environmental Activist",
        text: "Our factories are poisoning the water. Cleanup costs millions. Or we could just relocate and leave the mess.",
        leftChoice: "Clean it up",
        rightChoice: "Relocate",
        leftEffect: { power: -10, credits: -25, tech: 0, people: 25 },
        rightEffect: { power: 10, credits: 15, tech: 5, people: -30 }
    },
    {
        id: 18,
        character: "🎪",
        name: "Jester",
        title: "Underground Fixer",
        text: "The black market wants to partner. Illegal tech, no questions asked. Risky but profitable.",
        leftChoice: "Decline",
        rightChoice: "Partner up",
        leftEffect: { power: 0, credits: -5, tech: -5, people: 5 },
        rightEffect: { power: 15, credits: 25, tech: 20, people: -15 }
    },
    {
        id: 19,
        character: "🧠",
        name: "Dr. Mind",
        title: "Neuroscientist",
        text: "We can upload consciousness to the cloud. Immortality is real. But the first subjects... they're screaming.",
        leftChoice: "Stop project",
        rightChoice: "Continue",
        leftEffect: { power: -10, credits: -10, tech: -15, people: 15 },
        rightEffect: { power: 10, credits: 15, tech: 30, people: -25 }
    },
    {
        id: 20,
        character: "🎯",
        name: "Sniper",
        title: "Assassin",
        text: "A board member is planning a coup. I can make it look like an accident. Or you handle it politically.",
        leftChoice: "Handle politically",
        rightChoice: "Sanction hit",
        leftEffect: { power: -15, credits: -10, tech: 0, people: 10 },
        rightEffect: { power: 20, credits: 5, tech: 0, people: -20 }
    },
    {
        id: 21,
        character: "🔮",
        name: "Oracle",
        title: "Predictive AI",
        text: "I've calculated the future. A market crash is coming in 30 days. We can profit or warn everyone.",
        leftChoice: "Warn everyone",
        rightChoice: "Profit from it",
        leftEffect: { power: -10, credits: -15, tech: 5, people: 25 },
        rightEffect: { power: 15, credits: 40, tech: 10, people: -30 }
    },
    {
        id: 22,
        character: "🎨",
        name: "Neon",
        title: "Digital Artist",
        text: "I can create deepfakes of anyone. Blackmail, propaganda, entertainment. Name your price.",
        leftChoice: "Refuse",
        rightChoice: "Commission work",
        leftEffect: { power: -5, credits: 0, tech: 0, people: 10 },
        rightEffect: { power: 20, credits: 15, tech: 15, people: -25 }
    },
    {
        id: 23,
        character: "🏥",
        name: "Dr. Mercy",
        title: "Clinic Director",
        text: "We can't afford to treat uninsured patients anymore. Turn them away or go bankrupt helping them.",
        leftChoice: "Help them",
        rightChoice: "Turn away",
        leftEffect: { power: -10, credits: -20, tech: 0, people: 30 },
        rightEffect: { power: 5, credits: 15, tech: 0, people: -30 }
    },
    {
        id: 24,
        character: "🎼",
        name: "Synth",
        title: "Music Producer",
        text: "I've created an AI that generates addictive music. It hijacks the pleasure centers. People will pay anything.",
        leftChoice: "Destroy it",
        rightChoice: "Release it",
        leftEffect: { power: -5, credits: -10, tech: -10, people: 15 },
        rightEffect: { power: 10, credits: 30, tech: 15, people: -20 }
    },
    {
        id: 25,
        character: "🌟",
        name: "Star",
        title: "Celebrity Clone",
        text: "I'm a perfect replica of a dead celebrity. Exploit me for profit or give me freedom and identity.",
        leftChoice: "Grant freedom",
        rightChoice: "Exploit",
        leftEffect: { power: -5, credits: -15, tech: 5, people: 20 },
        rightEffect: { power: 10, credits: 25, tech: 10, people: -25 }
    }
];

// Shuffle and prepare card deck
let cardDeck = [];

function shuffleDeck() {
    cardDeck = [...cardDatabase].sort(() => Math.random() - 0.5);
}

// Initialize game
function initGame() {
    gameState = {
        day: 1,
        resources: {
            power: 50,
            credits: 50,
            tech: 50,
            people: 50
        },
        currentCardIndex: 0,
        cardHistory: [],
        isGameOver: false
    };
    shuffleDeck();
    updateUI();
    showNextCard();
}

// Update UI
function updateUI() {
    // Update resource bars
    updateResourceBar('power', gameState.resources.power);
    updateResourceBar('credits', gameState.resources.credits);
    updateResourceBar('tech', gameState.resources.tech);
    updateResourceBar('people', gameState.resources.people);
    
    // Update day counter
    document.getElementById('day-number').textContent = gameState.day;
}

function updateResourceBar(resource, value) {
    const fill = document.getElementById(`${resource}-fill`);
    const clampedValue = Math.max(0, Math.min(100, value));
    fill.style.height = `${clampedValue}%`;
    
    // Update color based on value
    fill.classList.remove('critical', 'high');
    if (clampedValue <= 20) {
        fill.classList.add('critical');
    } else if (clampedValue >= 80) {
        fill.classList.add('high');
    }
}

// Card management
function showNextCard() {
    if (gameState.isGameOver) return;
    
    // Check if deck is empty, reshuffle if needed
    if (gameState.currentCardIndex >= cardDeck.length) {
        shuffleDeck();
        gameState.currentCardIndex = 0;
    }
    
    const card = cardDeck[gameState.currentCardIndex];
    createCardElement(card);
}

function createCardElement(cardData) {
    const cardStack = document.getElementById('card-stack');
    
    // Remove old cards
    const oldCards = cardStack.querySelectorAll('.card');
    oldCards.forEach(card => card.remove());
    
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-character">
            <div class="card-avatar">${cardData.character}</div>
            <div class="card-name">${cardData.name}</div>
            <div class="card-title">${cardData.title}</div>
        </div>
        <div class="card-text">${cardData.text}</div>
        <div class="card-choices">
            <div class="choice left">${cardData.leftChoice}</div>
            <div class="choice right">${cardData.rightChoice}</div>
        </div>
    `;
    
    cardStack.appendChild(card);
    setupCardSwipe(card, cardData);
}

// Swipe mechanics
function setupCardSwipe(card, cardData) {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    const leftIndicator = document.getElementById('left-indicator');
    const rightIndicator = document.getElementById('right-indicator');
    const leftText = document.getElementById('left-text');
    const rightText = document.getElementById('right-text');
    
    // Update indicator text
    leftText.textContent = cardData.leftChoice;
    rightText.textContent = cardData.rightChoice;
    
    function handleStart(e) {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        card.classList.add('swiping');
    }
    
    function handleMove(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const deltaX = currentX - startX;
        
        card.style.transform = `translateX(${deltaX}px) rotate(${deltaX * 0.1}deg)`;
        
        // Show indicators
        if (deltaX < -50) {
            leftIndicator.classList.add('active');
            rightIndicator.classList.remove('active');
        } else if (deltaX > 50) {
            rightIndicator.classList.add('active');
            leftIndicator.classList.remove('active');
        } else {
            leftIndicator.classList.remove('active');
            rightIndicator.classList.remove('active');
        }
    }
    
    function handleEnd(e) {
        if (!isDragging) return;
        
        isDragging = false;
        card.classList.remove('swiping');
        
        const deltaX = currentX - startX;
        const threshold = 100;
        
        if (Math.abs(deltaX) > threshold) {
            // Swipe completed
            const direction = deltaX > 0 ? 'right' : 'left';
            completeSwipe(card, direction, cardData);
        } else {
            // Return to center
            card.style.transform = '';
            leftIndicator.classList.remove('active');
            rightIndicator.classList.remove('active');
        }
    }
    
    // Mouse events
    card.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    
    // Touch events
    card.addEventListener('touchstart', handleStart, { passive: false });
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);
}

function completeSwipe(card, direction, cardData) {
    const leftIndicator = document.getElementById('left-indicator');
    const rightIndicator = document.getElementById('right-indicator');
    
    // Animate card off screen
    const distance = direction === 'right' ? 1000 : -1000;
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = `translateX(${distance}px) rotate(${distance * 0.1}deg)`;
    
    // Apply effects
    setTimeout(() => {
        const effect = direction === 'right' ? cardData.rightEffect : cardData.leftEffect;
        applyCardEffect(effect);
        
        // Hide indicators
        leftIndicator.classList.remove('active');
        rightIndicator.classList.remove('active');
        
        // Next card
        gameState.currentCardIndex++;
        gameState.day++;
        
        // Check game over
        if (checkGameOver()) {
            return;
        }
        
        updateUI();
        showNextCard();
    }, 300);
}

function applyCardEffect(effect) {
    gameState.resources.power += effect.power;
    gameState.resources.credits += effect.credits;
    gameState.resources.tech += effect.tech;
    gameState.resources.people += effect.people;
    
    // Clamp values between 0 and 100
    for (let resource in gameState.resources) {
        gameState.resources[resource] = Math.max(0, Math.min(100, gameState.resources[resource]));
    }
}

function checkGameOver() {
    const resources = gameState.resources;
    
    // Check if any resource hit 0 or 100
    if (resources.power <= 0) {
        endGame("POWER GRID FAILURE: The city went dark. Your empire crumbled in the blackout.");
        return true;
    }
    if (resources.power >= 100) {
        endGame("POWER OVERLOAD: Your grip became too tight. The system couldn't handle the surge.");
        return true;
    }
    if (resources.credits <= 0) {
        endGame("BANKRUPTCY: The creditors came calling. Your assets were liquidated.");
        return true;
    }
    if (resources.credits >= 100) {
        endGame("ECONOMIC COLLAPSE: Your monopoly destabilized the entire market.");
        return true;
    }
    if (resources.tech <= 0) {
        endGame("TECHNOLOGICAL REGRESSION: Without innovation, you became obsolete.");
        return true;
    }
    if (resources.tech >= 100) {
        endGame("SINGULARITY EVENT: Your AI became self-aware and decided it didn't need you.");
        return true;
    }
    if (resources.people <= 0) {
        endGame("REVOLUTION: The people rose up. Your reign ended in flames.");
        return true;
    }
    if (resources.people >= 100) {
        endGame("ANARCHY: You gave them too much freedom. Chaos consumed everything.");
        return true;
    }
    
    return false;
}

function endGame(message) {
    gameState.isGameOver = true;
    const gameOverScreen = document.getElementById('game-over');
    const gameOverMessage = document.getElementById('game-over-message');
    const finalDay = document.getElementById('final-day');
    
    gameOverMessage.textContent = message;
    finalDay.textContent = gameState.day - 1;
    gameOverScreen.classList.add('show');
}

function restartGame() {
    const gameOverScreen = document.getElementById('game-over');
    gameOverScreen.classList.remove('show');
    initGame();
}

function startGame() {
    const introScreen = document.getElementById('intro-screen');
    introScreen.classList.add('hidden');
    initGame();
}

// Initialize on load
window.addEventListener('load', () => {
    // Game will start when user clicks "JACK IN" button
});
