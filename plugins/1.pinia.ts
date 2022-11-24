import { PiniaPluginContext } from 'pinia'

function piniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {
    // react to store changes
    console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`)
  })

  // Note this has to be typed if you are using TS
  return { creationTime: new Date() }
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(piniaPlugin)
})
