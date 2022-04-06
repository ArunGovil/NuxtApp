<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <div><Modal v-show="showModal" @close-modal="showModal = false" /></div>
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
          Add Employee
        </h3>
        <p class="mt-1 text-sm text-gray-500">EMP1002005</p>
      </div>
      <div class="ml-4 mt-4 flex-shrink-0">
        <button
          type="button"
           @click="showModal = true"
          class="
            inline-flex
            items-center
            px-3
            py-2
            border border-gray-300
            shadow-sm
            text-sm
            leading-4
            font-medium
            rounded-md
            text-gray-700
            bg-white
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-gray-300
          "
        >
          Attachments
        </button>
        <button
          type="button"
          class="
            inline-flex
            items-center
            px-3
            py-2
            border border-gray-300
            shadow-sm
            text-sm
            leading-4
            font-medium
            rounded-md
            text-gray-700
            bg-white
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-gray-300
          "
        >
          Actions
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../../components/Modal";

export default {
  name: "FormSectionHeader",
  methods: {
    openAttachmentModal() {
      console.log("Opening Modal");
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Modal,
  },
};
</script>

