module.exports = {
	prefix: 'cozy-',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				graphik: ['"graphik-regular"'],
				'graphik-medium': ['"graphik-medium"'],
				'graphik-semibold': ['"graphik-semibold"'],
				'graphik-bold': ['"graphik-bold"'],
			},
		},
		fontSize: {
			'heading-3': ['2rem', { letterSpacing: '0.01em', lineHeight: '2.5rem' }],
			'body-1': ['1rem', { letterSpacing: '0.01em', lineHeight: '1.5rem' }],
			'body-2': [
				'0.875rem',
				{ letterSpacing: '0.01em', lineHeight: '1.25rem' },
			],
			'title-2': [
				'1.25rem',
				{ letterSpacing: '0.01em', lineHeight: '1.75rem' },
			],
		},
		colors: {
			light: {
				neutral: {
					25: '#FFFFFF',
					50: '#F7F7F8',
					100: '#F1F2F4',
					200: '#EBECF0',
					300: '#DFE1E6',
					400: '#C1C7D0',
					500: '#B3BAC5',
					600: '#9199A7',
					700: '#6B778C',
					800: '#253858',
					900: '#091E42',
				},
			},
			branding: {
				primary: {
					50: '#FEF8FA',
					100: '#FDEAF3',
					200: '#FAD8E5',
					400: '#F082AC',
					500: '#E94C89',
					600: '#DB4781',
					700: '#BF3E70',
				},
				secondary: {
					50: '#F6F5FC',
					100: '#EDECFA',
					200: '#B0A7E6',
					400: '#6558DE',
					500: '#4F3CC8',
					600: '#4837B6',
					700: '#3E2F9E',
				},
			},
		},
	},
	plugins: [],
};
