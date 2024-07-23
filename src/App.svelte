<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Navbar from "$components/Navigation.svelte";
  import Footer from "$components/Footer.svelte";

  import toast, { Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";

  onMount(() => {
    toast.success("It works!");

    toast.success("Always at the bottom.", {
      position: "bottom-center",
    });
  });
</script>

<Toaster />

<Navbar />

<main>
  <Router {routes} />
</main>

<Footer />
