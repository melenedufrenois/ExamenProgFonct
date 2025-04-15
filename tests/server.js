import {setupServer} from 'msw/node'
import {rest} from 'msw'

export const handlers = [
  rest.post('/greeting', (req, res, ctx) =>
    res(ctx.json({data: {greeting: `Hello ${req.body.subject}`}})),
  ),

  rest.post('/post/:id', (req, res, ctx) => {
    if (!req.body.title) {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: 'Format invalide, veuillez renseigner le titre',
        }),
      )
    }
    return res(ctx.json({data: req.body}))
  }),

  rest.post('/form', (req, res, ctx) => {
    const {food, drink} = req.body
    if (!food || !drink) {
      return res(
        ctx.status(400),
        ctx.json({message: 'les champs food et drink sont obligatoires'}),
      )
    }
    return res(ctx.status(200), ctx.json({data: {food, drink}}))
  }),
]

export const server = setupServer(...handlers)
