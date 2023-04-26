import "./App.css";
import { useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { useAppDistpatch } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { useEffect } from "react";

function App() {
  const { count } = useAppSelector((state) => state.userReducer);
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const { increment } = userSlice.actions;
  const distpatch = useAppDistpatch();
  console.log(error, "--error");
  console.log(isLoading, "--isLoading");

  useEffect(() => {
    distpatch(fetchUsers());
  }, []);
  return (
    <div className="App">
      {isLoading && <h1>LOADING</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 5)}
      {!isLoading ? (
        <div>
          <h1>{count}</h1>
          <button onClick={() => distpatch(increment(1))}>click</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
