import re
import html

with open(
    r"C:\Users\Vinicius\.local\share\kilo\tool-output\tool_d42ae114c001Mr328cpsFrJ0JV",
    "r",
    encoding="utf-8",
) as f:
    content = f.read()

# Find all content fields with their text
pattern = r'"content":"((?:[^"\\]|\\.)*?)"'
matches = re.findall(pattern, content)

print(f"Found {len(matches)} content fields\n")

decoded_texts = []
for i, m in enumerate(matches):
    text = m
    # Replace escape sequences
    text = text.replace("\\x3c", "<").replace("\\x3e", ">")
    text = text.replace('\\"', '"')
    text = text.replace("\\n", "\n").replace("\\t", "\t")
    text = text.replace("\\/", "/")
    text = text.replace("\\\\", "\\")
    text = text.replace("\\u0026", "&")

    # Strip HTML tags for readability
    clean_text = re.sub(r"<[^>]+>", "", text)
    clean_text = html.unescape(clean_text)

    if len(clean_text) > 15:
        decoded_texts.append((i + 1, clean_text[:800]))

# Print texts
for num, text in decoded_texts:
    print(f"=== Text {num} ===")
    print(text)
    print()
