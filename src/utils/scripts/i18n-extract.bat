@echo off

echo Messages extraction started...
npx formatjs extract "src/**/*.ts*" --ignore="**/*.d.ts" --out-file messages.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format i18nformatter.cjs --throws && (
    echo Extracted messages to messages.json
    node ./src/utils/scripts/update-messages.js && (
        del messages.json
        echo Updated messages. Thank you for using the script!
    )
)





