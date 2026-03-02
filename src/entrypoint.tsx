import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div data-controller="counter">
      <h1 class="text-2xl font-bold mb-4">Counter</h1>
      <div class="flex items-center gap-4">
        <button
          data-action="click->counter#decrement"
          class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          −
        </button>
        <span data-counter-target="count" class="text-xl font-mono">0</span>
        <button
          data-action="click->counter#increment"
          class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  )
})

export default app
