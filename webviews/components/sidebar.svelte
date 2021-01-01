<script lang="ts">
    import { loop_guard, onMount } from "svelte/internal";
    let todos: Array<{text: String, completed: boolean}> = [];
    let text = "";

    onMount(() => {
        window.addEventListener("message", (event) => {
            const message = event.data;
            console.log({message});
            switch (message.type) {
                case "newTodo":
                    todos = [
                        {text: message.value, completed: false},
                        ...todos,
                    ];
                    break;
            }
        })
    }
    )
</script>

<style>
    .complete {
        text-decoration: line-through;
        color: green;
    }
</style>
<form on:submit|preventDefault={() => {
    todos = [{text, completed: false}, ...todos];
    text = '';
}}>
    <input bind:value={text} />
</form>

<ul>
    {#each todos as todo (todo.text)}
        <li 
            class:complete={todo.completed}
            on:click={() => {
                console.log("clicked");
                todo.completed = !todo.completed;
            }}>
            {todo.text}
        </li>
    {/each}
</ul>

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