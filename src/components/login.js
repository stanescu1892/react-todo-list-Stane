import { Button } from "react-bootstrap";

import {
  auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "../utils/firebase";

function Login({ onAuthSucces, isLoggedIn, onSIgnOut }) {
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      onAuthSucces(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onSIgnOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!isLoggedIn && (
        <Button variant="secondary" className="m-2" onClick={googleLogin}>
          Sign In with Google
        </Button>
      )}
      {isLoggedIn && (
        <Button variant="secondary" className="m-2" onClick={handleLogout}>
          LogOut
        </Button>
      )}
    </div>
  );
}

export default Login;
