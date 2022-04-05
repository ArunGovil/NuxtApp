<template>
  <div class="mr-10 w-60">
    <label class="block text-sm font-medium text-gray-700"> {{ label }} </label>
    <div class="mt-1">
      <input :type="type" name="email" id="email" class="shadow-sm focus:ring-gray-300 focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter here" />
    </div>
  </div>
</template>

 <script>
export default {
  name: "TextInput",
  props:['label', 'type'],
};
</script>