import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['count']
  declare countTarget: HTMLElement

  static values = { count: { type: Number, default: 0 } }
  declare countValue: number

  countValueChanged() {
    this.countTarget.textContent = this.countValue.toString()
  }

  increment() {
    this.countValue++
  }

  decrement() {
    this.countValue--
  }
}
