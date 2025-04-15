import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../app'

test('Parcours complet - étapes 1 à 32', async () => {
  // Utilisateur sur Home
  render(<App />)

  // Titre "Welcome home" dans document
  expect(screen.getByText(/Welcome home/i)).toBeInTheDocument()

  // Lien "form" dans document
  const fillFormLink = screen.getByRole('link', {name: /Fill out the form/i})
  expect(fillFormLink).toBeInTheDocument()

  // Utilisateur clique sur lien
  userEvent.click(fillFormLink)

  // Utilisateur redirigé sur page 1
  expect(await screen.findByText(/Page 1/i)).toBeInTheDocument()

  // Titre dans document
  expect(screen.getByRole('heading', {name: /Page 1/i})).toBeInTheDocument()

  // Lien "Go home" dans document
  expect(screen.getByRole('link', {name: /Go home/i})).toBeInTheDocument()

  // Champ "Favorite food" dans document
  const foodInput = screen.getByLabelText(/Favorite food/i)
  expect(foodInput).toBeInTheDocument()

  // Utilisateur remplit champ
  userEvent.type(foodInput, 'Les pâtes')
  expect(foodInput.value).toBe('Les pâtes')

  // Lien "Next" dans document
  const nextLink = screen.getByRole('link', {name: /Next/i})
  expect(nextLink).toBeInTheDocument()

  // Utilisateur clique sur lien "Next"
  userEvent.click(nextLink)

  // Utilisateur redirigé sur page 2
  expect(await screen.findByText(/Page 2/i)).toBeInTheDocument()

  // Titre dans document
  expect(screen.getByRole('heading', {name: /Page 2/i})).toBeInTheDocument()

  // Lien "Go back" dans document
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // Champ "Favorite drink" dans document
  const drinkInput = screen.getByLabelText(/Favorite drink/i)
  expect(drinkInput).toBeInTheDocument()

  // Utilisateur remplit champ
  userEvent.type(drinkInput, 'Bière')
  expect(drinkInput.value).toBe('Bière')

  // Lien "Review" dans document
  const reviewLink = screen.getByRole('link', {name: /Review/i})
  expect(reviewLink).toBeInTheDocument()

  // Utilisateur clique sur lien "Review"
  userEvent.click(reviewLink)

  // Utilisateur redirigé sur page de confirmation
  expect(
    await screen.findByRole('heading', {name: /Confirm/i}),
  ).toBeInTheDocument()

  // Titre "Confirm" dans document
  expect(screen.getByRole('heading', {name: /Confirm/i})).toBeInTheDocument()

  // Texte "Please confirm your choices" dans document
  expect(screen.getByText(/Please confirm your choices/i)).toBeInTheDocument()

  // Texte label "favorite food" a pour contenu "Les pâtes"
  expect(screen.getByText(/Les pâtes/i)).toBeInTheDocument()

  // Texte label "favorite drink" a pour contenu "Bière"
  expect(screen.getByText(/Bière/i)).toBeInTheDocument()

  // Lien "Go back" dans document
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // Bouton "Confirm" dans document
  const confirmButton = screen.getByRole('button', {name: /Confirm/i})
  expect(confirmButton).toBeInTheDocument()

  // Utilisateur clique sur le bouton "Confirm"
  userEvent.click(confirmButton)

  // Utilisateur redirigé sur page de Félicitations
  expect(
    await screen.findByRole('heading', {name: /Congrats\. You did it\./i}),
  ).toBeInTheDocument()

  // Titre "Congrats.You did it." dans le document
  expect(screen.getByText(/Congrats\. You did it\./i)).toBeInTheDocument()

  // Lien "Go home" dans document
  const goHomeLink = screen.getByRole('link', {name: /Go home/i})
  expect(goHomeLink).toBeInTheDocument()

  // Utilisateur clique sur lien "Go Home"
  userEvent.click(goHomeLink)

  // Utilisateur redirigé sur home
  expect(await screen.findByText(/Welcome home/i)).toBeInTheDocument()

  // Titre "Welcome home" dans document
  expect(screen.getByText(/Welcome home/i)).toBeInTheDocument()
})

