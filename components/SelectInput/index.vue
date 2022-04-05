<template>
  <div class="mr-10">
    <label for="location" class="block text-sm font-medium text-gray-700">{{ label }} </label>
    <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
      <option>Option One</option>
      <option selected="">Option Two</option>
      <option>Option Three</option>
    </select>
  </div>
</template>

<script>
export default {
    name: "SelectInput",
    props: ['label'],
}
</script>