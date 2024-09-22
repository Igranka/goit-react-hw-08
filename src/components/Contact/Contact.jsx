import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ userData: { name, number, id }}) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
    return (
        <div className={css.contact}>
            <div className={css.label}>
                <h3>{name}</h3>
                <p>{number}</p>
            </div>
            <button className={css.deleteBtn}  onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Contact;