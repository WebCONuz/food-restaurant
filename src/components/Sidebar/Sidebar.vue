<template lang="">
  <aside class="pl-[13px] py-8 bg-[#1f1d2b] w-[104px] h-screen">
    <RouterLink
      to="/store"
      class="store w-[92px] h-[88px] mb-4 rounded-l-lg flex justify-center items-center relative"
    >
      <span
        class="flex justify-center items-center w-[56px] h-[56px] bg-[#ea7c694e] rounded-lg"
      >
        <i class="bx bxs-store-alt text-[#EA7C69] text-4xl"></i>
      </span>
    </RouterLink>
    <ul>
      <li v-for="item in navlink" class="mb-4">
        <RouterLink
          :to="item.path"
          class="w-[92px] h-[88px] rounded-l-lg flex justify-center items-center relative"
        >
          <span
            class="flex justify-center items-center w-[56px] h-[56px] rounded-lg"
          >
            <i :class="`bx ${item.icon} text-[#EA7C69] text-3xl`"></i>
          </span>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>
<script>
import { navlink } from "@/constants/navlinks";
import { RouterLink } from "vue-router";

export default {
  name: "Sidebar",
  data() {
    return {
      navlink: navlink,
    };
  },
};
</script>
<style lang="css" scoped>
.router-link-active.store span i {
  color: #fff !important;
}
.router-link-active.store {
  background-color: transparent !important;
}
.router-link-active.store {
  background-color: #252836 !important;
}
.router-link-active {
  background-color: #252836 !important;
}
.router-link-active span {
  background-color: #ea7c69 !important;
  color: #fff;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
}
.router-link-active span i {
  color: #fff !important;
}
.router-link-active::after {
  width: 12px;
  height: 12px;
  content: "";
  background-color: #252836;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  clip-path: polygon(
    79% 56%,
    93% 25%,
    100% 0,
    100% 100%,
    0 100%,
    40% 87%,
    63% 74%
  );
}
.router-link-active::before {
  width: 12px;
  height: 12px;
  content: "";
  background-color: #252836;
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%) rotate(270deg);
  clip-path: polygon(
    79% 56%,
    93% 25%,
    100% 0,
    100% 100%,
    0 100%,
    40% 87%,
    63% 74%
  );
}
</style>
