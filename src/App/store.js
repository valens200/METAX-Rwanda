import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/count/counterSlice'
const store = configureStore({
  reducer: {
    counterr: counterReducer,
  },
})
export default store
