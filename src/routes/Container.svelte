<script lang="ts">
    import ElementField from "./ElementField.svelte";
    import BtnGroup from "./BtnGroup.svelte";
    let elementValue: string;

    function handleSubmit() {
        console.log(`submitted: ${elementValue}`);
    }

    function handleClear() {elementValue = "";}
</script>

<div class="container-md bg-secondary text-white p-5 my-5 mx-auto">
    <h3>E-Web</h3>
    <br />
    <ElementField type="name" bind:value={elementValue} />
    <BtnGroup on:submit={handleSubmit} on:clear={handleClear} />
    <br />
    <br />
    <p>Not Implemented</p>
</div>