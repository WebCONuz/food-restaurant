<template lang="">
  <div class="flex overflow-x-hidden w-screen h-screen fixed top-0 left-0">
    <Sidebar />
    <main class="content flex-grow overflow-y-scroll">
      <Header />
      <RouterView />
    </main>
    <Orders />
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Orders from "@/components/Orders/Orders.vue";
import Header from "@/components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Orders,
    Header,
  },
};
</script>
<style lang="css"></style>
