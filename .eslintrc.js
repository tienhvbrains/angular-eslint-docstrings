/* eslint-env node */
module.exports = {
    plugins: [
        "@typescript-eslint/eslint-plugin",
        "eslint-plugin-tsdoc",
        "jsdoc"
    ],
    extends: [
        // TODO: disable some unused rule.
        //  For example, @typescript-eslint/no-empty-function
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: "module"
    },
    ignorePatterns: ["**/*.html", "**/*.scss", "**/*.spec.ts"],
    rules: {
        "tsdoc/syntax": "error",
        "jsdoc/require-jsdoc": [
            "error",
            {
                publicOnly: {
                    cjs: true,
                    esm: true,
                    window: true,
                },
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: false,
                    ClassExpression: false,
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                    MethodDefinition: true,
                },
                contexts: [
                    "TSInterfaceDeclaration",
                    "TSTypeAliasDeclaration",
                    "TSEnumDeclaration",
                    "TSPropertySignature",
                ],
            },
        ],
    },
};
