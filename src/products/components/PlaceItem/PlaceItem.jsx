import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Card from "../../../shared/components/UIElements/Card";
import Button from '../../../shared/components/FormElements/Button'
import Modal from "../../../shared/components/UIElements/Modal/Modal";
import './PlaceItem.css'

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false)

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.title}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <h2>The Map</h2>
                </div>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <Link to={`/places/${props.id}`}>
                        <div className="place-item__image">
                            <img src={props.image} alt={props.title} />
                        </div>
                        <div className="place-item__info">
                            <h2>{props.title}</h2>
                            <h1>${props.price}</h1>
                            <p>{props.description}</p>
                        </div>
                        <div className="place-item__actions">
                        </div>
                    </Link>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem