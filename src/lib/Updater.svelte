<script>
  import { checkUpdate, installUpdate, onUpdaterEvent } from "@tauri-apps/api/updater";
  import { relaunch } from "@tauri-apps/api/process";
  import { onMount, onDestroy } from "svelte";
  import toast from "svelte-french-toast";

  let updateMessage = "";

  async function handleUpdate() {
    try {
      const unlisten = await onUpdaterEvent(({ error, status }) => {
        // This will log all updater events, including status updates and errors.
        console.log("Updater event", error, status);
      });

      const { shouldUpdate, manifest } = await checkUpdate();

      if (shouldUpdate) {
        // You could show a dialog asking the user if they want to install the update here.
        updateMessage = `Installing update ${manifest?.version}, ${manifest?.date}, ${manifest?.body}`;
        console.log(updateMessage);

        // Install the update. This will also restart the app on Windows!
        await installUpdate();

        // On macOS and Linux you will need to restart the app manually.
        // You could use this step to display another confirmation dialog.
        await relaunch();
      }

      // Unlisten to updater events when the component is unmounted.
      onDestroy(() => {
        unlisten();
      });
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  }

  onMount(() => {
    handleUpdate();
  });
</script>

<main>
  {#if updateMessage}
    <!-- <button class=" my-1 ml-5 border rounded-sm press">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    </button> -->
    <p>{updateMessage}</p>
  {/if}
</main>
