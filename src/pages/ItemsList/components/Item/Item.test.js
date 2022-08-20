/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable no-unused-vars */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Item from './Item'
const mockedUsedNavigate = jest.fn()

// Jest mocks for hook inside Provider
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

test('Renders normally', () => {
  const item = {
    id: '1',
    brand: 'brand',
    model: 'model',
    price: 999,
    imgUrl: 'imageUrl',
    inCart: false,
    handlePostCart: () => { }
  }
  const component = render(
        <Item
            id={item.id}
            brand={item.brand}
            model={item.model}
            price={item.price}
            imgUrl={item.imgUrl}
            inCart={item.inCart}
        />
  )
  component.getByText('brand')// simple render works
  component.getByText('999.00€') // to .toFixed(2) works

  expect(component.container).toHaveTextContent('model')

  const button = component.getByText('Add to cart')
  expect(button).toBeDefined()
})
