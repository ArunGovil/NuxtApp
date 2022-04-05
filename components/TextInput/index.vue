<template>
  <div class="mr-10">
    <label class="block text-sm font-medium text-gray-700"> {{ label }} </label>
    <div class="mt-1">
      <input :type="type" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter here" />
    </div>
  </div>
</template>

 <script>
export default {
  name: "TextInput",
  props:['label', 'type'],
};
</script>