module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:@intlify/vue-i18n/recommended'],
  parser: 'vue-eslint-parser',
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'padded-blocks': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'keyword-spacing': [
      'error',
      {
        after: false,
        overrides: {
          return: { after: true },
          else: { after: true },
          do: { after: true },
          from: { after: true },
          import: { after: true },
          export: { after: true },
          try: { after: true },
          const: { after: true },
          let: { after: true },
          default: { after: true },
          case: { after: true },
        },
      },
    ],
    'max-len': ['error', { code: 120, ignorePattern: '^\\s*<path' }],
    'no-param-reassign': [2, { props: false }],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'no-extra-boolean-cast': 'error',
    'import/extensions': 'off',
    radix: 'off',
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    indent: ['error', 2, { SwitchCase: 0 }],
    'vue/attributes-order': 'error',
    'vue/html-indent': ['error', 2],
    'vue/attribute-hyphenation': 'off',
    'vue/name-property-casing': 'off',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
      },
    ],
    'vue/space-infix-ops': 'error',
    'vue/no-v-html': 'off',
    'vue/custom-event-name-casing': 'error',
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    '@intlify/vue-i18n/no-v-html': 'off',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        src: './src',
        extensions: ['.js', '.vue'],
      },
    ],
    '@intlify/vue-i18n/no-raw-text': 'error',
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/translations/*.json',
    },
  },
};
