const translate= require('./translate.js')
const gen9_inputs=require('./Pboard/pokemon/gen9.json')

pokenames=translate.ch_pokenames()
converted = {}
for (var poke_en in pokenames) {
  poke_ch = pokenames[poke_en]
  for (var i in gen9_inputs) {
    inputs = gen9_inputs[i]
    idx = 0
    if (poke_ch == inputs['phrase']) {
      converted[poke_en] = {}
      for (var entry in gen9_inputs[i]['input']) {
          key = "input" + idx
          converted[poke_en][key] = gen9_inputs[i]['input'][entry]
          idx = idx + 1
      }
      key = "input" + idx
      converted[poke_en][key] = poke_ch
    }
  }
}
console.log(JSON.stringify(converted))
