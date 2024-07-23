<script>
  import { isDarkTheme } from "$stores/AppStore";
  import { t as translation } from "../locale/i18n";

  import LanguageSelect from "$lib/LanguageSelect.svelte";
  import ThemeSelect from "$lib/ThemeSelect.svelte";
</script>

<div class="flex justify-between border rounded-sm mx-5 mt-5 px-2 py-1">
  <ThemeSelect />
  <LanguageSelect />
</div>

<h1 class="p-5 m-5 {$isDarkTheme ? 'bg-black text-white' : 'bg-slate-200 text-black'} rounded-md">
  {@html $translation("greeting")} <br />
  <p class="text-xs">{@html $translation("message")}</p>
  <br />
</h1>
