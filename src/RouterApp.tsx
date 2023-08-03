import type { ReactElement } from 'react'
import {
    RouterProvider,
  } from "react-router-dom";
import { router } from './routes/routes';
const RouterApp = ():ReactElement => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default RouterApp