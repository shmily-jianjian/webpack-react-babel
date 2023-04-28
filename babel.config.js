const isDev = process.env.NODE_ENV === 'development';

/**
 * @type {import('@babel/core').TransformOptions}
 */

const presets = [
  [
    '@babel/preset-react',
    {
      // "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
      // "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
      // "throwIfNamespace": false, // defaults to true
      runtime: 'automatic', // defaults to classic
      // // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
    },
  ],
];

if (!isDev) {
  presets.push(['@babel/preset-env', {}]);
}

const babelConfig = {
  presets,
};

module.exports = babelConfig;
