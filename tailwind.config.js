module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                boom: {
                    100: '#C0C1C3',
                },
            },
            fontFamily: {
                'extra-condensed': ['Saira Extra Condensed', 'sans-serif'],
            },
            fontSize: {
                '3xs': '0.6rem',
                '2xs': '0.7rem',
                xs: '0.8rem',
            },

            height: (theme) => ({
                'screen-1/3': '33vh',
                'screen-1/2': '50vh',
                'screen-2/3': '66vh',
                'screen-3/4': '75vh',
                'screen-4/5': '80vh',
            }),
            minHeight: {
                'screen-1/3': '33vh',
                'screen-1/2': '50vh',
                'screen-2/3': '66vh',
                'screen-3/4': '75vh',
                'screen-4/5': '80vh',
            },
            backgroundSize: {
                '100-200': '110% 220%',
            },
            backgroundImage: {
                none: 'none',
                'gradient-white/black': 'linear-gradient(to bottom, white 50%, black 50%)',
                'gradient-red/white': 'linear-gradient(to bottom, #e53e3e 50%, white 50%)',
            },
        },
    },
    variants: {},
    plugins: [],
};
