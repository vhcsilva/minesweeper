import { reducer } from '@/store/reducer'
import { Action, ApplicationState, Observer } from '@/types/store'

export let applicationState: ApplicationState = {
  games: []
}

const observers: Observer[] = []

export function subscribe(observer: Observer) {
  observers.push(observer)
}

export function dispatch(action: Action) {
  applicationState = reducer(action, applicationState)
  observers.forEach(observer => observer.render())
}