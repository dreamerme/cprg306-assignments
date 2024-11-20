"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Shopping List App</h1>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.displayName}</p>
            <p>
              <a href="/week-10/shopping-list">Shopping List</a>
            </p>
            <button onClick={logout}>Sign out</button>
          </div>
        ) : (
          <button onClick={login}>Sign in with GitHub</button>
        )}
      </div>
    </main>
  );
}