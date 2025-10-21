const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const welcomeFlow = require('./flows/red-dragon-welcome')
const menuFlow = require('./flows/menu-flow')
const adminFlow = require('./flows/admin-flow')

const main = async () => {
  const adapterDB = new MockAdapter()
  const adapterFlow = createFlow([welcomeFlow, menuFlow, adminFlow])
  const adapterProvider = createProvider(BaileysProvider)

  await createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  })

  console.log('🐉 Keep Connection Bot is running...')
}

main()
