<template>
  <nav
    class="nav flex flex-wrap items-center justify-between px-4 py-4 border-2 border-b-[#34cc98]"
  >
    <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
      <img
        src="../assets/ticketpass.png"
        alt=""
        class="h-8"
        @click="gotoAllevent"
      />
    </div>
    <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
    <label
      class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
      for="menu-btn"
    >
      <span class="navicon bg-grey-darkest flex items-center relative"></span>
    </label>

    <ul
      class="menu md:border-none flex justify-end list-reset m-0 w-full md:w-auto"
    >
      <li
        class="border-t md:border-none bg-[#34cc98] text-white rounded-full px-8 mt-2"
      >
        <button
          @click="onCreateEvent"
          class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
        >
          Create Event
        </button>
      </li>

      <li
        class="border border-[#34cc98] bg-gray text-[#34cc98] rounded-full px-8 mt-2 md:mx-2 sm:mx-0"
      >
        <button
          @click="onLogout"
          class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
        >
          Logout
        </button>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
const router = useRouter();
function onCreateEvent() {
  const UserData = JSON.parse(sessionStorage.getItem("UserData"));
  console.log(UserData);
  if (JSON.stringify(UserData) != "{}") {
    router.push({ name: "CreateEvent" });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Login Required",
      text: "Please Login first",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      router.push("/");
    });
  }
}
function onLogout() {
  sessionStorage.setItem("UserData", JSON.stringify({}));
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Logout successfull",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    router.push("/");
  });
}

function gotoAllevent() {
  router.push({ name: "AllEvent" });
}
</script>
<style scoped>
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: 0.125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
    content: "";
    background: #3d4852;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}
</style>
