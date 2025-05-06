import { defineConfig } from 'eslint/config'
import expoConfig from 'eslint-config-expo/flat.js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const config = defineConfig([
    expoConfig,
    eslintPluginPrettierRecommended,
    {
      ignores: ['dist/*', 'build/*'],
    },
  ]);

// module.exports = config
export default config
