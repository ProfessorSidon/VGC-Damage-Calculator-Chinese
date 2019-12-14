function translate(str) {

	let word_idxs = [], idx_wordStart = -1, idx_last = -1, idx;
	for (let i = 0; i < str.length; i += 1) {
		let c = str[i];
		if (!/[a-zA-Z0-9]/.test(c)) {
			if (i == idx_last + 1) {
				idx_last = idx_wordStart = i;
				continue;
			} else {
				word_idxs.push([idx_wordStart + 1, i]);
				idx_last = idx_wordStart = i;
			}
		}
	}

	if (idx_wordStart < str.length - 1) word_idxs.push([idx_wordStart + 1, str.length]);

	let names = [];
	for (let wordN = Math.min(5, word_idxs.length); wordN >= 1; wordN -= 1) {
		for (let i = 0; i <= word_idxs.length - wordN; i += 1) {
			let name = str.substring(word_idxs[i][0], word_idxs[i + wordN - 1][1]),
				remain = str.substring(word_idxs[i + wordN - 1][1]);
			names.push([name, remain]);
		}
	}

	const TRYLIST = [
		translate_pokemon,
		translate_move,
		translate_ability,
		translate_item,
		translate_nature
	];

	for (let i = 0; i < names.length; i += 1) {
		let name = names[i];
		for (translateFunc of TRYLIST) {
			let trans = translateFunc(name[0]);
			if (trans != name[0]) {
				return '' + trans + name[1];
			}
		}
	}
}

var ABILITYNAMES = { "Stench": "恶臭", "Drizzle": "降雨", "Speed Boost": "加速", "Battle Armor": "战斗盔甲", "Sturdy": "结实", "Damp": "湿气", "Limber": "柔软", "Sand Veil": "沙隐", "Static": "静电", "Volt Absorb": "蓄电", "Water Absorb": "储水", "Oblivious": "迟钝", "Cloud Nine": "无关天气", "Compound Eyes": "复眼", "Insomnia": "不眠", "Color Change": "变色", "Immunity": "免疫", "Flash Fire": "引火", "Shield Dust": "鳞粉", "Own Tempo": "我行我素", "Suction Cups": "吸盘", "Intimidate": "威吓", "Shadow Tag": "踩影", "Rough Skin": "粗糙皮肤", "Wonder Guard": "神奇守护", "Levitate": "飘浮", "Effect Spore": "孢子", "Synchronize": "同步", "Clear Body": "恒净之躯", "Natural Cure": "自然回复", "Lightning Rod": "避雷针", "Lightningrod": "避雷针", "Serene Grace": "天恩", "Swift Swim": "悠游自如", "Chlorophyll": "叶绿素", "Illuminate": "发光", "Trace": "复制", "Huge Power": "大力士", "Poison Point": "毒刺", "Inner Focus": "精神力", "Magma Armor": "熔岩铠甲", "Water Veil": "水幕", "Magnet Pull": "磁力", "Soundproof": "隔音", "Rain Dish": "雨盘", "Sand Stream": "扬沙", "Pressure": "压迫感", "Thick Fat": "厚脂肪", "Early Bird": "早起", "Flame Body": "火焰之躯", "Run Away": "逃跑", "Keen Eye": "锐利目光", "Hyper Cutter": "怪力钳", "Pickup": "捡拾", "Truant": "懒惰", "Hustle": "活力", "Cute Charm": "迷人之躯", "Plus": "正电", "Minus": "负电", "Forecast": "阴晴不定", "Sticky Hold": "黏着", "Shed Skin": "蜕皮", "Guts": "毅力", "Marvel Scale": "神奇鳞片", "Liquid Ooze": "污泥浆", "Overgrow": "茂盛", "Blaze": "猛火", "Torrent": "激流", "Swarm": "虫之预感", "Rock Head": "坚硬脑袋", "Drought": "日照", "Arena Trap": "沙穴", "Vital Spirit": "干劲", "White Smoke": "白色烟雾", "Pure Power": "瑜伽之力", "Shell Armor": "硬壳盔甲", "Air Lock": "气闸", "Tangled Feet": "蹒跚", "Motor Drive": "电气引擎", "Rivalry": "斗争心", "Steadfast": "不屈之心", "Snow Cloak": "雪隐", "Gluttony": "贪吃鬼", "Anger Point": "愤怒穴位", "Unburden": "轻装", "Heatproof": "耐热", "Simple": "单纯", "Dry Skin": "干燥皮肤", "Download": "下载", "Iron Fist": "铁拳", "Poison Heal": "毒疗", "Adaptability": "适应力", "Skill Link": "连续攻击", "Hydration": "湿润之躯", "Solar Power": "太阳之力", "Quick Feet": "飞毛腿", "Normalize": "一般皮肤", "Sniper": "狙击手", "Magic Guard": "魔法防守", "No Guard": "无防守", "Stall": "慢出", "Technician": "技术高手", "Leaf Guard": "叶子防守", "Klutz": "笨拙", "Mold Breaker": "破格", "Super Luck": "超幸运", "Aftermath": "引爆", "Anticipation": "危险预知", "Forewarn": "预知梦", "Unaware": "纯朴", "Tinted Lens": "有色眼镜", "Filter": "过滤", "Slow Start": "慢启动", "Scrappy": "胆量", "Storm Drain": "引水", "Ice Body": "冰冻之躯", "Solid Rock": "坚硬岩石", "Snow Warning": "降雪", "Honey Gather": "采蜜", "Frisk": "察觉", "Reckless": "舍身", "Multitype": "多属性", "Flower Gift": "花之礼", "Bad Dreams": "梦魇", "Pickpocket": "顺手牵羊", "Sheer Force": "强行", "Contrary": "唱反调", "Unnerve": "紧张感", "Defiant": "不服输", "Defeatist": "软弱", "Cursed Body": "诅咒之躯", "Healer": "治愈之心", "Friend Guard": "友情防守", "Weak Armor": "碎裂铠甲", "Heavy Metal": "重金属", "Light Metal": "轻金属", "Multiscale": "多重鳞片", "Toxic Boost": "中毒激升", "Flare Boost": "受热激升", "Harvest": "收获", "Telepathy": "心灵感应", "Moody": "心情不定", "Overcoat": "防尘", "Poison Touch": "毒手", "Regenerator": "再生力", "Big Pecks": "健壮胸肌", "Sand Rush": "拨沙", "Wonder Skin": "奇迹皮肤", "Analytic": "分析", "Illusion": "幻觉", "Imposter": "变身者", "Infiltrator": "穿透", "Mummy": "木乃伊", "Moxie": "自信过度", "Justified": "正义之心", "Rattled": "胆怯", "Magic Bounce": "魔法镜", "Sap Sipper": "食草", "Prankster": "恶作剧之心", "Sand Force": "沙之力", "Iron Barbs": "铁刺", "Zen Mode": "达摩模式", "Victory Star": "胜利之星", "Turboblaze": "涡轮火焰", "Teravolt": "兆级电压", "Aroma Veil": "芳香幕", "Flower Veil": "花幕", "Cheek Pouch": "颊囊", "Protean": "变幻自如", "Fur Coat": "毛皮大衣", "Magician": "魔术师", "Bulletproof": "防弹", "Competitive": "好胜", "Strong Jaw": "强壮之颚", "Refrigerate": "冰冻皮肤", "Sweet Veil": "甜幕", "Stance Change": "战斗切换", "Gale Wings": "疾风之翼", "Mega Launcher": "超级发射器", "Grass Pelt": "草之毛皮", "Symbiosis": "共生", "Tough Claws": "硬爪", "Pixilate": "妖精皮肤", "Gooey": "黏滑", "Aerilate": "飞行皮肤", "Parental Bond": "亲子爱", "Dark Aura": "暗黑气场", "Fairy Aura": "妖精气场", "Aura Break": "气场破坏", "Primordial Sea": "始源之海", "Desolate Land": "终结之地", "Delta Stream": "德尔塔气流", "Stamina": "持久力", "Wimp Out": "跃跃欲逃", "Emergency Exit": "危险回避", "Water Compaction": "遇水凝固", "Merciless": "不仁不义", "Shields Down": "界限盾壳", "Stakeout": "蹲守", "Water Bubble": "水泡", "Steelworker": "钢能力者", "Berserk": "怒火冲天", "Slush Rush": "拨雪", "Long Reach": "远隔", "Liquid Voice": "湿润之声", "Triage": "先行治疗", "Galvanize": "电气皮肤", "Surge Surfer": "冲浪之尾", "Schooling": "鱼群", "Disguise": "画皮", "Battle Bond": "牵绊变身", "Power Construct": "群聚变形", "Corrosion": "腐蚀", "Comatose": "绝对睡眠", "Queenly Majesty": "女王的威严", "Innards Out": "飞出的内在物", "Dancer": "舞者", "Battery": "蓄电池", "Fluffy": "毛茸茸", "Dazzling": "鮮艷之軀", "Soul-Heart": "魂心", "Tangling Hair": "卷发", "Receiver": "接球手", "Power of Alchemy": "化学之力", "Beast Boost": "异兽提升", "RKS System": "ＡＲ系统", "Electric Surge": "电气制造者", "Psychic Surge": "精神制造者", "Misty Surge": "薄雾制造者", "Grassy Surge": "青草制造者", "Full Metal Body": "金属防护", "Shadow Shield": "幻影防守", "Prism Armor": "棱镜装甲", "Gorilla Tactics": "一猩一意", "Ice Scales": "冰鳞粉", "Intrepid Sword": "不挠之剑", "Dauntless Shield": "不屈之盾", "Libero": "自由者", "Neuroforce": "脑核之力", "Power Spot": "能量点", "Punk Rock": "庞克摇滚"}

function translate_ability(name) {
	if (name == null) return null;

	let idx = name.indexOf('(activated)');

	if (idx != -1)
		return translate_ability(name.substring(0, idx - 1)) + ' (激活)';

	return ABILITYNAMES[name] || name;
}
var FIELDNAMES = {
	"Sun": "阳光",
	"Rain": "下雨",
	"Sand": "沙暴",
	"Hail": "冰雹",
	"Harsh Sun": "日光非常猛烈",
	"Heavy Rain": "下大雨",
	"Strong Wind": "空气湍流",
	"Aura Break": "气场破坏",
	"Fairy Aura": "妖精气场",
	"Dark Aura": "暗黑气场",
	"Gravity": "岩石",
	"Electric": "电气场地",
	"Grassy": "青草场地",
	"Misty": "薄雾场地",
	"Psychic": "精神场地",
}

