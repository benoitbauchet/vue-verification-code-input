import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'

export default [
    {
        input: 'src/components/VerificationCodeInput.vue',
        output: {
            format: 'esm',
            file: 'dist/verification-code-input.esm.js',
        },
        plugins: [
            css(),
            vue({ css: false })
        ]
    },
    {
        input: 'src/components/VerificationCodeInput.vue',
        output: {
            format: 'cjs',
            file: 'dist/verification-code-input.ssr.js'
        },
        plugins: [
            css(),
            vue({ css: false, template: { optimizeSSR: true } })
        ]
    },
    {
        input: 'src/wrapper.js',
        output: {
            format: 'iife',
            file: 'dist/verification-code-input.ssr.js'
        },
        plugins: [
            css(),
            vue({ css: false })
        ]
    }
]