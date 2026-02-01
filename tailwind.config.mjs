/** @type {import('tailwindcss').Config} */
 import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2a3755',
        },
        accent: {
          DEFAULT: '#22d3ee',
        },
      },
      maxWidth: {
        container: '1400px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.primary.DEFAULT'),
            '--tw-prose-lead': theme('colors.slate.700'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.primary.DEFAULT'),
            '--tw-prose-counters': theme('colors.slate.500'),
            '--tw-prose-bullets': theme('colors.slate.300'),
            '--tw-prose-hr': theme('colors.slate.200'),
            '--tw-prose-quotes': theme('colors.primary.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.accent.DEFAULT'),
            '--tw-prose-captions': theme('colors.slate.500'),
            '--tw-prose-code': theme('colors.primary.DEFAULT'),
            '--tw-prose-pre-code': theme('colors.slate.100'),
            '--tw-prose-pre-bg': theme('colors.slate.900'),
            '--tw-prose-th-borders': theme('colors.slate.200'),
            '--tw-prose-td-borders': theme('colors.slate.100'),

            maxWidth: 'none',

            h1: {
              fontWeight: '650',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginTop: '0',
              marginBottom: '0.8em',
            },
            h2: {
              fontWeight: '650',
              letterSpacing: '-0.02em',
              lineHeight: '1.18',
              marginTop: '1.8em',
              marginBottom: '0.6em',
            },
            h3: {
              fontWeight: '650',
              letterSpacing: '-0.015em',
              lineHeight: '1.22',
              marginTop: '1.4em',
              marginBottom: '0.5em',
            },
            p: {
              lineHeight: '1.85',
            },
            a: {
              fontWeight: '650',
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
            },
            'a:hover': {
              color: theme('colors.primary.DEFAULT'),
            },
            ul: {
              paddingLeft: '1.25em',
            },
            ol: {
              paddingLeft: '1.25em',
            },
            li: {
              marginTop: '0.4em',
              marginBottom: '0.4em',
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '500',
            },
            'blockquote p:first-of-type::before': { content: '""' },
            'blockquote p:last-of-type::after': { content: '""' },
            code: {
              fontWeight: '600',
            },
            pre: {
              borderRadius: '14px',
            },
            'pre code': {
              fontWeight: '500',
            },
            table: {
              fontSize: '0.95em',
            },
            th: {
              fontWeight: '650',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
