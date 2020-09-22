import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ DataContact }) => {

    var contact;
    if (DataContact != null) {
        contact = DataContact.map(item => {
            return (
                <ContactItem
                    name={item.name}
                    phone={item.phone}
                    email={item.email}
                    address={item.address}
                    gender={item.gender}
                    avatar={item.avatar}
                    isFavarite={item.isFavarite}>
                </ContactItem>
            );
        });
    }

    return (
        <Fragment>
            <div className="card-deck">
                {contact}
            </div>
        </Fragment>
    )

}

export default ContactList;