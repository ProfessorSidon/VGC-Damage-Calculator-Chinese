function getKOChanceText(damage, move, defender, field, isBadDreams) {
	if (isNaN(damage[0])) {
		return '出错了';
	}
	if (damage[damage.length - 1] === 0) {
		if (field.weather === "Harsh Sun" && move.type === "Water") {
			return '水属性攻击因日光非常猛烈而蒸发';
		} else if (field.weather === "Heavy Rain" && move.type === "Fire") {
			return '火属性攻击因下大雨而熄灭';
		}
		return '<a href="https://bangumi.bilibili.com/anime/5761/play#97555">皮卡丘！加油！(避雷针？不存在的)</a>';
	}
	var hasSitrus = defender.item === 'Sitrus Berry';
	var hasFigy = defender.item === 'Figy Berry';
	var gluttony = defender.ability === "Gluttony";
	if ((damage.length !== 256 || (!hasSitrus && !hasFigy)) && damage[0] >= defender.curHP) {
		return '确定一击击杀';
	} else if (damage.length === 256 && hasSitrus && damage[0] >= defender.curHP + Math.floor(defender.maxHP / 4)) {
		return '确定一击击杀';
	} else if (damage.length === 256 && hasFigy && damage[0] >= defender.curHP + Math.floor(defender.maxHP / 3)) {
		return '确定一击击杀';
	}

	var hazards = 0;
	var hazardText = [];
	if (field.isSR && defender.ability !== 'Magic Guard') {
		var effectiveness = typeChart['Rock'][defender.type1] * (defender.type2 ? typeChart['Rock'][defender.type2] : 1);
		hazards += Math.floor(effectiveness * defender.maxHP / 8);
		hazardText.push('隐形岩');
	}
	if ([defender.type1, defender.type2].indexOf('Flying') === -1 &&
		['Magic Guard', 'Levitate'].indexOf(defender.ability) === -1 && defender.item !== 'Air Balloon') {
		if (field.spikes === 1) {
			hazards += Math.floor(defender.maxHP / 8);
			if (gen === 2) {
				hazardText.push('撒菱');
			} else {
				hazardText.push('1层撒菱');
			}
		} else if (field.spikes === 2) {
			hazards += Math.floor(defender.maxHP / 6);
			hazardText.push('2层撒菱');
		} else if (field.spikes === 3) {
			hazards += Math.floor(defender.maxHP / 4);
			hazardText.push('3层撒菱');
		}
	}
	if (isNaN(hazards)) {
		hazards = 0;
	}

	var eot = 0;
	var eotText = [];
	if (field.weather === 'Sun') {
		if (defender.ability === 'Dry Skin' || defender.ability === 'Solar Power') {
			eot -= Math.floor(defender.maxHP / 8);
			eotText.push(translate_ability(defender.ability) + '伤害');
		}
	} else if (field.weather === 'Rain') {
		if (defender.ability === 'Dry Skin') {
			eot += Math.floor(defender.maxHP / 8);
			eotText.push('干燥皮肤回复');
		} else if (defender.ability === 'Rain Dish') {
			eot += Math.floor(defender.maxHP / 16);
			eotText.push('雨盘回复');
		}
	} else if (field.weather === 'Sand') {
		if (['Rock', 'Ground', 'Steel'].indexOf(defender.type1) === -1 &&
			['Rock', 'Ground', 'Steel'].indexOf(defender.type2) === -1 &&
			['Magic Guard', 'Overcoat', 'Sand Force', 'Sand Rush', 'Sand Veil'].indexOf(defender.ability) === -1 &&
			defender.item !== 'Safety Goggles') {
			eot -= Math.floor(defender.maxHP / 16);
			eotText.push('沙暴伤害');
		}
	} else if (field.weather === 'Hail') {
		if (defender.ability === 'Ice Body') {
			eot += Math.floor(defender.maxHP / 16);
			eotText.push('冰冻之躯回复');
		} else if (defender.type1 !== 'Ice' && defender.type2 !== 'Ice' &&
			['Magic Guard', 'Overcoat', 'Snow Cloak'].indexOf(defender.ability) === -1 &&
			defender.item !== 'Safety Goggles') {
			eot -= Math.floor(defender.maxHP / 16);
			eotText.push('冰雹伤害');
		}
	}
	if (defender.item === 'Leftovers') {
		eot += Math.floor(defender.maxHP / 16);
		eotText.push('吃剩的东西回复');
	} else if (defender.item === 'Black Sludge') {
		if (defender.type1 === 'Poison' || defender.type2 === 'Poison') {
			eot += Math.floor(defender.maxHP / 16);
			eotText.push('黑色污泥回复');
		} else if (defender.ability !== 'Magic Guard' && defender.ability !== 'Klutz') {
			eot -= Math.floor(defender.maxHP / 8);
			eotText.push('黑色污泥伤害');
		}
	}
	if (field.terrain === "Grassy") {
		if (field.isGravity || (defender.type1 !== "Flying" && defender.type2 !== "Flying" &&
			defender.item !== "Air Balloon" && defender.ability !== "Levitate")) {
			eot += Math.floor(defender.maxHP / 16);
			eotText.push('青草场地回复');
		}
	}
	var toxicCounter = 0;
	if (defender.status === 'Poisoned') {
		if (defender.ability === 'Poison Heal') {
			eot += Math.floor(defender.maxHP / 8);
			eotText.push('毒疗');
		} else if (defender.ability !== 'Magic Guard') {
			eot -= Math.floor(defender.maxHP / 8);
			eotText.push('中毒伤害');
		}
	} else if (defender.status === 'Badly Poisoned') {
		if (defender.ability === 'Poison Heal') {
			eot += Math.floor(defender.maxHP / 8);
			eotText.push('毒疗');
		} else if (defender.ability !== 'Magic Guard') {
			eotText.push('中毒伤害');
			toxicCounter = defender.toxicCounter;
		}
	} else if (defender.status === 'Burned') {
        var burnDmgDivider = (gen >= 7) ? 16 : 8;
		if (defender.ability === 'Heatproof') {
			eot -= Math.floor(defender.maxHP / burnDmgDivider / 2);
			eotText.push('减少的烧伤伤害');
		} else if (defender.ability !== 'Magic Guard') {
			eot -= Math.floor(defender.maxHP / burnDmgDivider);
			eotText.push('烧伤伤害');
		}
	} else if (defender.status === 'Asleep' && isBadDreams && defender.ability !== 'Magic Guard') {
		eot -= Math.floor(defender.maxHP / 8);
		eotText.push('梦魇');
	}

	// multi-hit moves have too many possibilities for brute-forcing to work, so reduce it to an approximate distribution
	var qualifier = '';
	if (move.hits > 1) {
		qualifier = '约';
		damage = squashMultihit(damage, move.hits);
	}

	var multihit = damage.length === 256 || move.hits > 1;
	var c = getKOChance(damage, multihit, defender.curHP - hazards, 0, 1, defender.maxHP, toxicCounter, hasSitrus, hasFigy, gluttony);
	var afterText = hazardText.length > 0 ? ' (在' + serializeText(hazardText) + '后)' : '';
	if (c === 1) {
		return '确定一击击杀' + afterText;
	} else if (c > 0) {
		return qualifier + Math.round(c * 1000) / 10 + '%几率一击击杀' + afterText;
	}

	if (hasSitrus && move.name !== 'Knock Off') {
		eotText.push('文柚果回复(1/4HP)');
	}

	if (hasFigy && move.name !== 'Knock Off') {
		if (gluttony) eotText.push('贪吃鬼树果回复(1/2HP)');
		else eotText.push('树果回复(1/2HP)');
	}
	afterText = hazardText.length > 0 || eotText.length > 0 ? ' (在' + serializeText(hazardText.concat(eotText)) + '后)' : '';
	var i;
	for (i = 2; i <= 4; i++) {
		c = getKOChance(damage, multihit, defender.curHP - hazards, eot, i, defender.maxHP, toxicCounter, hasSitrus, hasFigy, gluttony);
		if (c === 1) {
			return '确定' + i + '次攻击击杀' + afterText;
		} else if (c > 0) {
			var pct = Math.round(c * 1000) / 10;
			var chance = pct ? qualifier + pct + '%' : '微小';
			return chance + '几率' + i + '次攻击击杀' + afterText;
		}
	}

	for (i = 5; i <= 9; i++) {
		if (predictTotal(damage[0], eot, i, toxicCounter, defender.curHP - hazards, defender.maxHP, hasSitrus, hasFigy, gluttony) >= defender.curHP - hazards) {
			return '确定' + i + '次攻击击杀' + afterText;
		} else if (predictTotal(damage[damage.length - 1], eot, i, toxicCounter, defender.curHP - hazards, defender.maxHP, hasSitrus, hasFigy, gluttony) >= defender.curHP - hazards) {
			return '可能' + i + '次攻击击杀' + afterText;
		}
	}

	return '没法更差了';
}

