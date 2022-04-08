<template>
  <div
    class="
      flex flex-col flex-grow
      border-r border-gray-200
      pt-5
      pb-4
      bg-white
      overflow-y-auto
    "
  >
   
      <div class="flex-shrink-0 flex p-5 mt-20">
            <a href="#" class="flex-shrink-0 w-full group block">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p
                    class="
                      text-sm
                      font-medium
                      text-gray-700
                      group-hover:text-gray-900
                    "
                  >
                    Tom Cook
                  </p>
                  <p
                    class="
                      text-xs
                      font-medium
                      text-gray-500
                      group-hover:text-gray-700
                    "
                  >
                    Manager
                  </p>
                </div>
              </div>
            </a>
          </div>

    <div class="mt-5 flex-grow flex flex-col">
      <nav class="flex-1 bg-white space-y-1" aria-label="Sidebar">
        <!-- Current: "bg-indigo-50 border-indigo-600 text-indigo-600", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
        <a
          href="#"
          class="
            bg-primary-100
            border-indigo-600
            text-indigo-600
            group
            flex
            items-center
            px-3
            py-2
            text-sm
            font-medium
            border-l-4
          "
        >
          <svg
            class="text-indigo-600 mr-3 flex-shrink-0 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Employees
        </a>

        <a
          href="#"
          class="
            border-transparent
            text-gray-600
            hover:bg-gray-50 hover:text-gray-900
            group
            flex
            items-center
            px-3
            py-2
            text-sm
            font-medium
            border-l-4
          "
        >
          <svg
            class="
              text-gray-400
              group-hover:text-gray-500
              mr-3
              flex-shrink-0
              h-6
              w-6
            "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Job
        </a>

        <a
          href="#"
          class="
            border-transparent
            text-gray-600
            hover:bg-gray-50 hover:text-gray-900
            group
            flex
            items-center
            px-3
            py-2
            text-sm
            font-medium
            border-l-4
          "
        >
          <svg
            class="
              text-gray-400
              group-hover:text-gray-500
              mr-3
              flex-shrink-0
              h-6
              w-6
            "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          Sea Export
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  setup() {
    return {
      navigation,
    };
  },
};
</script>