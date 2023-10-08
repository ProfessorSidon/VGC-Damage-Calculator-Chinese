function getKOChanceText(damage, move, defender, field, isBadDreams) {
    if (isNaN(damage[0])) {
       return 'something broke; please tell nerd of now';
    }
    if (move.name == "Pain Split" && !move.painMax) {
        return 'The battlers shared their pain!';
    }
    if (move.category == "Status") {
        return 'Might as well Thunderbolt a Landorus';
    }
    if (damage[damage.length-1] === 0) {
        if (field.weather === "Harsh Sun" && move.type === "Water") {
            return 'the Water-Type attack evaporated in the harsh sunlight';
        } else if (field.weather === "Heavy Rain" && move.type === "Fire") {
            return 'the Fire-Type attack fizzled out in the heavy rain';
        }
        return '[The Smooth Taste Of] IMMUNE';
    }
    var hasSitrus = defender.item === 'Sitrus Berry';
    var hasFigy = defender.item === 'Figy Berry' || defender.item === 'Aguav Berry' || defender.item === 'Iapapa Berry' || defender.item === 'Mago Berry' || defender.item === 'Wiki Berry';
    var gluttony = defender.ability === "Gluttony";
    var ripen = (defender.ability === "Ripen") ? 2 : 1;
    if ((damage.length !== 256 || (!hasSitrus && !hasFigy)) && damage[0] >= defender.curHP) {
        return 'guaranteed OHKO';
    } else if (damage.length === 256 && hasSitrus && damage[0] >= defender.curHP + Math.floor(ripen * defender.maxHP / 4)) {
        return 'guaranteed OHKO';
    } else if (damage.length === 256 && hasFigy && damage[0] >= defender.curHP + Math.floor(ripen * defender.maxHP / 3)) {
        return 'guaranteed OHKO';
    }

    var hazards = 0;
    var hazardText = [];
    if (field.isSR && defender.ability !== 'Magic Guard' && defender.item !== "Heavy-Duty Boots") {
        var effectiveness = typeChart['Rock'][defender.type1] * (defender.type2 ? typeChart['Rock'][defender.type2] : 1);
        hazards += Math.floor(effectiveness * defender.maxHP / 8);
        hazardText.push('Stealth Rock');
    }
    if ([defender.type1, defender.type2].indexOf('Flying') === -1 &&
        ['Magic Guard', 'Levitate'].indexOf(defender.ability) === -1 && ['Air Balloon', 'Heavy-Duty Boots'].indexOf(defender.item) === -1) {
        if (field.spikes === 1) {
            hazards += Math.floor(defender.maxHP / 8);
            if (gen === 2) {
                hazardText.push('Spikes');
            } else {
                hazardText.push('1 layer of Spikes');
            }
        } else if (field.spikes === 2) {
            hazards += Math.floor(defender.maxHP / 6);
            hazardText.push('2 layers of Spikes');
        } else if (field.spikes === 3) {
            hazards += Math.floor(defender.maxHP / 4);
            hazardText.push('3 layers of Spikes');
        }
    }
    if (isNaN(hazards)) {
        hazards = 0;
    }

    var eot = 0;
    var eotText = [];
    var maxChip = defender.isDynamax ? 0.5 : 1;
    if (field.weather === 'Sun') {
        if (defender.ability === 'Dry Skin' || defender.ability === 'Solar Power') {
            eot -= Math.floor(Math.floor(defender.maxHP / 8) * maxChip);
            eotText.push(defender.ability + ' damage');
        }
    } else if (field.weather === 'Rain') {
        if (defender.ability === 'Dry Skin') {
            eot += Math.floor(Math.floor(defender.maxHP / 8) * maxChip);
            eotText.push('Dry Skin recovery');
        } else if (defender.ability === 'Rain Dish') {
            eot += Math.floor(Math.floor(defender.maxHP / 16) * maxChip);
            eotText.push('Rain Dish recovery');
        }
    } else if (field.weather === 'Sand') {
        if (['Rock', 'Ground', 'Steel'].indexOf(defender.type1) === -1 &&
            ['Rock', 'Ground', 'Steel'].indexOf(defender.type2) === -1 &&
            ['Magic Guard', 'Overcoat', 'Sand Force', 'Sand Rush', 'Sand Veil'].indexOf(defender.ability) === -1 &&
            defender.item !== 'Safety Goggles') {
            eot -= Math.floor(Math.floor(defender.maxHP / 16) * maxChip);
            eotText.push('sandstorm damage');
        }
    } else if (field.weather === 'Hail') {
        if (defender.ability === 'Ice Body') {
            eot += Math.floor(Math.floor(defender.maxHP / 16) * maxChip);
            eotText.push('Ice Body recovery');
        } else if (defender.type1 !== 'Ice' && defender.type2 !== 'Ice' &&
            ['Magic Guard', 'Overcoat', 'Snow Cloak'].indexOf(defender.ability) === -1 &&
            defender.item !== 'Safety Goggles') {
            eot -= Math.floor(Math.floor(defender.maxHP / 16) * maxChip);
            eotText.push('hail damage');
        }
    }
    else if (field.weather === 'Snow' && defender.ability === 'Ice Body') {
        eot += Math.floor(Math.floor(defender.maxHP / 16) * maxChip);
        eotText.push('Ice Body recovery');
    }
    if (defender.item === 'Leftovers') {
        eot += Math.floor(Math.floor(defender.maxHP / 16) * maxChip);
        eotText.push('Leftovers recovery');
    } else if (defender.item === 'Black Sludge') {
        if (defender.type1 === 'Poison' || defender.type2 === 'Poison') {
            eot += Math.floor(Math.floor(defender.maxHP / 16) * maxChip);
            eotText.push('Black Sludge recovery');
        } else if (defender.ability !== 'Magic Guard' && defender.ability !== 'Klutz') {
            eot -= Math.floor(Math.floor(defender.maxHP / 8) * maxChip);
            eotText.push('Black Sludge damage');
        }
    }
    if (field.terrain === "Grassy") {
        if (field.isGravity || (defender.type1 !== "Flying" && defender.type2 !== "Flying" &&
                defender.item !== "Air Balloon" && defender.ability !== "Levitate")) {
            eot += Math.floor(Math.floor(defender.maxHP / 16) * maxChip);
            eotText.push('Grassy Terrain recovery');
        }
    }
    var toxicCounter = 0;
    if (defender.status === 'Poisoned') {
        if (defender.ability === 'Poison Heal') {
            eot += Math.floor(Math.floor(defender.maxHP / 8) * maxChip);
            eotText.push('Poison Heal');
        } else if (defender.ability !== 'Magic Guard') {
            eot -= Math.floor(Math.floor(defender.maxHP / 8) * maxChip);
            eotText.push('poison damage');
        }
    } else if (defender.status === 'Badly Poisoned') {
        if (defender.ability === 'Poison Heal') {
            eot += Math.floor(Math.floor(defender.maxHP / 8) * maxChip);
            eotText.push('Poison Heal');
        } else if (defender.ability !== 'Magic Guard') {
            eotText.push('toxic damage');
            toxicCounter = defender.toxicCounter;
        }
    } else if (defender.status === 'Burned') {
        var burnDmgDivider = (gen >= 7) ? 16 : 8;
        if (defender.ability === 'Heatproof') {
            eot -= Math.floor(Math.floor(defender.maxHP / burnDmgDivider / 2) * maxChip);
            eotText.push('reduced burn damage');
        } else if (defender.ability !== 'Magic Guard') {
            eot -= Math.floor(Math.floor(defender.maxHP / burnDmgDivider) * maxChip);
            eotText.push('burn damage');
        }
    } else if (defender.status === 'Asleep' && isBadDreams && defender.ability !== 'Magic Guard') {
        eot -= Math.floor(Math.floor(defender.maxHP / 8) * maxChip);
        eotText.push('Bad Dreams');
    }

    if (field.isGMaxField && defender.ability !== 'Magic Guard') {
        eot -= Math.floor(Math.floor(defender.maxHP / 6) * maxChip);
        eotText.push('G-Max field damage');
    }

    if (field.isSaltCure && defender.ability !== 'Magic Guard') {
        if (["Water", "Steel"].indexOf(defender.type1) === -1 && ["Water", "Steel"].indexOf(defender.type2) === -1) {
            eot -= Math.floor(Math.floor(defender.maxHP / 8) * maxChip);
            eotText.push('Salt Cure damage');
        }
        else {
            eot -= Math.floor(Math.floor(defender.maxHP / 4) * maxChip);
            eotText.push('extra Salt Cure damage');
        }
    }

    // multi-hit moves have too many possibilities for brute-forcing to work, so reduce it to an approximate distribution
    var qualifier = '';
    if (move.hits > 1 && !move.isTripleHit) {
        qualifier = 'approx. ';
        damage = squashMultihit(damage, move.hits);
    }

    var multihit = damage.length === 256 || move.hits > 1;
    var c = getKOChance(damage, multihit, defender.curHP - hazards, 0, 1, defender.maxHP, toxicCounter, hasSitrus, hasFigy, gluttony, ripen);
    var afterText = hazardText.length > 0 ? ' after ' + serializeText(hazardText) : '';
    if (c === 1) {
        return 'guaranteed OHKO' + afterText;
    }
    else if (c > 0 && eot >= 0) {
        if (move.hits >= 8) {    //sv
            if(c >= .9375)
                return 'very high chance to OHKO' + afterText;                                  //sv
            else if (c <= .0625)
                return 'very low chance to OHKO' + afterText;                                   //sv
        }
        return qualifier + Math.round(c * 1000) / 10 + '% chance to OHKO' + afterText;
    }

    if (hasSitrus && move.name !== 'Knock Off') {
        if (ripen == 2) eotText.push('Ripen Sitrus Berry recovery');
        else eotText.push('Sitrus Berry recovery');
    }

    if (hasFigy && move.name !== 'Knock Off') {
        if (gluttony) eotText.push('Gluttony pinch berry recovery');
        else if (ripen == 2) eotText.push('Ripen pinch berry recovery');
        else eotText.push('pinch berry recovery');
    }

    c = getKOChance(damage, multihit, defender.curHP - hazards + eot, eot, 1, defender.maxHP, toxicCounter, hasSitrus, hasFigy, gluttony, ripen);
    afterText = hazardText.length > 0 || eotText.length > 0 ? ' after ' + serializeText(hazardText.concat(eotText)) : '';
    if (c === 1) {
        return 'guaranteed OHKO' + afterText;
    } else if (c > 0) {
        if (move.hits >= 8 && Math.round(c * 1000) / 10 > 93)    //sv    //This if statement isn't expected to happen, but is accounted for just in case
            return 'very high chance to OHKO' + afterText;                                  //sv
        return qualifier + Math.round(c * 1000) / 10 + '% chance to OHKO' + afterText;
    }

    var i;
    for (i = 2; i <= 4; i++) {
        c = getKOChance(damage, multihit, defender.curHP - hazards, eot, i, defender.maxHP, toxicCounter, hasSitrus, hasFigy, gluttony, ripen);
        if (c === 1) {
            return 'guaranteed ' + i + 'HKO' + afterText;
        } else if (c > 0) {
            var pct = Math.round(c * 1000) / 10;
            var chance = pct > 93 && move.hits >= 8 ? "very high" : pct ? qualifier + pct + '%' : 'Miniscule';  //sv
            return chance + ' chance to ' + i + 'HKO' + afterText;
        }
    }

    for (i = 5; i <= 9; i++) {
        if (predictTotal(damage[0], eot, i, toxicCounter, defender.curHP - hazards, defender.maxHP, hasSitrus, hasFigy, gluttony, ripen) >= defender.curHP - hazards) {
            return 'guaranteed ' + i + 'HKO' + afterText;
        } else if (predictTotal(damage[damage.length-1], eot, i, toxicCounter, defender.curHP - hazards, defender.maxHP, hasSitrus, hasFigy, gluttony, ripen) >= defender.curHP - hazards) {
            return 'possible ' + i + 'HKO' + afterText;
        }
    }

    return 'possibly the worst move ever';
}

