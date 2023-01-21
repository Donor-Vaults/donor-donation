import { configureStore } from '@reduxjs/toolkit'
import fundraisersSlice from './slices/fundraisersSlice'
import userSlice from './slices/userSlice'

export default configureStore({
    reducer: {
    user: userSlice,
    fundraisers:fundraisersSlice
  },
})