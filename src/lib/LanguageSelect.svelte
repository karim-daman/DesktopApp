<script>
  import { t, locale, locales } from "../locale/i18n";
  import { onMount } from "svelte";

  let isDropdownOpen = false;
  let selectedLanguage = "English";

  const toggleDropdown = () => {
    isDropdownOpen = !isDropdownOpen;
  };

  const handleButtonClick = (l) => {
    selectedLanguage = l;
    $locale = l;
    localStorage.setItem("selectedLanguage", l); // Save selected language to local storage
    isDropdownOpen = false;
  };

  import { clickOutside } from "svelte-use-click-outside";
  import { scale } from "svelte/transition";

  function clickOutsideHandler() {
    isDropdownOpen = false;
  }

  // Load selected language from local storage on component mount
  onMount(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && locales.includes(storedLanguage)) {
      selectedLanguage = storedLanguage;
      $locale = storedLanguage;
    }
  });
</script>

<button
  use:clickOutside={clickOutsideHandler}
  on:click={() => {
    isDropdownOpen = !isDropdownOpen;
  }}
  class="flex items-center justify-center press">
  <img src="flag_icons/{selectedLanguage}.svg" class="rounded-full w-6 p-0.5" alt="" />
</button>

{#if isDropdownOpen}
  <div in:scale={{ duration: 100, start: 0.95 }} out:scale={{ duration: 75, start: 0.95 }} class="absolute mt-12 mx-1 top-16 z-10 bg-white p-0.5 divide-gray-100 rounded-lg shadow w-24">
    {#each locales as l}
      {#if l != selectedLanguage}
        <button on:click={() => handleButtonClick(l)} class="w-full hover:bg-black hover:text-white hover:rounded-md press flex px-2 py-0.5">
          <div class=" text-xs text-black hover:text-white flex">
            <img src={`flag_icons/${l}.svg`} class=" rounded-full w-4 mr-4" alt="" />
            <p class="hover:text-white">{l}</p>
          </div>
        </button>
      {/if}
    {/each}
  </div>
{/if}