function getKOChance(damage, multihit, hp, eot, hits, maxHP, toxicCounter, hasSitrus, hasFigy, gluttony) {
	var n = damage.length;
	var minDamage = damage[0];
	var maxDamage = damage[n - 1];
	var i;
	if (hits === 1) {
		if ((!multihit || !hasSitrus) && maxDamage < hp) {
			return 0;
		} else if (multihit && hasSitrus && maxDamage < hp + Math.floor(maxHP / 4)) {
			return 0;
		} else if (multihit && hasFigy && maxDamage < hp + Math.floor(maxHP / 2)) {
			return 0;
		}
		for (i = 0; i < n; i++) {
			if ((!multihit || (!hasSitrus && !hasFigy)) && damage[i] >= hp) {
				return (n - i) / n;
			} else if (multihit && hasSitrus && damage[i] >= hp + Math.floor(maxHP / 4)) {
				return (n - i) / n;
            } else if (multihit && hasFigy && damage[i] >= hp + Math.floor(maxHP / 3)) {
				return (n - i) / n;
			}
		}
	}
    /*
    if (predictTotal(maxDamage, eot, hits, toxicCounter, hp, maxHP, hasSitrus, hasFigy, gluttony) < hp) {
        return 0;
    } else if (predictTotal(minDamage, eot, hits, toxicCounter, hp, maxHP, hasSitrus, hasFigy, gluttony) >= hp) {
        return 1;
    }*/
	var toxicDamage = 0;
	if (toxicCounter > 0) {
		toxicDamage = Math.floor(toxicCounter * maxHP / 16);
		toxicCounter++;
	}
	var sum = 0;
	var lastC = 0;
	for (i = 0; i < n; i++) {
		if ((hp - damage[i] <= maxHP / 2) && hasSitrus) {
			hp += Math.floor(maxHP / 4);
			hasSitrus = false;
		}
		else if (((hp - damage[i] <= maxHP / 4) && hasFigy && !gluttony) || ((hp - damage[i] <= maxHP / 2) && hasFigy && gluttony)) {
            hp += Math.floor(maxHP / 3);
			hasFigy = false;
		}
		var c;
		if (i === 0 || damage[i] !== damage[i - 1]) {
			c = getKOChance(damage, multihit, hp - damage[i] + eot - toxicDamage, eot, hits - 1, maxHP, toxicCounter, hasSitrus, hasFigy, gluttony);
		} else {
			c = lastC;
		}
		if (c === 1) {
			sum += (n - i);
			break;
		} else {
			sum += c;
		}
		lastC = c;
	}
	return sum / n;
}

