import { app } from "./firebase.confing";
import { getAuth } from "firebase/auth";

export const auth = getAuth(app)