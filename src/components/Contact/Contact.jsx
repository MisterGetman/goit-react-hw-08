import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { ImUser, ImPhone } from "react-icons/im";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <div className={css.textWrapper}>
          <ImUser className={css.icon} size="24" />
          <p>{contact.name}</p>
        </div>
        <div className={css.textWrapper}>
          <ImPhone className={css.icon} size="24" />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.deleteContactBtn}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
