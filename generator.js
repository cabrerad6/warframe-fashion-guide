// ============================================
// FASHIONFRAME GUIDE — GENERATOR.JS
// Fashion Generator: themes, warframes, data
// ============================================

const FASHION_DATA = {
  dark: {
    label: 'DARK',
    warframes: ['Excalibur Umbra', 'Ash Prime', 'Inaros Prime', 'Nidus', 'Nezha Prime', 'Revenant', 'Stalker'],
    palettes: [
      [
        { hex: '#0d0d0d', name: 'Abyss Black' },
        { hex: '#1a0000', name: 'Blood Dark' },
        { hex: '#8b0000', name: 'Deep Crimson' },
        { hex: '#3a0000', name: 'Ember Shadow' },
      ],
      [
        { hex: '#080810', name: 'Void Night' },
        { hex: '#1a1a2e', name: 'Dark Indigo' },
        { hex: '#4a4a7a', name: 'Slate Violet' },
        { hex: '#0a0a14', name: 'Cosmic Dark' },
      ],
      [
        { hex: '#0a0a0a', name: 'Pure Black' },
        { hex: '#2d2d2d', name: 'Charcoal' },
        { hex: '#c0392b', name: 'Blood Red' },
        { hex: '#1c1c1c', name: 'Graphite' },
      ],
    ],
    armors: [
      ['Umbra Armor Set', 'Pakal Armor', 'Targis Prime Armor', 'Graxx Chest Plate'],
      ['Nightwatch Armor', 'Ash Koga Skin Armor', 'Karyst Armor Set', 'Zephyr Graxx Armor'],
      ['Revenant Vania Skin Armor', 'Nidus Phryke Armor', 'Obsidian Armor Set', 'Riven Armor'],
    ],
    syandanas: [
      ['Asa Syandana (minimal, clean)', 'Garuda Talons Syandana (threatening)'],
      ['Vel Noctis Syandana (dark, flowing)', 'Repala Syandana Prime (regal)'],
      ['Corpus Drakgoon Syandana (industrial)', 'Zenoriu Syandana (sleek)'],
    ],
    ephemeras: [
      'Bleeding Body Ephemera',
      'Smoking Body Ephemera (Black)',
      'Vengeful Flame Ephemera',
    ],
    tips: [
      'Use the Stalker palette for true void-blacks. Keep energy color deep crimson or orange to contrast the darkness.',
      'Never use white channels on dark builds — replace all whites with your darkest color. Energy should be the only pop.',
      'Dark builds shine most on Warframes with hard edges and angular armor. Smooth frames look too plain.',
    ],
  },

  gold: {
    label: 'GOLD',
    warframes: ['Rhino Prime', 'Mesa Prime', 'Nyx Prime', 'Chroma Prime', 'Gara Prime', 'Valkyr Prime'],
    palettes: [
      [
        { hex: '#ffd700', name: 'Bright Gold' },
        { hex: '#c8a400', name: 'Ancient Gold' },
        { hex: '#8b6914', name: 'Bronze Shadow' },
        { hex: '#1a1200', name: 'Dark Onyx' },
      ],
      [
        { hex: '#f4c300', name: 'Emperor Gold' },
        { hex: '#d4a843', name: 'Warm Amber' },
        { hex: '#7a4f10', name: 'Mahogany' },
        { hex: '#0a0800', name: 'Pitch Dark' },
      ],
      [
        { hex: '#ffe066', name: 'Pale Gold' },
        { hex: '#b8860b', name: 'Dark Goldenrod' },
        { hex: '#c0c0c0', name: 'Silver Trim' },
        { hex: '#111100', name: 'Deep Black' },
      ],
    ],
    armors: [
      ['Palatine Armor Set', 'Agathon Armor', 'Targis Prime Armor', 'Rubedo-Lined Chest Plate'],
      ['Mag Prime Armor', 'Frost Prime Armor', 'Loki Prime Armor', 'Nyx Prime Armor'],
      ['Avia Prime Armor', 'Iliac Armor', 'Meridian Armor', 'Phaedra Armor'],
    ],
    syandanas: [
      ['Regalia Syandana (noble sweep)', 'Odanata Prime Syandana (grand)'],
      ['Asa Prime Syandana (flowing)', 'Harkonar Wraith Syandana'],
      ['Fusilai Syandana (glowing gold)', 'Pandero Prime Syandana'],
    ],
    ephemeras: [
      'Eidolon Ephemera (crystal gold)',
      'Blazing Step Ephemera (fire trail)',
      'Vengeful Flame Ephemera',
    ],
    tips: [
      'Primed Chamber palette has the richest golds available. Set energy to warm golden white — it unifies the whole build.',
      'Contrast is everything in gold builds. Your darkest color should be pitch black so the gold truly pops.',
      'Prime Warframes have built-in gold trim. Use that to your advantage — color those default channels appropriately.',
    ],
  },

  neon: {
    label: 'NEON',
    warframes: ['Volt Prime', 'Nova Prime', 'Mag Prime', 'Wisp', 'Octavia Prime', 'Protea', 'Titania Prime'],
    palettes: [
      [
        { hex: '#00f5ff', name: 'Electric Cyan' },
        { hex: '#001a2e', name: 'Deep Navy' },
        { hex: '#7b00ff', name: 'Neon Violet' },
        { hex: '#00ff88', name: 'Matrix Green' },
      ],
      [
        { hex: '#ff00cc', name: 'Hot Magenta' },
        { hex: '#cc00ff', name: 'Electric Violet' },
        { hex: '#0f000f', name: 'Void Black' },
        { hex: '#ff80ff', name: 'Soft Neon' },
      ],
      [
        { hex: '#00ff41', name: 'Terminal Green' },
        { hex: '#ff9900', name: 'Neon Orange' },
        { hex: '#0a0a00', name: 'Dark Base' },
        { hex: '#ffff00', name: 'Acid Yellow' },
      ],
    ],
    armors: [
      ['Edo Prime Armor (angular, sharp)', 'Lith Armor (minimal, lets neon pop)', 'Machina Armor'],
      ['Saryn Orphid Armor (organic glow)', 'Octavia Diva Armor', 'Phorid Manifestation Chest'],
      ['Targis Armor (adds contrast)', 'Hysteria Armor', 'Spetsdolra Armor'],
    ],
    syandanas: [
      ['Igaro Syandana (glows with energy color)', 'Zariman Syandana'],
      ['Ceno Syandana (flows dramatically)', 'Opticor Syandana (tech glow)'],
      ['Imperator Syandana', 'Jotunheim Syandana (large scale)'],
    ],
    ephemeras: [
      'Jolt Ephemera (electric sparks)',
      'Shock Wave Ephemera (energy rings)',
      'Wisp Halo Ephemera (light aura)',
    ],
    tips: [
      'Neon builds need strong contrast. Your base colors must be near-black — the neons need darkness to glow against.',
      'Pick one dominant neon + one accent neon, not three competing ones. Too many bright colors cancel each other out.',
      'Energy color should match your dominant neon exactly so abilities reinforce the color story.',
    ],
  },

  royal: {
    label: 'ROYAL',
    warframes: ['Mag Prime', 'Nyx Prime', 'Mesa Prime', 'Gara Prime', 'Khora Prime', 'Garuda Prime'],
    palettes: [
      [
        { hex: '#6a0dad', name: 'Imperial Purple' },
        { hex: '#c0c0c0', name: 'Silver' },
        { hex: '#1a0040', name: 'Void Purple' },
        { hex: '#e0c8ff', name: 'Pale Lavender' },
      ],
      [
        { hex: '#b87333', name: 'Burnished Copper' },
        { hex: '#fffff0', name: 'Bone White' },
        { hex: '#003366', name: 'Midnight Blue' },
        { hex: '#8b4513', name: 'Saddle Brown' },
      ],
      [
        { hex: '#003153', name: 'Prussian Blue' },
        { hex: '#d4af37', name: 'Metallic Gold' },
        { hex: '#f8f8ff', name: 'Ghost White' },
        { hex: '#000030', name: 'Midnight' },
      ],
    ],
    armors: [
      ['Abalone Armor (crystalline)', 'Agathon Armor', 'Nyx Pasithea Skin Armor'],
      ['Khora Urushu Armor', 'Garuda Successor Armor', 'Avia Prime Armor'],
      ['Mag Pneuma Armor', 'Empress of Blades Armor', 'Repala Prime Armor'],
    ],
    syandanas: [
      ['Ova Syandana (dramatic long cloak)', 'Repala Prime Syandana'],
      ['Seraphim Syandana (angelic-royal)', 'Harkonar Wraith Syandana'],
      ['Kyuda Syandana (flowing silk)', 'Asa Prime Syandana'],
    ],
    ephemeras: [
      'Freezing Step Ephemera (ice crystals)',
      'Wisp Halo Ephemera (divine light)',
      'Blazing Step Ephemera (regal fire)',
    ],
    tips: [
      'Royal builds are defined by contrast and restraint. Pick two main regal colors max — purple+silver, blue+gold, or crimson+ivory.',
      'The Silver Grove palette has exceptional silvers for royal themes. Pair with any warm accent.',
      'Slim-silhouette Warframes (Mag, Nyx, Gara) convey royalty best. Bulky frames feel more like armored knights.',
    ],
  },

  angelic: {
    label: 'ANGELIC',
    warframes: ['Wisp', 'Trinity Prime', 'Nyx Prime', 'Titania Prime', 'Nezha Prime', 'Harrow Prime'],
    palettes: [
      [
        { hex: '#fffff0', name: 'Celestial Ivory' },
        { hex: '#ffd700', name: 'Halo Gold' },
        { hex: '#fff8e7', name: 'Warm White' },
        { hex: '#e8d5a3', name: 'Parchment' },
      ],
      [
        { hex: '#ffffff', name: 'Pure White' },
        { hex: '#aad4f5', name: 'Heaven Blue' },
        { hex: '#f0e8ff', name: 'Ethereal Violet' },
        { hex: '#d0d0d0', name: 'Soft Grey' },
      ],
      [
        { hex: '#fff0f5', name: 'Blush White' },
        { hex: '#ffb7c5', name: 'Soft Rose' },
        { hex: '#ffd700', name: 'Warm Gold' },
        { hex: '#ffe4e1', name: 'Misty Rose' },
      ],
    ],
    armors: [
      ['Wisp Empyrean Armor (divine)', 'Harrow Reliquary Armor (sacred)', 'Nyx Valesti Armor'],
      ['Trinity Pneuma Armor', 'Seraphim Armor Set', 'Titania Aria Armor'],
      ['Nezha Empyrean Armor', 'Lotus Armor', 'Leverian Armor Set'],
    ],
    syandanas: [
      ['Seraphim Syandana (literal wings)', 'Asa Prime Syandana (flowing light)'],
      ['Imperator Syandana (holy sweep)', 'Yamako Prime Syandana'],
      ['Sari Syandana (gentle flow)', 'Vala Sugatra Prime'],
    ],
    ephemeras: [
      'Wisp Halo Ephemera (golden light halo)',
      'Freezing Step Ephemera (crystalline trail)',
      'Fractalized Ephemera (light shards)',
    ],
    tips: [
      'Angelic builds require near-white everything. Replace every color with whites and creams except one accent — keep energy warm gold.',
      'Wisp is the queen of angelic builds — her floating animation and translucent hair make any white build look divine.',
      'Avoid grey — it makes angelic builds look dirty. Use pure whites and creams, and let gold trim prevent the look from feeling flat.',
    ],
  },

  infested: {
    label: 'INFESTED',
    warframes: ['Saryn Prime', 'Nidus', 'Nidus Prime', 'Garuda Prime', 'Inaros Prime', 'Nekros'],
    palettes: [
      [
        { hex: '#2d7a00', name: 'Toxic Green' },
        { hex: '#8b00ff', name: 'Rot Purple' },
        { hex: '#0a1400', name: 'Deep Rot' },
        { hex: '#a3ff00', name: 'Acid Pop' },
      ],
      [
        { hex: '#4a1500', name: 'Necrotic Brown' },
        { hex: '#8b0000', name: 'Blood Maroon' },
        { hex: '#3a0a00', name: 'Decay Black' },
        { hex: '#cc4a00', name: 'Bile Orange' },
      ],
      [
        { hex: '#1a3300', name: 'Deep Vine' },
        { hex: '#7fff00', name: 'Chartreuse' },
        { hex: '#4b0082', name: 'Deep Indigo' },
        { hex: '#00ff00', name: 'Bio Green' },
      ],
    ],
    armors: [
      ['Saryn Orphid Skin Armor (organic/fleshy)', 'Biomech Armor (exposed structure)', 'Hemlock Armor (thorned)'],
      ['Nidus Phryke Armor (infested spikes)', 'Garuda Successor Armor (claws)', 'Mire Armor'],
      ['Nekros Raknis Skin Armor', 'Misa Prime Thigh Armor', 'Pakal Chest Armor'],
    ],
    syandanas: [
      ['Vel Noctis Syandana (tentacle-like)', 'Biomech Syandana (perfect thematic match)'],
      ['Ceno Syandana (organic drape)', 'Abarimon Syandana (corrupted)'],
      ['Harkonar Syandana (jagged)', 'Opticor Syandana (corrupted tech)'],
    ],
    ephemeras: [
      'Bleeding Body Ephemera (organic drip)',
      'Vengeful Toxin Ephemera',
      'Corrupted Holokey Ephemera',
    ],
    tips: [
      'The Infested palette is mandatory — it has the most authentic biological hues. Combine dark necrotic browns with acid green pops.',
      'Set energy to acid green or sickly yellow-green. It should look like bioluminescence from decay.',
      'Infested builds thrive on contrast. Your base must be very dark — near black — so the toxic highlights feel virulent.',
    ],
  },
};

