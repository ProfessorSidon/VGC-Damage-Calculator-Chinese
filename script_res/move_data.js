var MOVES_RBY = {
    'Struggle': {
        bp: 50,
        type: 'Normal',
        category: 'Physical'
    },
    '(No Move)': {
        bp: 0,
        type: 'Normal',
        category: 'Physical'
    },
    'Acid': {
        bp: 40,
        type: 'Poison'
    },
    'Bind': {
        bp: 15,
        type: 'Normal'
    },
    'Blizzard': {
        bp: 120,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Body Slam': {
        bp: 85,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'BubbleBeam': {
        bp: 65,
        type: 'Water'
    },
    'Clamp': {
        bp: 35,
        type: 'Water'
    },
    'Crabhammer': {
        bp: 90,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: true
    },
    'Dig': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        makesContact: true,
    },
    'Double Kick': {
        bp: 30,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true
    },
    'Double-Edge': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Drill Peck': {
        bp: 80,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Earthquake': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        isSpread: true
    },
    'Explosion': {
        bp: 170,
        type: 'Normal',
        category: 'Physical',
        isSpread: true
    },
    'Fire Blast': {
        bp: 120,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Fire Punch': {
        bp: 75,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Fire Spin': {
        bp: 15,
        type: 'Fire'
    },
    'Flamethrower': {
        bp: 95,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Hi Jump Kick': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Hydro Pump': {
        bp: 120,
        type: 'Water',
        category: 'Special'
    },
    'Hyper Beam': {
        bp: 150,
        type: 'Normal',
        category: 'Special'
    },
    'Ice Beam': {
        bp: 95,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Ice Punch': {
        bp: 75,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Mega Drain': {
        bp: 40,
        type: 'Grass'
    },
    'Night Shade': {
        bp: 100,
        type: 'Ghost',
        category: 'Special'
    },
    'Pin Missile': {
        bp: 14,
        type: 'Bug',
        category: 'Physical',
        isMultiHit: true
    },
    'Psychic': {
        bp: 90,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Quick Attack': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isPriority: true,
    },
    'Razor Leaf': {
        bp: 55,
        type: 'Grass',
        category: 'Special',
        alwaysCrit: true
    },
    'Rock Slide': {
        bp: 75,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Seismic Toss': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Selfdestruct': {
        bp: 130,
        type: 'Normal',
        category: 'Physical',
        isSpread: true
    },
    'Sky Attack': {
        bp: 140,
        type: 'Flying',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Slash': {
        bp: 70,
        type: 'Normal',
        alwaysCrit: true
    },
    'Sludge': {
        bp: 65,
        type: 'Poison'
    },
    'Submission': {
        bp: 80,
        type: 'Fighting'
    },
    'Surf': {
        bp: 95,
        type: 'Water',
        category: 'Special',
        isSpread: true
    },
    'Tackle': {
        bp: 35,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Thunder': {
        bp: 120,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'ThunderPunch': {
        bp: 75,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Thunderbolt': {
        bp: 95,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Twineedle': {
        bp: 25,
        type: 'Bug',
        isTwoHit: true
    },
    'Wrap': {
        bp: 15,
        type: 'Normal'
    },
    'Swords Dance': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Whirlwind': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Tail Whip': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Leer': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Growl': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Roar': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Sing': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Disable': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Mist': {
        
        type: 'Ice',
        category: 'Status'
    },
    'Leech Seed': {
        
        type: 'Grass',
        category: 'Status'
    },
    'Growth': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Stun Spore': {
        
        type: 'Grass',
        category: 'Status'
    },
    'Sleep Powder': {
        
        type: 'Grass',
        category: 'Status'
    },
    'String Shot': {
        
        type: 'Bug',
        category: 'Status'
    },
    'Thunder Wave': {
        
        type: 'Electric',
        category: 'Status'
    },
    'Toxic': {
        
        type: 'Poison',
        category: 'Status'
    },
    'Hypnosis': {
        
        type: 'Psychic',
        category: 'Status'
    },
    'Agility': {
        
        type: 'Psychic',
        category: 'Status'
    },
    'Teleport': {
        
        type: 'Psychic',
        category: 'Status'
    },
    'Screech': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Double Team': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Recover': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Minimize': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Barrier': {
        
        type: 'Psychic',
        category: 'Status'
    },
    'Light Screen': {
        
        type: 'Psychic',
        category: 'Status'
    },
    'Haze': {
        
        type: 'Ice',
        category: 'Status'
    },
    'Reflect': {
        
        type: 'Psychic',
        category: 'Status'
    },
    'Focus Energy': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Amnesia': {
        
        type: 'Psychic',
        category: 'Status'
    },
    'Soft-Boiled': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Glare': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Poison Gas': {
        
        type: 'Poison',
        category: 'Status'
    },
    'Lovely Kiss': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Transform': {
        
        type: 'Normal',
        category: 'Status'
    },
    'Spore': {
        
        type: 'Grass',
        category: 'Status'
    },
    'Acid Armor': {
        
        type: 'Poison',
        category: 'Status'
    },
    'Rest': {
        
        type: 'Psychic',
        category: 'Status'
    },
    'Conversion': {

        type: 'Normal',
        category: 'Status'
    },
    'Substitute': {

        type: 'Normal',
        category: 'Status'
    },
};

