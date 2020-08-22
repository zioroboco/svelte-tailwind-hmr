import { interpret } from "xstate"
import { readable } from "svelte/store"

export const useMachine = (machine, options = { devTools: true }) => {
  const service = interpret(machine, options)
  const store = readable(machine.initialState, set => {
    service.onTransition(state => {
      if (state.changed) {
        set(state)
      }
    })

    service.start()

    return () => {
      service.stop()
    }
  })

  return {
    state: store,
    send: service.send,
  }
}
