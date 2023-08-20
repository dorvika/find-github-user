import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import "./styles.css";

const UserCard: FC = () => {
  const { user } = useAppSelector((store) => store.user);

  if (!user) return <h3 className="error_text">No user found :(</h3>;

  return (
    <div className="user_card">
      <img
        width={150}
        height={150}
        className="user_img"
        src={user.avatar_url}
        alt={user.name}
      />
      <div className="user_details">
        {user.name && <h2 className="user_name">{user.name}</h2>}
        <h3 className="user_login">@{user.login}</h3>
        {user.bio && <p className="user_bio">{user.bio}</p>}
        <a target="_blank" href={user?.html_url} className="user_link">
          GitHub Link
        </a>
      </div>
    </div>
  );
};

export default UserCard;
