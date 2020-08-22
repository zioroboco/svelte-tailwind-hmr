import { Machine, createMachine } from "xstate"

export type State =
  | { value: "active"; context: {} }
  | { value: "inactive"; context: {} }

export type Event = { type: "TOGGLE" }

export type Context = {}

export const toggleMachine = createMachine<Context, Event, State>({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
})
