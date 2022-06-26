<template>
  <div class="CreateEvent flex justify-center mt-5">
    <Form
      @submit="onSubmit"
      :validation-schema="EventSchema"
      v-slot="{ errors }"
      class="w-90"
    >
      <div>
        <label class="font-bold">Event Name</label>
        <Field
          name="name"
          type="text"
          class="form-control appearance-none h-[50px] border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#34cc98] focus:shadow-outline"
          :class="{ 'is-invalid': errors.name }"
        />
        <div class="invalid-feedback text-red-500 mt-2">{{ errors.name }}</div>
      </div>
      <div class="flex flex-row justify-evenly mt-4">
        <div>
          <label class="font-bold">Start Date</label>
          <Field
            name="startDate"
            type="date"
            class="form-control appearance-none h-[50px] border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#34cc98] focus:shadow-outline"
            :class="{ 'is-invalid': errors.startDate }"
          />
          <div class="invalid-feedback text-red-500 mt-2">
            {{ errors.startDate }}
          </div>
        </div>
        <div>
          <label class="font-bold">End Date</label>
          <Field
            name="endDate"
            type="date"
            class="form-control appearance-none h-[50px] border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#34cc98] focus:shadow-outline"
            :class="{ 'is-invalid': errors.endDate }"
          />
          <div class="invalid-feedback text-red-500 mt-2">
            {{ errors.endDate }}
          </div>
        </div>
      </div>
      <div class="mt-4">
        <label class="font-bold">Description</label>
        <Field
          name="description"
          type="text"
          class="form-control appearance-none h-[50px] border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#34cc98] focus:shadow-outline"
          :class="{ 'is-invalid': errors.description }"
        />
        <div class="invalid-feedback text-red-500 mt-2">
          {{ errors.description }}
        </div>
      </div>
      <div class="mt-4">
        <label class="font-bold">Image</label>
        <br />
        <input
          name="image"
          type="file"
          @change="changelisten"
          accept="image/*"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
        <div class="invalid-feedback text-red-500 mt-2"></div>
      </div>
      <button
        type="submit"
        class="mt-5 w-full shadow bg-[#34cc98] hover:bg-[#34cc98] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
      >
        Register
      </button>
    </Form>
  </div>
</template>

<script setup>
// @ is an alias to /src
import { Form, Field } from "vee-validate";
import { ref, onMounted } from "vue";
import * as Yup from "yup";
import { useRouter } from "vue-router";
import { CreateEvent } from "../api/Connection.js";
import Swal from "sweetalert2";
const router = useRouter();
const imageFile = ref(null);
const token = ref("");
onMounted(() => {
  token.value = JSON.parse(
    sessionStorage.getItem("UserData")
  ).data.access_token;
});
const EventSchema = Yup.object().shape({
  name: Yup.string().required("Event name is required"),
  description: Yup.string().required("Description is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date can't be before Start date")
    .required("End date is required"),
});
function changelisten(e) {
  imageFile.value = e.target.files[0];
  console.log(imageFile.value);
}
function onSubmit(values) {
  if (imageFile.value === null || typeof imageFile.value === "undefined") {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Please enter an image file",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const events = CreateEvent(
    values.name,
    values.description,
    imageFile.value,
    Date.parse(values.startDate) / 1000,
    Date.parse(values.endDate) / 1000,
    token.value
  );
  events.then((response) => {
    console.log(response);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully created your event",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      router.push({ name: "AllEvent" });
    });
  });
}
</script>
<style scoped>
.CreateEvent {
  text-align: center;
  width: 50%;
  margin: auto;
}
</style>
