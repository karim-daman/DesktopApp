<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Footer from "$components/Footer.svelte";

  import toast, { Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";
  import Updater from "$lib/Updater.svelte";

  onMount(() => {
    toast.success("It works!");

    toast.success("Always at the bottom.", {
      position: "bottom-center",
    });
  });
</script>

<Toaster />

<main>
  <Updater />

  <Router {routes} />
</main>

<Footer />
