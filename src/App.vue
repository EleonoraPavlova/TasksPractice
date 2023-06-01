<template>
  <div class="container">
    <OneCard
      :image="option"
      v-for="(option, index) in options"
      :key="option"
      @click="expend(index)"
      :class="{ active: activeItemIndex === index }"
      :isActive="activeItemIndex === index"
    />
  </div>
</template>

<script>
import OneCard from "./components/OneCard.vue";

export default {
  name: "App",
  components: {
    OneCard,
  },
  data() {
    return {
      options: [],
      activeItemIndex: null,
    };
  },
  async created() {
    try {
      const response = await fetch("/public/data.json");
      const options = await response.json();
      this.options = options.car;
    } catch (err) {
      console.log(err.name);
    }
  },
  methods: {
    expend(ind) {
      this.activeItemIndex = ind;
    },
  },
};
</script>

 <style lang="scss">
.container {
  width: 100%;
  display: flex;
  padding: 0 25px;
}
</style>
