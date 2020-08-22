<script lang="ts">
  import { toggleMachine } from "./toggleMachine"
  import type { State } from "./toggleMachine"
  import { useMachine } from "./useMachine"
  import Child from "./Child.svelte"

  const { state, send } = useMachine(toggleMachine)
  const toggle = () => send({ type: "TOGGLE" })
  $: selected = ($state as State).value === "active"

  export let message: string
</script>

<style>
  h1 {
    @apply text-blue-500;
  }
  .selected {
    @apply font-bold;
  }
</style>

<h1 class:selected on:click={toggle}>{message}!</h1>
<Child {selected} />
