<template lang="">
  <div class="mb-8">
    <div class="flex justify-between items-center">
      <div class="flex justify-between items-center w-[250px] mb-[10px]">
        <div class="flex justify-start items-center">
          <img src="../assets/images/food.png" alt="food" class="w-11" />
          <div class="ml-2">
            <h4 class="font-semibold text-white text-sm">
              Spicy seasoned sea...
            </h4>
            <p class="text-[#ABBBC2] text-sm">$ 2.29</p>
          </div>
        </div>
        <div
          class="count w-11 h-11 flex items-center justify-center text-white rounded-md bg-[#393C49] border border-[#393C49]"
        >
          2
        </div>
      </div>
      <h4 class="total_price text-white">$4.58</h4>
    </div>
    <div class="flex justify-between items-center">
      <input
        type="text"
        :placeholder="placeholder"
        class="w-[250px] text-white rounded-md bg-[#393C49] h-11 focus:outline-none px-3 border border-[#393C49]"
      />
      <div
        class="count w-11 h-11 flex items-center justify-center text-[#ffffff7a] rounded-md bg-[#1F1D2B] border border-[#EA7C69]"
      >
        <i class="bx bx-trash-alt text-xl"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectProduct",
  props: {
    placeholder: String,
  },
};
</script>
<style lang=""></style>
