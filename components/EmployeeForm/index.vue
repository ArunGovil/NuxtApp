<template>
  <div>
    <div class="py-5">
      <div class="py-2 flex">
        <TextInput label="First Name" type="text" />
        <TextInput label="Last Name" type="text" />
        <SelectInput label="Gender" />
        <TextInput label="Date of Birth" type="date" />
      </div>
      <div class="py-2 flex">
        <SelectInput label="Blood Group" />
        <SelectInput label="Marital Status" />
        <TextInput label="Nationality" type="text" />
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
      <button
        type="button"
        class="
          inline-flex
          items-center
          px-6
          py-1.5
          border border-transparent
          text-base
          font-medium
          rounded-md
          shadow-sm
          text-white
          bg-indigo-600
          hover:bg-indigo-600
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
        "
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

export default {
  name: "EmployeeForm",
  components: {
    TextInput,
    SelectInput,
  },
};
</script>