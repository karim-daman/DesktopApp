<script>
  import { isDarkTheme } from "$stores/AppStore";

  let dark = false;

  function toggle() {
    dark = !dark;
    window.document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("darkMode", dark ? "on" : "off"); // Save dark mode state to local storage
    $isDarkTheme = dark;
  }

  // Load dark mode state from local storage on component mount
  import { onMount } from "svelte";
  onMount(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      dark = storedDarkMode === "on";
      window.document.body.classList.toggle("dark-mode", dark);
    }
  });
</script>

<button class="press rounded-full w-5 h-5 p-0.5 mt-1.5 bg-yellow-400" on:click={toggle}>
  {#if dark}
    <img class="" src="sun.svg" alt="" />
  {:else}
    <img class="" src="moon.svg" alt="" />
  {/if}
</button>

<style>
  button {
    background-color: #000000;
    color: white;
    /* padding: 0.5rem; */
    text-transform: uppercase;
  }

  :global(body.dark-mode) button {
    background-color: #000000;
    color: white;
  }

  :global(body) {
    background-color: #ffffffaa;
    color: #0084f6;
    transition: background-color 0.3s;
  }

  :global(body.dark-mode) {
    background-color: #141414;
    color: #bfc2c7;
  }
</style>
