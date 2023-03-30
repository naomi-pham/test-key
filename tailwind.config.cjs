module.exports = {
	prefix: 'cozy-',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Archivo', 'sans-serif'],
				400: ['"graphik-regular"'],
				500: ['"graphik-medium"'],
				600: ['"graphik-semibold"'],
				800: ['"graphik-bold"'],
			},
			colors: {
				brand: '#E94C89',
				neutral: '#C1C7D0',
				secondary: '#EDECFA',
				light: '#F7F7F8',
				dark: '#121212',
				black: {
					400: '#DFE1E6',
					500: '#B3BAC5',
					700: '#6B778C',
				},
				rose: {
					200: '#FDF2F7',
					gradient: '#FAD8E5',
				},
			},
		},
	},
	plugins: [],
};
