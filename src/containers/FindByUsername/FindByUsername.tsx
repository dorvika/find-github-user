import { FC } from "react";
import SearchForm from "../../components/SearchForm";
import UserCard from "../../components/UserCard/UserCard";
import Loader from "../../shared/Loader/Loader";
import { useAppSelector } from "../../hooks/useAppSelector";
import "./styles.css";

const FindByUsername: FC = () => {
  const { isLoading, error } = useAppSelector((store) => store.user);

  return (
    <section className="section">
      <SearchForm />
      {isLoading ? <Loader /> : <UserCard />}
      {error && "Oops, an error occured, try again later"}
    </section>
  );
};

export default FindByUsername;
