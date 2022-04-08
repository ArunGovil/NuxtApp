<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="
          block
          w-full
          pl-3
          pr-10
          py-2
          text-base
          border-gray-300
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
          sm:text-sm
          rounded-md
        "
      >
        <option>My Account</option>

        <option>Company</option>

        <option selected>Team Members</option>

        <option>Billing</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
          <a
            @click="activetab = '1'"
            href="#"
            v-bind:class="[
              activetab === '1'
                ? 'text-indigo-600 border-indigo-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                : 'text-gray-300 hover:text-gray-700 px-1 py-4 font-medium text-sm rounded-md',
            ]"
          >
            General Details
          </a>

          <a
            @click="activetab = '2'"
            href="#"
            v-bind:class="[
              activetab === '2'
                ? 'text-indigo-600 border-indigo-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                : 'text-gray-300 hover:text-gray-700 px-1 py-4 font-medium text-sm rounded-md',
            ]"
          >
            Assets
          </a>

          <!-- <a
            href="#"
            class="
              border-indigo-500
              text-indigo-600
              whitespace-nowrap
              py-4
              px-1
              border-b-2
              font-medium
              text-sm
            "
            aria-current="page"
          >
            Appraisal
          </a> -->

        </nav>
      </div>
    </div>

    <div class="content">
      <div v-if="activetab === '1'" class="tab-item">
        <EmployeeForm />
      </div>
      <div v-if="activetab === '2'" class="tab-item">
        <EmployeeAssets />
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from "../../components/EmployeeForm";
import EmployeeAssets from "../../components/EmployeeAssets";
export default {
  name: "TabBar",
  data() {
    return {
      activetab: "1",
    };
  },
  setup() {
    return {
      tabs,
    };
  },
  components: {
    EmployeeForm,
    EmployeeAssets,
  },
};
</script>