function translate_field(name) {
	if (name == null) return null;

	return FIELDNAMES[name] || name;
}
var ITEMNAMES = { "Repel": "除虫喷雾", "Super Repel": "白银喷雾", "Max Repel": "黄金喷雾", "Escape Rope": "离洞绳", "Normal Box": "木箱", "Gorgeous Box": "桐木箱", "Slowpoke Tail": "美味尾巴", "Blue Flute": "蓝色玻璃哨", "Yellow Flute": "黄色玻璃哨", "Red Flute": "红色玻璃哨", "Black Flute": "黑色玻璃哨", "White Flute": "白色玻璃哨", "Shoal Salt": "浅滩海盐", "Shoal Shell": "浅滩贝壳", "Red Shard": "红色碎片", "Blue Shard": "蓝色碎片", "Yellow Shard": "黄色碎片", "Green Shard": "绿色碎片", "Honey": "甜甜蜜", "Growth Mulch": "速速肥", "Damp Mulch": "湿湿肥", "Stable Mulch": "久久肥", "Gooey Mulch": "粘粘肥", "Rich Mulch": "硕果肥", "Surprise Mulch": "吃惊肥", "Boost Mulch": "劲劲肥", "Amaze Mulch": "超效肥", "Pass Orb": "释出之玉", "Ability Capsule": "特性胶囊", "Strange Souvenir": "神秘摆设", "Discount Coupon": "折价券", "Bottle Cap": "银色王冠", "Gold Bottle Cap": "金色王冠", "Festival Ticket": "圆庆票", "Helix Fossil": "贝壳化石", "Dome Fossil": "甲壳化石", "Old Amber": "秘密琥珀", "Armor Fossil": "盾甲化石", "Root Fossil": "根状化石", "Claw Fossil": "爪子化石", "Skull Fossil": "头盖化石", "Cover Fossil": "背盖化石", "Plume Fossil": "羽毛化石", "Jaw Fossil": "颚之化石", "Sail Fossil": "鳍之化石", "Sun Stone": "日之石", "Moon Stone": "月之石", "Fire Stone": "火之石", "Thunder Stone": "雷之石", "Water Stone": "水之石", "Leaf Stone": "叶之石", "Shiny Stone": "光之石", "Dusk Stone": "暗之石", "Dawn Stone": "觉醒之石", "Ice Stone": "冰之石", "Tiny Mushroom": "小蘑菇", "Big Mushroom": "大蘑菇", "Pearl": "珍珠", "Big Pearl": "大珍珠", "Stardust": "星星沙子", "Star Piece": "星星碎片", "Gold Leaf": "金叶", "Silver Leaf": "银叶", "Brick Piece": "砖瓦碎片", "Nugget": "金珠", "Heart Scale": "心之鳞片", "Rare Bone": "贵重骨头", "Pretty Wing": "美丽之羽", "Balm Mushroom": "芳香蘑菇", "Big Nugget": "巨大金珠", "Pearl String": "丸子珍珠", "Comet Shard": "彗星碎片", "Relic Copper": "古代铜币", "Relic Silver": "古代银币", "Relic Gold": "古代金币", "Relic Vase": "古代之壶", "Relic Band": "古代手镯", "Relic Statue": "古代石像", "Relic Crown": "古代王冠", "Bright Powder": "光粉", "Exp. Share": "学习装置", "Quick Claw": "先制之爪", "King's Rock": "王者之证", "Silver Powder": "银粉", "Amulet Coin": "护符金币", "Cleanse Tag": "洁净之符", "Soul Dew": "心之水滴", "Smoke Ball": "烟雾球", "Everstone": "不变之石", "Focus Band": "气势头带", "Lucky Egg": "幸运蛋", "Scope Lens": "焦点镜", "Metal Coat": "金属膜", "Leftovers": "吃剩的东西", "Dragon Scale": "龙之鳞片", "Light Ball": "电气球", "Soft Sand": "柔软沙子", "Hard Stone": "硬石头", "Miracle Seed": "奇迹种子", "Black Glasses": "黑色眼镜", "Black Belt": "黑带", "Magnet": "磁铁", "Mystic Water": "神秘水滴", "Sharp Beak": "锐利鸟嘴", "Poison Barb": "毒针", "Never-Melt Ice": "不融冰", "Spell Tag": "诅咒之符", "Twisted Spoon": "弯曲的汤匙", "Charcoal": "木炭", "Dragon Fang": "龙之牙", "Pink Ribbon": "粉红色丝带", "Polkadot Bow": "水玉色之带", "Berserk Gene": "破坏性的遗传因子", "Up-Grade": "升级数据", "Lucky Punch": "吉利拳", "Metal Powder": "金属粉", "Thick Club": "粗骨头", "Stick": "大葱", "White Herb": "白色香草", "Mental Herb": "心灵香草", "Macho Brace": "强制锻炼器", "Soothe Bell": "安抚之铃", "Choice Band": "讲究头带", "Deep Sea Tooth": "深海之牙", "Deep Sea Scale": "深海鳞片", "Silk Scarf": "丝绸围巾", "Shell Bell": "贝壳之铃", "Sea Incense": "海潮熏香", "Lax Incense": "悠闲熏香", "Red Scarf": "红色头巾", "Blue Scarf": "蓝色头巾", "Pink Scarf": "粉红头巾", "Green Scarf": "绿色头巾", "Yellow Scarf": "黄色头巾", "Flame Plate": "火球石板", "Splash Plate": "水滴石板", "Zap Plate": "雷电石板", "Meadow Plate": "碧绿石板", "Icicle Plate": "冰柱石板", "Fist Plate": "拳头石板", "Toxic Plate": "剧毒石板", "Earth Plate": "大地石板", "Sky Plate": "蓝天石板", "Mind Plate": "神奇石板", "Insect Plate": "玉虫石板", "Stone Plate": "岩石石板", "Spooky Plate": "妖怪石板", "Draco Plate": "龙之石板", "Dread Plate": "恶颜石板", "Iron Plate": "钢铁石板", "Oval Stone": "浑圆之石", "Odd Keystone": "楔石", "Adamant Orb": "金刚宝珠", "Lustrous Orb": "白玉宝珠", "Griseous Orb": "白金宝珠", "Odd Incense": "奇异熏香", "Rock Incense": "岩石熏香", "Full Incense": "饱腹熏香", "Wave Incense": "涟漪熏香", "Rose Incense": "花朵熏香", "Luck Incense": "幸运熏香", "Pure Incense": "洁净熏香", "Protector": "护具", "Electirizer": "电力增幅器", "Magmarizer": "熔岩增幅器", "Dubious Disc": "可疑补丁", "Reaper Cloth": "灵界之布", "Razor Claw": "锐利之爪", "Razor Fang": "锐利之牙", "Wide Lens": "广角镜", "Muscle Band": "力量头带", "Wise Glasses": "博识眼镜", "Expert Belt": "达人带", "Light Clay": "光之黏土", "Life Orb": "生命宝珠", "Power Herb": "强力香草", "Toxic Orb": "剧毒宝珠", "Flame Orb": "火焰宝珠", "Quick Powder": "速度粉", "Focus Sash": "气势披带", "Zoom Lens": "对焦镜", "Metronome": "节拍器", "Iron Ball": "黑色铁球", "Lagging Tail": "后攻之尾", "Destiny Knot": "红线", "Black Sludge": "黑色污泥", "Icy Rock": "冰冷岩石", "Smooth Rock": "沙沙岩石", "Heat Rock": "炽热岩石", "Damp Rock": "潮湿岩石", "Grip Claw": "紧缠钩爪", "Choice Scarf": "讲究围巾", "Sticky Barb": "附着针", "Power Bracer": "力量护腕", "Power Belt": "力量腰带", "Power Lens": "力量镜", "Power Band": "力量束带", "Power Anklet": "力量护踝", "Power Weight": "力量负重", "Shed Shell": "美丽空壳", "Big Root": "大根茎", "Choice Specs": "讲究眼镜", "Douse Drive": "水流卡带", "Shock Drive": "闪电卡带", "Burn Drive": "火焰卡带", "Chill Drive": "冰冻卡带", "Prism Scale": "美丽鳞片", "Eviolite": "进化奇石", "Float Stone": "轻石", "Rocky Helmet": "凸凸头盔", "Air Balloon": "气球", "Red Card": "红牌", "Ring Target": "标靶", "Binding Band": "紧绑束带", "Absorb Bulb": "球根", "Cell Battery": "充电电池", "Eject Button": "逃脱按键", "Fire Gem": "火之宝石", "Water Gem": "水之宝石", "Electric Gem": "电之宝石", "Grass Gem": "草之宝石", "Ice Gem": "冰之宝石", "Fighting Gem": "格斗宝石", "Poison Gem": "毒之宝石", "Ground Gem": "地面宝石", "Flying Gem": "飞行宝石", "Psychic Gem": "超能力宝石", "Bug Gem": "虫之宝石", "Rock Gem": "岩石宝石", "Ghost Gem": "幽灵宝石", "Dragon Gem": "龙之宝石", "Dark Gem": "恶之宝石", "Steel Gem": "钢之宝石", "Normal Gem": "一般宝石", "Weakness Policy": "弱点保险", "Assault Vest": "突击背心", "Pixie Plate": "妖精石板", "Fairy Gem": "妖精宝石", "Whipped Dream": "泡沫奶油", "Sachet": "香袋", "Luminous Moss": "光苔", "Snowball": "雪球", "Safety Goggles": "防尘护目镜", "Venusaurite": "妙蛙花进化石", "Charizardite X": "喷火龙进化石Ｘ", "Charizardite Y": "喷火龙进化石Ｙ", "Blastoisinite": "水箭龟进化石", "Beedrillite": "大针蜂进化石", "Pidgeotite": "大比鸟进化石", "Alakazite": "胡地进化石", "Slowbronite": "呆壳兽进化石", "Gengarite": "耿鬼进化石", "Kangaskhanite": "袋兽进化石", "Pinsirite": "凯罗斯进化石", "Gyaradosite": "暴鲤龙进化石", "Aerodactylite": "化石翼龙进化石", "Mewtwoite X": "超梦进化石Ｘ", "Mewtwoite Y": "超梦进化石Ｙ", "Ampharosite": "电龙进化石", "Steelixite": "大钢蛇进化石", "Scizorite": "巨钳螳螂进化石", "Heracronite": "赫拉克罗斯进化石", "Houndoomite": "黑鲁加进化石", "Tyranitarite": "班吉拉斯进化石", "Sceptilite": "蜥蜴王进化石", "Blazikenite": "火焰鸡进化石", "Swampertite": "巨沼怪进化石", "Gardevoirnite": "沙奈朵进化石", "Sablenite": "勾魂眼进化石", "Mawilite": "大嘴娃进化石", "Aggronite": "波士可多拉进化石", "Medichamite": "恰雷姆进化石", "Manectite": "雷电兽进化石", "Sharpedonite": "巨牙鲨进化石", "Cameruptite": "喷火驼进化石", "Altarianite": "七夕青鸟进化石", "Banettite": "诅咒娃娃进化石", "Absolite": "阿勃梭鲁进化石", "Glalitite": "冰鬼护进化石", "Salamencite": "暴飞龙进化石", "Metagrossite": "巨金怪进化石", "Latiasite": "拉帝亚斯进化石", "Latiosite": "拉帝欧斯进化石", "Lopunnite": "长耳兔进化石", "Lucarionite": "路卡利欧进化石", "Garchompite": "烈咬陆鲨进化石", "Abomasite": "暴雪王进化石", "Galladite": "艾路雷朵进化石", "Audinite": "差不多娃娃进化石", "Diancite": "蒂安希进化石", "Red Orb": "朱红色宝珠", "Blue Orb": "靛蓝色宝珠", "Red Nectar": "朱红色花蜜", "Yellow Nectar": "金黄色花蜜", "Pink Nectar": "桃粉色花蜜", "Purple Nectar": "兰紫色花蜜", "Adrenaline Orb": "胆怯球", "Normalium Z": "一般Ｚ", "Firium Z": "火Ｚ", "Waterium Z": "水Ｚ", "Electrium Z": "电Ｚ", "Grassium Z": "草Ｚ", "Icium Z": "冰Ｚ", "Fightinium Z": "格斗Ｚ", "Poisonium Z": "毒Ｚ", "Groundium Z": "地面Ｚ", "Flyinium Z": "飞行Ｚ", "Psychium Z": "超能力Ｚ", "Buginium Z": "虫Ｚ", "Rockium Z": "岩石Ｚ", "Ghostium Z": "幽灵Ｚ", "Dragonium Z": "龙Ｚ", "Darkinium Z": "恶Ｚ", "Steelium Z": "钢Ｚ", "Fairium Z": "妖精Ｚ", "Pikanium Z": "皮卡丘Ｚ", "Decidium Z": "狙射树枭Ｚ", "Incinium Z": "炽焰咆哮虎Ｚ", "Primarium Z": "西狮海壬Ｚ", "Tapunium Z": "卡璞Ｚ", "Marshadium Z": "玛夏多Ｚ", "Aloraichium Z": "阿罗雷Ｚ", "Snorlium Z": "卡比兽Ｚ", "Eevium Z": "伊布Ｚ", "Mewnium Z": "梦幻Ｚ", "Pikashunium Z": "智皮卡Ｚ", "Terrain Extender": "大地膜", "Protective Pads": "部位护具", "Electric Seed": "电气种子", "Psychic Seed": "精神种子", "Misty Seed": "薄雾种子", "Grassy Seed": "青草种子", "Fighting Memory": "战斗存储碟", "Flying Memory": "飞翔存储碟", "Poison Memory": "毒存储碟", "Ground Memory": "大地存储碟", "Rock Memory": "岩石存储碟", "Bug Memory": "虫子存储碟", "Ghost Memory": "幽灵存储碟", "Steel Memory": "钢铁存储碟", "Fire Memory": "火焰存储碟", "Water Memory": "清水存储碟", "Grass Memory": "青草存储碟", "Electric Memory": "电子存储碟", "Psychic Memory": "精神存储碟", "Ice Memory": "冰雪存储碟", "Dragon Memory": "龙存储碟", "Dark Memory": "黑暗存储碟", "Fairy Memory": "妖精存储碟", "Guard Spec.": "能力防守", "Dire Hit": "要害攻击", "X Attack": "力量强化", "X Defense": "防御强化", "X Speed": "速度强化", "X Accuracy": "命中强化", "X Sp. Atk": "特攻强化", "X Sp. Def": "特防强化", "Poké Doll": "皮皮玩偶", "Fluffy Tail": "向尾喵的尾巴", "Master Ball": "大师球", "Ultra Ball": "高级球", "Great Ball": "超级球", "Poké Ball": "精灵球", "Safari Ball": "狩猎球", "Fast Ball": "速度球", "Level Ball": "等级球", "Lure Ball": "诱饵球", "Heavy Ball": "沉重球", "Love Ball": "甜蜜球", "Friend Ball": "友友球", "Moon Ball": "月亮球", "Sport Ball": "竞赛球", "Park Ball": "公园球", "Net Ball": "捕网球", "Dive Ball": "潜水球", "Nest Ball": "巢穴球", "Repeat Ball": "重复球", "Timer Ball": "计时球", "Luxury Ball": "豪华球", "Premier Ball": "纪念球", "Dusk Ball": "黑暗球", "Heal Ball": "治愈球", "Quick Ball": "先机球", "Cherish Ball": "贵重球", "Dream Ball": "梦境球", "Beast Ball": "究极球", "Red Apricorn": "红球果", "Blue Apricorn": "蓝球果", "Yellow Apricorn": "黄球果", "Green Apricorn": "绿球果", "Pink Apricorn": "粉球果", "White Apricorn": "白球果", "Black Apricorn": "黑球果", "Bluesky Mail": "蓝天邮件", "Eon Mail": "伊布邮件", "Flower Mail": "花案邮件", "Litebluemail": "水色邮件", "Lovely Mail": "可爱邮件", "Mirage Mail": "梦幻邮件", "Morph Mail": "变身邮件", "Portraitmail": "肖像邮件", "Music Mail": "音符邮件", "Surf Mail": "冲浪邮件", "Orange Mail": "橙色邮件", "Harbor Mail": "港口邮件", "Glitter Mail": "闪亮邮件", "Mech Mail": "机械邮件", "Wood Mail": "木纹邮件", "Wave Mail": "波涛邮件", "Bead Mail": "珠宝邮件", "Shadow Mail": "影子邮件", "Tropical Mail": "热带邮件", "Dream Mail": "梦境邮件", "Miracle Mail": "奇迹邮件", "Retro Mail": "复古邮件", "Grass Mail": "青草邮件", "Flame Mail": "火焰邮件", "Bubble Mail": "泡泡邮件", "Bloom Mail": "绽放邮件", "Tunnel Mail": "隧道邮件", "Steel Mail": "钢铁邮件", "Heart Mail": "心灵邮件", "Snow Mail": "雪花邮件", "Space Mail": "空间邮件", "Air Mail": "天空邮件", "Mosaic Mail": "镶嵌邮件", "Brick Mail": "砖块邮件", "Greet Mail": "初次邮件", "Favored Mail": "喜爱邮件", "RSVP Mail": "邀请邮件", "Thanks Mail": "感谢邮件", "Inquiry Mail": "询问邮件", "Like Mail": "推荐邮件", "Reply Mail": "回复邮件", "Bridge Mail S": "桥梁邮件Ｓ", "Bridge Mail D": "桥梁邮件Ｈ", "Bridge Mail T": "桥梁邮件Ｃ", "Bridge Mail V": "桥梁邮件Ｖ", "Bridge Mail M": "桥梁邮件Ｗ", "Potion": "伤药", "Antidote": "解毒药", "Burn Heal": "灼伤药", "Ice Heal": "解冻药", "Awakening": "解眠药", "Paralyze Heal": "解麻药", "Full Restore": "全复药", "Max Potion": "全满药", "Hyper Potion": "厉害伤药", "Super Potion": "好伤药", "Full Heal": "万灵药", "Revive": "活力碎片", "Max Revive": "活力块", "Fresh Water": "美味之水", "Soda Pop": "劲爽汽水", "Lemonade": "果汁牛奶", "Moomoo Milk": "哞哞鲜奶", "Energy Powder": "元气粉", "Energy Root": "元气根", "Heal Powder": "万能粉", "Revival Herb": "复活草", "Ether": "ＰＰ单项小补剂", "Max Ether": "ＰＰ单项全补剂", "Elixir": "ＰＰ多项小补剂", "Max Elixir": "ＰＰ多项全补剂", "Lava Cookie": "釜炎仙贝", "Berry Juice": "树果汁", "Sacred Ash": "圣灰", "Rage Candy Bar": "愤怒馒头", "ＨＰ Up": "ＨＰ增强剂", "Protein": "攻击增强剂", "Iron": "防御增强剂", "Carbos": "速度增强剂", "Calcium": "特攻增强剂", "Rare Candy": "神奇糖果", "PP Up": "ＰＰ提升剂", "Zinc": "特防增强剂", "PP Max": "ＰＰ极限提升剂", "Old Gateau": "森之羊羹", "Sweet Heart": "心形甜点", "Health Wing": "体力之羽", "Muscle Wing": "肌力之羽", "Resist Wing": "抵抗之羽", "Genius Wing": "智力之羽", "Clever Wing": "精神之羽", "Swift Wing": "瞬发之羽", "Casteliacone": "飞云冰淇淋", "Lumiose Galette": "密阿雷格雷派饼", "Shalour Sable": "娑罗沙布蕾", "Big Malasada": "大马拉萨达", "Berry": "树果", "old Berry": "黄金的果实", "PRZCureBerry": "消除麻痹的果实", "PSNCureBerry": "解毒的果实", "Bitter Berry": "苦涩的果实", "Burnt Berry": "烧烤的果实", "Ice Berry": "冰冻的果实", "Mint Berry": "薄荷的果实", "MiracleBerry": "奇迹的果实", "MysteryBerry": "神奇的果实", "Cheri Berry": "樱子果", "Chesto Berry": "零余果", "Pecha Berry": "桃桃果", "Rawst Berry": "莓莓果", "Aspear Berry": "利木果", "Leppa Berry": "苹野果", "Oran Berry": "橙橙果", "Persim Berry": "柿仔果", "Lum Berry": "木子果", "Sitrus Berry": "文柚果", "Figy Berry": "勿花果", "Wiki Berry": "异奇果", "Mago Berry": "芒芒果", "Aguav Berry": "乐芭果", "Iapapa Berry": "芭亚果", "Razz Berry": "蔓莓果", "Bluk Berry": "墨莓果", "Nanab Berry": "蕉香果", "Wepear Berry": "西梨果", "Pinap Berry": "凰梨果", "Pomeg Berry": "榴石果", "Kelpsy Berry": "藻根果", "Qualot Berry": "比巴果", "Hondew Berry": "哈密果", "Grepa Berry": "萄葡果", "Tamato Berry": "茄番果", "Cornn Berry": "玉黍果", "Magost Berry": "岳竹果", "Rabuta Berry": "茸丹果", "Nomel Berry": "檬柠果", "Spelon Berry": "刺角果", "Pamtre Berry": "椰木果", "Watmel Berry": "瓜西果", "Durin Berry": "金枕果", "Belue Berry": "靛莓果", "Liechi Berry": "枝荔果", "Ganlon Berry": "龙睛果", "Salac Berry": "沙鳞果", "Petaya Berry": "龙火果", "Apicot Berry": "杏仔果", "Lansat Berry": "兰萨果", "Starf Berry": "星桃果", "Enigma Berry": "谜芝果", "Pumkin Berry": "瓜南果", "Drash Berry": "无青果", "Eggant Berry": "子茄果", "Strib Berry": "宛豆果", "Chilan Berry": "灯浆果", "Nutpea Berry": "泥豆果", "Ginema Berry": "葱首果", "Kuo Berry": "角豆果", "Yago Berry": "菩达果", "Touga Berry": "辛子果", "Niniku Berry": "蒜蒜果", "Topo Berry": "薯薯果", "Occa Berry": "巧可果", "Passho Berry": "千香果", "Wacan Berry": "烛木果", "Rindo Berry": "罗子果", "Yache Berry": "番荔果", "Chople Berry": "莲蒲果", "Kebia Berry": "通通果", "Shuca Berry": "腰木果", "Coba Berry": "棱瓜果", "Payapa Berry": "福禄果", "Tanga Berry": "扁樱果", "Charti Berry": "草蚕果", "Kasib Berry": "佛柑果", "Haban Berry": "莓榴果", "Colbur Berry": "刺耳果", "Babiri Berry": "霹霹果", "Micle Berry": "奇秘果", "Custap Berry": "释陀果", "Jaboca Berry": "嘉珍果", "Rowap Berry": "雾莲果", "Roseli Berry": "洛玫果", "Kee Berry": "亚开果", "Maranga Berry": "香罗果", "Coin Case": "代币盒", "Dowsing Machine": "探宝器", "Itemfinder": "探宝器", "Dowsing MCHN": "探宝器", "Old Rod": "破旧钓竿", "Good Rod": "好钓竿", "Super Rod": "厉害钓竿", "S.S. Ticket": "船票", "Oak's Parcel": "包裹", "Parcel": "包裹", "Poké Flute": "宝可梦之笛", "Secret Key": "秘密钥匙", "Bike Voucher": "兑换券", " Gold Teeth": "金子做的假牙", "Card Key": "钥匙卡", "Lift Key": "电梯钥匙", "Silph Scope": "西尔佛检视镜", "Bicycle": "自行车", "Town Map": "城镇地图", "GS Ball": "GS球", "Egg Ticket": "神奇宝贝蛋兑换券", "Pass": "磁浮列车自由票", "Clear Bell": "透明铃铛", "Itemfinder": "蓝卡", "Squirtbottle": "杰尼龟喷壶", "Red Scale": "红色鳞片", "Lost Item": "遗失物", "Machine Part": "机械零件", "Basement Key": "地下钥匙", "Silver Wing": "银色之羽", "Rainbow Wing": "虹色之羽", "Mystery Egg": "神奇蛋", "SecretPotion": "秘传之药", "Mach Bike": "音速自行车", "Acro Bike": "越野自行车", "Contest Pass": "华丽大赛参加证", "Wailmer Pail": "吼吼鲸喷壶", "Devon Goods": "得文的物品", "Soot Sack": "集灰袋", "Pokéblock Case": "宝可方块盒", "Letter": "给大吾的信", "Eon Ticket": "无限船票", "Scanner": "探测器", "Go-Goggles": "ＧＯＧＯ护目镜", "Meteorite": "陨石", "Rm. 1 Key": "１号客房的钥匙", "Rm. 2 Key": "２号客房的钥匙", "Rm. 4 Key": "４号客房的钥匙", "Rm. 6 Key": "６号客房的钥匙", "Storage Key": "仓库钥匙", "Devon Scope": "得文侦测镜", "Vs. Seeker": "对战搜寻器", "Fame Checker": "声音记录器", "TM Case": "招式学习器盒", "Berry Pouch": "果实袋", "Teachy TV": "教学电视", "Tri-Pass": "三岛通行证", "Rainbow Pass": "七岛通行证", "Tea": "茶", "MysticTicket": "神秘船票", "AuroraTicket": "极光船票", "Powder Jar": "粉末收集瓶", "Ruby": "红宝石", "Sapphire": "蓝宝石", "Magma Emblem": "火岩标志", "Old Sea Map": "古航海图", "Explorer Kit": "探险套装", "Loot Sack": "宝物袋", "Rule Book": "规则书", " Poké Radar": "宝可追踪", "Point Card": "点数卡", "Journal": "冒险笔记", "Seal Case": "贴纸盒", "Fashion Case": "饰品盒", "Seal Bag": "贴纸袋", "Pal Pad": "朋友手册", "Works Key": "发电厂钥匙", "Old Charm": "古代护符", "Galactic Key": "银河队钥匙", "Red Chain": "红色锁链", "Sprayduck": "可达鸭喷壶", "Poffin Case": "宝芬盒", "Suite Key": "房间钥匙", "Oak's Letter": "大木的信", "Lunar Wing": "新月之羽", "Member Card": "会员卡", "Azure Flute": "天界之笛", "Magma Stone": "火山镇石", "Coupon 1": "兑换券１", "Coupon 2": "兑换券２", "Coupon 3": "兑换券３", "Vs. Recorder": "对战记录器", "Gracidea": "葛拉西蒂亚花", "Apricorn Box": "球果盒", "Unown Report": "未知图腾笔记", "Berry Pots": "树果种植盆", "Photo Album": "相册", "GB Sounds": "ＧＢ播放器", "Tidal Bell": "海声铃铛", "Jade Orb": "草绿色宝珠", "Lock Capsule": "上锁的容器", "Enigma Stone": "谜之水晶", "Data Card": "资料卡", "Liberty Pass": "自由船票", "Prop Case": "物品箱", "Dragon Skull": "龙之骨", "Dark Stone": "黑暗石", "Light Stone": "光明石", "God Stone": "神石", "Xtransceiver": "即时通讯器", "Gram 1": "配送物品１", "Gram 2": "配送物品２", "Gram 3": "配送物品３", "Medal Box": "奖牌盒", "Colress MCHN": "阿克罗玛机器", "DNA Splicers": "基因之楔", "Dropped Item": "遗忘物", "Grubby Hanky": "脏手帕", "Oval Charm": "圆形护符", "Permit": "许可证", "Plasma Card": "等离子卡", "Reflecting Mirror": "现形镜", "Shining Charm": "闪耀护符", "Holo Caster": "全像投影通讯器", "Adventure Rules": "探险心得", "Roller Skates": "轮滑鞋", "Sprinklotad": "莲叶童子喷壶", "Intriguing Stone": "似珍石", "Common Stone": "常见石", "Mega Ring": "超级手环", "Power Plant Pass": "发电厂通行证", "Elevator Key": "电梯钥匙", "Honor of Kalos": "卡洛斯勋章", "Lens Case": "隐形眼镜盒", "TMV Pass": "ＴＭＶ自由票", "Looker Ticket": "帅哥券", "Travel Trunk": "衣物箱", "Mega Bracelet": "超级手镯", "Mega Cuff": "超级护腕", "Mega Charm": "超级坠饰", "Pokéblock Kit": "宝可方块套装", "Contest Costume": "演出礼裙", "Eon Flute": "无限之笛", "Devon Scuba Gear": "得文潜水装备", "Magma Suit": "熔岩装", "Aqua Suit": "海洋装", "Pair of Tickets": "双人票", "Meteorite Shard": "陨石碎片", "Prison Bottle": "惩戒之壶", "Z-Ring": "Ｚ手环", "Forage Bag": "材料袋", "Fishing Rod": "钓竿", "Professor's Mask": "博士的面罩", "Sparkling Stone": "光辉石", "Zygarde Cube": "基格尔德多面体", "Ride Pager": "骑行装置", "Sun Flute": "太阳之笛", "Moon Flute": "月亮之笛", "Enigmatic Card": "奇异卡片"}

