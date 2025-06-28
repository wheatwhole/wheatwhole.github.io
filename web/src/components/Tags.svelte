<script>
  let { names, colorPreset } = $props();
  const Presets = {
    likesPresetOld: [
      "#537D5D",
      "#F2C078",
      "#3D90D7",
      "#D5451B",
      "#C5172E",
      "black",
      "#71C0BB",
      "#5588A3",
    ],
    likesPreset: [
      "#CCEAD6",
      "#CCEAD6",
    "#CCEAD6",
      "#CCEAD6",
      "#CCEAD6",
      "#CCEAD6",
      "#CCEAD6",
      "#CCEAD6",
      "#CCEAD6",
      "#CCEAD6",
      "#CCEAD6",
      "#CCEAD6",
    ],
  };
</script>

<div class="tag-container">
  {#each names as name, i}
    {#if colorPreset === "likesPreset"}
      <div
        class="tag"
        style="background-color: {Presets.likesPreset[i]};"
      >
        <span>{name}</span>
      </div>
    {:else}
      <div class="tag"><span>{name}</span></div>
    {/if}
  {/each}
</div>

<style>
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .tag {
    margin: .125rem;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    padding-left: .5rem;
    padding-right: .5rem;
    background-color: var(--elevated);
    border-radius: .3125rem;
    font-weight: 580;
    font-size: .9rem;
    font-family: "IBM Sans Mono", monospace;
    width: max-content;
    color: var(--text-color);
     user-select: none;
  -webkit-user-select: none;  /* Safari / iOS */
  -ms-user-select: none;      /* old IE */
}
</style>
