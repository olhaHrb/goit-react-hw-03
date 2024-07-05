import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className={css.card} key={contact.id}>
            <ul>
              <li className={css.data}>
                <FaUser /> {contact.name}
              </li>
              <li className={css.data}>
                <FaPhone /> {contact.number}
              </li>
            </ul>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
