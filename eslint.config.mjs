import igorjacauna from '@igorjacauna/eslint-config';

export default igorjacauna([{
  ignores: ['dist'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    complexity: ['warn', 10],
  },
}]);