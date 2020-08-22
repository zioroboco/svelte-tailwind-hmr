<script lang="ts">
  import { toggleMachine, Event } from "./toggleMachine"
  import { useMachine } from "./useMachine"

  const { state, send } = useMachine(toggleMachine)
  const handleClick = () => send(Event.TOGGLE)
  $: selected = $state.value === "active"

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

<h1 class:selected on:click={handleClick}>{message}!</h1>
