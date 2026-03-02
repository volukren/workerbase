import '../styles.css'
import '@hotwired/turbo'
import { Application } from '@hotwired/stimulus'
import CounterController from './controllers/counter_controller'

const app = Application.start()
app.register('counter', CounterController)
