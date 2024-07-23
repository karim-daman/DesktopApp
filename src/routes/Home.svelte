<script>
  import { isDarkTheme } from "$stores/AppStore";
  import { t as translation } from "../locale/i18n";
</script>

<h1 class="p-5 m-5 {$isDarkTheme ? 'bg-black text-white' : 'bg-slate-200 text-black'} rounded-md">
  {@html $translation("greeting")} <br />
  <p class="text-xs">{@html $translation("message")}</p>
  <br />
</h1>