function getKOChance(damage, multihit, hp, eot, hits, maxHP, toxicCounter, hasSitrus, hasFigy, gluttony, ripen) {
    var n = damage.length;
    var minDamage = damage[0];
    var maxDamage = damage[n-1];
    var i;
    if (hits === 1) {
        if ((!multihit || !hasSitrus) && maxDamage < hp) {
            return 0;
        } else if (multihit && hasSitrus && maxDamage < hp + Math.floor(ripen * maxHP / 4)) {
            return 0;
        } else if (multihit && hasFigy && maxDamage < hp + Math.floor(ripen * maxHP / 3)) {
            return 0;
        }
        for (i = 0; i < n; i++) {
            if ((!multihit || (!hasSitrus && !hasFigy)) && damage[i] >= hp) {
                return (n-i)/n;
            } else if (multihit && hasSitrus && damage[i] >= hp + Math.floor(ripen * maxHP / 4)) {
                return (n-i)/n;
            } else if (multihit && hasFigy && damage[i] >= hp + Math.floor(ripen * maxHP / 3)) {
                return (n-i)/n;
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
            hp += Math.floor(ripen * maxHP / 4);
            hasSitrus = false;
        }
        else if (((hp - damage[i] <= maxHP / 4) && hasFigy && !gluttony) || ((hp - damage[i] <= maxHP / 2) && hasFigy && gluttony)) {
            hp += Math.floor(ripen * maxHP / 3);
            hasFigy = false;
        }
        var c;
        if (i === 0 || damage[i] !== damage[i-1]) {
            c = getKOChance(damage, multihit, hp - damage[i] + eot - toxicDamage, eot, hits - 1, maxHP, toxicCounter, hasSitrus, hasFigy, gluttony, ripen);
        } else {
            c = lastC;
        }
        if (c === 1) {
            sum += (n-i);
            break;
        } else {
            sum += c;
        }
        lastC = c;
    }
    return sum/n;
}

function predictTotal(damage, eot, hits, toxicCounter, hp, maxHP, hasSitrus, hasFigy, gluttony, ripen) {
    var total = 0;
    for (var i = 0; i < hits; i++) {
        total += damage;
        if ((hp - total <= maxHP / 2) && hasSitrus) {
            total -= Math.floor(ripen * maxHP / 4);
            hasSitrus = false;
        }
        else if (((hp - total <= maxHP / 4) && hasFigy && !gluttony) || ((hp - total <= maxHP / 2) && hasFigy && gluttony)) {
            hp += Math.floor(ripen * maxHP / 3);
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
                    2*d[0], d[2]+d[3], d[4]+d[4], d[4]+d[5],
                    d[5]+d[6], d[6]+d[6], d[6]+d[7], d[7]+d[7],
                    d[8]+d[8], d[8]+d[9], d[9]+d[9], d[9]+d[10],
                    d[10]+d[11], d[11]+d[11], d[12]+d[13], 2*d[15]
                ];
            case 3:
                return [
                    3*d[0], d[3]+d[3]+d[4], d[4]+d[4]+d[5], d[5]+d[5]+d[6],
                    d[5]+d[6]+d[6], d[6]+d[6]+d[7], d[6]+d[7]+d[7], d[7]+d[7]+d[8],
                    d[7]+d[8]+d[8], d[8]+d[8]+d[9], d[8]+d[9]+d[9], d[9]+d[9]+d[10],
                    d[9]+d[10]+d[10], d[10]+d[11]+d[11], d[11]+d[12]+d[12], 3*d[15]
                ];
            case 4:
                return [
                    4*d[0], 4*d[4], d[4]+d[5]+d[5]+d[5], d[5]+d[5]+d[6]+d[6],
                    4*d[6], d[6]+d[6]+d[7]+d[7], 4*d[7], d[7]+d[7]+d[7]+d[8],
                    d[7]+d[8]+d[8]+d[8], 4*d[8], d[8]+d[8]+d[9]+d[9], 4*d[9],
                    d[9]+d[9]+d[10]+d[10], d[10]+d[10]+d[10]+d[11], 4*d[11], 4*d[15]
                ];
            case 5:
                return [
                    5*d[0], d[4]+d[4]+d[4]+d[5]+d[5], d[5]+d[5]+d[5]+d[5]+d[6], d[5]+d[6]+d[6]+d[6]+d[6],
                    d[6]+d[6]+d[6]+d[6]+d[7], d[6]+d[6]+d[7]+d[7]+d[7], 5*d[7], d[7]+d[7]+d[7]+d[8]+d[8],
                    d[7]+d[7]+d[8]+d[8]+d[8], 5*d[8], d[8]+d[8]+d[8]+d[9]+d[9], d[8]+d[9]+d[9]+d[9]+d[9],
                    d[9]+d[9]+d[9]+d[9]+d[10], d[9]+d[10]+d[10]+d[10]+d[10], d[10]+d[10]+d[11]+d[11]+d[11], 5*d[15]
                ];
            case 6:       //PAY ATTENTION TO WHAT SMOGON DOES, THEY MIGHT HANDLE THIS DIFFERENTLY
                return [
                    6*d[0], 2*d[4]+4*d[5], 3*d[5]+3*d[6], 6*d[6],
                    3*d[6]+3*d[7], 6*d[7], 5*d[7]+d[8], 4*d[7]+2*d[8], 
                    2*d[7]+4*d[8], d[7]+5*d[8], 6*d[8], 3*d[8]+3*d[9],
                    6*d[9],3*d[9]+3*d[10], 4*d[10]+2*d[11], 6*d[15]
                ];
            case 7:
                return [
                    7*d[0], 5*d[5]+2*d[6], 2*d[5]+5*d[6], 5*d[6]+2*d[7],
                    3*d[6]+4*d[7], 7*d[7], 5*d[7]+2*d[8], 4*d[7]+3*d[8],
                    3*d[7]+4*d[8], 2*d[7]+5*d[8], 7*d[8], 4*d[8]+3*d[9],
                    5*d[9]+2*d[10], 5*d[10]+2*d[11], 2*d[10]+5*d[11], 7*d[15]
                ];
            case 8:
                return [
                    8*d[0], 4*d[5]+4*d[6], 8*d[6], 4*d[6]+4*d[7], 
                    8*d[7], 7*d[7]+d[8], 6*d[7]+2*d[8], 5*d[7]+3*d[8],
                    3*d[7]+5*d[8], 2*d[7]+6*d[8], d[7]+7*d[8], 8*d[8], 
                    4*d[8]+4*d[9], 8*d[9], 4*d[9]+4*d[10], 8*d[15]
                ];
            case 9:
                return [
                    9*d[0], 2*d[5]+7*d[6], 7*d[6]+2*d[7], 4*d[6]+5*d[7], 
                    9*d[7], 7*d[7]+2*d[8], 6*d[7]+3*d[8], 5*d[7]+4*d[8],
                    4*d[7]+5*d[8], 3*d[7]+6*d[8], 2*d[7]+7*d[8], 9*d[8], 
                    5*d[8]+4*d[9], 7*d[9]+2*d[10], 7*d[10]+2*d[11], 9*d[15]
                ];
            case 10:
                return [
                    10*d[0], 10*d[6], 5*d[6]+5*d[7], 10*d[7], 
                    9*d[7]+d[8], 8*d[7]+2*d[8], 7*d[7]+3*d[8], 6*d[7]+4*d[8],
                    4*d[7]+6*d[8], 3*d[7]+7*d[8], 2*d[7]+8*d[8], d[7]+9*d[8], 
                    10*d[8],  5*d[8]+5*d[9], 10*d[9], 10*d[15]
                ];
            default:
                console.log("Unexpected # of hits: " + hits);
                return d;
        }
    } else if (d.length === 39) {
        switch (hits) {
            case 2:
                return [
                    2*d[0], 2*d[7], 2*d[10], 2*d[12],
                    2*d[14], d[15]+d[16], 2*d[17], d[18]+d[19],
                    d[19]+d[20], 2*d[21], d[22]+d[23], 2*d[24],
                    2*d[26], 2*d[28], 2*d[31], 2*d[38]
                ];
            case 3:
                return [
                    3*d[0], 3*d[9], 3*d[12], 3*d[13],
                    3*d[15], 3*d[16], 3*d[17], 3*d[18],
                    3*d[20], 3*d[21], 3*d[22], 3*d[23],
                    3*d[25], 3*d[26], 3*d[29], 3*d[38]
                ];
            case 4:
                return [
                    4*d[0], 2*d[10]+2*d[11], 4*d[13], 4*d[14],
                    2*d[15]+2*d[16], 2*d[16]+2*d[17], 2*d[17]+2*d[18], 2*d[18]+2*d[19],
                    2*d[19]+2*d[20], 2*d[20]+2*d[21], 2*d[21]+2*d[22], 2*d[22]+2*d[23],
                    4*d[24], 4*d[25], 2*d[27]+2*d[28], 4*d[38]
                ];
            case 5:
                return [
                    5*d[0], 5*d[11], 5*d[13], 5*d[15],
                    5*d[16], 5*d[17], 5*d[18], 5*d[19],
                    5*d[19], 5*d[20], 5*d[21], 5*d[22],
                    5*d[23], 5*d[25], 5*d[27], 5*d[38]
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
        return arr[0] + " and " + arr[1];
    } else {
        var text = '';
        for (var i = 0; i < arr.length-1; i++) {
            text += arr[i] + ', ';
        }
        return text + 'and ' + arr[arr.length-1];
    }
}
