import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const lenght = allEntries.length

  response.statusCode = 200 //ok
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ data: allEntries, lenght }))
}

export default allAvos
