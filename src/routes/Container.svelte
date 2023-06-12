<script lang="ts">
    import { onMount } from "svelte";
    import ElementField from "./ElementField.svelte";
    import BtnGroup from "./BtnGroup.svelte";
    import { getElementName, getElementAtomicNumber } from "./requests";
    export let type: string = "name";
    let elementValue: string|number;
    let element: any;

    onMount(() => {
        if (type === "atomic_number") elementValue = 0;
    });

    async function handleSubmit() {
        if (type === "name")
            return element = await getElementName((<string>elementValue));
        else if (type === "atomic_number")
            return element = await getElementAtomicNumber((<number>elementValue));
    }

    $: if (type === "atomic_number" && ((<number>elementValue) < 0 || elementValue === null)) elementValue = 0;

    function handleReset() {element = null;}
    function handleClear() {elementValue = type === "atomic_number" ? 0 : "";}
</script>

<div class="container-md bg-secondary text-white p-5 my-5 mx-auto">
    <h3>E-Web</h3>
    <br />
    <ElementField type={type} bind:value={elementValue} />
    <BtnGroup on:submit={handleSubmit} on:reset={handleReset} on:clear={handleClear} disabled={!elementValue ? true : false} resetDisabled={!element ? true : false} type={type} />
    {#if (element)}
        <br />
        <br />
        <div class="container-md text-black my-3 p-3 rounded" style={`background-color: #${element.GroupHexColor};`}>
            <p class="border-bottom border-black"><span class="lead">{element.Symbol}</span>: {element.Name} ({element.AtomicNumber}) | Atomic Mass: {element.AtomicMass}</p>
            <p class="border-bottom border-black">Group Block: {element.GroupBlock}</p>
            <p class="border-bottom border-black">Standard State: {element.StandardState}</p>
            <p class="border-bottom border-black">Electron Configuration: {element.ElectronConfig}</p>
            <p class="border-bottom border-black">Oxidation States: {element.OxidationStates}</p>
            <p class="border-bottom border-black">Melting/Boiling Points: {element.MeltingPoint} K (M), {element.BoilingPoint} K (B)</p>
            <p class="border-bottom border-black">Discovered in {element.YearDiscovered === "Ancient" ? "ancient times." : `the year of ${element.YearDiscovered}.`}</p>
        </div>
    {/if}
</div>