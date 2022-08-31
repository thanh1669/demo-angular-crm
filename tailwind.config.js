module.exports = {
    prefix: '',
    mode: process.env.TAILWIND_MODE ? 'jit' : '',
    purge: {
        content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}']
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            maxWidth: {
                '8xl': '80%',
                // => max-width: 80%
            },
            screens: {
                '3xl': '1600px',
                // => @media (min-width: 1600px) { ... },

                '4xl': '1920px',
                // => @media (min-width: 1920px) { ... }

                '5xl': '2560px',
                // => @media (min-width: 2560px) { ... }

                'max-sm': { max: '640px' },
                // => @media (max-width: 640px) { ... }

                'max-md': { max: '768px' },
                // => @media (max-width: 768px) { ... }

                'max-lg': { max: '1024px' },
                // => @media (max-width: 1024px) { ... }

                'max-xl': { max: '1280px' },
                // => @media (max-width: 1280px) { ... }

                'max-2xl': { max: '1536px' },
                // => @media (max-width: 1536px) { ... }
            },
            width: {
                navBar: '232px'
            },
            height: {
                topBar: '60px',
                nowPlayingBar: '90px'
            },
            colors: {
                primary: '#1db954',
                sliderRail: '#535353',
                sliderTrack: '#b3b3b3'
            }
        }
    },
    variants: {
        extend: {
            display: ['group-hover']
        }
    },
    plugins: []
};
