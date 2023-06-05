import { getAuth } from "@firebase/auth"
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Services
export const auth = getAuth(app)
export const firestore = getFirestore(app)

export default app