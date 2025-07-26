import { StrictMode,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/index.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoutes from './routes/router.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense>
        {/* <RouterProvider router={createBrowserRouter(useFinalRoutes())} /> */}
        {/* <router /> */}
        <Router>
          <ProtectedRoutes />
        </Router>
        {/* <App /> */}
      </Suspense>
    </Provider>
  </StrictMode>
);
