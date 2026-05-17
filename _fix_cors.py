"""Script to add django-cors-headers to the Django backend settings."""
import pathlib

settings_path = pathlib.Path(r'c:\Users\luism\VSProjects\tawaAPI\config\settings.py')
text = settings_path.read_text(encoding='utf-8')

# 1. Add 'corsheaders' to THIRD_APPS
text = text.replace(
    "    'drf_spectacular',\n]",
    "    'drf_spectacular',\n    'corsheaders',\n]",
    1  # only first occurrence
)

# 2. Add CorsMiddleware BEFORE CommonMiddleware (required position per docs)
text = text.replace(
    "    'django.contrib.sessions.middleware.SessionMiddleware',\n"
    "    'django.middleware.common.CommonMiddleware',",

    "    'django.contrib.sessions.middleware.SessionMiddleware',\n"
    "    'corsheaders.middleware.CorsMiddleware',\n"
    "    'django.middleware.common.CommonMiddleware',",
    1
)

# 3. Append CORS settings at the end of the file
cors_config = """

# ── CORS (django-cors-headers) ───────────────────────────────────────────────
# Orígenes permitidos para peticiones cross-origin desde el frontend SPA.
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
]
"""

if 'CORS_ALLOWED_ORIGINS' not in text:
    text += cors_config

settings_path.write_text(text, encoding='utf-8')
print('✅ settings.py updated successfully')
