<template lang="">
  <div class="container">
    <div class="flex items-center justify-between mb-7">
      <h2 class="text-xl font-bold text-white">Choose Dishes</h2>
      <select
        class="text-white text-sm rounded-lg p-4 bg-[#1F1D2B] border border-[#393C49] focus:outline-none"
      >
        <option value="Dine in" selected>Dine in</option>
        <option value="Fine in">Fine in</option>
        <option value="Cine in">Cine in</option>
        <option value="Kine in">Kine in</option>
      </select>
    </div>
    <div class="flex flex-wrap justify-between pt-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<script>
import Card from "@/ui/Card.vue";
import axios from "@/service/axios";

export default {
  name: "Home",
  components: {
    Card,
  },
  methods: {
    async getFood() {
      try {
        // const foods = await axios.get("/filter.php?c=Seafood");
        console.log("Hello");
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getFood();
  },
};
</script>
<style lang=""></style>
