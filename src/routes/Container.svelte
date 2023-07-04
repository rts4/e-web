<script lang="ts">
    import { onMount } from "svelte";
    import ElementField from "./ElementField.svelte";
    import BtnGroup from "./BtnGroup.svelte";
    import ElementBox from "./ElementBox.svelte";
    import { roundTwo } from "./utils";
    import { getElementName, getElementAtomicNumber } from "./requests";
    export let type: string = "name";
    let elementValue: string|number;
    let element: any;
    let elementNotFound: string|number|null;

    onMount(() => {
        if (type === "atomic_number") elementValue = 0;
    });

    async function handleSubmit() {
        if (element === 404) elementNotFound = elementValue;
        if (type === "name")
            return element = await getElementName((<string>elementValue));
        else if (type === "atomic_number")
            return element = await getElementAtomicNumber((<number>elementValue));
    }

    $: if (type === "atomic_number" && ((<number>elementValue) < 0 || elementValue === null)) elementValue = 0;

    function handleReset() {element = null;}
    function handleClear() {elementValue = type === "atomic_number" ? 0 : ""; if (element === 404 || element === 400) {element = null; elementNotFound = null;}}
</script>

<div class="container-md bg-secondary text-white p-5 my-5 mx-auto">
    <h3>E-Web</h3>
    <br />
    {#if (elementNotFound)}
        <p class="alert alert-danger"><strong>Error:</strong> Failed to find element {elementNotFound} by {type === "name" ? "name" : "atomic number"}.</p>
    {:else if (element === 400)}
        <p class="alert alert-danger"><strong>Error:</strong> The remote server returned a Bad Request status. Please try again later.</p>
    {/if}
    <ElementField type={type} bind:value={elementValue} />
    <BtnGroup on:submit={handleSubmit} on:reset={handleReset} on:clear={handleClear} disabled={!elementValue ? true : false} clearDisabled={!elementValue ? !elementNotFound ? true : false : false} resetDisabled={!element || (typeof element !== "object") ? true : false} type={type} />
    {#if (element && typeof element === "object")}
        <br />
        <br />
        <ElementBox name={element.Name} symbol={element.Symbol} atomicNumber={element.AtomicNumber} atomicMass={element.AtomicMass} groupBlock={element.GroupBlock} groupColourHex={element.GroupHexColor} />
        <div class="container-md text-black my-3 p-3 rounded" style={`background-color: #${element.GroupHexColor};`}>
            <p class="border-bottom border-black">Standard State: {element.StandardState}</p>
            <p class="border-bottom border-black">Electron Configuration: {element.ElectronConfig}</p>
            <p class="border-bottom border-black">Oxidation States: {element.OxidationStates}</p>
            <p class="border-bottom border-black">Melting/Boiling Points: {element.MeltingPoint} K (M), {element.BoilingPoint} K (B)</p>
            <p class="border-bottom border-black">Discovered in {element.YearDiscovered === "Ancient" ? "ancient times." : `the year of ${element.YearDiscovered}.`}</p>
        </div>
    {/if}
</div>