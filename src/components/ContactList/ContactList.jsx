import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const filterText = useSelector((state) => state.filters.name);

  return (
    <ul className={css.contactList}>
      {filteredContacts
        .filter((e) => e.name.toLowerCase().includes(filterText.toLowerCase()))
        .map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
