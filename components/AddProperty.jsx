import React, { useState } from 'react';
import './AddProperty.css';

function AddProperty({ onAddCommercial, onAddResidential }) {
    const [property, setProperty] = useState({
        type: 'commercial',
        name: '',
        owner: '',
        address: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty({
            ...property,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (property.type === 'commercial') {
            onAddCommercial(property);
        } else {
            onAddResidential(property);
        }
        setProperty({
            type: 'commercial',
            name: '',
            owner: '',
            address: '',
            description: ''
        });
    };

    return (
        <div className="add-property-container">
            <h2>Add Property</h2>
            <form onSubmit={handleSubmit} className="add-property-form">
                <label>
                    Property Type:
                    <select name="type" value={property.type} onChange={handleChange}>
                        <option value="commercial">Commercial</option>
                        <option value="residential">Residential</option>
                    </select>
                </label>
                <label>
                    Property Name:
                    <input
                        type="text"
                        name="name"
                        value={property.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Owner Name:
                    <input
                        type="text"
                        name="owner"
                        value={property.owner}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={property.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={property.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className="submitButton">Add Property</button>
            </form>
        </div>
    );
}

export default AddProperty;