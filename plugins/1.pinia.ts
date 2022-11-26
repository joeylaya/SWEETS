import { PiniaPluginContext } from 'pinia'

function piniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {})

  // Note this has to be typed if you are using TS
  return { creationTime: new Date() }
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(piniaPlugin)
})