var MOVES_GSC = $.extend(true, {}, MOVES_RBY, {
    'Struggle': {
        type: 'Typeless'
    },
    'Aeroblast': {
        bp: 100,
        type: 'Flying',
        category: 'Special'
    },
    'AncientPower': {
        bp: 60,
        type: 'Rock',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Bite': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Crabhammer': { alwaysCrit: false },
    'Cross Chop': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Crunch': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Dig': {
        bp: 60,
    },
    'Double-Edge': { bp: 120 },
    'DynamicPunch': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Explosion': { bp: 250 },
    'ExtremeSpeed': {
        bp: 80,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isPriority: true,
    },
    'Faint Attack': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Flail': {
        bp: 1,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Flame Wheel': {
        bp: 60,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Frustration': {
        bp: 102,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Giga Drain': {
        bp: 60,
        type: 'Grass',
        category: 'Special'
    },
    'Headbutt': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Hidden Power Bug': {
        bp: 70,
        type: 'Bug',
        category: 'Special'
    },
    'Hidden Power Dark': {
        bp: 70,
        type: 'Dark',
        category: 'Special'
    },
    'Hidden Power Dragon': {
        bp: 70,
        type: 'Dragon',
        category: 'Special'
    },
    'Hidden Power Electric': {
        bp: 70,
        type: 'Electric',
        category: 'Special'
    },
    'Hidden Power Fighting': {
        bp: 70,
        type: 'Fighting',
        category: 'Special'
    },
    'Hidden Power Fire': {
        bp: 70,
        type: 'Fire',
        category: 'Special'
    },
    'Hidden Power Flying': {
        bp: 70,
        type: 'Flying',
        category: 'Special'
    },
    'Hidden Power Ghost': {
        bp: 70,
        type: 'Ghost',
        category: 'Special'
    },
    'Hidden Power Grass': {
        bp: 70,
        type: 'Grass',
        category: 'Special'
    },
    'Hidden Power Ground': {
        bp: 70,
        type: 'Ground',
        category: 'Special'
    },
    'Hidden Power Ice': {
        bp: 70,
        type: 'Ice',
        category: 'Special'
    },
    'Hidden Power Poison': {
        bp: 70,
        type: 'Poison',
        category: 'Special'
    },
    'Hidden Power Psychic': {
        bp: 70,
        type: 'Psychic',
        category: 'Special'
    },
    'Hidden Power Rock': {
        bp: 70,
        type: 'Rock',
        category: 'Special'
    },
    'Hidden Power Steel': {
        bp: 70,
        type: 'Steel',
        category: 'Special'
    },
    'Hidden Power Water': {
        bp: 70,
        type: 'Water',
        category: 'Special'
    },
    'Icy Wind': {
        bp: 55,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Iron Tail': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Mach Punch': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        isPriority: true,
    },
    'Megahorn': {
        bp: 120,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Pursuit': {
        bp: 40,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Rapid Spin': {
        bp: 20,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Razor Leaf': { alwaysCrit: false },
    'Return': {
        bp: 102,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Reversal': {
        bp: 1,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Sacred Fire': {
        bp: 100,
        type: 'Fire',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Selfdestruct': { bp: 200 },
    'Shadow Ball': {
        bp: 80,
        type: 'Ghost',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Sludge Bomb': {
        bp: 90,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'SolarBeam': {
        bp: 120,
        type: 'Grass',
        category: 'Special'
    },
    'Steel Wing': {
        bp: 70,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Thief': {
        bp: 40,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Zap Cannon': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Pain Split': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    'Mind Reader': {

        type: 'Normal',
        category: 'Status'
    },
    'Curse': {

        type: 'Ghost',
        category: 'Status'
    },
    'Cotton Spore': {

        type: 'Grass',
        category: 'Status'
    },
    'Protect': {

        type: 'Normal',
        category: 'Status'
    },
    'Scary Face': {

        type: 'Normal',
        category: 'Status'
    },
    'Belly Drum': {

        type: 'Normal',
        category: 'Status'
    },
    'Spikes': {

        type: 'Ground',
        category: 'Status'
    },
    'Foresight': {

        type: 'Normal',
        category: 'Status'
    },
    'Desting Bond': {

        type: 'Ghost',
        category: 'Status'
    },
    'Perish Song': {

        type: 'Normal',
        category: 'Status'
    },
    'Detect': {

        type: 'Fighting',
        category: 'Status'
    },
    'Lock-On': {

        type: 'Normal',
        category: 'Status'
    },
    'Sandstorm': {

        type: 'Rock',
        category: 'Status'
    },
    'Endure': {

        type: 'Normal',
        category: 'Status'
    },
    'Charm': {

        type: 'Normal',
        category: 'Status'
    },
    'Swagger': {

        type: 'Normal',
        category: 'Status'
    },
    'Milk Drink': {

        type: 'Normal',
        category: 'Status'
    },
    'Sleep Talk': {

        type: 'Normal',
        category: 'Status'
    },
    'Heal Bell': {

        type: 'Normal',
        category: 'Status'
    },
    'Safeguard': {

        type: 'Normal',
        category: 'Status'
    },
    'Baton Pass': {

        type: 'Normal',
        category: 'Status'
    },
    'Encore': {

        type: 'Normal',
        category: 'Status'
    },
    'Sweet Scent': {

        type: 'Normal',
        category: 'Status'
    },
    'Morning Sun': {

        type: 'Normal',
        category: 'Status'
    },
    'Synthesis': {

        type: 'Grass',
        category: 'Status'
    },
    'Moonlight': {

        type: 'Normal',
        category: 'Status'
    },
    'Rain Dance': {

        type: 'Water',
        category: 'Status'
    },
    'Sunny Day': {

        type: 'Fire',
        category: 'Status'
    },
    'Psych Up': {

        type: 'Normal',
        category: 'Status'
    },
});

delete MOVES_GSC['Acid'];
delete MOVES_GSC['Bind'];
delete MOVES_GSC['Clamp'];
delete MOVES_GSC['Fire Spin'];
delete MOVES_GSC['Mega Drain'];
delete MOVES_GSC['Slash'];
delete MOVES_GSC['Sludge'];
delete MOVES_GSC['Wrap'];

var MOVES_ADV = $.extend(true, {}, MOVES_GSC, {
    'Aerial Ace': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Air Cutter': {
        bp: 55,
        type: 'Flying',
        category: 'Special',
        isSpread: true
    },
    'Blast Burn':{
        bp: 150,
        type: 'Fire',
        category: 'Special',
    },
    'Blaze Kick': {
        bp: 85,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Bonemerang': {
        bp: 50,
        type: 'Ground',
        category: 'Physical',
        isTwoHit: true
    },
    'Bounce': {
        bp: 85,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Brick Break': {
        bp: 75,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        ignoreScreens: true,
    },
    'Doom Desire': {
        bp: 120,
        type: 'Steel',
        category: 'Special'
    },
    'Dragon Claw': {
        bp: 80,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true
    },
    'Eruption': {
        bp: 150,
        type: 'Fire',
        category: 'Special',
        isSpread: true
    },
    'Extrasensory': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Facade': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Fake Out': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPriority: true,
    },
    'Focus Punch': {
        bp: 150,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Heat Wave': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Knock Off': {
        bp: 20,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Leaf Blade': {
        bp: 70,
        type: 'Grass',
        category: 'Physical',
        makesContact: true
    },
    'Low Kick': {
        bp: 1,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Luster Purge': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Meteor Mash': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Muddy Water': {
        bp: 95,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Mud Shot': {
        bp: 55,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Overheat': {
        bp: 140,
        type: 'Fire',
        category: 'Special'
    },
    'Poison Fang': {
        bp: 50,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Psycho Boost': {
        bp: 140,
        type: 'Psychic',
        category: 'Special'
    },
    'Revenge': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Rock Blast': {
        bp: 25,
        type: 'Rock',
        category: 'Physical',
        isMultiHit: true
    },
    'Rock Tomb': {
        bp: 50,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Shadow Punch': {
        bp: 60,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Shock Wave': {
        bp: 60,
        type: 'Electric',
        category: 'Special'
    },
    'Signal Beam': {
        bp: 75,
        type: 'Bug',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Sky Uppercut': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Spark': {
        bp: 65,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Superpower': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Volt Tackle': {
        bp: 120,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true
    },
    'Water Pulse': {
        bp: 60,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true
    },
    'Water Spout': {
        bp: 150,
        type: 'Water',
        category: 'Special',
        isSpread: true
    },
    'Weather Ball': {
        bp: 50,
        type: 'Normal',
        category: 'Special',
        isBullet: true
    },
    'Dive': {
        bp: 60,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
    },
    'Frenzy Plant': {
        bp: 150,
        type: 'Grass',
        category: 'Special',
    },
    'Hydro Cannon': {
        bp: 150,
        type: 'Water',
        category: 'Special',
    },
    'Endeavor': {
        bp: 1,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
    },
    'Stockpile': {

        type: 'Normal',
        category: 'Status'
    },
    'Hail': {

        type: 'Ice',
        category: 'Status'
    },
    'Torment': {

        type: 'Dark',
        category: 'Status'
    },
    'Flatter': {

        type: 'Dark',
        category: 'Status'
    },
    'Will-O-Wisp': {

        type: 'Fire',
        category: 'Status'
    },
    'Memento': {

        type: 'Dark',
        category: 'Status'
    },
    'Follow Me': {

        type: 'Normal',
        category: 'Status'
    },
    'Taunt': {

        type: 'Dark',
        category: 'Status'
    },
    'Helping Hand': {

        type: 'Normal',
        category: 'Status'
    },
    'Trick': {

        type: 'Psychic',
        category: 'Status'
    },
    'Role Play': {

        type: 'Psychic',
        category: 'Status'
    },
    'Wish': {

        type: 'Normal',
        category: 'Status'
    },
    'Assist': {

        type: 'Normal',
        category: 'Status'
    },
    'Ingrain': {

        type: 'Grass',
        category: 'Status'
    },
    'Magic Coat': {

        type: 'Psychic',
        category: 'Status'
    },
    'Recycle': {

        type: 'Normal',
        category: 'Status'
    },
    'Yawn': {

        type: 'Normal',
        category: 'Status'
    },
    'Skill Swap': {

        type: 'Psychic',
        category: 'Status'
    },
    'Imprison': {

        type: 'Psychic',
        category: 'Status'
    },
    'Refresh': {

        type: 'Normal',
        category: 'Status'
    },
    'Grudge': {

        type: 'Ghost',
        category: 'Status'
    },
    'Snatch': {

        type: 'Dark',
        category: 'Status'
    },
    'Tail Glow': {

        type: 'Bug',
        category: 'Status'
    },
    'Feather Dance': {

        type: 'Flying',
        category: 'Status'
    },
    'Teeter Dance': {

        type: 'Normal',
        category: 'Status'
    },
    'Slack Off': {

        type: 'Normal',
        category: 'Status'
    },
    'Aromatherapy': {

        type: 'Grass',
        category: 'Status'
    },
    'Fake Tears': {

        type: 'Dark',
        category: 'Status'
    },
    'Metal Sound': {

        type: 'Steel',
        category: 'Status'
    },
    'Grass Whistle': {

        type: 'Grass',
        category: 'Status'
    },
    'Tickle': {

        type: 'Normal',
        category: 'Status'
    },
    'Cosmic Power': {

        type: 'Psychic',
        category: 'Status'
    },
    'Iron Defense': {

        type: 'Steel',
        category: 'Status'
    },
    'Howl': {

        type: 'Normal',
        category: 'Status'
    },
    'Bulk Up': {

        type: 'Fighting',
        category: 'Status'
    },
    'Calm Mind': {

        type: 'Psychic',
        category: 'Status'
    },
    'Dragon Dance': {

        type: 'Dragon',
        category: 'Status'
    },
});

delete MOVES_ADV['BubbleBeam'];
delete MOVES_ADV['Submission'];

var MOVES_DPP = $.extend(true, {}, MOVES_ADV, {
    'Air Slash': {
        bp: 75,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Aqua Jet': {
        bp: 40,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        isPriority: true,
    },
    'Aqua Tail': {
        bp: 90,
        type: 'Water',
        category: 'Physical',
        makesContact: true
    },
    'Assurance': {
        bp: 50,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        canDouble: true
    },
    'Aura Sphere': {
        bp: 90,
        type: 'Fighting',
        category: 'Special',
        isBullet: true,
        isPulse: true
    },
    'Avalanche': {
        bp: 120,
        type: 'Ice',
        category: 'Physical',
        makesContact: true
    },
    'Brave Bird': {
        bp: 120,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Brine': {
        bp: 65,
        zp: 120,
        type: 'Water',
        category: 'Special',
    },
    'Bug Bite': {
        bp: 60,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Bug Buzz': {
        bp: 90,
        type: 'Bug',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true
    },
    'Bullet Punch': {
        bp: 40,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        isPriority: true,
    },
    'Charge Beam': {
        bp: 50,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Chatter': {
        bp: 60,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true
    },
    'Close Combat': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Cross Poison': {
        bp: 70,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Dark Pulse': {
        bp: 80,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true
    },
    'Discharge': {
        bp: 80,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Double Hit': {
        bp: 35,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true
    },
    'Draco Meteor': {
        bp: 140,
        type: 'Dragon',
        category: 'Special'
    },
    'Dragon Pulse': {
        bp: 90,
        type: 'Dragon',
        category: 'Special',
        isPulse: true
    },
    'Dragon Rush': {
        bp: 100,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Drain Punch': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Earth Power': {
        bp: 90,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Energy Ball': {
        bp: 80,
        type: 'Grass',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Fire Fang': {
        bp: 65,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Flare Blitz': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        hasRecoil: true
    },
    'Flash Cannon': {
        bp: 80,
        type: 'Steel',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Fling': {
        bp: 1,
        type: 'Dark',
        category: 'Physical'
    },
    'Fly':{
        bp: 90,
        type: 'Flying',
        category: 'Physical'
    },
    'Focus Blast': {
        bp: 120,
        type: 'Fighting',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Force Palm': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Giga Impact': {
        bp: 150,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Grass Knot': {
        bp: 1,
        type: 'Grass',
        category: 'Special',
        makesContact: true
    },
    'Gunk Shot': {
        bp: 120,
        type: 'Poison',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Gyro Ball': {
        bp: 1,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        isBullet: true
    },
    'Hammer Arm': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isPunch: true
    },
    'Head Smash': {
        bp: 150,
        type: 'Rock',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Hi Jump Kick': { bp: 100 },
    'Hyper Voice': {
        bp: 90,
        type: 'Normal',
        category: 'Special',
        isSound: true,
        isSpread: true
    },
    'Ice Fang': {
        bp: 65,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Ice Shard': {
        bp: 40,
        type: 'Ice',
        category: 'Physical',
        isPriority: true,
    },
    'Iron Head': {
        bp: 80,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Judgment': {
        bp: 100,
        type: 'Normal',
        category: 'Special'
    },
    'Jump Kick': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Last Resort': {
        bp: 130,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'Lava Plume': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Leaf Blade': { bp: 90 },
    'Leaf Storm': {
        bp: 140,
        type: 'Grass',
        category: 'Special'
    },
    'Magma Storm': {
        bp: 120,
        type: 'Fire',
        category: 'Special'
    },
    'Mud Bomb': {
        bp: 65,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Natural Gift': {
        bp: 1,
        type: 'Normal',
        category: 'Physical'
    },
    'Nature Power': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Night Slash': {
        bp: 70,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Outrage': {
        bp: 120,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true
    },
    'Payback': {
        bp: 50,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Pluck': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Poison Jab': {
        bp: 80,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Power Gem': {
        bp: 70,
        type: 'Rock',
        category: 'Special'
    },
    'Power Whip': {
        bp: 120,
        type: 'Grass',
        category: 'Physical',
        makesContact: true
    },
    'Psycho Cut': {
        bp: 70,
        type: 'Psychic',
        category: 'Physical'
    },
    'Punishment': {
        bp: 60,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Rock Climb': {
        bp: 90,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Rock Smash': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Seed Bomb': {
        bp: 80,
        type: 'Grass',
        category: 'Physical',
        isBullet: true
    },
    'Seed Flare': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Shadow Claw': {
        bp: 70,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Shadow Force': {
        bp: 120,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Shadow Sneak': {
        bp: 40,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        isPriority: true,
    },
    'Spacial Rend': {
        bp: 100,
        type: 'Dragon',
        category: 'Special'
    },
    'Stone Edge': {
        bp: 100,
        type: 'Rock',
        category: 'Physical'
    },
    'Sucker Punch': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        isPriority: true,
    },
    'Swift': {
        bp: 60,
        type: 'Normal',
        category: 'Special',
        isSpread: true
    },
    'Thunder Fang': {
        bp: 65,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true
    },
    'Tri Attack': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'U-turn': {
        bp: 70,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Vacuum Wave': {
        bp: 40,
        type: 'Fighting',
        category: 'Special',
        isPriority: true,
    },
    'Wake-Up Slap': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Waterfall': {
        bp: 80,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Wood Hammer': {
        bp: 120,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'X-Scissor': {
        bp: 80,
        type: 'Bug',
        category: 'Physical',
        makesContact: true
    },
    'Zen Headbutt': {
        bp: 80,
        type: 'Psychic',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Dive': { bp: 80 },
    'Rock Wrecker': {
        bp: 150,
        type: 'Rock',
        category: 'Physical',
        isBullet: true,
    },
    'Roar of Time': {
        bp: 150,
        type: 'Dragon',
        category: 'Special',
    },
    'Dig': {
        bp: 60,
    },
    'Roost': {

        type: 'Flying',
        category: 'Status'
    },
    'Gravity': {

        type: 'Psychic',
        category: 'Status'
    },
    'Healing Wish': {

        type: 'Psychic',
        category: 'Status'
    },
    'Tailwind': {

        type: 'Flying',
        category: 'Status'
    },
    'Acupressure': {

        type: 'Normal',
        category: 'Status'
    },
    'Embargo': {

        type: 'Dark',
        category: 'Status'
    },
    'Psycho Shift': {

        type: 'Psychic',
        category: 'Status'
    },
    'Heal Block': {

        type: 'Psychic',
        category: 'Status'
    },
    'Power Trick': {

        type: 'Psychic',
        category: 'Status'
    },
    'Gastro Acid': {

        type: 'Poison',
        category: 'Status'
    },
    'Me First': {

        type: 'Normal',
        category: 'Status'
    },
    'Copycat': {

        type: 'Normal',
        category: 'Status'
    },
    'Power Swap': {

        type: 'Psychic',
        category: 'Status'
    },
    'Worry Seed': {

        type: 'Grass',
        category: 'Status'
    },
    'Toxic Spikes': {

        type: 'Poison',
        category: 'Status'
    },
    'Heart Swap': {

        type: 'Psychic',
        category: 'Status'
    },
    'Magnet Rise': {

        type: 'Electric',
        category: 'Status'
    },
    'Rock Polish': {

        type: 'Rock',
        category: 'Status'
    },
    'Switcheroo': {

        type: 'Dark',
        category: 'Status'
    },
    'Nasty Plot': {

        type: 'Dark',
        category: 'Status'
    },
    'Defog': {

        type: 'Flying',
        category: 'Status'
    },
    'Trick Room': {

        type: 'Psychic',
        category: 'Status'
    },
    'Captivate': {

        type: 'Normal',
        category: 'Status'
    },
    'Stealth Rock': {

        type: 'Rock',
        category: 'Status'
    },
    'Lunar Dance': {

        type: 'Psychic',
        category: 'Status'
    },
    'Dark Void': {

        type: 'Dark',
        category: 'Status'
    },
});

delete MOVES_DPP['Razor Leaf'];
delete MOVES_DPP['Twineedle'];
delete MOVES_DPP['Zap Cannon'];

var MOVES_BW = $.extend(true, {}, MOVES_DPP, {
    'Electroweb': {
        bp: 55,
        type: "Electric",
        category: "Special",
        isSpread: true,
        hasSecondaryEffect: true
    },
    'Acid Spray': {
        bp: 40,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true
    },
    'Acrobatics': {
        bp: 55,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Attack Order': {
        bp: 90,
        type: 'Bug',
        category: 'Physical'
    },
    'Blue Flare': {
        bp: 130,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Bolt Strike': {
        bp: 130,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Bulldoze': {
        bp: 60,
        type: 'Ground',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Bullet Seed': {
        bp: 25,
        type: 'Grass',
        category: 'Physical',
        isMultiHit: true,
        isBullet: true
    },
    'Circle Throw': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Clear Smog': {
        bp: 50,
        type: 'Poison',
        category: 'Special'
    },
    'Doom Desire': { bp: 140 },
    'Dragon Tail': {
        bp: 60,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true
    },
    'Drain Punch': { bp: 75 },
    'Drill Run': {
        bp: 80,
        type: 'Ground',
        category: 'Physical',
        makesContact: true
    },
    'Dual Chop': {
        bp: 40,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true
    },
    'Electro Ball': {
        bp: 1,
        type: 'Electric',
        category: 'Special',
        isBullet: true
    },
    'Feint': {
        bp: 30,
        type: 'Normal',
        category: 'Physical',
        isPriority: true,
    },
    'Fiery Dance': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Flame Charge': {
        bp: 50,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Foul Play': {
        bp: 95,
        type: 'Dark',
        category: 'Physical',
        makesContact: true
    },
    'Freeze Shock': {
        bp: 140,
        type: 'Ice',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Frost Breath': {
        bp: 40,
        type: 'Ice',
        category: 'Special',
        alwaysCrit: true
    },
    'Fusion Bolt': {
        bp: 100,
        type: 'Electric',
        category: 'Physical',
        canDouble: true,
    },
    'Fusion Flare': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        canDouble: true,
    },
    'Gear Grind': {
        bp: 50,
        type: 'Steel',
        category: 'Physical',
        isTwoHit: true
    },
    'Giga Drain': { bp: 75 },
    'Glaciate': {
        bp: 65,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Head Charge': {
        bp: 120,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Heavy Slam': {
        bp: 1,
        type: 'Steel',
        category: 'Physical',
        makesContact: true
    },
    'Hex': {
        bp: 50,
        type: 'Ghost',
        category: 'Special'
    },
    'Hi Jump Kick': { bp: 130 },
    'Horn Leech': {
        bp: 75,
        type: 'Grass',
        category: 'Physical',
        makesContact: true
    },
    'Hurricane': {
        bp: 120,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Ice Burn': {
        bp: 140,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Icicle Crash': {
        bp: 85,
        type: 'Ice',
        category: 'Physical',
        hasSecondaryEffect: true
    },
    'Icicle Spear': {
        bp: 25,
        type: 'Ice',
        category: 'Physical',
        isMultiHit: true
    },
    'Incinerate': {
        bp: 30,
        type: 'Fire',
        category: 'Special',
        isSpread: true
    },
    'Inferno': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Jump Kick': { bp: 100 },
    'Last Resort': { bp: 140 },
    'Low Sweep': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Nature Power': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        hasSecondaryEffect: false,
        isSpread: true
    },
    'Night Daze': {
        bp: 85,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Petal Dance': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        makesContact: true
    },
    'Psyshock': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        dealsPhysicalDamage: true
    },
    'Psystrike': {
        bp: 100,
        type: 'Psychic',
        category: 'Special',
        dealsPhysicalDamage: true
    },
    'Razor Leaf': {
        bp: 55,
        type: 'Grass',
        category: 'Physical',
        isSpread: true,
    },
    'Razor Shell': {
        bp: 75,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Relic Song': {
        bp: 75,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true
    },
    'Retaliate': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        canDouble: true,
    },
    'Sacred Sword': {
        bp: 90,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        ignoresDefenseBoosts: true
    },
    'Scald': {
        bp: 80,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Searing Shot': {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Secret Sword': {
        bp: 85,
        type: 'Fighting',
        category: 'Special',
        dealsPhysicalDamage: true
    },
    'Sky Drop': {
        bp: 60,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Sludge Wave': {
        bp: 95,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Smack Down': {
        bp: 50,
        type: 'Rock',
        category: 'Physical'
    },
    'Snarl': {
        bp: 55,
        type: 'Dark',
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true
    },
    'Stored Power': {
        bp: 20,
        type: 'Psychic',
        category: 'Special'
    },
    'Storm Throw': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: true
    },
    'Struggle Bug': {
        bp: 30,
        type: "Bug",
        category: "Special",
        isSpread: true,
        hasSecondaryEffect: true
    },
    'Synchronoise': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        isSpread: true
    },
    'Tackle': { bp: 50 },
    'Tail Slap': {
        bp: 25,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true
    },
    'Thrash': {
        bp: 120,
        type: 'Normal',
        category: 'Physical',
        makesContact: true
    },
    'V-create': {
        bp: 180,
        type: 'Fire',
        category: 'Physical',
        makesContact: true
    },
    'Volt Switch': {
        bp: 70,
        type: 'Electric',
        category: 'Special'
    },
    'Wild Charge': {
        bp: 90,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true
    },
    'Fire Pledge': {
        bp: 50,
        type: 'Fire',
        category: 'Special',
    },
    'Grass Pledge': {
        bp: 50,
        type: 'Grass',
        category: 'Special',
    },
    'Water Pledge': {
        bp: 50,
        type: 'Water',
        category: 'Special',
    },
    //'Fire Pledge (Combined)': {
    //    bp: 150,
    //    type: 'Fire',
    //    category: 'Special',
    //},
    //'Grass Pledge (Combined)': {
    //    bp: 150,
    //    type: 'Grass',
    //    category: 'Special',
    //},
    //'Water Pledge (Combined)': {
    //    bp: 150,
    //    type: 'Water',
    //    category: 'Special',
    //},
    'Heat Crash': {
        bp: 1,
        type: 'Fire',
        category: 'Physical',
        makesContact: true
    },
    'Final Gambit': {
        bp: 1,
        type: 'Fighting',
        category: 'Special',
    },
    'Techno Blast': {
        bp: 85,
        type: 'Normal',
        category: 'Special',
    },
    'Hone Claws': {

        type: 'Dark',
        category: 'Status'
    },
    'Wide Guard': {

        type: 'Rock',
        category: 'Status'
    },
    'Guard Split': {

        type: 'Psychic',
        category: 'Status'
    },
    'Power Split': {

        type: 'Psychic',
        category: 'Status'
    },
    'Autotomize': {

        type: 'Steel',
        category: 'Status'
    },
    'Rage Powder': {

        type: 'Bug',
        category: 'Status'
    },
    'Magic Room': {

        type: 'Psychic',
        category: 'Status'
    },
    'Quiver Dance': {

        type: 'Bug',
        category: 'Status'
    },
    'Soak': {

        type: 'Water',
        category: 'Status'
    },
    'Coil': {

        type: 'Poison',
        category: 'Status'
    },
    'Simple Beam': {

        type: 'Normal',
        category: 'Status'
    },
    'Entrainment': {

        type: 'Normal',
        category: 'Status'
    },
    'After You': {

        type: 'Normal',
        category: 'Status'
    },
    'Quick Guard': {

        type: 'Fighting',
        category: 'Status'
    },
    'Ally Switch': {

        type: 'Psychic',
        category: 'Status'
    },
    'Shell Smash': {

        type: 'Normal',
        category: 'Status'
    },
    'Heal Pulse': {

        type: 'Psychic',
        category: 'Status'
    },
    'Shift Gear': {

        type: 'Steel',
        category: 'Status'
    },
    'Quash': {

        type: 'Dark',
        category: 'Status'
    },
    'Reflect Type': {

        type: 'Normal',
        category: 'Status'
    },
    'Work Up': {

        type: 'Normal',
        category: 'Status'
    },
    'Cotton Guard': {

        type: 'Grass',
        category: 'Status'
    },
});