let selectedTheme = null;
let selectedWarframe = null;

// Check for URL param on load
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get('theme');
  if (theme && FASHION_DATA[theme]) {
    // Auto-select theme from URL
    setTimeout(() => {
      const btn = document.querySelector(`.theme-card.${theme}`);
      if (btn) selectTheme(theme, btn);
    }, 100);
  }
});

function selectTheme(theme, btn) {
  selectedTheme = theme;
  selectedWarframe = null;

  // Mark selected
  document.querySelectorAll('.theme-card').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  // Populate warframe step
  const data = FASHION_DATA[theme];
  const grid = document.getElementById('wf-select-grid');
  grid.innerHTML = '';

  data.warframes.forEach(wf => {
    const b = document.createElement('button');
    b.className = 'wf-btn';
    b.textContent = wf;
    b.onclick = () => selectWarframe(wf, b);
    grid.appendChild(b);
  });

  // Add random option
  const rndBtn = document.createElement('button');
  rndBtn.className = 'wf-btn';
  rndBtn.textContent = '🎲 Random';
  rndBtn.style.borderColor = '#ffd700';
  rndBtn.style.color = '#ffd700';
  rndBtn.onclick = () => {
    const wfs = data.warframes;
    const pick = wfs[Math.floor(Math.random() * wfs.length)];
    selectWarframe(pick, rndBtn);
  };
  grid.appendChild(rndBtn);

  document.getElementById('step-warframe').style.display = 'block';
  document.getElementById('gen-result').style.display = 'none';

  // Scroll to step 2
  document.getElementById('step-warframe').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectWarframe(wf, btn) {
  selectedWarframe = wf;

  document.querySelectorAll('.wf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  generateResult();
}

function generateResult() {
  if (!selectedTheme || !selectedWarframe) return;

  const data = FASHION_DATA[selectedTheme];

  // Random picks from arrays
  const palette = data.palettes[Math.floor(Math.random() * data.palettes.length)];
  const armors = data.armors[Math.floor(Math.random() * data.armors.length)];
  const syandanas = data.syandanas[Math.floor(Math.random() * data.syandanas.length)];
  const ephemera = data.ephemeras[Math.floor(Math.random() * data.ephemeras.length)];
  const tip = data.tips[Math.floor(Math.random() * data.tips.length)];

  // Title
  document.getElementById('result-title').textContent = `${selectedWarframe.toUpperCase()} — ${data.label} BUILD`;

  // Badge
  const badge = document.getElementById('result-badge');
  badge.className = `result-badge modal-theme-badge ${selectedTheme}`;
  badge.textContent = data.label + ' THEME';

  // Swatches
  const swatchContainer = document.getElementById('result-swatches');
  swatchContainer.innerHTML = '';
  palette.forEach(color => {
    const item = document.createElement('div');
    item.className = 'result-swatch-item';
    item.innerHTML = `
      <span class="swatch lg" style="background:${color.hex}; border: 1px solid rgba(255,255,255,0.1)"></span>
      <span>${color.name} <span style="opacity:0.5; font-size:0.8rem">${color.hex}</span></span>
    `;
    swatchContainer.appendChild(item);
  });

  // Armor
  const armorList = document.getElementById('result-armor');
  armorList.innerHTML = '';
  armors.forEach(a => {
    const li = document.createElement('li');
    li.textContent = a;
    armorList.appendChild(li);
  });

  // Syandana
  const syndList = document.getElementById('result-syandana');
  syndList.innerHTML = '';
  syandanas.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    syndList.appendChild(li);
  });

  // Ephemera
  const ephemeraList = document.getElementById('result-ephemera');
  ephemeraList.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = ephemera;
  ephemeraList.appendChild(li);

  // Tip
  document.getElementById('result-tip').textContent = tip;

  // Show result
  const resultEl = document.getElementById('gen-result');
  resultEl.style.display = 'block';
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function regenerate() {
  if (selectedTheme && selectedWarframe) {
    generateResult();
  }
}
