<template>
  <div class="login grid h-screen place-items-center w-full">
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      v-slot="{ errors }"
      class="w-80"
    >
      <img
        src="../assets/ticketpass.png"
        alt=""
        class="h-12 block mx-auto mb-12"
      />
      <div>
        <Field
          name="email"
          type="text"
          class="form-control appearance-none h-[50px] border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#34cc98] focus:shadow-outline"
          :class="{ 'is-invalid': errors.email }"
          placeholder="test@ticketpass.org"
        />
        <div class="invalid-feedback text-red-500 mt-2 text-center">
          {{ errors.email }}
        </div>
      </div>
      <div>
        <Field
          name="password"
          type="password"
          class="mt-5 form-control appearance-none h-[50px] border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#34cc98] focus:shadow-outline"
          :class="{ 'is-invalid': errors.password }"
          placeholder="Ticketpass2022"
        />
        <div class="invalid-feedback text-red-500 mt-2 text-center">
          {{ errors.password }}
        </div>
      </div>
      <button
        class="mt-5 w-full shadow bg-[#34cc98] hover:bg-[#34cc98] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
        type="submit"
      >
        Login
      </button>
    </Form>
  </div>
</template>

<script setup>
// @ is an alias to /src
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import { getEvent, getEvents, login } from "../api/Connection.js";
const router = useRouter();
const schema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
function onSubmit(values) {
  // display form values on success
  // alert("SUCCESS!! :-)\n\n" + JSON.stringify(values));
  const loginStatus = login(values.email, values.password);
  loginStatus
    .then((response) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login success",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response);
      sessionStorage.setItem("UserData", JSON.stringify(response));
      router.push({ name: "AllEvent" });
    })
    .catch((error) => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Login Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    });
}
</script>