var MOVES_XY = $.extend(true, {}, MOVES_BW, {
    'Air Cutter': { bp: 60 },
    'Arm Thrust': {
        bp: 15,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true
    },
    'Assurance': { bp: 60 },
    'Aura Sphere': { bp: 80 },
    'Blizzard': { bp: 110 },
    'Boomburst': {
        bp: 140,
        type: 'Normal',
        category: 'Special',
        isSound: true,
        isSpread: true
    },
    'Chatter': { bp: 65 },
    'Crabhammer': { bp: 100 },
    'Dazzling Gleam': {
        bp: 80,
        type: 'Fairy',
        category: 'Special',
        isSpread: true
    },
    'Diamond Storm': {
        bp: 100,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true
    },
    'Draco Meteor': { bp: 130 },
    'Dragon Ascent': {
        bp: 120,
        type: 'Flying',
        category: 'Physical',
        makesContact: true
    },
    'Dragon Pulse': { bp: 85 },
    'Draining Kiss': {
        bp: 50,
        type: 'Fairy',
        category: 'Special',
        makesContact: true
    },
    'Energy Ball': { bp: 90 },
    'Facade': { ignoresBurn: true },
    'Fire Blast': { bp: 110 },
    'Flamethrower': { bp: 90 },
    'Flying Press': {
        bp: 80,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'Freeze-Dry': {
        bp: 70,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Frost Breath': { bp: 60 },
    'Future Sight': {
        bp: 120,
        type: 'Psychic',
        category: 'Special'
    },
    'Heat Wave': { bp: 95 },
    'Hex': { bp: 65 },
    'Hidden Power Bug': { bp: 60 },
    'Hidden Power Dark': { bp: 60 },
    'Hidden Power Dragon': { bp: 60 },
    'Hidden Power Electric': { bp: 60 },
    'Hidden Power Fighting': { bp: 60 },
    'Hidden Power Fire': { bp: 60 },
    'Hidden Power Flying': { bp: 60 },
    'Hidden Power Ghost': { bp: 60 },
    'Hidden Power Grass': { bp: 60 },
    'Hidden Power Ground': { bp: 60 },
    'Hidden Power Ice': { bp: 60 },
    'Hidden Power Poison': { bp: 60 },
    'Hidden Power Psychic': { bp: 60 },
    'Hidden Power Rock': { bp: 60 },
    'Hidden Power Steel': { bp: 60 },
    'Hidden Power Water': { bp: 60 },
    'Hurricane': { bp: 110 },
    'Hydro Pump': { bp: 110 },
    'Ice Beam': { bp: 90 },
    'Incinerate': { bp: 60 },
    'Knock Off': { bp: 65 },
    'Land\'s Wrath': {
        bp: 90,
        type: 'Ground',
        category: 'Physical',
        isSpread: true
    },
    'Leaf Storm': { bp: 130 },
    'Light of Ruin': {
        bp: 140,
        type: 'Fairy',
        category: 'Special',
        hasRecoil: true
    },
    'Low Sweep': { bp: 65 },
    'Magma Storm': { bp: 100 },
    'Meteor Mash': { bp: 90 },
    'Moonblast': {
        bp: 95,
        type: 'Fairy',
        category: 'Special',
        hasSecondaryEffect: true
    },
    'Muddy Water': { bp: 90 },
    'Nature Power': {
        bp: 1,
        type: 'Normal',
        category: 'Status',
        hasSecondaryEffect: true,
        isSpread: false
    },
    'Oblivion Wing': {
        bp: 80,
        type: 'Flying',
        category: 'Special'
    },
    'Origin Pulse': {
        bp: 110,
        type: 'Water',
        category: 'Special',
        isSpread: true
    },
    'Overheat': { bp: 130 },
    'Phantom Force': {
        bp: 90,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true
    },
    'Pin Missile': { bp: 25 },
    'Play Rough': {
        bp: 90,
        type: 'Fairy',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true
    },
    'Power Gem': { bp: 80 },
    'Power-Up Punch': {
        bp: 40,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true
    },
    'Precipice Blades': {
        bp: 120,
        type: 'Ground',
        category: 'Physical',
        isSpread: 'true'
    },
    'Rock Tomb': { bp: 60 },
    'Sheer Cold': {
        bp: 1,
        type: 'Ice',
        category: 'Special',
        isSpread: 'false',
        isMLG: 'true'
    },
    'Storm Throw': { bp: 60 },
    'Struggle Bug': { bp: 50 },
    'Surf': { bp: 90 },
    'Synchronoise': { bp: 120 },
    'Thief': { bp: 60 },
    'Thunder': { bp: 110 },
    'Thunderbolt': { bp: 90 },
    'Wake-Up Slap': { bp: 70 },
    'Water Shuriken': {
        bp: 15,
        type: 'Water',
        category: 'Physical',
        isMultiHit: true,
        isPriority: true,
    },
    'Aurora Beam': {
        bp: 65,
        type: 'Ice',
        category: 'Special'
    },
    'Disarming Voice': {
        bp: 40,
        type: 'Fairy',
        category: 'Special',
        isSound: true,
        isSpread: true,
    },
    'Fire Pledge': { bp: 80 },
    'Grass Pledge': { bp: 80 },
    'Water Pledge': { bp: 80 },
    'Mystical Fire': {
        bp: 75,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Parabolic Charge': {
        bp: 50,
        type: 'Electric',
        category: 'Special',
        isSpread: true,
    },
    'Petal Blizzard': {
        bp: 90,
        type: 'Grass',
        category: 'Physical',
        isSpread: true
    },
    'Mat Block': {

        type: 'Fighting',
        category: 'Status'
    },
    'Sticky Web': {

        type: 'Bug',
        category: 'Status'
    },
    'Trick-or-Treat': {

        type: 'Ghost',
        category: 'Status'
    },
    'Forest\'s Curse': {

        type: 'Grass',
        category: 'Status'
    },
    'Parting Shot': {

        type: 'Dark',
        category: 'Status'
    },
    'Topsy-Turvy': {

        type: 'Dark',
        category: 'Status'
    },
    'Crafty Shield': {

        type: 'Fairy',
        category: 'Status'
    },
    'Grassy Terrain': {

        type: 'Grass',
        category: 'Status'
    },
    'Misty Terrain': {

        type: 'Fairy',
        category: 'Status'
    },
    'Electrify': {

        type: 'Electric',
        category: 'Status'
    },
    'King\'s Shield': {

        type: 'Steel',
        category: 'Status'
    },
    'Spiky Shield': {

        type: 'Grass',
        category: 'Status'
    },
    'Eerie Impulse': {

        type: 'Electric',
        category: 'Status'
    },
    'Powder': {

        type: 'Bug',
        category: 'Status',
        isPriority: true,
    },
    'Geomancy': {

        type: 'Fairy',
        category: 'Status'
    },
    'Electric Terrain': {

        type: 'Electric',
        category: 'Status'
    },
    'Baby-Doll Eyes': {

        type: 'Fairy',
        category: 'Status',
        isPriority: true,
    },
    'Techno Blast': {
        bp: 120,
    },
    'Steam Eruption': {
        bp: 110,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true
    },
});

MOVES_XY['Ancient Power'] = MOVES_XY['AncientPower'];
MOVES_XY['Dynamic Punch'] = MOVES_XY['DynamicPunch'];
MOVES_XY['Extreme Speed'] = MOVES_XY['ExtremeSpeed'];
MOVES_XY['Feint Attack'] = MOVES_XY['Faint Attack'];
MOVES_XY['High Jump Kick'] = MOVES_XY['Hi Jump Kick'];
MOVES_XY['Self-Destruct'] = MOVES_XY['Selfdestruct'];
MOVES_XY['Solar Beam'] = MOVES_XY['SolarBeam'];
MOVES_XY['Thunder Punch'] = MOVES_XY['ThunderPunch'];
delete MOVES_XY['AncientPower'];
delete MOVES_XY['DynamicPunch'];
delete MOVES_XY['ExtremeSpeed'];
delete MOVES_XY['Faint Attack'];
delete MOVES_XY['Hi Jump Kick'];
delete MOVES_XY['Selfdestruct'];
delete MOVES_XY['SolarBeam'];
delete MOVES_XY['ThunderPunch'];

var ZMOVES_LOOKUP = {
    'Normal':'Breakneck Blitz','Fire':'Inferno Overdrive','Water':'Hydro Vortex',
    'Electric':'Gigavolt Havoc','Grass':'Bloom Doom','Ghost':'Never-Ending Nightmare',
    'Dark':'Black Hole Eclipse','Psychic':'Shattered Psyche','Fighting':'All-Out Pummeling',
    'Steel':'Corkscrew Crash','Ice':'Subzero Slammer','Ground':'Tectonic Rage',
    'Rock':'Continental Crush','Bug':'Savage Spin-Out','Fairy':'Twinkle Tackle',
    'Flying':'Supersonic Skystrike','Dragon':'Devastating Drake','Poison':'Acid Downpour'};

var MOVES_SM = $.extend(true, {}, MOVES_XY, {
    'Bolt Strike': {zp: 195 },
    'Future Sight': { zp: 190 },
    'Mud Shot': {
        zp: 100
    },
    'Last Resort': { zp: 200 },
    'Water Shuriken': {
        category: 'Special',
        zp: 100
    },
    'Leech Life': {
        category: 'Physical',
        type: 'Bug',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Zing Zap': {
        category: 'Physical',
        type: 'Electric',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Moongeist Beam': {
        category: 'Special',
        type: 'Ghost',
        bp: 100,
        zp: 180
    },
    'Sunsteel Strike': {
        category: 'Physical',
        type: 'Steel',
        makesContact: true,
        bp: 100,
        zp: 180
    },
    'Spectral Thief': {
        category: 'Physical',
        type: 'Ghost',
        makesContact: true,
        bp: 90,
        zp: 175
    },
    'Prismatic Laser': {
        category: 'Special',
        type: 'Psychic',
        bp: 160,
        zp: 200
    },
    'Liquidation': {
        category: 'Physical',
        type: 'Water',
        makesContact: true,
        hasSecondaryEffect: true,
        bp: 85,
        zp: 160
    },
    'Accelerock': {
        category: 'Physical',
        type: 'Rock',
        makesContact: true,
        bp: 40,
        zp: 100,
        isPriority: true,
    },
    'Shadow Bone': {
        category: 'Physical',
        type: 'Ghost',
        bp: 85,
        zp: 160
    },
    'Stomping Tantrum': {
        category: 'Physical',
        type: 'Ground',
        makesContact: true,
        bp: 75,
        zp: 140,
        canDouble: true
    },
    'Psychic Fangs': {
        category: 'Physical',
        type: 'Psychic',
        makesContact: true,
        bp: 85,
        zp: 160,
        isBite: true,
        ignoreScreens: true,
    },
    'Fleur Cannon': {
        category: 'Special',
        type: 'Fairy',
        bp: 130,
        zp: 195
    },
    'Shell Trap': {
        category: 'Special',
        type: 'Fire',
        isSpread: true,
        bp: 150,
        zp: 200
    },
    'Genesis Supernova': {
        category: 'Special',
        type: 'Psychic',
        bp: 185,
        isSignatureZ: true,
    },
    'Pulverizing Pancake': {
        category: 'Physical',
        type: 'Normal',
        makesContact: true,
        bp: 210,
        isSignatureZ: true,
    },
    'Stoked Sparksurfer': {
        category: 'Special',
        type: 'Electric',
        bp: 175,
        isSignatureZ: true,
    },
    'Soul-Stealing 7-Star Strike': {
        category: 'Physical',
        type: 'Ghost',
        makesContact: true,
        bp: 195,
        isSignatureZ: true,
    },
    'Oceanic Operetta': {
        category: 'Special',
        type: 'Water',
        bp: 195,
        isSignatureZ: true,
    },
    'Malicious Moonsault': {
        category: 'Physical',
        type: 'Dark',
        bp: 180,
        isSignatureZ: true,
    },
    'Sinister Arrow Raid': {
        category: 'Physical',
        type: 'Ghost',
        bp: 180,
        isSignatureZ: true,
    },
    'Brutal Swing': {
        category: 'Physical',
        type: 'Dark',
        makesContact: true,
        bp: 60,
        isSpread: true,
        zp: 120
    },
    'Dragon Hammer': {
        category: 'Physical',
        type: 'Dragon',
        makesContact: true,
        bp: 90,
        zp: 175
    },
    'Clanging Scales': {
        category: 'Special',
        type: 'Dragon',
        bp: 110,
        isSound: true,
        isSpread: true,
        zp: 185
    },
    'Beak Blast': {
        category: 'Physical',
        type: 'Flying',
        bp: 100,
        zp: 180
    },
    'Trop Kick': {
        category: 'Physical',
        type: 'Grass',
        makesContact: true,
        bp: 70,
        zp: 140
    },
    'Core Enforcer': {
        category: 'Special',
        type: 'Dragon',
        bp: 100,
        isSpread: true,
        zp: 140
    },
    'Revelation Dance':{
        category: 'Special',
        type: 'Normal',
        bp: 90,
        zp: 175
    },
    'Smart Strike':{
        category: 'Physical',
        type: 'Steel',
        makesContact: true,
        bp: 70,
        zp: 140
    },
    'Multi-Attack': {
        category: 'Physical',
        type: 'Normal',
        makesContact: true,
        bp: 90,
        zp: 185
    },
    'Burn Up': {
        category: 'Special',
        type: 'Fire',
        bp: 130,
        zp: 195
    },
    'Power Trip': {
        category: 'Physical',
        type: 'Dark',
        makesContact: true,
        bp: 20,
        zp: 160
    },
    'Fire Lash': {
        category: 'Physical',
        type: 'Fire',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Lunge': {
        category: 'Physical',
        type: 'Bug',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Anchor Shot': {
        category: 'Physical',
        type: 'Steel',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Pollen Puff': {
        category: 'Special',
        type: 'Bug',
        bp: 90,
        zp: 175
    },
    'Throat Chop': {
        category: 'Physical',
        type: 'Dark',
        makesContact: true,
        bp: 80,
        zp: 160
    },
    'Solar Blade': {
        category: 'Physical',
        type: 'Grass',
        makesContact: true,
        bp: 125,
        zp: 190
    },
    'High Horsepower': {
        category: 'Physical',
        type: 'Ground',
        makesContact: true,
        bp: 95,
        zp: 175
    },
    'Ice Hammer': {
        category: 'Physical',
        type: 'Ice',
        makesContact: true,
        bp: 100,
        zp: 180,
        isPunch: true,
    },
    'First Impression': {
        category: 'Physical',
        type: 'Bug',
        makesContact: true,
        bp: '90',
        zp: '175',
        isPriority: true,
    },
    'Sparkling Aria': {
         category: 'Special',
         type: 'Water',
         bp: 90,
         isSpread: true,
         zp: 175
    },
    'Darkest Lariat': {
        category: 'Physical',
        type: 'Dark',
        makesContact: true,
        bp: 85,
        zp:160,
        ignoresDefenseBoosts: true
    },
    'Spirit Shackle': {
        category: 'Physical',
        type: 'Ghost',
        bp: 80,
        zp: 160
    },
    'Nature\'s Madness':{
        bp: 1,
        category: 'Special',
        type: 'Fairy',
        zp: 100
    },
    'Shore Up': {

        type: 'Ground',
        category: 'Status'
    },
    'Baneful Bunker': {

        type: 'Poison',
        category: 'Status'
    },
    'Floral Healing': {

        type: 'Fairy',
        category: 'Status'
    },
    'Strength Sap': {

        type: 'Grass',
        category: 'Status'
    },
    'Spotlight': {

        type: 'Normal',
        category: 'Status',
        isPriority: true,
    },
    'Psychic Terrain': {

        type: 'Psychic',
        category: 'Status'
    },
    'Speed Swap': {

        type: 'Psychic',
        category: 'Status'
    },
    'Instruct': {

        type: 'Psychic',
        category: 'Status'
    },
    'Aurora Veil': {

        type: 'Ice',
        category: 'Status'
    },
    'Extreme Evoboost': {

        type: 'Normal',
        category: 'Status',
        isSignatureZ: true,
    },
    'Catastropika': {
        category: 'Physical',
        type: 'Electric',
        makesContact: true,
        bp: 210,
        isSignatureZ: true,
    },
    'Breakneck Blitz': {
        type: 'Normal'
    },
    'Inferno Overdrive': {
        type: 'Fire'
    },
    'Subzero Slammer': {
        type: 'Ice'
    },
    'Hydro Vortex': {
        type: 'Water'
    },
    'Gigavolt Havoc': {
        type: 'Electric'
    },
    'All-Out Pummeling': {
        type: 'Fighting'
    },
    'Bloom Doom': {
        type: 'Grass'
    },
    'Shattered Psyche': {
        type: 'Psychic'
    },
    'Savage Spin-Out': {
        type: 'Bug'
    },
    'Acid Downpour': {
        type: 'Poison'
    },
    'Supersonic Skystrike': {
        type: 'Flying'
    },
    'Devastating Drake': {
        type: 'Dragon'
    },
    'Continental Crush': {
        type: 'Rock'
    },
    'Tectonic Rage': {
        type: 'Ground'
    },
    'Corkscrew Crash': {
        type: 'Steel'
    },
    'Twinkle Tackle': {
        type: 'Fairy'
    },
    'Never-Ending Nightmare': {
        type: 'Ghost'
    },
    'Black Hole Eclipse': {
        type: 'Dark'
    },
    'Razor Leaf':{
        zp: 100
    },
    'Fly':{
        zp: 175
    },
    'Fire Punch':{
        zp: 140
    },
    'Ice Punch':{
        zp: 140
    },
    'Thunder Punch':{
        zp: 140
    },
    'Double Kick':{
        zp: 100
    },
    'Jump Kick':{
        zp: 180
    },
    'Headbutt':{
        zp: 140
    },
    'Tackle':{
        bp: 40,
        zp: 100
    },
    'Body Slam':{
        zp: 160
    },
    'Thrash':{
        zp: 190
    },
    'Double-Edge':{
        zp: 190
    },
    'Pin Missile':{
        zp: 140
    },
    'Bite':{
        zp: 120
    },
    'Flamethrower':{
        zp: 175
    },
    'Hydro Pump':{
        zp: 185
    },
    'Surf':{
        zp: 175
    },
    'Ice Beam':{
        zp: 175
    },
    'Blizzard':{
        zp: 185
    },
    'Aurora Beam':{
        zp: 120
    },
    'Hyper Beam':{
        zp: 200
    },
    'Drill Peck':{
        zp: 160
    },
    'Low Kick':{
        zp: 160
    },
    'Seismic Toss':{
        zp: 100
    },
    'Solar Beam':{
        zp: 190
    },
    'Petal Dance':{
        zp: 190
    },
    'Thunderbolt':{
        zp: 175
    },
    'Thunder':{
        zp: 185
    },
    'Earthquake':{
        zp: 180
    },
    'Psychic':{
        zp: 175
    },
    'Quick Attack':{
        zp: 100
    },
    'Night Shade':{
        zp: 100
    },
    'Self-Destruct':{
        zp: 200
    },
    'Fire Blast':{
        zp: 185
    },
    'Waterfall':{
        zp: 160
    },
    'Swift':{
        zp: 120
    },
    'High Jump Kick':{
        zp: 195
    },
    'Sky Attack':{
        zp: 200
    },
    'Crabhammer':{
        zp: 180
    },
    'Explosion':{
        zp: 200
    },
    'Bonemerang':{
        zp: 100
    },
    'Rock Slide':{
        zp: 140
    },
    'Tri Attack':{
        zp: 160
    },
    'Super Fang':{
        bp: 1,
        type: "Normal",
        category: "Physical",
        zp: 100,
        makesContact: true
    },
    'Thief':{
        zp: 120
    },
    'Flame Wheel':{
        zp: 120
    },
    'Flail':{
        zp: 160
    },
    'Aeroblast':{
        zp: 180
    },
    'Reversal':{
        zp: 160
    },
    'Mach Punch':{
        zp: 100
    },
    'Feint Attack':{
        zp: 120
    },
    'Sludge Bomb':{
        zp: 175
    },
    'Icy Wind':{
        zp: 100
    },
    'Outrage':{
        zp: 190
    },
    'Giga Drain':{
        zp: 140
    },
    'Spark':{
        zp: 120
    },
    'Steel Wing':{
        zp: 140
    },
    'Return':{
        zp: 160
    },
    'Frustration':{
        zp: 160
    },
    'Sacred Fire':{
        zp: 180
    },
    'Dynamic Punch':{
        zp: 180
    },
    'Megahorn':{
        zp: 190
    },
    'Pursuit':{
        zp: 100
    },
    'Rapid Spin':{
        zp: 100
    },
    'Iron Tail':{
        zp: 180
    },
    // Hidden Power needs to have type set to normal for the Z-move lookup to work.
    // Conversion of regular move to correct type is done in getMoveEffectiveness in damage.js
    'Hidden Power Bug': { zp: 120 },
    'Hidden Power Dark': { zp: 120 },
    'Hidden Power Dragon': { zp: 120 },
    'Hidden Power Electric': { zp: 120 },
    'Hidden Power Fighting': { zp: 120 },
    'Hidden Power Fire': { zp: 120 },
    'Hidden Power Flying': { zp: 120 },
    'Hidden Power Ghost': { zp: 120 },
    'Hidden Power Grass': { zp: 120 },
    'Hidden Power Ground': { zp: 120 },
    'Hidden Power Ice': { zp: 120 },
    'Hidden Power Poison': { zp: 120 },
    'Hidden Power Psychic': { zp: 120 },
    'Hidden Power Rock': { zp: 120 },
    'Hidden Power Steel': { zp: 120 },
    'Hidden Power Water': { zp: 120 },
    'Cross Chop':{
        zp: 180
    },
    'Crunch':{
        zp: 160
    },
    'Extreme Speed':{
        zp: 160
    },
    'Ancient Power':{
        zp: 120
    },
    'Shadow Ball':{
        zp: 160
    },
    'Rock Smash':{
        zp: 100
    },
    'Fake Out':{
        zp: 100
    },
    'Heat Wave':{
        zp: 175
    },
    'Facade':{
        zp: 140
    },
    'Focus Punch':{
        zp: 200
    },
    'Superpower':{
        zp: 190
    },
    'Revenge':{
        zp: 120
    },
    'Brick Break':{
        zp: 140
    },
    'Knock Off':{
        zp: 120
    },
    'Endeavor':{
        zp: 160
    },
    'Eruption':{
        zp: 200
    },
    'Arm Thrust':{
        zp: 100
    },
    'Luster Purge':{
        zp: 140
    },
    'Blaze Kick':{
        zp: 160
    },
    'Hyper Voice':{
        zp: 175
    },
    'Poison Fang':{
        zp: 100
    },
    'Meteor Mash':{
        zp: 175
    },
    'Weather Ball':{
        zp: 160
    },
    'Air Cutter':{
        zp: 120
    },
    'Overheat':{
        zp: 195
    },
    'Rock Tomb':{
        zp: 120
    },
    'Water Spout':{
        zp: 200
    },
    'Signal Beam':{
        zp: 140
    },
    'Shadow Punch':{
        zp: 120
    },
    'Extrasensory':{
        zp: 160
    },
    'Sky Uppercut':{
        zp: 160
    },
    'Sheer Cold':{
        zp: 180
    },
    'Muddy Water':{
        zp: 175
    },
    'Bullet Seed':{
        zp: 140
    },
    'Aerial Ace':{
        zp: 120
    },
    'Icicle Spear':{
        zp: 140
    },
    'Dragon Claw':{
        zp: 160
    },
    'Bounce':{
        zp: 160
    },
    'Volt Tackle':{
        zp: 190
    },
    'Leaf Blade':{
        zp: 175
    },
    'Rock Blast':{
        zp: 140
    },
    'Shock Wave':{
        zp: 120
    },
    'Water Pulse':{
        zp: 120
    },
    'Doom Desire':{
        zp: 200
    },
    'Psycho Boost':{
        zp: 200
    },
    'Wake-Up Slap':{
        zp: 140
    },
    'Hammer Arm':{
        zp: 180
    },
    'Gyro Ball':{
        zp: 160
    },
    'Natural Gift':{
        zp: 160
    },
    'Feint':{
        zp: 100
    },
    'Pluck':{
        zp: 120
    },
    'U-turn':{
        zp: 140
    },
    'Close Combat':{
        zp: 190
    },
    'Payback':{
        zp: 100
    },
    'Assurance':{
        zp: 120
    },
    'Fling':{
        zp: 100
    },
    'Punishment':{
        zp: 160
    },
    'Sucker Punch':{
        bp: 70,
        zp: 140
    },
    'Flare Blitz':{
        zp: 190
    },
    'Force Palm':{
        zp: 120
    },
    'Aura Sphere':{
        zp: 160
    },
    'Poison Jab':{
        zp: 160
    },
    'Dark Pulse':{
        zp: 160
    },
    'Night Slash':{
        zp: 140
    },
    'Aqua Tail':{
        zp: 175
    },
    'Seed Bomb':{
        zp: 160
    },
    'Air Slash':{
        zp: 140
    },
    'X-Scissor':{
        zp: 160
    },
    'Bug Buzz':{
        zp: 175
    },
    'Dragon Pulse':{
        zp: 160
    },
    'Dragon Rush':{
        zp: 180
    },
    'Power Gem':{
        zp: 160
    },
    'Drain Punch':{
        zp: 140
    },
    'Vacuum Wave':{
        zp: 100
    },
    'Focus Blast':{
        zp: 190
    },
    'Energy Ball':{
        zp: 175
    },
    'Brave Bird':{
        zp: 190
    },
    'Earth Power':{
        zp: 175
    },
    'Giga Impact':{
        zp: 200
    },
    'Bullet Punch':{
        zp: 100
    },
    'Avalanche':{
        zp: 120
    },
    'Ice Shard':{
        zp: 100
    },
    'Shadow Claw':{
        zp: 140
    },
    'Thunder Fang':{
        zp: 120
    },
    'Ice Fang':{
        zp: 120
    },
    'Fire Fang':{
        zp: 120
    },
    'Shadow Sneak':{
        zp: 100
    },
    'Mud Bomb':{
        zp: 120
    },
    'Psycho Cut':{
        zp: 140
    },
    'Zen Headbutt':{
        zp: 160
    },
    'Flash Cannon':{
        zp: 160
    },
    'Rock Climb':{
        zp: 175
    },
    'Draco Meteor':{
        zp: 195
    },
    'Discharge':{
        zp: 160
    },
    'Lava Plume':{
        zp: 160
    },
    'Leaf Storm':{
        zp: 195
    },
    'Power Whip':{
        zp: 190
    },
    'Cross Poison':{
        zp: 140
    },
    'Gunk Shot':{
        zp: 190
    },
    'Iron Head':{
        zp: 160
    },
    'Stone Edge':{
        zp: 180
    },
    'Grass Knot':{
        zp: 160
    },
    'Chatter':{
        zp: 120
    },
    'Judgment':{
        zp: 180
    },
    'Bug Bite':{
        zp: 120
    },
    'Charge Beam':{
        zp: 100
    },
    'Wood Hammer':{
        zp: 190
    },
    'Aqua Jet':{
        zp: 100
    },
    'Attack Order':{
        zp: 175
    },
    'Head Smash':{
        zp: 200
    },
    'Double Hit':{
        zp: 140
    },
    'Spacial Rend':{
        zp: 180
    },
    'Magma Storm':{
        zp: 180
    },
    'Seed Flare':{
        zp: 190
    },
    'Shadow Force':{
        zp: 190
    },
    'Psyshock':{
        zp: 160
    },
    'Smack Down':{
        zp: 100
    },
    'Sludge Wave':{
        zp: 175
    },
    'Heavy Slam':{
        zp: 160
    },
    'Synchronoise':{
        zp: 190
    },
    'Electro Ball':{
        zp: 160
    },
    'Flame Charge':{
        zp: 100
    },
    'Low Sweep':{
        zp: 120
    },
    'Acid Spray':{
        zp: 100
    },
    'Foul Play':{
        zp: 175
    },
    'Clear Smog':{
        zp: 100
    },
    'Stored Power':{
        zp: 160
    },
    'Scald':{
        zp: 160
    },
    'Hex':{
        zp: 160
    },
    'Sky Drop':{
        zp: 120
    },
    'Circle Throw':{
        zp: 120
    },
    'Incinerate':{
        zp: 120
    },
    'Acrobatics':{
        zp: 100
    },
    'Retaliate':{
        zp: 140
    },
    'Inferno':{
        zp: 180
    },
    'Water Pledge':{
        zp: 160
    },
    'Fire Pledge':{
        zp: 160
    },
    'Grass Pledge':{
        zp: 160
    },
    'Volt Switch':{
        zp: 140
    },
    'Bulldoze':{
        zp: 120
    },
    'Frost Breath':{
        zp: 120
    },
    'Dragon Tail':{
        zp: 120
    },
    'Wild Charge':{
        zp: 175
    },
    'Drill Run':{
        zp: 160
    },
    'Dual Chop':{
        zp: 100
    },
    'Horn Leech':{
        zp: 140
    },
    'Sacred Sword':{
        zp: 175
    },
    'Razor Shell':{
        zp: 140
    },
    'Night Daze':{
        zp: 160
    },
    'Psystrike':{
        zp: 180
    },
    'Tail Slap':{
        zp: 140
    },
    'Hurricane':{
        zp: 185
    },
    'Head Charge':{
        zp: 190
    },
    'Gear Grind':{
        zp: 180
    },
    'Searing Shot':{
        zp: 180
    },
    'Relic Song':{
        zp: 140
    },
    'Secret Sword':{
        zp: 160
    },
    'Glaciate':{
        zp: 120
    },
    'Fiery Dance':{
        zp: 160
    },
    'Blue Flare':{
        zp: 195
    },
    'Fiery Dance':{
        zp: 160
    },
    'Freeze Shock':{
        zp: 200
    },
    'Snarl':{
        zp: 100
    },
    'Icicle Crash':{
        zp: 160
    },
    'V-create':{
        zp: 220
    },
    'Fusion Flare':{
        zp: 180
    },
    'Fusion Bolt':{
        zp: 180
    },
    'Flying Press':{
        bp: 100,
        zp: 170
    },
    'Phantom Force':{
        zp: 175
    },
    'Freeze-Dry':{
        zp: 140
    },
    'Draining Kiss':{
        zp: 100
    },
    'Play Rough':{
        zp: 175
    },
    'Moonblast':{
        zp: 175
    },
    'Boomburst':{
        zp: 200
    },
    'Diamond Storm':{
        zp: 180
    },
    'Dazzling Gleam':{
        zp: 160
    },
    'Nuzzle':{
        category: 'Physical',
        type: 'Electric',
        bp: 20,
        zp: 100
    },
    'Power-Up Punch':{
        zp: 100
    },
    'Struggle Bug':{
        zp: 100
    },
    'Oblivion Wing':{
        zp: 160
    },
    'Land\'s Wrath':{
        zp: 185
    },
    'Thousand Arrows':{
        category: 'Physical',
        type: 'Ground',
        bp: 90,
        zp: 180,
        isSpread: true
    },
    'Thousand Waves':{
        category: 'Physical',
        type: 'Ground',
        bp: 90,
        zp: 175,
        isSpread: true
    },
    'Light Of Ruin':{
        zp: 200
    },
    'Origin Pulse':{
        zp: 185
    },
    'Precipice Blades':{
        zp: 190
    },
    'Dragon Ascent':{
        zp: 190
    },
    'Electroweb':{
        zp: 100
    },
    'Mind Blown': {
        bp: 150,
        zp: 200,
        type: 'Fire',
        category: 'Special',
        isSpread: true
    },
    'Plasma Fists': {
        bp: 100,
        zp: 180,
        type: 'Electric',
        category: 'Physical',
        isPunch: true,
    },
    'Photon Geyser': {
        bp: 100,
        zp: 180,
        type: 'Psychic',
        category: 'Special',
    },
    'Light That Burns the Sky': {
        bp: 200,
        type: 'Psychic',
        category: 'Special',
        isSignatureZ: true,
    },
    'Searing Sunraze Smash': {
        bp: 200,
        type: 'Steel',
        category: 'Physical',
        isSignatureZ: true,
    },
    'Menacing Moonraze Maelstrom': {
        bp: 200,
        type: 'Ghost',
        category: 'Special',
        isSignatureZ: true,
    },
    'Let\'s Snuggle Forever': {
        bp: 190,
        type: 'Fairy',
        category: 'Physical',
        isSignatureZ: true,
    },
    'Splintered Stormshards': {
        bp: 190,
        type: 'Rock',
        category: 'Physical',
        isSignatureZ: true,
    },
    'Clangorous Soulblaze': {
        bp: 185,
        type: 'Dragon',
        category: 'Special',
        isSound: true,
        isSpread: true,
        isSignatureZ: true,
    },
    'Blast Burn': {
        zp: 200,
    },
    'Disarming Voice': {
        zp: 100,
    },
    'Dive': {
        zp: 160,
    },
    'Final Gambit': {
        zp: 180,
    },
    'Frenzy Plant': {
        zp: 200,
    },
    'Heat Crash': {
        zp: 160,
    },
    'Hydro Cannon': {
        zp: 200,
    },
    'Mystical Fire': {
        zp: 140,
    },
    'Parabolic Charge': {
        zp: 100,
    },
    'Petal Blizzard': {
        zp: 175,
    },
    'Rock Wrecker': {
        zp: 200,
    },
    'Roar of Time': {
        zp: 200,
    },
    'Ice Burn': {
        zp: 200,
    },
    'Steam Eruption': {
        zp: 185,
    },
    'Techno Blast': {
        zp: 190,
    },
});

var MOVES_SS = $.extend(true, {}, MOVES_SM, {
    'Dynamax Cannon': {
        bp: 100,
        type: 'Dragon',
        category: 'Special',
    },
    'Snipe Shot': {
        bp: 80,
        type: 'Water',
        category: 'Special',
    },
    'Jaw Lock': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
    },
    'Dragon Darts': {
        bp: 50,
        type: 'Dragon',
        category: 'Physical',
    },
    'Bolt Beak': {
        bp: 85,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        canDouble: true
    },
    'Fishious Rend': {
        bp: 85,
        type: 'Water',
        category: 'Physical',
        isBite: true,
        makesContact: true,
        canDouble: true
    },
    'Body Press': {
        bp: 80,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
    },
    'Drum Beating': {
        bp: 80,
        type: 'Grass',
        category: 'Physical',
    },
    'Snap Trap': {
        bp: 35,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
    },
    'Pyro Ball': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
    },
    'Behemoth Blade': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
    },
    'Behemoth Bash': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
    },
    'Aura Wheel': {
        bp: 110,
        type: 'Electric',
        category: 'Physical',
    },
    'Breaking Swipe': {
        bp: 60,
        type: 'Dragon',
        category: 'Physical',
        isSpread: true,
        makesContact: true,
    },
    'Branch Poke': {
        bp: 40,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
    },
    'Overdrive': {
        bp: 80,
        type: 'Electric',
        category: 'Special',
        isSound: true,
        isSpread: true
    },
    'Apple Acid': {
        bp: 80,
        type: 'Grass',
        category: 'Special',
    },
    'Grav Apple': {
        bp: 80,
        type: 'Grass',
        category: 'Physical',
    },
    'Spirit Break': {
        bp: 75,
        type: 'Fairy',
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
    },
    'Strange Stream': {
        bp: 90,
        type: 'Fairy',
        category: 'Special',
    },
    'False Surrender': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
    },
    'Meteor Assault': {
        bp: 150,
        type: 'Fighting',
        category: 'Physical',
    },
    'Eternabeam': {
        bp: 160,
        type: 'Dragon',
        category: 'Special',
    },
    'Steel Beam': {
        bp: 140,
        type: 'Steel',
        category: 'Special',
    },
    'Max Strike': {
        type: 'Normal'
    },
    'Max Flare': {
        type: 'Fire'
    },
    'Max Hailstorm': {
        type: 'Ice'
    },
    'Max Geyser': {
        type: 'Water'
    },
    'Max Lightning': {
        type: 'Electric'
    },
    'Max Knuckle': {
        type: 'Fighting'
    },
    'Max Overgrowth': {
        type: 'Grass'
    },
    'Max Mindstorm': {
        type: 'Psychic'
    },
    'Max Flutterby': {
        type: 'Bug'
    },
    'Max Ooze': {
        type: 'Poison'
    },
    'Max Airstream': {
        type: 'Flying'
    },
    'Max Wyrmwind': {
        type: 'Dragon'
    },
    'Max Rockfall': {
        type: 'Rock'
    },
    'Max Quake': {
        type: 'Ground'
    },
    'Max Steelspike': {
        type: 'Steel'
    },
    'Max Starfall': {
        type: 'Fairy'
    },
    'Max Phantasm': {
        type: 'Ghost'
    },
    'Max Darkness': {
        type: 'Dark'
    },
    'G-Max Wildfire': {
        type: 'Fire'
    },
    'G-Max Befuddle': {
        type: 'Bug'
    },
    'G-Max Volt Crash': {
        type: 'Electric'
    },
    'G-Max Gold Rush': {
        type: 'Normal'
    },
    'G-Max Chi Strike': {
        type: 'Fighting'
    },
    'G-Max Terror': {
        type: 'Ghost'
    },
    'G-Max Foam Burst': {
        type: 'Water'
    },
    'G-Max Resonance': {
        type: 'Ice'
    },
    'G-Max Cuddle': {
        type: 'Normal'
    },
    'G-Max Replenish': {
        type: 'Normal'
    },
    'G-Max Malodor': {
        type: 'Poison'
    },
    'G-Max Meltdown': {
        type: 'Steel'
    },
    'G-Max Wind Rage': {
        type: 'Flying'
    },
    'G-Max Gravitas': {
        type: 'Psychic'
    },
    'G-Max Stonesurge': {
        type: 'Water'
    },
    'G-Max Volcalith': {
        type: 'Rock'
    },
    'G-Max Tartness': {
        type: 'Grass'
    },
    'G-Max Sweetness': {
        type: 'Grass'
    },
    'G-Max Sandblast': {
        type: 'Ground'
    },
    'G-Max Stun Shock': {
        type: 'Electric'
    },
    'G-Max Centiferno': {
        type: 'Fire'
    },
    'G-Max Smite': {
        type: 'Fairy'
    },
    'G-Max Snooze': {
        type: 'Dark'
    },
    'G-Max Finale': {
        type: 'Fairy'
    },
    'G-Max Steelsurge': {
        type: 'Steel'
    },
    'G-Max Depletion': {
        type: 'Dragon'
    },
    'G-Max Vine Lash': {
        type: 'Grass'
    },
    'G-Max Cannonade': {
        type: 'Water'
    },
    'G-Max Drum Solo': {
        type: 'Grass',
        bp: 160,
    },
    'G-Max Fireball': {
        type: 'Fire',
        bp: 160,
    },
    'G-Max Hydrosnipe': {
        type: 'Water',
        bp: 160,
    },
    'G-Max One Blow': {
        type: 'Dark'
    },
    'G-Max Rapid Flow': {
        type: 'Water'
    },
    'Parabolic Charge': { bp: 65 },
    'Multi-Attack': { bp: 120 },
    'Burning Jealousy': {
        bp: 70,
        type: 'Fire',
        category: 'Special',
        isSpread: true,
        hasSecondaryEffect: true,
    },
    'Dual Wingbeat': {
        bp: 40,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true,
    },
    'Expanding Force': {
        bp: 80,
        type: 'Psychic',
        category: 'Special'
    },
    'Flip Turn': {
        bp: 60,
        type: 'Water',
        category: 'Physical',
        makesContact: true
    },
    'Grassy Glide': {
        bp: 70,
        type: 'Grass',
        category: 'Physical',
        makesContact: true
    },
    'Lash Out': {
        bp: 75,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        canDouble: true
    },
    'Meteor Beam': {
        bp: 120,
        type: 'Rock',
        category: 'Special'
    },
    'Misty Explosion': {
        bp: 100,
        type: 'Fairy',
        category: 'Special',
        isSpread: true
    },
    'Poltergeist': {
        bp: 110,
        type: 'Ghost',
        category:'Physical'
    },
    'Rising Voltage': {
        bp: 70,
        type: 'Electric',
        category: 'Special'
    },
    'Scale Shot': {
        bp: 20,
        type: 'Dragon',
        category: 'Physical',
        isMultiHit: true,
    },
    'Scorching Sands': {
        bp: 70,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Shell Side Arm': {
        bp: 90,
        type: 'Poison',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Skitter Smack': {
        bp: 70,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
    },
    'Steel Roller': {
        bp: 130,
        type: 'Steel',
        category: 'Physical',
        makesContact: true
    },
    'Surging Strikes': {
        bp: 25,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: true,
        isThreeHit: true,
        isPunch: true,
    },
    'Terrain Pulse': {
        bp: 50,
        type: 'Normal',
        category: 'Special',
        isPulse: true
    },
    'Triple Axel': {
        bp: 20,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        isTripleHit: true
    },
    'Wicked Blow': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        alwaysCrit: true,
        isPunch: true,
    },
    'Astral Barrage': {
        bp: 120,
        type: 'Ghost',
        category: 'Special',
        isSpread: true
    },
    'Dragon Energy': {
        bp: 150,
        type: 'Dragon',
        category: 'Special',
        isSpread: true
    },
    'Eerie Spell': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
    },
    'Fiery Wrath': {
        bp: 90,
        type: 'Dark',
        category: 'Special',
        isSpread: true
    },
    'Freezing Glare': {
        bp: 90,
        type: 'Psychic',
        category: 'Special'
    },
    'Glacial Lance': {
        bp: 130,
        type: 'Ice',
        category: 'Physical',
        isSpread: true
    },
    'Thunder Cage': {
        bp: 80,
        type: 'Electric',
        category: 'Special',
    },
    'Thunderous Kick': {
        bp: 90,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true
    },
    'No Retreat': {

        type: 'Fighting',
        category: 'Status'
    },
    'Octolock': {

        type: 'Fighting',
        category: 'Status'
    },
    'Clangerous Soul': {

        type: 'Dragon',
        category: 'Status'
    },
    'Decorate': {

        type: 'Fairy',
        category: 'Status'
    },
    'Life Dew': {

        type: 'Water',
        category: 'Status'
    },
    'Coaching': {

        type: 'Fighting',
        category: 'Status'
    },
    'Double Iron Bash': {
        bp: 60,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true,
        isPunch: true,
    },
    'Jungle Healing': {

        type: 'Grass',
        category: 'Status'
    },
    'Stuff Cheeks': {

        type: 'Normal',
        category: 'Status'
    },
});

