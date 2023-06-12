<script lang="ts">
    export let type: string = "name"; // name or atomic number
    export let value: string|number;
</script>

{#if (type === "name")}
    <div class="input-group mb-3 mx-auto">
        <span class="input-group-text">Element name</span>
        <input type="text" bind:value class="form-control" placeholder="americium" />
    </div>
{:else if (type === "atomic_number")}
    <div class="input-group mb-3 mx-auto">
        <span class="input-group-text">Atomic number</span>
        <input type="number" bind:value class="form-control" placeholder=1 />
    </div>
{/if}