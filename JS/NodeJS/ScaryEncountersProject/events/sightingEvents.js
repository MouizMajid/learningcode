import {EventEmitter} from 'node:events'
import { createAlert } from '../utils/createAlert'

export const sightingEmitter = new EventEmitter()

sightingEmitter.on('sighting-added', createAlert)