var MAXMOVES_LOOKUP = {
    'Normal':'Max Strike','Fire':'Max Flare','Water':'Max Geyser',
    'Electric':'Max Lightning','Grass':'Max Overgrowth','Ghost':'Max Phantasm',
    'Dark':'Max Darkness','Psychic':'Max Mindstorm','Fighting':'Max Knuckle',
    'Steel':'Max Steelspike','Ice':'Max Hailstorm','Ground':'Max Quake',
    'Rock':'Max Rockfall','Bug':'Max Flutterby','Fairy':'Max Starfall',
    'Flying':'Max Airstream','Dragon':'Max Wyrmwind','Poison':'Max Ooze'
};

var G_MAXMOVES_TYPE = {
    'Charizard-Gmax':'Fire',
    'Butterfree-Gmax':'Bug',
    'Pikachu-Gmax':'Electric',
    'Meowth-Gmax':'Normal',
    'Machamp-Gmax':'Fighting',
    'Gengar-Gmax':'Ghost',
    'Kingler-Gmax':'Water',
    'Lapras-Gmax':'Ice',
    'Eevee-Gmax':'Normal',
    'Snorlax-Gmax':'Normal',
    'Garbodor-Gmax':'Poison',
    'Melmetal-Gmax':'Steel',
    'Corviknight-Gmax':'Flying',
    'Orbeetle-Gmax':'Psychic',
    'Drednaw-Gmax':'Water',
    'Coalossal-Gmax':'Rock',
    'Flapple-Gmax':'Grass',
    'Appletun-Gmax':'Grass',
    'Sandaconda-Gmax':'Ground',
    'Toxtricity-Gmax':'Electric',
    'Centiskorch-Gmax':'Fire',
    'Hatterene-Gmax':'Fairy',
    'Grimmsnarl-Gmax':'Dark',
    'Alcremie-Gmax':'Fairy',
    'Copperajah-Gmax':'Steel',
    'Duraludon-Gmax':'Dragon',
    'Venusaur-Gmax':'Grass',
    'Blastoise-Gmax':'Water',
    'Rillaboom-Gmax':'Grass',
    'Cinderace-Gmax':'Fire',
    'Inteleon-Gmax':'Water',
    'Urshifu-Single Strike-Gmax':'Dark',
    'Urshifu-Rapid Strike-Gmax':'Water',
    }

