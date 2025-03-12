import { ref, onMounted, onUnmounted } from 'vue';

export const useViewport = function() {
  const width = ref(0);
  
  const breakpoints = {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  function updateWidth() {
    width.value = window.innerWidth;
  }

  onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });

  function isGreaterOrEquals(breakpoint: keyof typeof breakpoints) {
    return width.value >= breakpoints[breakpoint];
  }

  function isLessThan(breakpoint: keyof typeof breakpoints) {
    return width.value < breakpoints[breakpoint];
  }

  return {
    width,
    isGreaterOrEquals,
    isLessThan,
  };
};
