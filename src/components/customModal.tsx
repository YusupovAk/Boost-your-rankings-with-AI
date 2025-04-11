import React from 'react';
import "../designs/Modal.css"

const CustomModal: React.FC = () => {
    return (
        <div className="modal-backdrop">
            <div className='modal'>
                <h2>
                    modal
                </h2>
            </div>
        </div>
    );
};

export default CustomModal;