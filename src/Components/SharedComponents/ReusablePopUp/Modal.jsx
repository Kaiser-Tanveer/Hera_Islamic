// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, title, children, confirmText = "Confirm", cancelText = "Cancel" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <div className="mb-6">
                    {children}
                </div>
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300">
                        {cancelText}
                    </button>
                    <button onClick={onConfirm} className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
