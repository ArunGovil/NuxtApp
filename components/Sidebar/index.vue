<!-- This example requires Tailwind CSS v2.0+ -->
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
    <div class="flex items-center flex-shrink-0 px-4 space-y-5">
      
     <div class="flex-shrink-0 flex p-5 mt-10">
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
    </div>
    <div class="mt-5 flex-grow flex flex-col">
      <nav class="flex-1 bg-white space-y-1" aria-label="Sidebar">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium border-l-4',
          ]"
        >
          <component
            :is="item.icon"
            :class="[
              item.current
                ? 'text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6',
            ]"
            aria-hidden="true"
          />
          {{ item.name }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/vue/outline";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
  { name: "Team", icon: UsersIcon, href: "#", current: false },
  { name: "Projects", icon: FolderIcon, href: "#", current: false },
  { name: "Calendar", icon: CalendarIcon, href: "#", current: false },
  { name: "Documents", icon: InboxIcon, href: "#", current: false },
  { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
];

export default {
  name: "Sidebar",
  setup() {
    return {
      navigation,
    };
  },
};
</script>