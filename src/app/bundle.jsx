import React from 'react'
import Server from 'react-dom/server'
import App from './src'

console.log(Server.renderToString(<App />))