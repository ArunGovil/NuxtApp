<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <div
      class="
        -ml-4
        -mt-4
        flex
        justify-between
        items-center
        flex-wrap
        sm:flex-nowrap
      "
    >
      <div class="ml-4 mt-4">
        <h3 class="text-2xl leading-6 font-semibold text-gray-900">
          Employees
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Dashboard | Employee
        </p>
      </div>
      <div class="ml-4 mt-4 flex-shrink-0">
        <button
          type="button"
          class="
            relative
            inline-flex
            items-center
            px-4
            py-2
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-primary
            hover:bg-primary
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Add Employee
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableSectionHeader",
};
</script>

