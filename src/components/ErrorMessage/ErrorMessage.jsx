import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.alert}>Unknown error. Please reload</p>
  );
}