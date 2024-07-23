<script>
  import ModalAuthentication from "./Modal_Authentication.svelte";
  import LanguageSelect from "$lib/LanguageSelect.svelte";
  import ThemeSelect from "$lib/ThemeSelect.svelte";
  import { isDarkTheme } from "$stores/AppStore";
</script>

<!-- <nav class=" flex m-auto w-full h-16">
  <div class="w-1/6 content-center flex items-center justify-center">
    Logo
  </div>
  <div class="flex-auto">
    <div class="flex h-full items-center justify-center">
      <a href="#" class=" mx-1 flex-auto press hover:text-blue-600 flex items-center justify-center">Home</a>
      <a href="#" class=" mx-1 flex-auto press hover:text-blue-600 flex items-center justify-center">About</a>
      <a href="#" class=" mx-1 flex-auto press hover:text-blue-600 flex items-center justify-center">Projects</a>
      <a href="#" class=" mx-1 flex-auto press hover:text-blue-600 flex items-center justify-center">Contact</a>
      <a href="#" class=" mx-1 flex-auto press hover:text-blue-600 flex items-center justify-center">Pricing</a>
    </div>
  </div>
  <ModalAuthentication />
</nav> -->

<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="#/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">Logo</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href="#/" class="mr-5 hover:text-gray-900">Link</a>
      <a href="#/" class="mr-5 hover:text-gray-900">Link</a>
      <a href="#/" class="mr-5 hover:text-gray-900">Link</a>
      <a href="#/" class="mr-5 hover:text-gray-900">Link</a>
    </nav>
    <ModalAuthentication />
  </div>

  <nav class="h-8 {$isDarkTheme ? 'bg-[#282727]' : 'bg-slate-100'}   flex flex-row-reverse pr-4">
    <LanguageSelect />
    <ThemeSelect />
  </nav>
</header>
