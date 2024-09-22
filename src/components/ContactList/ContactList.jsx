import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useEffect } from "react";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact userData={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;