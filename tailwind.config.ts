import type {Config} from 'tailwindcss';

export default {
    content: [
      'src/**/*.{tsx,jsx,js,ts,html}'
    ],
    theme: {
      extend: {
        colors: {
          'primary-color':'#FF8A00',
          'grey':'#E1E1E1',
        }
      },
    },
    plugins: [],
  } satisfies Config;