function translate_item(name) {
	if (name == null) return null;

	return ITEMNAMES[name] || name;
}
var MOVENAMES = {
	"Pound": "拍击", "Karate Chop": "空手劈", "Double Slap": "连环巴掌", "Comet Punch": "连续拳", "Mega Punch": "百万吨重拳", "Pay Day": "聚宝功", "Fire Punch": "火焰拳", "Ice Punch": "冰冻拳", "Thunder Punch": "雷电拳", "Scratch": "抓", "Vice Grip": "夹住", "Guillotine": "断头钳", "Razor Wind": "旋风刀", "Swords Dance": "剑舞", "Gust": "起风", "Wing Attack": "翅膀攻击", "Fly": "飞翔", "Bind": "绑紧", "Slam": "摔打", "Vine Whip": "藤鞭", "Stomp": "踩踏", "Double Kick": "二连踢", "Mega Kick": "百万吨重踢", "Jump Kick": "飞踢", "Rolling Kick": "回旋踢", "Sand Attack": "泼沙", "Headbutt": "头锤", "Fury Attack": "乱击", "Horn Drill": "角钻", "Tackle": "撞击", "Body Slam": "泰山压顶", "Wrap": "紧束", "Take Down": "猛撞", "Thrash": "大闹一番", "Double-Edge": "舍身冲撞", "Tail Whip": "摇尾巴", "Twineedle": "双针", "Pin Missile": "飞弹针", "Leer": "瞪眼", "Bite": "咬住", "Roar": "吼叫", "Sing": "唱歌", "Supersonic": "超音波", "Sonic Boom": "音爆", "Acid": "溶解液", "Ember": "火花", "Flamethrower": "喷射火焰", "Mist": "白雾", "Hydro Pump": "水炮", "Surf": "冲浪", "Ice Beam": "冰冻光束", "Blizzard": "暴风雪", "Whirlwind": "吹飞", "BubbleBeam": "泡沫光线", "Bubble Beam": "泡沫光线", "Aurora Beam": "极光束", "Hyper Beam": "破坏光线", "Peck": "啄", "Drill Peck": "啄钻", "Submission": "地狱翻滚", "Low Kick": "踢倒", "Counter": "双倍奉还", "Seismic Toss": "地球上投", "Horn Attack": "角撞", "Absorb": "吸取", "Mega Drain": "超级吸取", "Leech Seed": "寄生种子", "Growth": "生长", "Razor Leaf": "飞叶快刀", "Solar Beam": "日光束", "Poison Powder": "毒粉", "Stun Spore": "麻痹粉", "Sleep Powder": "催眠粉", "Petal Dance": "花瓣舞", "String Shot": "吐丝", "Dragon Rage": "龙之怒", "Fire Spin": "火焰旋涡", "Thunder Shock": "电击", "Thunderbolt": "十万伏特", "Thunder Wave": "电磁波", "Thunder": "打雷", "Rock Throw": "落石", "Earthquake": "地震", "Dig": "挖洞", "Toxic": "剧毒", "Confusion": "念力", "Psychic": "精神强念", "Hypnosis": "催眠术", "Meditate": "瑜伽姿势", "Agility": "高速移动", "Quick Attack": "电光一闪", "Rage": "愤怒", "Night Shade": "黑夜魔影", "Mimic": "模仿", "Screech": "刺耳声", "Double Team": "影子分身", "Recover": "自我再生", "Harden": "变硬", "Minimize": "变小", "Smokescreen": "烟幕", "Confuse Ray": "奇异之光", "Defense Curl": "变圆", "Barrier": "屏障", "Light Screen": "光墙", "Haze": "黑雾", "Reflect": "反射壁", "Focus Energy": "聚气", "Bide": "忍耐", "Metronome": "挥指", "Mirror Move": "鹦鹉学舌", "Self-Destruct": "自爆", "Egg Bomb": "炸蛋", "Lick": "舌舔", "Smog": "浊雾", "Sludge": "污泥攻击", "Bone Club": "骨棒", "Fire Blast": "大字爆炎", "Waterfall": "攀瀑", "Clamp": "贝壳夹击", "Swift": "高速星星", "Skull Bash": "火箭头锤", "Spike Cannon": "尖刺加农炮", "Constrict": "缠绕", "Amnesia": "瞬间失忆", "Kinesis": "折弯汤匙", "Soft-Boiled": "生蛋", "High Jump Kick": "飞膝踢", "Hi Jump Kick": "飞膝踢", "Glare": "大蛇瞪眼", "Dream Eater": "食梦", "Poison Gas": "毒瓦斯", "Barrage": "投球", "Leech Life": "吸血", "Lovely Kiss": "恶魔之吻", "Sky Attack": "神鸟猛击", "Transform": "变身", "Bubble": "泡沫", "Dizzy Punch": "迷昏拳", "Spore": "蘑菇孢子", "Flash": "闪光", "Psywave": "精神波", "Acid Armor": "溶化", "Crabhammer": "蟹钳锤", "Explosion": "大爆炸", "Fury Swipes": "乱抓", "Bonemerang": "骨头回力镖", "Rest": "睡觉", "Rock Slide": "岩崩", "Hyper Fang": "必杀门牙", "Sharpen": "棱角化", "Conversion": "纹理", "Tri Attack": "三重攻击", "Super Fang": "愤怒门牙", "Slash": "劈开", "Substitute": "替身", "Struggle": "挣扎", "Sketch": "写生", "Triple Kick": "三连踢", "Thief": "小偷", "Spider Web": "蛛网", "Mind Reader": "心之眼", "Nightmare": "恶梦", "Flame Wheel": "火焰轮", "Snore": "打鼾", "Curse": "诅咒", "Flail": "抓狂", "Conversion 2": "纹理２", "Aeroblast": "气旋攻击", "Cotton Spore": "棉孢子", "Reversal": "起死回生", "Spite": "怨恨", "Powder Snow": "细雪", "Protect": "守住", "Mach Punch": "音速拳", "Scary Face": "鬼面", "Feint Attack": "出奇一击", "Sweet Kiss": "天使之吻", "Belly Drum": "腹鼓", "Sludge Bomb": "污泥炸弹", "Mud-Slap": "掷泥", "Octazooka": "章鱼桶炮", "Spikes": "撒菱", "Zap Cannon": "电磁炮", "Foresight": "识破", "Destiny Bond": "同命", "Perish Song": "灭亡之歌", "Icy Wind": "冰冻之风", "Detect": "看穿", "Bone Rush": "骨棒乱打", "Lock-On": "锁定", "Outrage": "逆鳞", "Sandstorm": "沙暴", "Giga Drain": "终极吸取", "Endure": "挺住", "Charm": "撒娇", "Rollout": "滚动", "False Swipe": "点到为止", "Swagger": "虚张声势", "Milk Drink": "喝牛奶", "Spark": "电光", "Fury Cutter": "连斩", "Steel Wing": "钢翼", "Mean Look": "黑色目光", "Attract": "迷人", "Sleep Talk": "梦话", "Heal Bell": "治愈铃声", "Return": "报恩", "Present": "礼物", "Frustration": "迁怒", "Safeguard": "神秘守护", "Pain Split": "分担痛楚", "Sacred Fire": "神圣之火", "Magnitude": "震级", "Dynamic Punch": "爆裂拳", "Megahorn": "超级角击", "Dragon Breath": "龙息", "Baton Pass": "接棒", "Encore": "再来一次", "Pursuit": "追打", "Rapid Spin": "高速旋转", "Sweet Scent": "甜甜香气", "Iron Tail": "铁尾", "Metal Claw": "金属爪", "Vital Throw": "借力摔", "Morning Sun": "晨光", "Synthesis": "光合作用", "Moonlight": "月光", "Hidden Power": "觉醒力量", "Cross Chop": "十字劈", "Twister": "龙卷风", "Rain Dance": "求雨", "Sunny Day": "大晴天", "Crunch": "咬碎", "Mirror Coat": "镜面反射", "Psych Up": "自我暗示", "Extreme Speed": "神速", "Ancient Power": "原始之力", "Shadow Ball": "暗影球", "Future Sight": "预知未来", "Rock Smash": "碎岩", "Beat Up": "围攻", "Fake Out": "击掌奇袭", "Uproar": "吵闹", "Stockpile": "蓄力", "Spit Up": "喷出", "Swallow": "吞下", "Heat Wave": "热风", "Hail": "冰雹", "Torment": "无理取闹", "Flatter": "吹捧", "Will-O-Wisp": "鬼火", "Memento": "临别礼物", "Facade": "硬撑", "Focus Punch": "真气拳", "Smelling Salts": "清醒", "Follow Me": "看我嘛", "Nature Power": "自然之力", "Charge": "充电", "Taunt": "挑衅", "Helping Hand": "帮助", "Trick": "戏法", "Role Play": "扮演", "Wish": "祈愿", "Assist": "借助", "Ingrain": "扎根", "Superpower": "蛮力", "Magic Coat": "魔法反射", "Recycle": "回收利用", "Revenge": "报复", "Brick Break": "劈瓦", "Yawn": "哈欠", "Knock Off": "拍落", "Endeavor": "蛮干", "Eruption": "喷火", "Skill Swap": "特性互换", "Imprison": "封印", "Refresh": "焕然一新", "Grudge": "怨念", "Snatch": "抢夺", "Secret Power": "秘密之力", "Dive": "潜水", "Arm Thrust": "猛推", "Camouflage": "保护色", "Tail Glow": "萤火", "Luster Purge": "洁净光芒", "Mist Ball": "薄雾球", "Feather Dance": "羽毛舞", "Teeter Dance": "摇晃舞", "Blaze Kick": "火焰踢", "Mud Sport": "玩泥巴", "Ice Ball": "冰球", "Needle Arm": "尖刺臂", "Slack Off": "偷懒", "Hyper Voice": "巨声", "Poison Fang": "剧毒牙", "Crush Claw": "撕裂爪", "Blast Burn": "爆炸烈焰", "Hydro Cannon": "加农水炮", "Meteor Mash": "彗星拳", "Astonish": "惊吓", "Weather Ball": "气象球", "Aromatherapy": "芳香治疗", "Fake Tears": "假哭", "Air Cutter": "空气利刃", "Overheat": "过热", "Odor Sleuth": "气味侦测", "Rock Tomb": "岩石封锁", "Silver Wind": "银色旋风", "Metal Sound": "金属音", "Grass Whistle": "草笛", "Tickle": "挠痒", "Cosmic Power": "宇宙力量", "Water Spout": "喷水", "Signal Beam": "信号光束", "Shadow Punch": "暗影拳", "Extrasensory": "神通力", "Sky Uppercut": "冲天拳", "Sand Tomb": "流沙地狱", "Sheer Cold": "绝对零度", "Fissure": "地裂", "Guillotine": "断头钳", "Horn Drill": "角钻", "Muddy Water": "浊流", "Bullet Seed": "种子机关枪", "Aerial Ace": "燕返", "Icicle Spear": "冰锥", "Iron Defense": "铁壁", "Block": "挡路", "Howl": "长嚎", "Dragon Claw": "龙爪", "Frenzy Plant": "疯狂植物", "Bulk Up": "健美", "Bounce": "弹跳", "Mud Shot": "泥巴射击", "Poison Tail": "毒尾", "Covet": "渴望", "Volt Tackle": "伏特攻击", "Magical Leaf": "魔法叶", "Water Sport": "玩水", "Calm Mind": "冥想", "Leaf Blade": "叶刃", "Dragon Dance": "龙之舞", "Rock Blast": "岩石爆击", "Shock Wave": "电击波", "Water Pulse": "水之波动", "Doom Desire": "破灭之愿", "Psycho Boost": "精神突进", "Roost": "羽栖", "Gravity": "重力", "Miracle Eye": "奇迹之眼", "Wake-Up Slap": "唤醒巴掌", "Hammer Arm": "臂锤", "Gyro Ball": "陀螺球", "Healing Wish": "治愈之愿", "Brine": "盐水", "Natural Gift": "自然之恩", "Feint": "佯攻", "Pluck": "啄食", "Tailwind": "顺风", "Acupressure": "点穴", "Metal Burst": "金属爆炸", "U-turn": "急速折返", "Close Combat": "近身战", "Payback": "以牙还牙", "Assurance": "恶意追击", "Embargo": "查封", "Fling": "投掷", "Psycho Shift": "精神转移", "Trump Card": "王牌", "Heal Block": "回复封锁", "Wring Out": "绞紧", "Power Trick": "力量戏法", "Gastro Acid": "胃液", "Lucky Chant": "幸运咒语", "Me First": "抢先一步", "Copycat": "仿效", "Power Swap": "力量互换", "Guard Swap": "防守互换", "Punishment": "惩罚", "Last Resort": "珍藏", "Worry Seed": "烦恼种子", "Sucker Punch": "突袭", "Toxic Spikes": "毒菱", "Heart Swap": "心灵互换", "Aqua Ring": "水流环", "Magnet Rise": "电磁飘浮", "Flare Blitz": "闪焰冲锋", "Force Palm": "发劲", "Aura Sphere": "波导弹", "Rock Polish": "岩石打磨", "Poison Jab": "毒击", "Dark Pulse": "恶之波动", "Night Slash": "暗袭要害", "Aqua Tail": "水流尾", "Seed Bomb": "种子炸弹", "Air Slash": "空气斩", "X-Scissor": "十字剪", "Bug Buzz": "虫鸣", "Dragon Pulse": "龙之波动", "Dragon Rush": "龙之俯冲", "Power Gem": "力量宝石", "Drain Punch": "吸取拳", "Vacuum Wave": "真空波", "Focus Blast": "真气弹", "Energy Ball": "能量球", "Brave Bird": "勇鸟猛攻", "Earth Power": "大地之力", "Switcheroo": "掉包", "Giga Impact": "终极冲击", "Nasty Plot": "诡计", "Bullet Punch": "子弹拳", "Avalanche": "雪崩", "Ice Shard": "冰砾", "Shadow Claw": "暗影爪", "Thunder Fang": "雷电牙", "Ice Fang": "冰冻牙", "Fire Fang": "火焰牙", "Shadow Sneak": "影子偷袭", "Mud Bomb": "泥巴炸弹", "Psycho Cut": "精神利刃", "Zen Headbutt": "意念头锤", "Mirror Shot": "镜光射击", "Flash Cannon": "加农光炮", "Rock Climb": "攀岩", "Defog": "清除浓雾", "Trick Room": "戏法空间", "Draco Meteor": "流星群", "Discharge": "放电", "Lava Plume": "喷烟", "Leaf Storm": "飞叶风暴", "Power Whip": "强力鞭打", "Rock Wrecker": "岩石炮", "Cross Poison": "十字毒刃", "Gunk Shot": "垃圾射击", "Iron Head": "铁头", "Magnet Bomb": "磁铁炸弹", "Stone Edge": "尖石攻击", "Captivate": "诱惑", "Stealth Rock": "隐形岩", "Grass Knot": "打草结", "Chatter": "喋喋不休", "Judgment": "制裁光砾", "Bug Bite": "虫咬", "Charge Beam": "充电光束", "Wood Hammer": "木槌", "Aqua Jet": "水流喷射", "Attack Order": "攻击指令", "Defend Order": "防御指令", "Heal Order": "回复指令", "Head Smash": "双刃头锤", "Double Hit": "二连击", "Roar of Time": "时光咆哮", "Spacial Rend": "亚空裂斩", "Lunar Dance": "新月舞", "Crush Grip": "捏碎", "Magma Storm": "熔岩风暴", "Dark Void": "暗黑洞", "Seed Flare": "种子闪光", "Ominous Wind": "奇异之风", "Shadow Force": "暗影潜袭", "Hone Claws": "磨爪", "Wide Guard": "广域防守", "Guard Split": "防守平分", "Power Split": "力量平分", "Wonder Room": "奇妙空间", "Psyshock": "精神冲击", "Venoshock": "毒液冲击", "Autotomize": "身体轻量化", "Rage Powder": "愤怒粉", "Telekinesis": "意念移物", "Magic Room": "魔术空间", "Smack Down": "击落", "Storm Throw": "山岚摔", "Flame Burst": "烈焰溅射", "Sludge Wave": "污泥波", "Quiver Dance": "蝶舞", "Heavy Slam": "重磅冲撞", "Synchronoise": "同步干扰", "Electro Ball": "电球", "Soak": "浸水", "Flame Charge": "蓄能焰袭", "Coil": "盘蜷", "Low Sweep": "下盘踢", "Acid Spray": "酸液爆弹", "Foul Play": "欺诈", "Simple Beam": "单纯光束", "Entrainment": "找伙伴", "After You": "您先请", "Round": "轮唱", "Echoed Voice": "回声", "Chip Away": "逐步击破", "Clear Smog": "清除之烟", "Stored Power": "辅助力量", "Quick Guard": "快速防守", "Ally Switch": "交换场地", "Scald": "热水", "Shell Smash": "破壳", "Heal Pulse": "治愈波动", "Hex": "祸不单行", "Sky Drop": "自由落体", "Shift Gear": "换挡", "Circle Throw": "巴投", "Incinerate": "烧尽", "Quash": "延后", "Acrobatics": "杂技", "Reflect Type": "镜面属性", "Retaliate": "报仇", "Final Gambit": "搏命", "Bestow": "传递礼物", "Inferno": "炼狱", "Water Pledge": "水之誓约", "Fire Pledge": "火之誓约", "Grass Pledge": "草之誓约", "Volt Switch": "伏特替换", "Struggle Bug": "虫之抵抗", "Bulldoze": "重踏", "Frost Breath": "冰息", "Dragon Tail": "龙尾", "Work Up": "自我激励", "Electroweb": "电网", "Wild Charge": "疯狂伏特", "Drill Run": "直冲钻", "Dual Chop": "二连劈", "Heart Stamp": "爱心印章", "Horn Leech": "木角", "Sacred Sword": "圣剑", "Razor Shell": "贝壳刃", "Heat Crash": "高温重压", "Leaf Tornado": "青草搅拌器", "Steamroller": "疯狂滚压", "Cotton Guard": "棉花防守", "Night Daze": "暗黑爆破", "Psystrike": "精神击破", "Tail Slap": "扫尾拍打", "Hurricane": "暴风", "Head Charge": "爆炸头突击", "Gear Grind": "齿轮飞盘", "Searing Shot": "火焰弹", "Techno Blast": "高科技光炮", "Relic Song": "古老之歌", "Secret Sword": "神秘之剑", "Glaciate": "冰封世界", "Bolt Strike": "雷击", "Blue Flare": "青焰", "Fiery Dance": "火之舞", "Freeze Shock": "冰冻伏特", "Ice Burn": "极寒冷焰", "Snarl": "大声咆哮", "Icicle Crash": "冰柱坠击", "V-create": "Ｖ热焰", "Fusion Flare": "交错火焰", "Fusion Bolt": "交错闪电", "Flying Press": "飞身重压", "Mat Block": "掀榻榻米", "Belch": "打嗝", "Rototiller": "耕地", "Sticky Web": "黏黏网", "Fell Stinger": "致命针刺", "Phantom Force": "潜灵奇袭", "Trick-or-Treat": "万圣夜", "Noble Roar": "战吼", "Ion Deluge": "等离子浴", "Parabolic Charge": "抛物面充电", "Forest's Curse": "森林诅咒", "Petal Blizzard": "落英缤纷", "Freeze-Dry": "冷冻干燥", "Disarming Voice": "魅惑之声", "Parting Shot": "抛下狠话", "Topsy-Turvy": "颠倒", "Draining Kiss": "吸取之吻", "Crafty Shield": "戏法防守", "Flower Shield": "鲜花防守", "Grassy Terrain": "青草场地", "Misty Terrain": "薄雾场地", "Electrify": "输电", "Play Rough": "嬉闹", "Fairy Wind": "妖精之风", "Moonblast": "月亮之力", "Boomburst": "爆音波", "Fairy Lock": "妖精之锁", "King's Shield": "王者盾牌", "Play Nice": "和睦相处", "Confide": "密语", "Diamond Storm": "钻石风暴", "Steam Eruption": "蒸汽爆炸", "Hyperspace Hole": "异次元洞", "Water Shuriken": "飞水手里剑", "Mystical Fire": "魔法火焰", "Spiky Shield": "尖刺防守", "Aromatic Mist": "芳香薄雾", "Eerie Impulse": "怪异电波", "Venom Drench": "毒液陷阱", "Powder": "粉尘", "Geomancy": "大地掌控", "Magnetic Flux": "磁场操控", "Happy Hour": "欢乐时光", "Electric Terrain": "电气场地", "Dazzling Gleam": "魔法闪耀", "Celebrate": "庆祝", "Hold Hands": "牵手", "Baby-Doll Eyes": "圆瞳", "Nuzzle": "蹭蹭脸颊", "Hold Back": "手下留情", "Infestation": "死缠烂打", "Power-Up Punch": "增强拳", "Oblivion Wing": "死亡之翼", "Thousand Arrows": "千箭齐发", "Thousand Waves": "千波激荡", "Land's Wrath": "大地神力", /*"Light Of Ruin": "破灭之光",*/ "Light of Ruin": "破灭之光", "Origin Pulse": "根源波动", "Precipice Blades": "断崖之剑", "Dragon Ascent": "画龙点睛", "Hyperspace Fury": "异次元猛攻", "Breakneck Blitz": "究极无敌大冲撞", "All-Out Pummeling": "全力无双激烈拳", "Supersonic Skystrike": "极速俯冲轰烈撞", "Acid Downpour": "强酸剧毒灭绝雨", "Tectonic Rage": "地隆啸天大终结", "Continental Crush": "毁天灭地巨岩坠", "Savage Spin-Out": "绝对捕食回旋斩", "Never-Ending Nightmare": "无尽暗夜之诱惑", "Corkscrew Crash": "超绝螺旋连击", "Inferno Overdrive": "超强极限爆焰弹", "Hydro Vortex": "超级水流大漩涡", "Bloom Doom": "绚烂缤纷花怒放", "Gigavolt Havoc": "终极伏特狂雷闪", "Shattered Psyche": "至高精神破坏波", "Subzero Slammer": "激狂大地万里冰", "Devastating Drake": "究极巨龙震天地", "Black Hole Eclipse": "黑洞吞噬万物灭", "Twinkle Tackle": "可爱星星飞天撞", "Catastropika": "皮卡皮卡必杀击", "Shore Up": "集沙", "First Impression": "迎头一击", "Baneful Bunker": "碉堡", "Spirit Shackle": "缝影", "Darkest Lariat": "ＤＤ金勾臂", "Sparkling Aria": "泡影的咏叹调", "Ice Hammer": "冰锤", "Floral Healing": "花疗", "High Horsepower": "十万马力", "Strength Sap": "吸取力量", "Solar Blade": "日光刃", "Leafage": "树叶", "Spotlight": "聚光灯", "Toxic Thread": "毒丝", "Laser Focus": "磨砺", "Gear Up": "辅助齿轮", "Throat Chop": "地狱突刺", "Pollen Puff": "花粉团", "Anchor Shot": "掷锚", "Psychic Terrain": "精神场地", "Lunge": "猛扑", "Fire Lash": "火焰鞭", "Power Trip": "嚣张", "Burn Up": "燃尽", "Speed Swap": "速度互换", "Smart Strike": "修长之角", "Purify": "净化", "Revelation Dance": "觉醒之舞", "Core Enforcer": "核心惩罚者", "Trop Kick": "热带踢", "Instruct": "号令", "Beak Blast": "鸟嘴加农炮", "Clanging Scales": "鳞片噪音", "Dragon Hammer": "龙锤", "Brutal Swing": "狂舞挥打", "Aurora Veil": "极光幕", "Sinister Arrow Raid": "遮天蔽日暗影箭", "Malicious Moonsault": "极恶飞跃粉碎击", "Oceanic Operetta": "海神庄严交响乐", "Guardian of Alola": "巨人卫士·阿罗拉", "Soul-Stealing 7-Star Strike": "七星夺魂腿", "Stoked Sparksurfer": "驾雷驭电戏冲浪", "Pulverizing Pancake": "认真起来大爆击", "Extreme Evoboost": "九彩升华齐聚顶", "Genesis Supernova": "起源超新星大爆炸", "Shell Trap": "陷阱甲壳", "Fleur Cannon": "花朵加农炮", "Psychic Fangs": "精神之牙", "Stomping Tantrum": "跺脚", "Shadow Bone": "暗影之骨", "Accelerock": "冲岩", "Liquidation": "水流裂破", "Prismatic Laser": "棱镜镭射", "Spectral Thief": "暗影偷盗", "Sunsteel Strike": "流星闪冲", "Moongeist Beam": "暗影之光", "Tearful Look": "泪眼汪汪", "Zing Zap": "麻麻刺刺", "Nature's Madness": "自然之怒", "Multi-Attack": "多属性攻击", "10,000,000 Volt Thunderbolt": "千万伏特",
	// new in USM
	"Clangorous Soulblaze": "炽魂热舞烈音爆", "Let's Snuggle Forever": "亲密无间大乱揍", "Splintered Stormshards": "狼啸石牙飓风暴", "Searing Sunraze Smash": "日光回旋下苍穹", "Menacing Moonraze Maelstrom": "月华飞溅落灵霄", "Mind Blown": "惊爆大头", "Photon Geyser": "光子喷涌", "Light That Burns the Sky":"焚天灭世炽光爆", "Plasma Fists":"等离子闪电拳",
	// new in SWSH
	"Apple Acid" : "苹果酸", "Aura Wheel": "气场轮", "Behemoth Bash": "巨兽弹", "Behemoth Blade": "巨兽斩", "Body Press" : "扑击", "Bolt Beak": "电喙", "Branch Poke": "木枝突刺", "Breaking Swipe": "广域破坏", "Dragon Darts" : "龙箭", "Drum Beating": "鼓击", "Dynamax Cannon": "极巨炮", "Eternabeam": "无极光束", "False Surrender": "假跪真撞",  "Fishious Rend": "鳃咬", "Grav Apple": "万有引力", "Jaw Lock": "紧咬不放", "Max Strike": "极巨攻击", "Max Flare": "极巨火爆", "Max Geyser": "极巨水流", "Max Lightning": "极巨闪电", "Max Overgrowth": "极巨草原", "Max Phantasm": "极巨幽魂", "Max Darkness": "极巨恶霸", "Max Mindstorm": "极巨超能", "Max Knuckle": "极巨拳斗", "Max Steelspike": "极巨钢铁", "Max Hailstorm": "极巨寒冰", "Max Quake": "极巨大地", "Max Rockfall": "极巨岩石", "Max Flutterby": "极巨虫蛊", "Max Starfall": "极巨妖精", "Max Airstream": "极巨飞冲", "Max Wyrmwind": "极巨龙骑", "Max Ooze": "极巨酸毒", "Meteor Assault": "流星突击", "Overdrive": "破音", "Pyro Ball": "火焰球", "Snap Trap": "捕兽夹", "Snipe Shot": "狙击", "Spirit Break": "灵魂冲击", "Steel Beam": "铁蹄光线", "Strange Stream": "神奇蒸汽",
};

