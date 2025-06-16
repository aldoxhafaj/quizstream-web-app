@echo off

echo Started to compile translation files

setlocal enabledelayedexpansion
for %%d in (en sqal) do (
    npx formatjs compile src/i18n/%%d/messages.json --ast --out-file src/i18n/%%d/messages.json --format i18ncompile.cjs
)

echo Compile finished. Thank you for using the script!