const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "54f25967",
  apiSecret: "OQx0hl6f79afx2eB"
})

module.exports = vonage;