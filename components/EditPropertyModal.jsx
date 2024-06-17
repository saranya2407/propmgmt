import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './EditPropertyModal.css';

Modal.setAppElement('#root');

function EditPropertyModal({ isOpen, onRequestClose, onEditProperty, property }) {
    const [editedProperty, setEditedProperty] = useState(property);

    useEffect(() => {
        setEditedProperty(property);
    }, [property]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProperty({
            ...editedProperty,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEditProperty(editedProperty);
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="Modal"
            overlayClassName="Overlay"
        >
            <h2>Edit Property</h2>
            <form onSubmit={handleSubmit} className="propertyForm">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={editedProperty.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={editedProperty.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={editedProperty.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Status:
                    <input
                        type="text"
                        name="address"
                        value={editedProperty.status}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className="submitButton">Save Changes</button>
            </form>
            <button onClick={onRequestClose} className="closeButton">Close</button>
        </Modal>
    );
}

export default EditPropertyModal;