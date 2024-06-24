import { reducer } from '@/store/reducer'
import { Action, ApplicationContainers, ApplicationState, Observer } from '@/types/store'

export let applicationState: ApplicationState = {
  games: [],
  activeContainer: ApplicationContainers.MENU
}

const cache = localStorage.getItem('applicationState')

if (cache)
  applicationState = JSON.parse(cache)

const observers: Observer[] = []

export function subscribe(observer: Observer) {
  observers.push(observer)
}

export function dispatch(action: Action) {
  applicationState = reducer(action, applicationState)
  localStorage.setItem('applicationState', JSON.stringify(applicationState))
  observers.forEach(observer => observer.render())
}