function predictTotal(damage, eot, hits, toxicCounter, hp, maxHP, hasSitrus, hasFigy, gluttony) {
	var total = 0;
	for (var i = 0; i < hits; i++) {
		total += damage;
		if ((hp - total <= maxHP / 2) && hasSitrus) {
			total -= Math.floor(maxHP / 4);
			hasSitrus = false;
		}
		else if (((hp - total <= maxHP / 4) && hasFigy && !gluttony) || ((hp - total <= maxHP / 2) && hasFigy && gluttony)) {
            hp += Math.floor(maxHP / 3);
			hasFigy = false;
		}
		if (i < hits - 1) {
			total -= eot;
			if (toxicCounter > 0) {
				total += Math.floor((toxicCounter + i) * maxHP / 16);
			}
		}
	}
	return total;
}

function squashMultihit(d, hits) {
	if (d.length === 1) {
		return [d[0] * hits];
	} else if (gen === 1) {
		var r = [];
		for (var i = 0; i < d.length; i++) {
			r[i] = d[i] * hits;
		}
		return r;
	} else if (d.length === 16) {
		switch (hits) {
			case 2:
				return [
					2 * d[0], d[2] + d[3], d[4] + d[4], d[4] + d[5],
					d[5] + d[6], d[6] + d[6], d[6] + d[7], d[7] + d[7],
					d[8] + d[8], d[8] + d[9], d[9] + d[9], d[9] + d[10],
					d[10] + d[11], d[11] + d[11], d[12] + d[13], 2 * d[15]
				];
			case 3:
				return [
					3 * d[0], d[3] + d[3] + d[4], d[4] + d[4] + d[5], d[5] + d[5] + d[6],
					d[5] + d[6] + d[6], d[6] + d[6] + d[7], d[6] + d[7] + d[7], d[7] + d[7] + d[8],
					d[7] + d[8] + d[8], d[8] + d[8] + d[9], d[8] + d[9] + d[9], d[9] + d[9] + d[10],
					d[9] + d[10] + d[10], d[10] + d[11] + d[11], d[11] + d[12] + d[12], 3 * d[15]
				];
			case 4:
				return [
					4 * d[0], 4 * d[4], d[4] + d[5] + d[5] + d[5], d[5] + d[5] + d[6] + d[6],
					4 * d[6], d[6] + d[6] + d[7] + d[7], 4 * d[7], d[7] + d[7] + d[7] + d[8],
					d[7] + d[8] + d[8] + d[8], 4 * d[8], d[8] + d[8] + d[9] + d[9], 4 * d[9],
					d[9] + d[9] + d[10] + d[10], d[10] + d[10] + d[10] + d[11], 4 * d[11], 4 * d[15]
				];
			case 5:
				return [
					5 * d[0], d[4] + d[4] + d[4] + d[5] + d[5], d[5] + d[5] + d[5] + d[5] + d[6], d[5] + d[6] + d[6] + d[6] + d[6],
					d[6] + d[6] + d[6] + d[6] + d[7], d[6] + d[6] + d[7] + d[7] + d[7], 5 * d[7], d[7] + d[7] + d[7] + d[8] + d[8],
					d[7] + d[7] + d[8] + d[8] + d[8], 5 * d[8], d[8] + d[8] + d[8] + d[9] + d[9], d[8] + d[9] + d[9] + d[9] + d[9],
					d[9] + d[9] + d[9] + d[9] + d[10], d[9] + d[10] + d[10] + d[10] + d[10], d[10] + d[10] + d[11] + d[11] + d[11], 5 * d[15]
				];
			default:
				console.log("Unexpected # of hits: " + hits);
				return d;
		}
	} else if (d.length === 39) {
		switch (hits) {
			case 2:
				return [
					2 * d[0], 2 * d[7], 2 * d[10], 2 * d[12],
					2 * d[14], d[15] + d[16], 2 * d[17], d[18] + d[19],
					d[19] + d[20], 2 * d[21], d[22] + d[23], 2 * d[24],
					2 * d[26], 2 * d[28], 2 * d[31], 2 * d[38]
				];
			case 3:
				return [
					3 * d[0], 3 * d[9], 3 * d[12], 3 * d[13],
					3 * d[15], 3 * d[16], 3 * d[17], 3 * d[18],
					3 * d[20], 3 * d[21], 3 * d[22], 3 * d[23],
					3 * d[25], 3 * d[26], 3 * d[29], 3 * d[38]
				];
			case 4:
				return [
					4 * d[0], 2 * d[10] + 2 * d[11], 4 * d[13], 4 * d[14],
					2 * d[15] + 2 * d[16], 2 * d[16] + 2 * d[17], 2 * d[17] + 2 * d[18], 2 * d[18] + 2 * d[19],
					2 * d[19] + 2 * d[20], 2 * d[20] + 2 * d[21], 2 * d[21] + 2 * d[22], 2 * d[22] + 2 * d[23],
					4 * d[24], 4 * d[25], 2 * d[27] + 2 * d[28], 4 * d[38]
				];
			case 5:
				return [
					5 * d[0], 5 * d[11], 5 * d[13], 5 * d[15],
					5 * d[16], 5 * d[17], 5 * d[18], 5 * d[19],
					5 * d[19], 5 * d[20], 5 * d[21], 5 * d[22],
					5 * d[23], 5 * d[25], 5 * d[27], 5 * d[38]
				];
			default:
				console.log("Unexpected # of hits: " + hits);
				return d;
		}
	} else {
		console.log("Unexpected # of possible damage values: " + d.length);
		return d;
	}
}

function serializeText(arr) {
	if (arr.length === 0) {
		return '';
	} else if (arr.length === 1) {
		return arr[0];
	} else if (arr.length === 2) {
		return arr[0] + "和" + arr[1];
	} else {
		var text = '';
		for (var i = 0; i < arr.length - 1; i++) {
			text += arr[i] + ', ';
		}
		return text + '和' + arr[arr.length - 1];
	}
}
