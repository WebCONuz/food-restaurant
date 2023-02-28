<template lang="">
  <aside class="p-6 bg-[#1f1d2b] w-[500px] h-screen">
    <h3 class="text-white text-2xl font-semibold mb-6">Orders #34562</h3>
    <div class="flex mb-8">
      <Button
        class="py-2 px-3 bg-[#1F1D2B] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white duration-200"
        >Dine In</Button
      >
      <Button
        class="py-2 px-3 mx-2 bg-[#1F1D2B] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white duration-200"
        >To Go</Button
      >
      <Button
        class="py-2 px-3 bg-[#1F1D2B] text-[#EA7C69] hover:bg-[#EA7C69] hover:text-white duration-200"
        >Delivery</Button
      >
    </div>
    <p class="flex justify-between mb-8">
      <span class="text-white font-semibold">Item</span>
      <span>
        <span class="text-white font-semibold">Qty</span>
        <span class="ml-11 text-white font-semibold">Price</span>
      </span>
    </p>
    <div class="h-[350px] overflow-y-scroll">
      <SelectProduct placeholder="Please, just a little bit spicy only." />
      <SelectProduct placeholder="Order Note..." />
      <SelectProduct placeholder="Order Note..." />
    </div>
    <div class="flex items-center justify-between pt-3">
      <p class="text-[#ABBBC2]">Discount</p>
      <p class="price text-white">$ 0</p>
    </div>
    <div class="flex items-center justify-between py-3">
      <p class="text-[#ABBBC2]">Sub total</p>
      <p class="price text-white">$ 21.03</p>
    </div>
    <Button class="bg-[#EA7C69] text-white py-[14px] block w-full mt-auto"
      >Continue to Payment</Button
    >
  </aside>
</template>
<script>
import { RouterLink } from "vue-router";
import Button from "@/ui/Button.vue";
import SelectProduct from "@/ui/SelectProduct.vue";

export default {
  name: "Orders",
  components: {
    Button,
    SelectProduct,
  },
};
</script>
<style lang="css" scoped></style>
