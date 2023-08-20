import { FC, useState } from "react";
import { getUserByUsernameThunk } from "../../store/user/thunks";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import "./styles.css";

const SearchForm: FC = () => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getUserByUsernameThunk(username));
    setUsername("");
  };

  return (
    <form onSubmit={onSubmit} className="search_form">
      <input
        className="search_input"
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="search_btn" type="submit" disabled={!username}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
