import scrollbar from 'tailwind-scrollbar';

export default {
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Crimson Pro"', 'serif'],
        },
      },
    },
    plugins: [scrollbar],
    future: {
        useOkLCH: false,
    },
}
  