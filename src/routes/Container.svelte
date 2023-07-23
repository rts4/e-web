<script lang="ts">
    import { onMount } from "svelte";
    import ElementField from "./ElementField.svelte";
    import BtnGroup from "./BtnGroup.svelte";
    import ElementBox from "./ElementBox.svelte";
    import { getElementName, getElementAtomicNumber } from "./requests";
    import { sanitize } from "./utils";
    export let type: string = "name";
    let elementValue: string|number;
    let element: any;
    let elementNotFound: string|number|null;

    function capitalise(i: string) {
        return i.charAt(0).toUpperCase() + i.slice(1);
    }

    onMount(() => {
        if (type === "atomic_number") elementValue = 0;
    });

    async function handleSubmit() {
        if (element === 404) elementNotFound = elementValue;
        if (type === "name")
            return element = await getElementName(((<string>elementValue).toLowerCase()));
        else if (type === "atomic_number")
            return element = await getElementAtomicNumber((<number>elementValue));
    }

    $: if (type === "atomic_number" && ((<number>elementValue) < 0 || elementValue === null)) elementValue = 0;
    $: console.log(sanitize(elementNotFound?.toString() ?? "null"));

    function handleReset() {element = null;}
    function handleClear() {elementValue = type === "atomic_number" ? 0 : ""; if (element === 404 || element === 400) {element = null; elementNotFound = null;}}
</script>

<div class="container-md bg-secondary text-white p-5 my-5 mx-auto">
    <h3>E-Web</h3>
    <br />
    {#if (elementNotFound)}
        <p class="alert alert-danger"><strong>Error:</strong> Failed to find element {type === "name" ? sanitize(elementNotFound.toString()) : elementNotFound} by {type === "name" ? "name" : "atomic number"}.</p>
    {:else if (element === 400)}
        <p class="alert alert-danger"><strong>Error:</strong> The remote server returned a Bad Request status. Please try again later.</p>
    {/if}
    <ElementField type={type} bind:value={elementValue} />
    <BtnGroup on:submit={handleSubmit} on:reset={handleReset} on:clear={handleClear} disabled={!elementValue ? true : false} clearDisabled={!elementValue ? !elementNotFound ? true : false : false} resetDisabled={!element || (typeof element !== "object") ? true : false} type={type} />
    {#if (element && typeof element === "object")}
        <br />
        <br />
        <ElementBox name={capitalise(element.name)} symbol={element.symbol} atomicNumber={element.atomic_number} atomicMass={element.atomic_mass} groupBlock={element.group_block} groupColourHex={element.group_hex_color} />
        <div class="container-md text-black my-3 p-3 rounded" style={`background-color: #${element.group_hex_color};`}>
            <p class="border-bottom border-black">Standard State: {element.standard_state}</p>
            <p class="border-bottom border-black">Electron Configuration: {element.electron_config}</p>
            <p class="border-bottom border-black">Oxidation States: {element.oxidation_states}</p>
            <p class="border-bottom border-black">Melting/Boiling Points: {element.melting_point} K (M), {element.boiling_point} K (B)</p>
            <p class="border-bottom border-black">Discovered in {element.year_discovered === "Ancient" ? "ancient times." : `the year of ${element.year_discovered}.`}</p>
        </div>
    {/if}
</div>