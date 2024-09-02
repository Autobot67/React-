import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Coffee from './Coffee.jsx'


const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:"_blank" },
  'Visit Google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
