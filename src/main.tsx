import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = <StrictMode><App /></StrictMode>
const pathname = window.location.pathname
const route = pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`
if (root.hasChildNodes() && root.dataset.route === route) hydrateRoot(root, app)
else createRoot(root).render(app)
