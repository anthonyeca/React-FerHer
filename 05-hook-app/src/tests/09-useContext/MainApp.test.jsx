import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { MainApp } from '../../09-useContext/MainApp'
import { HomePage } from '../../09-useContext/HomePage'
import { LoginPage } from '../../09-useContext/LoginPage'
import { AboutPage } from '../../09-useContext/AboutPage'

describe('Pruebas en <MainApp />', () => {
  test('debe mostrar el HomePage', () => {
    //especificando ruta a activar
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <MainApp />,

          children: [
            {
              path: '/',
              element: <HomePage />,
            },
            {
              path: 'login',
              element: <LoginPage />,
            },
            {
              path: 'about',
              element: <AboutPage />,
            },
          ],
        },
      ],
      { initialEntries: ['/'] }
    )

    //renderizando Provider
    render(<RouterProvider router={router} />)

    //ubicando elemento h1
    const head = screen.getByRole('heading', { level: 1 }).innerHTML

    expect(head).toContain('HomePage')
  })

  test('debe mostrar el LoginPage', () => {
    //especificando ruta a activar
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <MainApp />,

          children: [
            {
              path: '/',
              element: <HomePage />,
            },
            {
              path: 'login',
              element: <LoginPage />,
            },
            {
              path: 'about',
              element: <AboutPage />,
            },
          ],
        },
      ],
      {
        initialEntries: ['/login'],
      }
    )

    //renderizando Provider
    render(<RouterProvider router={router} />)

    //ubicando elemento h1
    const head = screen.getByRole('heading', { level: 1 }).innerHTML

    //realizando la comparación
    expect(head).toContain('LoginPage')
    screen.debug()
  })
})
