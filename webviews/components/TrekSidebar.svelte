<script lang="ts">
    import { loop_guard, onMount } from "svelte/internal";
</script>

<style>
    .complete {
        text-decoration: line-through;
        color: green;
    }
</style>

<button
    on:click={() => {
        tsvscode.postMessage({type: 'onInfo', value: 'info message'});
    }}>
    Info
</button>

<button
    on:click={() => {
        tsvscode.postMessage({type: 'onError', value: 'error message'});
    }}>
    Error
</button>