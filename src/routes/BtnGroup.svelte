<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let disabled: boolean = false;
    export let resetDisabled: boolean = false;
    export let type: string = "name";
    function onSubmit() {dispatch("submit");}
    function onClear() {dispatch("clear");}
    function onReset() {dispatch("reset");}
</script>

<div class="btn-group">
    <button class="btn btn-success" on:click={onSubmit} disabled={disabled}>Submit</button>
    <button class="btn btn-danger" on:click={onClear} disabled={disabled}>Clear</button>
    <button class="btn btn-warning" on:click={onReset} disabled={resetDisabled}>Reset</button>
    <a class="btn btn-primary" href={type === "name" ? "/atomic" : "/"}>{type === "name" ? "Atomic Number" : "Element Name"}</a>
</div>