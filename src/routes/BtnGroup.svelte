<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function onSubmit() {dispatch("submit");}
    function onClear() {dispatch("clear");}
</script>

<div class="btn-group">
    <button class="btn btn-success" on:click={onSubmit}>Submit</button>
    <button class="btn btn-danger" on:click={onClear}>Clear</button>
</div>