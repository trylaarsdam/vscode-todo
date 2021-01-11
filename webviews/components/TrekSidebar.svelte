<script lang="ts">
    import { loop_guard, onMount } from "svelte/internal";

    let text = "";
    let exchangeValue = "";

    function publishMessage() {}
</script>

<style>
    .complete {
        text-decoration: line-through;
        color: green;
    }
</style>

<form
    on:submit|preventDefault={() => {
        exchangeValue = '';
        text = '';
    }}>
    <input bind:value={exchangeValue} />
    <input bind:value={text} />
</form>

<button
    on:click={() => {
        tsvscode.postMessage({ type: exchangeValue, value: text });

        text = '';
    }}>
    Submit
</button>
