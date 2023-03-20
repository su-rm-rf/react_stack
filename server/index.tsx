import Koa from 'Koa'
import React from 'react'
import { renderToString, renderToPipeableStream } from 'react-dom/server'
import Test from '../src/Test'
const port = 8701
const server = new Koa()
server.use(cxt => {
  console.log(Test)
  // const str = renderToString(<Test />)
  const str = renderToString(React.createElement(Test))
  console.log(str)
  cxt.body = `
    <html>
    <body>
      ${ str }
    </body>
    </html>
  `
})

server.listen(port, () => {
  console.log(`server started at ${ port }`)
})
