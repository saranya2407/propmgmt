import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Search from './Search';
import './Residential.css';

function Residential({ properties }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProperties = properties.filter(property =>
        property.owner.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h2>Residential Properties</h2>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="propertyList">
                {filteredProperties.map(property => (
                    <div key={property.id} className="propertyCard">
                        <div className="propertyDetails">
                            <h3>{property.name}</h3>
                            <h3>{property.owner}</h3>
                            <p>{property.address}</p>
                            <p>{property.description}</p>
                        </div>
                        <EditIcon className="editIcon" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Residential;