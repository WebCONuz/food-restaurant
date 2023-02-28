<template lang="">
  <heaader>
    <div class="container pb-6">
      <Title />
      <nav>
        <ul class="flex border-b border-[#393C49]">
          <li
            class="selected mr-8 h-[33px] text-sm text-white font-bold relative cursor-pointer hover:text-[#EA7C69] duration-200"
          >
            Hot Dishes
          </li>
          <li
            class="mr-8 h-[33px] text-sm text-white font-bold relative cursor-pointer hover:text-[#EA7C69] duration-200"
          >
            Cold Dishes
          </li>
          <li
            class="mr-8 h-[33px] text-sm text-white font-bold relative cursor-pointer hover:text-[#EA7C69] duration-200"
          >
            Soup
          </li>
          <li
            class="mr-8 h-[33px] text-sm text-white font-bold relative cursor-pointer hover:text-[#EA7C69] duration-200"
          >
            Grill
          </li>
          <li
            class="mr-8 h-[33px] text-sm text-white font-bold relative cursor-pointer hover:text-[#EA7C69] duration-200"
          >
            Appetizer
          </li>
          <li
            class="mr-8 h-[33px] text-sm text-white font-bold relative cursor-pointer hover:text-[#EA7C69] duration-200"
          >
            Dessert
          </li>
        </ul>
      </nav>
    </div>
  </heaader>
</template>
<script>
import Title from "@/ui/Title.vue";
export default {
  name: "Header",
  components: {
    Title,
  },
};
</script>
<style lang="css" scoped>
nav li::before {
  content: "";
  width: 0;
  height: 3px;
  background-color: #ea7c69;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
  transition: 0.2s;
}
nav li.selected {
  color: #ea7c69;
}
nav li.selected::before {
  width: 60%;
}
nav li:hover::before {
  width: 60%;
}
</style>
