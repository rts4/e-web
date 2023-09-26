<script lang="ts">
    export let atomicNumber: number = 1;
    export let symbol: string = "H";
    export let name: string = "Hydrogen";
    export let atomicMass: number = 1.03;
    export let groupBlock: string = "Nonmetal";
    export let groupColourHex: string = "000000";
</script>

<div class="container" id="element-box" style={`background-image: linear-gradient(45deg, #${groupColourHex}20, #${groupColourHex});`}>
    <div id="top-bar">
        <div id="atomic-number">{atomicNumber}</div>
        <div id="atomic-mass">{atomicMass}</div>
    </div>
    <div id="bottom">
        <div id="symbol-grid">
            <div id="symbol">{symbol}</div>
        </div>
        <div id="name">{name}</div>
        <div id="group-block">{groupBlock}</div>
    </div>
</div>

<style>
    #element-box {
        width: 150px;
        height: 165px;
        color: black;
        border-radius: 2.5%;
    }
    #top-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 5%;
        font-size: 105%;
    }
    #atomic-number {
        text-align: left;
    }
    #atomic-mass {
        text-align: right;
    }
    #bottom {
        display: grid;
        justify-content: center;
        align-items: center;
        padding-top: 5%;
    }
    #symbol-grid {
        display: grid;
        justify-content: center;
    }
    #symbol {
        font-size: 300%;
    }
    #name {
        font-size: 125%;
        margin-left: auto;
        margin-right: auto;
    }
    #group-block {
        font-size: 75%;
        margin-left: auto;
        margin-right: auto;
    }
</style>