var G_MAXMOVES_LOOKUP = {
    'Charizard-Gmax': 'G-Max Wildfire',
    'Butterfree-Gmax': 'G-Max Befuddle',
    'Pikachu-Gmax': 'G-Max Volt Crash',
    'Meowth-Gmax': 'G-Max Gold Rush',
    'Machamp-Gmax': 'G-Max Chi Strike',
    'Gengar-Gmax': 'G-Max Terror',
    'Kingler-Gmax': 'G-Max Foam Burst',
    'Lapras-Gmax': 'G-Max Resonance',
    'Eevee-Gmax': 'G-Max Cuddle',
    'Snorlax-Gmax': 'G-Max Replenish',
    'Garbodor-Gmax': 'G-Max Malodor',
    'Melmetal-Gmax': 'G-Max Meltdown',
    'Corviknight-Gmax': 'G-Max Wind Rage',
    'Orbeetle-Gmax': 'G-Max Gravitas',
    'Drednaw-Gmax': 'G-Max Stonesurge',
    'Coalossal-Gmax': 'G-Max Volcalith',
    'Flapple-Gmax': 'G-Max Tartness',
    'Appletun-Gmax': 'G-Max Sweetness',
    'Sandaconda-Gmax': 'G-Max Sandblast',
    'Toxtricity-Gmax': 'G-Max Stun Shock',
    'Centiskorch-Gmax': 'G-Max Centinferno',
    'Hatterene-Gmax': 'G-Max Smite',
    'Grimmsnarl-Gmax': 'G-Max Snooze',
    'Alcremie-Gmax': 'G-Max Finale',
    'Copperajah-Gmax': 'G-Max Steelsurge',
    'Duraludon-Gmax': 'G-Max Depletion',
    'Venusaur-Gmax': 'G-Max Vine Lash',
    'Blastoise-Gmax': 'G-Max Cannonade',
    'Rillaboom-Gmax': 'G-Max Drum Solo',
    'Cinderace-Gmax': 'G-Max Fireball',
    'Inteleon-Gmax': 'G-Max Hydrosnipe',
    'Urshifu-Single Strike-Gmax': 'G-Max One Blow',
    'Urshifu-Rapid Strike-Gmax': 'G-Max Rapid Flow',
};