function translate_move(name) {
	if (name == null) return null;

	if (name == '(No Move)') return '(无)';

	if (name == 'Other') return '其他';

	let idx = name.indexOf('Hidden Power');
	if (idx != -1) {
		let type = name.substring(idx + 'Hidden Power'.length + 1);
		return MOVENAMES['Hidden Power'] + '-' + translate_type(type);
	}

	return MOVENAMES[name] || name;
}
var NATURENAMES = {
	"Adamant": "固执",
	"Bashful": "害羞",
	"Bold": "大胆",
	"Brave": "勇敢",
	"Calm": "温和",
	"Careful": "慎重",
	"Docile": "坦率",
	"Gentle": "温顺",
	"Hardy": "勤奋",
	"Hasty": "急躁",
	"Impish": "淘气",
	"Jolly": "爽朗",
	"Lax": "乐天",
	"Lonely": "怕寂寞",
	"Mild": "慢吞吞",
	"Modest": "内敛",
	"Naive": "天真",
	"Naughty": "顽皮",
	"Quiet": "冷静",
	"Quirky": "浮躁",
	"Rash": "马虎",
	"Relaxed": "悠闲",
	"Sassy": "自大",
	"Serious": "认真",
	"Timid": "胆小"
}

function translate_nature(name) {
	if (name == null) return null;

	return NATURENAMES[name] || name;
}