test('Cas non passant - étapes 1 à 34', async () => {
  // Utilisateur sur Home
  render(<App />)

  // Titre "Welcome home" dans document
  expect(screen.getByText(/Welcome home/i)).toBeInTheDocument()

  // Lien "Fill out the form" dans document
  const fillFormLink = screen.getByRole('link', {name: /Fill out the form/i})
  expect(fillFormLink).toBeInTheDocument()

  // Utilisateur clique sur lien
  userEvent.click(fillFormLink)

  // Utilisateur redirigé sur page 1
  expect(await screen.findByText(/Page 1/i)).toBeInTheDocument()

  // Titre "Page 1" dans document
  expect(screen.getByRole('heading', {name: /Page 1/i})).toBeInTheDocument()

  // Lien "Go home" dans document
  expect(screen.getByRole('link', {name: /Go home/i})).toBeInTheDocument()

  // Champ avec label "Favorite food" dans document
  const foodInput = screen.getByLabelText(/Favorite food/i)
  expect(foodInput).toBeInTheDocument()

  // Utilisateur remplit champ avec "" (vide)
  userEvent.clear(foodInput)
  expect(foodInput.value).toBe('')

  // Lien "Next" dans document
  const nextLink = screen.getByRole('link', {name: /Next/i})
  expect(nextLink).toBeInTheDocument()

  // Utilisateur clique sur lien "Next"
  userEvent.click(nextLink)

  // Utilisateur redirigé sur page 2
  expect(await screen.findByText(/Page 2/i)).toBeInTheDocument()

  // Titre "Page 2" dans document
  expect(screen.getByRole('heading', {name: /Page 2/i})).toBeInTheDocument()

  // Lien "Go back" dans document
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // Champ avec label "Favorite drink" dans document
  const drinkInput = screen.getByLabelText(/Favorite drink/i)
  expect(drinkInput).toBeInTheDocument()

  // Utilisateur remplit champ avec "Bière"
  userEvent.type(drinkInput, 'Bière')
  expect(drinkInput.value).toBe('Bière')

  // Lien "Review" dans document
  const reviewLink = screen.getByRole('link', {name: /Review/i})
  expect(reviewLink).toBeInTheDocument()

  // Utilisateur clique sur lien "Review"
  userEvent.click(reviewLink)

  // Utilisateur redirigé sur page de confirmation
  expect(
    await screen.findByRole('heading', {name: /Confirm/i}),
  ).toBeInTheDocument()

  // Titre "Confirm" dans document
  expect(screen.getByRole('heading', {name: /Confirm/i})).toBeInTheDocument()

  // Texte "Please confirm your choices" dans document
  expect(screen.getByText(/Please confirm your choices/i)).toBeInTheDocument()

  // Texte label "favorite food" a pour contenu ""
  const foodSpan = screen.getByText(
    (content, element) =>
      element.tagName.toLowerCase() === 'span' &&
      element.getAttribute('aria-labelledby') === 'food-label',
  )
  expect(foodSpan.textContent).toBe('')

  // Texte label "favorite drink" a pour contenu "Bière"
  const drinkSpan = screen.getByText(
    (content, element) =>
      element.tagName.toLowerCase() === 'span' &&
      element.getAttribute('aria-labelledby') === 'drink-label',
  )
  expect(drinkSpan.textContent).toBe('Bière')

  // Lien "Go back" dans document
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // Bouton "Confirm" dans document
  const confirmButton = screen.getByRole('button', {name: /Confirm/i})
  expect(confirmButton).toBeInTheDocument()

  // Utilisateur clique sur bouton "Confirm"
  userEvent.click(confirmButton)

  // Utilisateur redirigé sur page d'erreur
  expect(
    await screen.findByText(/Oh no. There was an error\./i),
  ).toBeInTheDocument()

  // Texte "Oh no. There was an error." dans document
  expect(screen.getByText(/Oh no. There was an error\./i)).toBeInTheDocument()

  // Texte "les champs food et drink sont obligatoires" dans document
  expect(
    screen.getByText(/les champs food et drink sont obligatoires/i),
  ).toBeInTheDocument()

  // Lien "Go home" dans document
  expect(screen.getByRole('link', {name: /Go home/i})).toBeInTheDocument()

  // Lien "Try again" dans document
  const tryAgainLink = screen.getByRole('link', {name: /Try again/i})
  expect(tryAgainLink).toBeInTheDocument()

  // Utilisateur clique sur lien "Try again"
  userEvent.click(tryAgainLink)

  // Utilisateur redirigé sur page 1
  expect(await screen.findByText(/Page 1/i)).toBeInTheDocument()

  // Titre "Page 1" dans document
  expect(screen.getByRole('heading', {name: /Page 1/i})).toBeInTheDocument()
})