var MOVES_SS_NATDEX = $.extend(true, {}, MOVES_SS, {});

delete MOVES_SS['Breakneck Blitz'];
delete MOVES_SS['Inferno Overdrive'];
delete MOVES_SS['Bloom Doom'];
delete MOVES_SS['Hydro Vortex'];
delete MOVES_SS['Gigavolt Havoc'];
delete MOVES_SS['Never-Ending Nightmare'];
delete MOVES_SS['Black Hole Eclipse'];
delete MOVES_SS['Shattered Psyche'];
delete MOVES_SS['All-Out Pummeling'];
delete MOVES_SS['Corkscrew Crash'];
delete MOVES_SS['Subzero Slammer'];
delete MOVES_SS['Tectonic Rage'];
delete MOVES_SS['Continental Crush'];
delete MOVES_SS['Savage Spin-Out'];
delete MOVES_SS['Twinkle Tackle'];
delete MOVES_SS['Supersonic Skystrike'];
delete MOVES_SS['Devastating Drake'];
delete MOVES_SS['Acid Downpour'];
delete MOVES_SS['Catastropika'];
delete MOVES_SS['Clangorous Soulblaze'];
delete MOVES_SS['Genesis Supernova'];
delete MOVES_SS['Let\'s Snuggle Forever'];
delete MOVES_SS['Light That Burns the Sky'];
delete MOVES_SS['Malicious Moonsault'];
delete MOVES_SS['Menacing Moonraze Maelstrom'];
delete MOVES_SS['Oceanic Operetta'];
delete MOVES_SS['Pulverizing Pancake'];
delete MOVES_SS['Searing Sunraze Smash'];
delete MOVES_SS['Sinister Arrow Raid'];
delete MOVES_SS['Soul-Stealing 7-Star Strike'];
delete MOVES_SS['Splintered Stormshards'];
delete MOVES_SS['Stoked Sparksurfer'];
delete MOVES_SS['Feint Attack'];
delete MOVES_SS['Frustration'];
delete MOVES_SS['Jump Kick'];
delete MOVES_SS['Mud Bomb'];
delete MOVES_SS['Natural Gift'];
delete MOVES_SS['Pursuit'];
delete MOVES_SS['Return'];
delete MOVES_SS['Signal Beam'];
delete MOVES_SS['Sky Drop'];
delete MOVES_SS['Sky Uppercut'];
delete MOVES_SS['Synchronoise'];
delete MOVES_SS['Twineedle'];
delete MOVES_SS['Wake-Up Slap'];
delete MOVES_SS['Barrage'];
delete MOVES_SS['Bone Club'];
delete MOVES_SS['Bubble'];
delete MOVES_SS['Chip Away'];
delete MOVES_SS['Clamp'];
delete MOVES_SS['Comet Punch'];
delete MOVES_SS['Constrict'];
delete MOVES_SS['Dizzy Punch'];
delete MOVES_SS['Double Slap'];
delete MOVES_SS['Dragon Rage'];
delete MOVES_SS['Egg Bomb'];
delete MOVES_SS['Flame Burst'];
delete MOVES_SS['Heart Stamp'];
delete MOVES_SS['Ice Ball'];
delete MOVES_SS['Karate Chop'];
delete MOVES_SS['Magnet Bomb'];
delete MOVES_SS['Magnitude'];
delete MOVES_SS['Mirror Shot'];
delete MOVES_SS['Needle Arm'];
delete MOVES_SS['Ominous Wind'];
delete MOVES_SS['Psywave'];
delete MOVES_SS['Punishment'];
delete MOVES_SS['Rage'];
delete MOVES_SS['Razor Wind'];
delete MOVES_SS['Rolling Kick'];
delete MOVES_SS['Secret Power'];
delete MOVES_SS['Silver Wind'];
delete MOVES_SS['Smelling Salts'];
delete MOVES_SS['Sonic Boom'];
delete MOVES_SS['Spike Cannon'];
delete MOVES_SS['Steamroller'];
delete MOVES_SS['Trump Card'];
delete MOVES_SS['Wring Out'];
delete MOVES_SS['Hidden Power Fire'];
delete MOVES_SS['Hidden Power Water'];
delete MOVES_SS['Hidden Power Grass'];
delete MOVES_SS['Hidden Power Electric'];
delete MOVES_SS['Hidden Power Ghost'];
delete MOVES_SS['Hidden Power Dark'];
delete MOVES_SS['Hidden Power Psychic'];
delete MOVES_SS['Hidden Power Fighting'];
delete MOVES_SS['Hidden Power Steel'];
delete MOVES_SS['Hidden Power Ice'];
delete MOVES_SS['Hidden Power Ground'];
delete MOVES_SS['Hidden Power Rock'];
delete MOVES_SS['Hidden Power Bug'];
delete MOVES_SS['Hidden Power Flying'];
delete MOVES_SS['Hidden Power Dragon'];
delete MOVES_SS['Hidden Power Poison'];

