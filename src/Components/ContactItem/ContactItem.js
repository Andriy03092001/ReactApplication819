import React, { Component, Fragment } from "react";
import "./ContactItem.css";

class ContactItem extends Component {

    state = {
        name: "Andrii Riabii",
        phone: "+380 (05) 41 66 765",
        email: "cuanid236316@gmail.com",
        address: "Soborna 16",
        gender: "men",
        avatar: 3,
        isFavarite: true
    }


    setRandomImage() {
        const randomAvatar = Math.floor(Math.random() * Math.floor(99));

        this.setState({
            avatar: randomAvatar
        });

    }

    render() {
        const { name, email, avatar, address, phone, gender } = this.state;
        const URL_image = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

        return (
            <Fragment>
                <div class="card">
                    <img className="card-img-top" src={URL_image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{address}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-info" onClick={this.setRandomImage.bind(this)}>RANDOM IMAGE</button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default ContactItem;