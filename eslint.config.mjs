import igorjacauna from '@igorjacauna/eslint-config';

export default igorjacauna([{
  excludes: ['dist'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    complexity: ['warn', 10],
  },
}]);