var MOVES_SV_NATDEX = $.extend(true, {}, MOVES_SS_NATDEX, {
    //Past move changes that aren't nerfs or buffs
    //'Cut': {
    //    isSlice: true,
    //},
    'Razor Leaf': {
        isSlice: true,
    },
    //'Slash': {
    //    isSlice: true,
    //},
    //'Fury Cutter': {
    //    isSlice: true,
    //},
    'Air Cutter': {
        isSlice: true,
        isWind: true,
    },
    'Aerial Ace': {
        isSlice: true,
    },
    'Leaf Blade': {
        isSlice: true,
    },
    'Night Slash': {
        isSlice: true,
    },
    'Air Slash': {
        isSlice: true,
    },
    'X-Scissor': {
        isSlice: true,
    },
    'Psycho Cut': {
        isSlice: true,
    },
    'Cross Poison': {
        isSlice: true,
    },
    'Sacred Sword': {
        isSlice: true,
    },
    'Razor Shell': {
        isSlice: true,
    },
    'Solar Blade': {
        isSlice: true,
    },
    'Behemoth Blade': {
        isSlice: true,
    },
    //'Gust': {
    //    isWind: true,
    //},
    'Blizzard': {
        isWind: true,
    },
    'Icy Wind': {
        isWind: true,
    },
    //'Twister': {
    //    isWind: true,
    //},
    'Heat Wave': {
        isWind: true,
    },
    'Hurricane': {
        isWind: true,
    },
    'Petal Blizzard': {
        isWind: true,
    },
    //'Fairy Wind': {
    //    isWind: true,
    //},

    //Past move nerfs/buffs
    'Wicked Blow': {
        bp: 75,
    },
    'Grassy Glide': {
        bp: 60,
    },
    'Glacial Lance': {
        bp: 120,
    },

    //PLA moves
    'Dire Claw': {
        bp: 80,
        type: 'Poison',
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
    },
    'Psyshield Bash': {
        bp: 70,
        type: 'Psychic',
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
    },
    'Power Shift': {
        type: 'Normal',
        category: 'Status',
    },
    'Stone Axe': {
        bp: 65,
        type: 'Rock',
        category: 'Physical',
        makesContact: true,
        isSlice: true,
    },
    'Springtide Storm': {
        bp: 100,
        type: 'Fairy',
        category: 'Special',
        hasSecondaryEffect: true,
        isWind: true,
        isSpread: true,
    },
    'Mystical Power': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Raging Fury': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
    },
    'Wave Crash': {
        bp: 120,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
    },
    'Chloroblast': {
        bp: 150,
        type: 'Grass',
        category: 'Special',
    },
    'Mountain Gale': {
        bp: 100,
        type: 'Ice',
        category: 'Physical',
        hasSecondaryEffect: true,
    },
    'Victory Dance': {
        type: 'Fighting',
        category: 'Status',
    },
    'Headlong Rush': {
        bp: 120,
        type: 'Ground',
        category: 'Physical',
        isPunch: true,
        makesContact: true,
    },
    'Barb Barrage': {
        bp: 60,
        type: 'Poison',
        category: 'Physical',
        hasSecondaryEffect: true,
    },
    'Esper Wing': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Bitter Malice': {
        bp: 75,
        type: 'Ghost',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Shelter': {
        type: 'Steel',
        category: 'Status',
    },
    'Triple Arrows': {
        bp: 90,
        type: 'Fighting',
        category: 'Physical',
        hasSecondaryEffect: true,
    },
    'Infernal Parade': {
        bp: 60,
        type: 'Ghost',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Ceaseless Edge': {
        bp: 65,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        isSlice: true,
    },
    'Bleakwind Storm': {
        bp: 100,
        type: 'Flying',
        category: 'Special',
        hasSecondaryEffect: true,
        isWind: true,
        isSpread: true,
    },
    'Wildbolt Storm': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        isWind: true,
        isSpread: true,
    },
    'Sandsear Storm': {
        bp: 100,
        type: 'Ground',
        category: 'Special',
        hasSecondaryEffect: true,
        isWind: true,
        isSpread: true,
    },
    'Lunar Blessing': {
        type: 'Psychic',
        category: 'Status',
    },
    'Take Heart': {
        type: 'Psychic',
        category: 'Status',
    },

    //SV moves
    'Tera Blast': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
    },
    'Silk Trap': {
        type: 'Bug',
        category: 'Status',
    },
    'Axe Kick': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
    },
    'Last Respects': {
        bp: 50,
        type: 'Ghost',
        category: 'Physical',
    },
    'Lumina Crash': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Order Up': {
        bp: 80,
        type: 'Dragon',
        category: 'Physical',
    },
    'Jet Punch': {
        bp: 60,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
        isPriority: true,
    },
    'Spicy Extract': {
        type: 'Grass',
        category: 'Status',
    },
    'Spin Out': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
    },
    'Population Bomb': {
        bp: 20,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isSlice: true,
        isTenMultiHit: true,
    },
    'Ice Spinner': {
        bp: 80,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
    },
    'Glaive Rush': {
        bp: 120,
        type: 'Dragon',
        category: 'Physical',
        makesContact: true,
    },
    'Revival Blessing': {
        type: 'Normal',
        category: 'Status',
    },
    'Salt Cure': {
        bp: 40,
        type: 'Rock',
        category: 'Physical',
    },
    'Triple Dive': {
        bp: 30,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        isThreeHit: true,
    },
    'Mortal Spin': {
        bp: 30,
        type: 'Poison',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isSpread: true,
    },
    'Doodle': {
        type: 'Normal',
        category: 'Status',
    },
    'Fillet Away': {
        type: 'Normal',
        category: 'Status',
    },
    'Kowtow Cleave': {
        bp: 85,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        isSlice: true,
    },
    'Flower Trick': {
        bp: 70,
        type: 'Grass',
        category: 'Physical',
        alwaysCrit: true,
    },
    'Torch Song': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        isSound: true,
        hasSecondaryEffect: true,
    },
    'Aqua Step': {
        bp: 80,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
    },
    'Raging Bull': {
        bp: 90,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        ignoreScreens: true,
    },
    'Make It Rain': {
        bp: 120,
        type: 'Steel',
        category: 'Special',
        isSpread: true,
    },
    'Ruination': {
        bp: 1,
        type: 'Dark',
        category: 'Special',
    },
    'Collision Course': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        //!!consider conditional here for additional SE damage
    },
    'Electro Drift': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        makesContact: true,
        //!!same conditional as above
    },
    'Shed Tail': {
        type: 'Normal',
        category: 'Status',
    },
    'Chilly Reception': {
        type: 'Ice',
        category: 'Status',
    },
    'Tidy Up': {
        type: 'Normal',
        category: 'Status',
    },
    'Snowscape': {
        type: 'Ice',
        category: 'Status',
    },
    'Pounce': {
        bp: 50,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
    },
    'Trailblaze': {
        bp: 50,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
    },
    'Chilling Water': {
        bp: 50,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
    },
    'Hyper Drill': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
    },
    'Twin Beam': {
        bp: 40,
        type: 'Psychic',
        category: 'Special',
        isTwoHit: true,
    },
    'Rage Fist': {
        bp: 50,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        isPunch: true,
    },
    'Armor Cannon': {
        bp: 120,
        type: 'Fire',
        category: 'Special',
    },
    'Bitter Blade': {
        bp: 90,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        isSlice: true,
    },
    'Double Shock': {
        bp: 120,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
    },
    'Gigaton Hammer': {
        bp: 160,
        type: 'Steel',
        category: 'Physical',
    },
    //'Comeuppance': {
    //    bp: 1,
    //    type: 'Dark',
    //    category: 'Physical',
    //    makesContact: true,
    //},
    'Aqua Cutter': {
        bp: 70,
        type: 'Water',
        category: 'Physical',
        isSlice: true,
    },
    'Blazing Torque': {
        bp: 80,
        type: 'Fire',
        category: 'Physical',
        hasSecondaryEffect: true,
    },
    'Wicked Torque': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        hasSecondaryEffect: true,
    },
    'Noxious Torque': {
        bp: 100,
        type: 'Poison',
        category: 'Physical',
        hasSecondaryEffect: true,
    },
    'Combat Torque': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        hasSecondaryEffect: true,
    },
    'Magical Torque': {
        bp: 100,
        type: 'Fairy',
        category: 'Physical',
        hasSecondaryEffect: true,
    },
});

