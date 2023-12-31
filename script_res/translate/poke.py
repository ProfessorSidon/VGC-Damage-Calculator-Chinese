import csv
import json

def translate_name(csv_file_path, json_file_path, encoding='utf-8'):
    data = []
    trans_name = {}
    with open(csv_file_path, 'r', encoding=encoding) as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            # Extract the desired key-value pair
            en = row[3]
            ch = row[1]
            trans_name[en] = ch

    with open(json_file_path, 'w', encoding=encoding) as jsonfile:
        json.dump(trans_name, jsonfile, indent=4, ensure_ascii=False)  # Indent for readability

#     "input0": "jitengbang",
#     "input1": "jtb"
def translate_name_input(csv_file_path, json_file_path, encoding='utf-8'):
    data = {}
    with open(csv_file_path, 'r', encoding=encoding) as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            trans_input = {"input0": row[1], "input1": row[2], "input2": row[3], "input3": row[4], "input4": row[5]}
            data[row[3]] = trans_input

    with open(json_file_path, 'w', encoding=encoding) as jsonfile:
        json.dump(data, jsonfile, indent=4, ensure_ascii=False)  # Indent for readability


csv_file = "gen9_pokemon.csv"
translate_name(csv_file, "pokemon.json")
translate_name_input(csv_file, "pokemon_input.json")