var POKENAMES = { "Bulbasaur": "妙蛙种子", "Ivysaur": "妙蛙草", "Venusaur": "妙蛙花", "Charmander": "小火龙", "Charmeleon": "火恐龙", "Charizard": "喷火龙", "Squirtle": "杰尼龟", "Wartortle": "卡咪龟", "Blastoise": "水箭龟", "Caterpie": "绿毛虫", "Metapod": "铁甲蛹", "Butterfree": "巴大蝶", "Weedle": "独角虫", "Kakuna": "铁壳蛹", "Beedrill": "大针蜂", "Pidgey": "波波", "Pidgeotto": "比比鸟", "Pidgeot": "大比鸟", "Rattata": "小拉达", "Raticate": "拉达", "Spearow": "烈雀", "Fearow": "大嘴雀", "Ekans": "阿柏蛇", "Arbok": "阿柏怪", "Pikachu": "皮卡丘", "Raichu": "雷丘", "Sandshrew": "穿山鼠", "Sandslash": "穿山王", "Nidoran♀": "尼多兰", "Nidoran-F": "尼多兰", "Nidorina": "尼多娜", "Nidoqueen": "尼多后", "Nidoran♂": "尼多朗", "Nidoran-M": "尼多朗", "Nidorino": "尼多力诺", "Nidoking": "尼多王", "Clefairy": "皮皮", "Clefable": "皮可西", "Vulpix": "六尾", "Ninetales": "九尾", "Jigglypuff": "胖丁", "Wigglytuff": "胖可丁", "Zubat": "超音蝠", "Golbat": "大嘴蝠", "Oddish": "走路草", "Gloom": "臭臭花", "Vileplume": "霸王花", "Paras": "派拉斯", "Parasect": "派拉斯特", "Venonat": "毛球", "Venomoth": "摩鲁蛾", "Diglett": "地鼠", "Dugtrio": "三地鼠", "Meowth": "喵喵", "Persian": "猫老大", "Psyduck": "可达鸭", "Golduck": "哥达鸭", "Mankey": "猴怪", "Primeape": "火爆猴", "Growlithe": "卡蒂狗", "Arcanine": "风速狗", "Poliwag": "蚊香蝌蚪", "Poliwhirl": "蚊香君", "Poliwrath": "蚊香泳士", "Abra": "凯西", "Kadabra": "勇基拉", "Alakazam": "胡地", "Machop": "腕力", "Machoke": "豪力", "Machamp": "怪力", "Bellsprout": "喇叭芽", "Weepinbell": "口呆花", "Victreebel": "大食花", "Tentacool": "玛瑙水母", "Tentacruel": "毒刺水母", "Geodude": "小拳石", "Graveler": "隆隆石", "Golem": "隆隆岩", "Ponyta": "小火马", "Rapidash": "烈焰马", "Slowpoke": "呆呆兽", "Slowbro": "呆壳兽", "Magnemite": "小磁怪", "Magneton": "三合一磁怪", "Farfetch'd": "大葱鸭", "Doduo": "嘟嘟", "Dodrio": "嘟嘟利", "Seel": "小海狮", "Dewgong": "白海狮", "Grimer": "臭泥", "Muk": "臭臭泥", "Shellder": "大舌贝", "Cloyster": "刺甲贝", "Gastly": "鬼斯", "Haunter": "鬼斯通", "Gengar": "耿鬼", "Onix": "大岩蛇", "Drowzee": "催眠貘", "Hypno": "引梦貘人", "Krabby": "大钳蟹", "Kingler": "巨钳蟹", "Voltorb": "霹雳电球", "Electrode": "顽皮雷弹", "Exeggcute": "蛋蛋", "Exeggutor": "椰蛋树", "Cubone": "卡拉卡拉", "Marowak": "嘎啦嘎啦", "Hitmonlee": "飞腿郎", "Hitmonchan": "快拳郎", "Lickitung": "大舌头", "Koffing": "瓦斯弹", "Weezing": "双弹瓦斯", "Rhyhorn": "独角犀牛", "Rhydon": "钻角犀兽", "Chansey": "吉利蛋", "Tangela": "蔓藤怪", "Kangaskhan": "袋兽", "Horsea": "墨海马", "Seadra": "海刺龙", "Goldeen": "角金鱼", "Seaking": "金鱼王", "Staryu": "海星星", "Starmie": "宝石海星", "Mr. Mime": "魔墙人偶", "Scyther": "飞天螳螂", "Jynx": "迷唇姐", "Electabuzz": "电击兽", "Magmar": "鸭嘴火兽", "Pinsir": "凯罗斯", "Tauros": "肯泰罗", "Magikarp": "鲤鱼王", "Gyarados": "暴鲤龙", "Lapras": "拉普拉斯", "Ditto": "百变怪", "Eevee": "伊布", "Vaporeon": "水伊布", "Jolteon": "雷伊布", "Flareon": "火伊布", "Porygon": "多边兽", "Omanyte": "菊石兽", "Omastar": "多刺菊石兽", "Kabuto": "化石盔", "Kabutops": "镰刀盔", "Aerodactyl": "化石翼龙", "Snorlax": "卡比兽", "Articuno": "急冻鸟", "Zapdos": "闪电鸟", "Moltres": "火焰鸟", "Dratini": "迷你龙", "Dragonair": "哈克龙", "Dragonite": "快龙", "Mewtwo": "超梦", "Mew": "梦幻", "Chikorita": "菊草叶", "Bayleef": "月桂叶", "Meganium": "大竺葵", "Cyndaquil": "火球鼠", "Quilava": "火岩鼠", "Typhlosion": "火暴兽", "Totodile": "小锯鳄", "Croconaw": "蓝鳄", "Feraligatr": "大力鳄", "Sentret": "尾立", "Furret": "大尾立", "Hoothoot": "咕咕", "Noctowl": "猫头夜鹰", "Ledyba": "芭瓢虫", "Ledian": "安瓢虫", "Spinarak": "圆丝蛛", "Ariados": "阿利多斯", "Crobat": "叉字蝠", "Chinchou": "灯笼鱼", "Lanturn": "电灯怪", "Pichu": "皮丘", "Cleffa": "皮宝宝", "Igglybuff": "宝宝丁", "Togepi": "波克比", "Togetic": "波克基古", "Natu": "天然雀", "Xatu": "天然鸟", "Mareep": "咩利羊", "Flaaffy": "茸茸羊", "Ampharos": "电龙", "Bellossom": "美丽花", "Marill": "玛力露", "Azumarill": "玛力露丽", "Sudowoodo": "树才怪", "Politoed": "蚊香蛙皇", "Hoppip": "毽子草", "Skiploom": "毽子花", "Jumpluff": "毽子棉", "Aipom": "长尾怪手", "Sunkern": "向日种子", "Sunflora": "向日花怪", "Yanma": "蜻蜻蜓", "Wooper": "乌波", "Quagsire": "沼王", "Espeon": "太阳伊布", "Umbreon": "月亮伊布", "Murkrow": "黑暗鸦", "Slowking": "呆呆王", "Misdreavus": "梦妖", "Unown": "未知图腾", "Wobbuffet": "果然翁", "Girafarig": "麒麟奇", "Pineco": "榛果球", "Forretress": "佛烈托斯", "Dunsparce": "土龙弟弟", "Gligar": "天蝎", "Steelix": "大钢蛇", "Snubbull": "布鲁", "Granbull": "布鲁皇", "Qwilfish": "千针鱼", "Scizor": "巨钳螳螂", "Shuckle": "壶壶", "Heracross": "赫拉克罗斯", "Sneasel": "狃拉", "Teddiursa": "熊宝宝", "Ursaring": "圈圈熊", "Slugma": "熔岩虫", "Magcargo": "熔岩蜗牛", "Swinub": "小山猪", "Piloswine": "长毛猪", "Corsola": "太阳珊瑚", "Remoraid": "铁炮鱼", "Octillery": "章鱼桶", "Delibird": "信使鸟", "Mantine": "巨翅飞鱼", "Skarmory": "盔甲鸟", "Houndour": "戴鲁比", "Houndoom": "黑鲁加", "Kingdra": "刺龙王", "Phanpy": "小小象", "Donphan": "顿甲", "Porygon2": "多边兽Ⅱ", "Stantler": "惊角鹿", "Smeargle": "图图犬", "Tyrogue": "无畏小子", "Hitmontop": "战舞郎", "Smoochum": "迷唇娃", "Elekid": "电击怪", "Magby": "鸭嘴宝宝", "Miltank": "大奶罐", "Blissey": "幸福蛋", "Raikou": "雷公", "Entei": "炎帝", "Suicune": "水君", "Larvitar": "幼基拉斯", "Pupitar": "沙基拉斯", "Tyranitar": "班基拉斯", "Lugia": "洛奇亚", "Ho-Oh": "凤王", "Celebi": "时拉比", "Treecko": "木守宫", "Grovyle": "森林蜥蜴", "Sceptile": "蜥蜴王", "Torchic": "火稚鸡", "Combusken": "力壮鸡", "Blaziken": "火焰鸡", "Mudkip": "水跃鱼", "Marshtomp": "沼跃鱼", "Swampert": "巨沼怪", "Poochyena": "土狼犬", "Mightyena": "大狼犬", "Zigzagoon": "蛇纹熊", "Linoone": "直冲熊", "Wurmple": "刺尾虫", "Silcoon": "甲壳茧", "Beautifly": "狩猎凤蝶", "Cascoon": "盾甲茧", "Dustox": "毒粉蛾", "Lotad": "莲叶童子", "Lombre": "莲帽小童", "Ludicolo": "乐天河童", "Seedot": "橡实果", "Nuzleaf": "长鼻叶", "Shiftry": "狡猾天狗", "Taillow": "傲骨燕", "Swellow": "大王燕", "Wingull": "长翅鸥", "Pelipper": "大嘴鸥", "Ralts": "拉鲁拉丝", "Kirlia": "奇鲁莉安", "Gardevoir": "沙奈朵", "Surskit": "溜溜糖球", "Masquerain": "雨翅蛾", "Shroomish": "蘑蘑菇", "Breloom": "斗笠菇", "Slakoth": "懒人獭", "Vigoroth": "过动猿", "Slaking": "请假王", "Nincada": "土居忍士", "Ninjask": "铁面忍者", "Shedinja": "脱壳忍者", "Whismur": "咕妞妞", "Loudred": "吼爆弹", "Exploud": "爆音怪", "Makuhita": "幕下力士", "Hariyama": "铁掌力士", "Azurill": "露力丽", "Nosepass": "朝北鼻", "Skitty": "向尾喵", "Delcatty": "优雅猫", "Sableye": "勾魂眼", "Mawile": "大嘴娃", "Aron": "可可多拉", "Lairon": "可多拉", "Aggron": "波士可多拉", "Meditite": "玛沙那", "Medicham": "恰雷姆", "Electrike": "落雷兽", "Manectric": "雷电兽", "Plusle": "正电拍拍", "Minun": "负电拍拍", "Volbeat": "电萤虫", "Illumise": "甜甜萤", "Roselia": "毒蔷薇", "Gulpin": "溶食兽", "Swalot": "吞食兽", "Carvanha": "利牙鱼", "Sharpedo": "巨牙鲨", "Wailmer": "吼吼鲸", "Wailord": "吼鲸王", "Numel": "呆火驼", "Camerupt": "喷火驼", "Torkoal": "煤炭龟", "Spoink": "跳跳猪", "Grumpig": "噗噗猪", "Spinda": "晃晃斑", "Trapinch": "大颚蚁", "Vibrava": "超音波幼虫", "Flygon": "沙漠蜻蜓", "Cacnea": "刺球仙人掌", "Cacturne": "梦歌仙人掌", "Swablu": "青绵鸟", "Altaria": "七夕青鸟", "Zangoose": "猫鼬斩", "Seviper": "饭匙蛇", "Lunatone": "月石", "Solrock": "太阳岩", "Barboach": "泥泥鳅", "Whiscash": "鲶鱼王", "Corphish": "龙虾小兵", "Crawdaunt": "铁螯龙虾", "Baltoy": "天秤偶", "Claydol": "念力土偶", "Lileep": "触手百合", "Cradily": "摇篮百合", "Anorith": "太古羽虫", "Armaldo": "太古盔甲", "Feebas": "丑丑鱼", "Milotic": "美纳斯", "Castform": "飘浮泡泡", "Kecleon": "变隐龙", "Shuppet": "怨影娃娃", "Banette": "诅咒娃娃", "Duskull": "夜巡灵", "Dusclops": "彷徨夜灵", "Tropius": "热带龙", "Chimecho": "风铃铃", "Absol": "阿勃梭鲁", "Wynaut": "小果然", "Snorunt": "雪童子", "Glalie": "冰鬼护", "Spheal": "海豹球", "Sealeo": "海魔狮", "Walrein": "帝牙海狮", "Clamperl": "珍珠贝", "Huntail": "猎斑鱼", "Gorebyss": "樱花鱼", "Relicanth": "古空棘鱼", "Luvdisc": "爱心鱼", "Bagon": "宝贝龙", "Shelgon": "甲壳龙", "Salamence": "暴飞龙", "Beldum": "铁哑铃", "Metang": "金属怪", "Metagross": "巨金怪", "Regirock": "雷吉洛克", "Regice": "雷吉艾斯", "Registeel": "雷吉斯奇鲁", "Latias": "拉帝亚斯", "Latios": "拉帝欧斯", "Kyogre": "盖欧卡", "Primal Kyogre": "原始盖欧卡", "Groudon": "固拉多", "Primal Groudon": "原始固拉多", "Rayquaza": "烈空坐", "Jirachi": "基拉祈", "Deoxys": "代欧奇希斯", "Turtwig": "草苗龟", "Grotle": "树林龟", "Torterra": "土台龟", "Chimchar": "小火焰猴", "Monferno": "猛火猴", "Infernape": "烈焰猴", "Piplup": "波加曼", "Prinplup": "波皇子", "Empoleon": "帝王拿波", "Starly": "姆克儿", "Staravia": "姆克鸟", "Staraptor": "姆克鹰", "Bidoof": "大牙狸", "Bibarel": "大尾狸", "Kricketot": "圆法师", "Kricketune": "音箱蟀", "Shinx": "小猫怪", "Luxio": "勒克猫", "Luxray": "伦琴猫", "Budew": "含羞苞", "Roserade": "罗丝雷朵", "Cranidos": "头盖龙", "Rampardos": "战槌龙", "Shieldon": "盾甲龙", "Bastiodon": "护城龙", "Burmy": "结草儿", "Wormadam": "结草贵妇", "Mothim": "绅士蛾", "Combee": "三蜜蜂", "Vespiquen": "蜂女王", "Pachirisu": "帕奇利兹", "Buizel": "泳圈鼬", "Floatzel": "浮潜鼬", "Cherubi": "樱花宝", "Cherrim": "樱花儿", "Shellos": "无壳海兔", "Gastrodon": "海兔兽", "Ambipom": "双尾怪手", "Drifloon": "飘飘球", "Drifblim": "随风球", "Buneary": "卷卷耳", "Lopunny": "长耳兔", "Mismagius": "梦妖魔", "Honchkrow": "乌鸦头头", "Glameow": "魅力喵", "Purugly": "东施喵", "Chingling": "铃铛响", "Stunky": "臭鼬噗", "Skuntank": "坦克臭鼬", "Bronzor": "铜镜怪", "Bronzong": "青铜钟", "Bonsly": "盆才怪", "Mime Jr.": "魔尼尼", "Happiny": "小福蛋", "Chatot": "聒噪鸟", "Spiritomb": "花岩怪", "Gible": "圆陆鲨", "Gabite": "尖牙陆鲨", "Garchomp": "烈咬陆鲨", "Munchlax": "小卡比兽", "Riolu": "利欧路", "Lucario": "路卡利欧", "Hippopotas": "沙河马", "Hippowdon": "河马兽", "Skorupi": "钳尾蝎", "Drapion": "龙王蝎", "Croagunk": "不良蛙", "Toxicroak": "毒骷蛙", "Carnivine": "尖牙笼", "Finneon": "荧光鱼", "Lumineon": "霓虹鱼", "Mantyke": "小球飞鱼", "Snover": "雪笠怪", "Abomasnow": "暴雪王", "Weavile": "玛狃拉", "Magnezone": "自爆磁怪", "Lickilicky": "大舌舔", "Rhyperior": "超甲狂犀", "Tangrowth": "巨蔓藤", "Electivire": "电击魔兽", "Magmortar": "鸭嘴炎兽", "Togekiss": "波克基斯", "Yanmega": "远古巨蜓", "Leafeon": "叶伊布", "Glaceon": "冰伊布", "Gliscor": "天蝎王", "Mamoswine": "象牙猪", "Porygon-Z": "多边兽Ｚ", "Gallade": "艾路雷朵", "Probopass": "大朝北鼻", "Dusknoir": "黑夜魔灵", "Froslass": "雪妖女", "Rotom": "洛托姆", "Uxie": "由克希", "Mesprit": "艾姆利多", "Azelf": "亚克诺姆", "Dialga": "帝牙卢卡", "Palkia": "帕路奇亚", "Heatran": "席多蓝恩", "Regigigas": "雷吉奇卡斯", "Giratina": "骑拉帝纳", "Cresselia": "克雷色利亚", "Phione": "霏欧纳", "Manaphy": "玛纳霏", "Darkrai": "达克莱伊", "Shaymin": "谢米", "Arceus": "阿尔宙斯", "Victini": "比克提尼", "Snivy": "藤藤蛇", "Servine": "青藤蛇", "Serperior": "君主蛇", "Tepig": "暖暖猪", "Pignite": "炒炒猪", "Emboar": "炎武王", "Oshawott": "水水獭", "Dewott": "双刃丸", "Samurott": "大剑鬼", "Patrat": "探探鼠", "Watchog": "步哨鼠", "Lillipup": "小约克", "Herdier": "哈约克", "Stoutland": "长毛狗", "Purrloin": "扒手猫", "Liepard": "酷豹", "Pansage": "花椰猴", "Simisage": "花椰猿", "Pansear": "爆香猴", "Simisear": "爆香猿", "Panpour": "冷水猴", "Simipour": "冷水猿", "Munna": "食梦梦", "Musharna": "梦梦蚀", "Pidove": "豆豆鸽", "Tranquill": "咕咕鸽", "Unfezant": "高傲雉鸡", "Blitzle": "斑斑马", "Zebstrika": "雷电斑马", "Roggenrola": "石丸子", "Boldore": "地幔岩", "Gigalith": "庞岩怪", "Woobat": "滚滚蝙蝠", "Swoobat": "心蝙蝠", "Drilbur": "螺钉地鼠", "Excadrill": "龙头地鼠", "Audino": "差不多娃娃", "Timburr": "搬运小匠", "Gurdurr": "铁骨土人", "Conkeldurr": "修建老匠", "Tympole": "圆蝌蚪", "Palpitoad": "蓝蟾蜍", "Seismitoad": "蟾蜍王", "Throh": "投摔鬼", "Sawk": "打击鬼", "Sewaddle": "虫宝包", "Swadloon": "宝包茧", "Leavanny": "保姆虫", "Venipede": "百足蜈蚣", "Whirlipede": "车轮球", "Scolipede": "蜈蚣王", "Cottonee": "木棉球", "Whimsicott": "风妖精", "Petilil": "百合根娃娃", "Lilligant": "裙儿小姐", "Basculin": "野蛮鲈鱼", "Sandile": "黑眼鳄", "Krokorok": "混混鳄", "Krookodile": "流氓鳄", "Darumaka": "火红不倒翁", "Darmanitan": "达摩狒狒", "Maractus": "沙铃仙人掌", "Dwebble": "石居蟹", "Crustle": "岩殿居蟹", "Scraggy": "滑滑小子", "Scrafty": "头巾混混", "Sigilyph": "象征鸟", "Yamask": "哭哭面具", "Cofagrigus": "死神棺", "Tirtouga": "原盖海龟", "Carracosta": "肋骨海龟", "Archen": "始祖小鸟", "Archeops": "始祖大鸟", "Trubbish": "破破袋", "Garbodor": "灰尘山", "Zorua": "索罗亚", "Zoroark": "索罗亚克", "Minccino": "泡沫栗鼠", "Cinccino": "奇诺栗鼠", "Gothita": "哥德宝宝", "Gothorita": "哥德小童", "Gothitelle": "哥德小姐", "Solosis": "单卵细胞球", "Duosion": "双卵细胞球", "Reuniclus": "人造细胞卵", "Ducklett": "鸭宝宝", "Swanna": "舞天鹅", "Vanillite": "迷你冰", "Vanillish": "多多冰", "Vanilluxe": "双倍多多冰", "Deerling": "四季鹿", "Sawsbuck": "萌芽鹿", "Emolga": "电飞鼠", "Karrablast": "盖盖虫", "Escavalier": "骑士蜗牛", "Foongus": "哎呀球菇", "Amoonguss": "败露球菇", "Frillish": "轻飘飘", "Jellicent": "胖嘟嘟", "Alomomola": "保母曼波", "Joltik": "电电虫", "Galvantula": "电蜘蛛", "Ferroseed": "种子铁球", "Ferrothorn": "坚果哑铃", "Klink": "齿轮儿", "Klang": "齿轮组", "Klinklang": "齿轮怪", "Tynamo": "麻麻小鱼", "Eelektrik": "麻麻鳗", "Eelektross": "麻麻鳗鱼王", "Elgyem": "小灰怪", "Beheeyem": "大宇怪", "Litwick": "烛光灵", "Lampent": "灯火幽灵", "Chandelure": "水晶灯火灵", "Axew": "牙牙", "Fraxure": "斧牙龙", "Haxorus": "双斧战龙", "Cubchoo": "喷嚏熊", "Beartic": "冻原熊", "Cryogonal": "几何雪花", "Shelmet": "小嘴蜗", "Accelgor": "敏捷虫", "Stunfisk": "泥巴鱼", "Mienfoo": "功夫鼬", "Mienshao": "师父鼬", "Druddigon": "赤面龙", "Golett": "泥偶小人", "Golurk": "泥偶巨人", "Pawniard": "驹刀小兵", "Bisharp": "劈斩司令", "Bouffalant": "爆炸头水牛", "Rufflet": "毛头小鹰", "Braviary": "勇士雄鹰", "Vullaby": "秃鹰丫头", "Mandibuzz": "秃鹰娜", "Heatmor": "熔蚁兽", "Durant": "铁蚁", "Deino": "单首龙", "Zweilous": "双首暴龙", "Hydreigon": "三首恶龙", "Larvesta": "燃烧虫", "Volcarona": "火神蛾", "Cobalion": "勾帕路翁", "Terrakion": "代拉基翁", "Virizion": "毕力吉翁", "Tornadus": "龙卷云", "Thundurus": "雷电云", "Reshiram": "莱希拉姆", "Zekrom": "捷克罗姆", "Landorus": "土地云", "Kyurem": "酋雷姆", "Keldeo": "凯路迪欧", "Meloetta": "美洛耶塔", "Genesect": "盖诺赛克特", "Chespin": "哈力栗", "Quilladin": "胖胖哈力", "Chesnaught": "布里卡隆", "Fennekin": "火狐狸", "Braixen": "长尾火狐", "Delphox": "妖火红狐", "Froakie": "呱呱泡蛙", "Frogadier": "呱头蛙", "Greninja": "甲贺忍蛙", "Bunnelby": "掘掘兔", "Diggersby": "掘地兔", "Fletchling": "小箭雀", "Fletchinder": "火箭雀", "Talonflame": "烈箭鹰", "Scatterbug": "粉蝶虫", "Spewpa": "粉蝶蛹", "Vivillon": "彩粉蝶", "Litleo": "小狮狮", "Pyroar": "火炎狮", "Flabébé": "花蓓蓓", "Flabebe": "花蓓蓓", "Floette": "花叶蒂", "Florges": "花洁夫人", "Skiddo": "坐骑小羊", "Gogoat": "坐骑山羊", "Pancham": "顽皮熊猫", "Pangoro": "流氓熊猫", "Furfrou": "多丽米亚", "Espurr": "妙喵", "Meowstic": "超能妙喵", "Honedge": "独剑鞘", "Doublade": "双剑鞘", "Aegislash": "坚盾剑怪", "Spritzee": "粉香香", "Aromatisse": "芳香精", "Swirlix": "绵绵泡芙", "Slurpuff": "胖甜妮", "Inkay": "好啦鱿", "Malamar": "乌贼王", "Binacle": "龟脚脚", "Barbaracle": "龟足巨铠", "Skrelp": "垃垃藻", "Dragalge": "毒藻龙", "Clauncher": "铁臂枪虾", "Clawitzer": "钢炮臂虾", "Helioptile": "伞电蜥", "Heliolisk": "光电伞蜥", "Tyrunt": "宝宝暴龙", "Tyrantrum": "怪颚龙", "Amaura": "冰雪龙", "Aurorus": "冰雪巨龙", "Sylveon": "仙子伊布", "Hawlucha": "摔角鹰人", "Dedenne": "咚咚鼠", "Carbink": "小碎钻", "Goomy": "黏黏宝", "Sliggoo": "黏美儿", "Goodra": "黏美龙", "Klefki": "钥圈儿", "Phantump": "小木灵", "Trevenant": "朽木妖", "Pumpkaboo": "南瓜精", "Gourgeist": "南瓜怪人", "Bergmite": "冰宝", "Avalugg": "冰岩怪", "Noibat": "嗡蝠", "Noivern": "音波龙", "Xerneas": "哲尔尼亚斯", "Yveltal": "伊裴尔塔尔", "Zygarde": "基格尔德", "Diancie": "蒂安希", "Hoopa": "胡帕", "Volcanion": "波尔凯尼恩", "Rowlet": "木木枭", "Dartrix": "投羽枭", "Decidueye": "狙射树枭", "Litten": "火斑喵", "Torracat": "炎热喵", "Incineroar": "炽焰咆哮虎", "Popplio": "球球海獅", "Brionne": "花漾海狮", "Primarina": "西狮海壬", "Pikipek": "小笃儿", "Trumbeak": "喇叭啄鸟", "Toucannon": "铳嘴大鸟", "Yungoos": "猫鼬少", "Gumshoos": "猫鼬探长", "Grubbin": "强颚鸡母虫", "Charjabug": "虫电宝", "Vikavolt": "锹农炮虫", "Crabrawler": "好胜蟹", "Crabominable": "好胜毛蟹", "Oricorio": "花舞鸟", "Cutiefly": "萌虻", "Ribombee": "蝶结萌虻", "Rockruff": "岩狗狗", "Lycanroc": "鬃岩狼人", "Wishiwashi": "弱丁鱼", "Mareanie": "好坏星", "Toxapex": "超坏星", "Mudbray": "泥驴仔", "Mudsdale": "重泥挽马", "Dewpider": "滴蛛", "Araquanid": "滴蛛霸", "Fomantis": "伪螳草", "Lurantis": "兰螳花", "Morelull": "睡睡菇", "Shiinotic": "灯罩夜菇", "Salandit": "夜盗火蜥", "Salazzle": "焰后蜥", "Stufful": "童偶熊", "Bewear": "穿着熊", "Bounsweet": "甜竹竹", "Steenee": "甜舞妮", "Tsareena": "甜冷美后", "Comfey": "花疗环环", "Oranguru": "智挥猩", "Passimian": "投掷猴", "Wimpod": "胆小虫", "Golisopod": "具甲武者", "Sandygast": "沙丘娃", "Palossand": "噬沙堡爷", "Pyukumuku": "拳海参", "Type: Null": "属性：空", "Silvally": "银伴战兽", "Minior": "小陨星", "Komala": "树枕尾熊", "Turtonator": "爆焰龟兽", "Togedemaru": "托戈德玛尔", "Mimikyu": "谜拟Ｑ", "Bruxish": "磨牙彩皮鱼", "Drampa": "老翁龙", "Dhelmise": "破破舵轮", "Jangmo-o": "心鳞宝", "Hakamo-o": "鳞甲龙", "Kommo-o": "杖尾鳞甲龙", "Tapu Koko": "卡璞·鸣鸣", "Tapu Lele": "卡璞·蝶蝶", "Tapu Bulu": "卡璞·哞哞", "Tapu Fini": "卡璞·鳍鳍", "Cosmog": "科斯莫古", "Cosmoem": "科斯莫姆", "Solgaleo": "索尔迦雷欧", "Lunala": "露奈雅拉", "Nihilego": "虚吾伊德", "Buzzwole": "爆肌蚊", "Pheromosa": "费洛美螂", "Xurkitree": "电束木", "Celesteela": "铁火辉夜", "Kartana": "纸御剑", "Guzzlord": "恶食大王", "Necrozma": "奈克洛兹玛", "Magearna": "瑪機雅娜", "Marshadow": "玛夏多", "Poipole": "毒贝比", "Naganadel": "四颚针龙", "Stakataka": "垒磊石", "Blacephalon": "砰头小丑", "Zeraora": "捷拉奥拉", "Meltan": "美录坦", "Melmetal": "美录梅塔", "Grookey": "敲音猴", "Thwackey": "啪咚猴", "Rillaboom": "轰擂金刚猩", "Scorbunny": "炎兔儿", "Raboot": "腾蹴小将", "Cinderace": "闪焰王牌", "Sobble": "泪眼蜥", "Drizzile": "变涩蜥", "Inteleon": "千面避役", "Skwovet": "贪心栗鼠", "Greedent": "藏饱栗鼠", "Rookidee": "稚山雀", "Corvisquire": "蓝鸦", "Corviknight": "钢铠鸦", "Blipbug": "索侦虫", "Dottler": "天罩虫", "Orbeetle": "以欧路普", "Nickit": "偷儿狐", "Thievul": "狐大盗", "Gossifleur": "幼棉棉", "Eldegoss": "白蓬蓬", "Wooloo": "毛辫羊", "Dubwool": "毛毛角羊", "Chewtle": "咬咬龟", "Drednaw": "暴噬龟", "Yamper": "来电汪", "Boltund": "逐电犬", "Rolycoly": "小炭仔", "Carkol": "大炭车", "Coalossal": "巨炭山", "Applin": "啃果虫", "Flapple": "苹裹龙", "Appletun": "丰蜜龙", "Silicobra": "沙包蛇", "Sandaconda": "沙螺蟒", "Cramorant": "古月鸟", "Arrokuda": "刺梭鱼", "Barraskewda": "戽斗尖梭", "Toxel": "毒电婴", "Toxtricity": "颤弦蝾螈", "Sizzlipede": "烧火蚣", "Centiskorch": "焚焰蚣", "Clobbopus": "拳拳蛸", "Grapploct": "八爪武师", "Sinistea": "来悲茶", "Polteageist": "怖思壶", "Hatenna": "迷布莉姆", "Hattrem": "提布莉姆", "Hatterene": "布莉姆温", "Impidimp": "捣蛋小妖", "Morgrem": "诈唬魔", "Grimmsnarl": "长毛巨魔", "Obstagoon": "堵拦熊", "Perrserker": "喵头目", "Cursola": "魔灵珊瑚", "Sirfetch'd": "葱油兵", "Mr. Rime": "踏冰人偶", "Runerigus": "死神板", "Milcery": "小仙奶", "Alcremie": "霜奶仙", "Falinks": "列阵兵", "Pincurchin": "啪嚓海胆", "Snom": "雪吞虫", "Frosmoth": "雪绒蛾", "Stonjourner": "巨石丁", "Eiscue": "冰砌鹅", "Indeedee": "爱管侍", "Morpeko": "莫鲁贝可", "Cufant": "铜象", "Copperajah": "大王铜象", "Dracozolt": "雷鸟龙", "Arctozolt": "雷鸟海兽", "Dracovish": "鳃鱼龙", "Arctovish": "鳃鱼海兽", "Duraludon": "铝钢龙", "Dreepy": "多龙梅西亚", "Drakloak": "多龙奇", "Dragapult": "多龙巴鲁托", "Zacian": "苍响", "Zamazenta": "藏玛然特", "Eternatus": "无极汰那"}

