import os

# 1. CONFIG: Update path to your local folder
folder_path = r'C:/Users/shravya/Downloads/FASHION_80s'

# Define keywords
eras = ['1980s', '1990s', '2000s', 'current']
styles = ['glam', 'powerdressing', 'punk', 'prairie', 'sportswear', 'ruffle', 'sequins', 'disco']
genders = ['male', 'female']

# Counter to avoid name collisions
rename_counter = {}

# Helper to extract keywords
def detect_keyword(text, keyword_list):
    for word in keyword_list:
        if word.lower() in text.lower():
            return word
    return 'unknown'

# 2. Rename files
for filename in os.listdir(folder_path):
    if not filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        continue

    name_lower = filename.lower()

    era = detect_keyword(name_lower, eras)
    style = detect_keyword(name_lower, styles)
    gender = detect_keyword(name_lower, genders)

    # fallback gender if not detected
    if gender == 'unknown':
        gender = 'unisex'

    key = f"{era}_{style}_{gender}"
    count = rename_counter.get(key, 1)

    ext = os.path.splitext(filename)[1]
    new_name = f"fashion_{gender}_{era}_{style}_{str(count).zfill(2)}{ext}"
    rename_counter[key] = count + 1

    # Rename
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    os.rename(old_path, new_path)

    print(f"Renamed: {filename} ➝ {new_name}")
