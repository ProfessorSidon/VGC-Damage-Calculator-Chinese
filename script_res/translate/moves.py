import csv
import json

def translate_moves(csv_file_path, json_file_path, encoding='utf-8'):
    data = []
    trans_name = {}
    with open(csv_file_path, 'r', encoding=encoding) as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            # Extract the desired key-value pair
            en = row[0]
            ch = row[1]
            trans_name[en] = ch

    with open(json_file_path, 'w', encoding=encoding) as jsonfile:
        json.dump(trans_name, jsonfile, indent=4, ensure_ascii=False)  # Indent for readability

#     "en": "Ivy Cudgel",
#     "chs": "棘藤棒",
#     "ja": "ツタこんぼう",
#     "pinyin": "jitengbang",
#     "pingyin-first": "jtb"
def translate_moves_input(csv_file_path, json_file_path, encoding='utf-8'):
    data = {}
    with open(csv_file_path, 'r', encoding=encoding) as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            trans_input = {"en": row[0], "chs": row[1], "ja": row[2], "pinyin": row[3], "pinyin-first": row[4]}
            data[row[0]] = trans_input

    with open(json_file_path, 'w', encoding=encoding) as jsonfile:
        json.dump(data, jsonfile, indent=4, ensure_ascii=False)  # Indent for readability


# Example usage:
csv_file = "gen9_moves.csv"
translate_moves(csv_file, "moves.json")
translate_moves_input(csv_file, "moves_input.json")