function pokemonname_noforme(name) {
	if (name == null) return null;

	idx = name.indexOf('Mega ');
	if (idx == 0) {
		let name0 = name.substring('Mega'.length + 1);
		return name0;
	}

	idx = name.indexOf('-');
	if (idx != -1) {
		let name0 = name.substring(0, idx);
		return name0;
	}

	return name;
}

function translate_pokemon(name) {
	if (name == null) return null;

	if (POKENAMES[name] != null) return POKENAMES[name];

	idx = name.indexOf('Mega ');
	if (idx == 0) {
		let name0 = name.substring('Mega'.length + 1);
		return '百万' + (translate_pokemon(name0));
	}

	idx = name.indexOf('-Alola');
	if (idx != -1) {
		let name0 = name.substring(0, idx);
		return translate_pokemon(name0) + '-阿罗拉'
	}
	
	idx = name.indexOf('-Galar');
	if (idx != -1) {
		let name0 = name.substring(0, idx);
		return translate_pokemon(name0) + '-伽勒尔'
	}

	formes = [{
		name: 'Arceus',
		types: TYPENAMES,
	}, {
		name: 'Silvally',
		types: TYPENAMES,
	}, {
		name: 'Giratina',
		types: {
			'O': '起源形态',
		}
	}, {
		name: 'Deoxys',
		types: {
			'A': '攻击形态',
			'D': '防御形态',
			'S': '速度形态',
		}
	}, {
		name: 'Pumpkaboo',
		types: {
			'Average': '一般尺寸',
			'Small': '小型尺寸',
			'Large': '大型尺寸',
			'Super': '特大尺寸',
		}
	}, {
		name: 'Gourgeist',
		types: {
			'Average': '一般尺寸',
			'Small': '小型尺寸',
			'Large': '大型尺寸',
			'Super': '特大尺寸',
		}
	}, {
		name: 'Floette',
		types: {
			'E': '永远的花',
		}
	}, {
		name: 'Hoopa',
		types: {
			'Unbound': '解放的',
		}
	}, {
		name: 'Kyurem',
		types: {
			'B': '暗黑',
			'W': '焰白',
		}
	}, {
		name: 'Aegislash',
		types: {
			'Shield': '盾形态',
			'Blade': '剑形态',
		}
	}, {
		name: 'Minior',
		types: {
			'Up': '流星的样子',
			'Down': '核心',
		}
	}, {
		name: 'Darmanitan',
		types: {
			'Z': '达摩模式',
			'Zen': '达摩模式',
		}
	}, {
		name: 'Landorus',
		types: {
			'T': '灵兽形态',
		}
	}, {
		name: 'Tornadus',
		types: {
			'T': '灵兽形态',
		}
	}, {
		name: 'Thundurus',
		types: {
			'T': '灵兽形态',
		}
	}, {
		name: 'Lycanroc',
		types: {
			'Midday': '白昼的样子',
			'Midnight': '黑夜的样子',
		}
	}, {
		name: 'Oricorio',
		types: {
			'Fire': '热辣热辣风格',
			'Electric': '啪滋啪滋风格',
			'Psychic': '呼拉呼拉风格',
			'Ghost': '轻盈轻盈风格',
			'Baile': '热辣热辣风格',
			'Pom-Pom': '啪滋啪滋风格',
			'Pa\'u': '呼拉呼拉风格',
			'Sensu': '轻盈轻盈风格',
		},
	}, {
		name: 'Wormadam',
		types: {
			'S': '垃圾蓑衣',
			'G': '砂土蓑衣',
		}
	}, {
		name: 'Shaymin',
		types: {
			'S': '天空形态',
		}
	}, {
		name: 'Rotom',
		types: {
			'W': '冲洗',
			'S': '旋转',
			'H': '炽热',
			'F': '冰霜',
			'C': '除草',
		}
	}, {
		name: 'Wishiwashi',
		types: {
			'School': '鱼群',
		}
	}, {
		name: 'Mimikyu',
		types: {
			'Busted': '画皮被破开',
		},
		name: 'Necrozma',
		types: {
			'Solgaleo': '黄昏之鬃',
			'Lunala': '拂晓之翼',
			'Ultra': '究极',
		}
	}, {
		name: 'Eiscue',
		types: {
			'Noice': '解冻形态',
		},
	}];
	idx = name.indexOf('-');
	if (idx != -1) {
		for (let forme of formes) {
			if (name.indexOf(forme.name) == 0) {
				let type = name.substring(idx + 1);
				//if( forme.types[type] == null) console.warn('not translated',name);
				return POKENAMES[forme.name] + '-' + forme.types[type];
			}
		}
	}

	//console.warn('not translated',name);

	return name;
}
var TYPENAMES = {
	"Normal": "一般",
	"Grass": "草",
	"Fire": "火",
	"Water": "水",
	"Electric": "电",
	"Ice": "冰",
	"Flying": "飞行",
	"Bug": "虫",
	"Poison": "毒",
	"Ground": "地面",
	"Rock": "岩石",
	"Fighting": "格斗",
	"Psychic": "超能力",
	"Ghost": "幽灵",
	"Dragon": "龙",
	"Dark": "恶",
	"Steel": "钢",
	"Typeless": "无属性",
	"Fairy": "妖精",
}

function translate_type(name) {
	if (name == null) return null;
	return TYPENAMES[name] || name;
}

		// (function(){
		// 	$('td').each(function(){$(this).html(translate($(this).html()));})
		// })();