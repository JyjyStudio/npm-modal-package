import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { employeesSlice } from '../../features/employees/employeesSlice'
import storage from 'redux-persist/lib/storage'

// creation et configuration du store
const employeesPersistConfig = {
	key: 'employees',
	storage,
	version: 1,
}

const rootReducer = combineReducers({
	employees: persistReducer(employeesPersistConfig, employeesSlice.reducer),
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
