import Vue from 'vue';
import { useViewport } from '~/composables/use-viewport';
import { useToPairs, useOrderBy, useMin, useMax } from '~/composables/use-lodash';
import { useApi } from '~/composables/use-api';

// Make composables available globally
Vue.prototype.$viewport = useViewport();
Vue.prototype.$toPairs = useToPairs;
Vue.prototype.$orderBy = useOrderBy;
Vue.prototype.$min = useMin;
Vue.prototype.$max = useMax;
Vue.prototype.$api = useApi;

// Add global computed properties
Vue.mixin({
  computed: {
    viewport() {
      return this.$viewport;
    }
  },
  methods: {
    useToPairs,
    useOrderBy,
    useMin,
    useMax,
    useApi
  }
});
