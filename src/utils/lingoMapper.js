const slangDictionary = {
    "80s": {
        "portable": "totally portable",
        "music": "rad tunes",
        "stereo": "boombox-quality",
        "classic": "retro-cool",
        "premium": "gnarly"
    },
    "90s": {
        "portable": "pocket-sized",
        "music": "phat beats",
        "stereo": "stereo surround",
        "classic": "fly",
        "premium": "dope"
    },
    "2000s": {
        "portable": "sleek",
        "music": "MP3-ready",
        "stereo": "wired",
        "classic": "iconic",
        "premium": "next-gen"
    },
    "Future": {
        "portable": "quantum-light",
        "music": "neuro-sync audio",
        "stereo": "holographic fidelity",
        "classic": "post-retro",
        "premium": "AI-enhanced"
    }
};

export function convertDescription(base, era) {
    let transformed = base;
    const slang = slangDictionary[era] || {};
    for (const word in slang) {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        transformed = transformed.replace(regex, slang[word]);
    }
    return transformed;
}