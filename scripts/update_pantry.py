
import json
import os

file_path = r'c:\dev\dishguise\src\data\pantry.json'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content.replace("Chef de Partie", "Head Chef")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully replaced Chef de Partie with Head Chef in pantry.json")
