import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/auth/selectors";

export default function LoginPage() {
  const isError = useSelector(selectError);
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
      {isError && <ErrorMessage />}
    </div>
  );
}