import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/Routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* JournalApp */}
      <Route path="/*" element={<JournalRoutes />} />
      <Route />
    </Routes>
  )
}