var MOVES_SV = $.extend(true, {}, MOVES_SV_NATDEX, {});

[   //Max Moves
    'Max Strike', 'Max Flare', 'Max Geyser', 'Max Lightning', 'Max Overgrowth',
    'Max Phantasm', 'Max Darkness', 'Max Mindstorm', 'Max Knuckle', 'Max Steelspike',
    'Max Hailstorm', 'Max Quake', 'Max Rockfall', 'Max Flutterby', 'Max Starfall',
    'Max Airstream', 'Max Wyrmwind', 'Max Ooze', 'G-Max Wildfire', 'G-Max Befuddle',
    'G-Max Volt Crash', 'G-Max Gold Rush', 'G-Max Chi Strike', 'G-Max Terror', 'G-Max Foam Burst',
    'G-Max Resonance', 'G-Max Cuddle', 'G-Max Replenish', 'G-Max Malodor', 'G-Max Meltdown',
    'G-Max Wind Rage', 'G-Max Gravitas', 'G-Max Stonesurge', 'G-Max Volcalith', 'G-Max Tartness',
    'G-Max Sweetness', 'G-Max Sandblast', 'G-Max Stun Shock', 'G-Max Centinferno', 'G-Max Smite',
    'G-Max Snooze', 'G-Max Finale', 'G-Max Steelsurge', 'G-Max Depletion', 'G-Max Vine Lash',
    'G-Max Cannonade', 'G-Max Drum Solo', 'G-Max Fireball', 'G-Max Hydrosnipe',
    'G-Max One Blow', 'G-Max Rapid Flow',
    //Z-moves
    'Breakneck Blitz', 'All-Out Pummeling', 'Supersonic Skystrike', 'Acid Downpour', 'Tectonic Rage',
    'Continental Crush', 'Savage Spin-Out', 'Never-Ending Nightmare', 'Corkscrew Crash', 'Inferno Overdrive',
    'Hydro Vortex', 'Bloom Doom', 'Gigavolt Havoc', 'Shattered Psyche', 'Subzero Slammer',
    'Devastating Drake', 'Black Hole Eclipse', 'Twinkle Tackle', 'Catastropika', 'Sinister Arrow Raid',
    'Malicious Moonsault', 'Oceanic Operetta', 'Guardian of Alola', 'Soul-Stealing 7-Star Strike', 'Stoked Sparksurfer',
    'Pulverizing Pancake', 'Extreme Evoboost', 'Genesis Supernova', '10,000,000 Volt Thunderbolt', 'Light That Burns the Sky',
    'Searing Sunraze Smash', 'Menacing Moonraze Maelstrom', 'Let\'s Snuggle Forever', 'Splintered Stormshards', 'Clangorous Soulblaze',
    //Hidden Power
    'Hidden Power Fire', 'Hidden Power Water', 'Hidden Power Grass', 'Hidden Power Electric', 'Hidden Power Psychic',
    'Hidden Power Ice', 'Hidden Power Dragon', 'Hidden Power Dark', 'Hidden Power Fighting', 'Hidden Power Flying',
    'Hidden Power Poison', 'Hidden Power Ground', 'Hidden Power Rock', 'Hidden Power Bug', 'Hidden Power Ghost', 'Hidden Power Steel',
    //deleted SWSH moves
    'Karate Chop', 'Double Slap', 'Comet Punch', 'Razor Wind', 'Jump Kick', 'Rolling Kick', 'Twineedle', 'Sonic Boom',
    'Dragon Rage', 'Meditate', 'Rage', 'Barrier', 'Bide', 'Mirror Move', 'Egg Bomb', 'Bone Club',
    'Clamp', 'Spike Cannon', 'Constrict', 'Barrage', 'Bubble', 'Dizzy Punch', 'Flash', 'Psywave',
    'Sharpen', 'Spider Web', 'Nightmare', 'Feint Attack', 'Foresight', 'Return', 'Frustration', 'Magnitude',
    'Pursuit', 'Hidden Power', 'Smelling Salts', 'Assist', 'Refresh', 'Snatch', 'Secret Power', 'Camouflage',
    'Tail Glow', 'Mud Sport', 'Ice Ball', 'Needle Arm', 'Odor Sleuth', 'Silver Wind', 'Grass Whistle', 'Signal Beam',
    'Sky Uppercut', 'Water Sport', 'Psycho Boost', 'Miracle Eye', 'Wake-Up Slap', 'Natural Gift', 'Embargo', 'Trump Card',
    'Heal Block', 'Wring Out', 'Lucky Chant', 'Me First', 'Punishment', 'Mud Bomb', 'Mirror Shot', 'Rock Climb',
    'Magnet Bomb', 'Captivate', 'Heal Order', 'Ominous Wind', 'Telekinesis', 'Flame Burst', 'Synchronoise', 'Chip Away',
    'Sky Drop', 'Bestow', 'Heart Stamp', 'Steamroller', 'Rototiller', 'Ion Deluge', 'Spotlight', 'Laser Focus', 'Gear Up',
    //deleted SV moves
    'Submission', 'Skull Bash', 'Hyper Fang', 'Mind Reader', 'Vital Throw', 'Hail', 'Nature Power', 'Magic Coat',
    'Revenge', 'Grudge', 'Aromatherapy', 'Doom Desire', 'Psycho Shift', 'Heart Swap', 'Autotomize', 'Dual Chop',
    'Leaf Tornado', 'Mat Block', 'Crafty Shield', 'Flower Shield', 'Venom Drench', 'Powder', 'Power-Up Punch', 'Dragon Hammer',
    'Eternabeam',
].forEach(e => delete MOVES_SV[e]);
