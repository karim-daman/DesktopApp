<script>
  import { checkUpdate, installUpdate, onUpdaterEvent } from "@tauri-apps/api/updater";
  import { relaunch } from "@tauri-apps/api/process";
  import { onMount, onDestroy } from "svelte";
  import toast from "svelte-french-toast";

  let updateMessage = "!";

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
    <p>{updateMessage}</p>
  {/if}
</main>
