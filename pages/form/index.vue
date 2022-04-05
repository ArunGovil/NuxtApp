<template>
 <div>
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <Sidebar />
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          class="
            px-4
            border-r border-gray-200
            text-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-indigo-500
            md:hidden
          "
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pointer-events-none
                  "
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="
                    block
                    w-full
                    h-full
                    pl-8
                    pr-3
                    py-2
                    border-transparent
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none
                    focus:placeholder-gray-400
                    focus:ring-0
                    focus:border-transparent
                    sm:text-sm
                  "
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="
                bg-white
                p-1
                rounded-full
                text-gray-400
                hover:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="
                    max-w-xs
                    bg-white
                    flex
                    items-center
                    text-sm
                    rounded-full
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-48
                    rounded-md
                    shadow-lg
                    py-1
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <FormSectionHeader />

            <div class="py-5">
              <h2>General Details</h2>
              <div class="py-2 flex">
                <TextInput label="First Name" type="text" />
                <TextInput label="Last Name" type="text" />
                <SelectInput label="Gender" />
                <TextInput label="Date of Birth" type="date" />
              </div>
              <div class="py-2 flex">
                <SelectInput label="Blood Group" />
                <SelectInput label="Marital Status" />
                <TextInput label="Nationality" type="text"/>
              </div>
            </div>

            <div class="py-3">
              <h2>Contact Details</h2>
              <div class="py-2 flex">
                <TextInput label="Primary Contact Number" type="number" />
                <TextInput label="Secondary Contact Number" type="number" />
                <TextInput label="Company Mail" type="email" />
                <TextInput label="Personal Mail" type="email" />
              </div>
            </div>

            <div class="py-3">
              <h2>Employment Details</h2>
              <div class="py-2 flex">
                <TextInput label="Designation" type="text" />
                <SelectInput label="Branch" />
                <SelectInput label="Division" />
                <SelectInput label="Department" />
              </div>
              <div class="py-2 flex">
                <SelectInput label="Reporting Manager" />
                <TextInput label="Nationality" type="date" />
                <TextInput label="Years of Service" type="number" />
                <TextInput label="Gross Salary" type="number" />
              </div>
              <div class="py-2 flex">
                <TextInput label="Allowance" />
              </div>
            </div>

            <div class="py-3">
              <h2>Educational Qualification</h2>
              <div class="py-2 flex">
                <TextInput label="School/University" type="text" />
                <TextInput label="Qualification" type="text" />
                <TextInput label="Year of Passing" type="date" />
              </div>
            </div>

               <div class="py-3">
              <h2>Previous Work Experience</h2>
              <div class="py-2 flex">
                <TextInput label="Company Name" type="text" />
                <TextInput label="Designation" type="text" />
                 <SelectInput label="Experience" />
                <TextInput label="Salary" type="number" />
              </div>
            </div>

               <div class="py-3">
              <h2>Credential Details</h2>
              <div class="py-2 flex">
                <TextInput label="Emirates Id" type="text" />
                <TextInput label="Current Visa" type="text" />
                <TextInput label="Passport Number" type="text" />
                <TextInput label="License No." type="number" />
              </div>
                <div class="py-2 flex">
                <TextInput label="Contract" type="text" />
                <TextInput label="WPS Number" type="text" />
                <TextInput label="Cost Center" type="text" />
              </div>
            </div>

               <div class="py-3">
              <h2>References</h2>
              <div class="py-2 flex">
                <TextInput label="Name" type="text" />
                <TextInput label="Reference Type" type="text" />
                <TextInput label="Contact No." type="number" />
                <TextInput label="Email" type="text" />
              </div>
            </div>
             <div class="py-3 mr-10 flex justify-end">
              <button type="button" class="inline-flex items-center px-6 py-1.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Save</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  </div>
</template>

<script>
import FormSectionHeader from "../../components/FormSectionHeader";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
export default {
  name: "EmployeeForm",
  components: {
    FormSectionHeader,
    TextInput,
    SelectInput,
  },
};
</script>