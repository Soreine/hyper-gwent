const presets = [
    [
        '@babel/env',
        {
            targets: 'defaults',
            useBuiltIns: 'usage'
        }
    ],
    [
        '@babel/preset-react',
        {
            pragma: 'h'
        }
    ],
    '@babel/preset-flow'
];

const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = { presets, plugins };
