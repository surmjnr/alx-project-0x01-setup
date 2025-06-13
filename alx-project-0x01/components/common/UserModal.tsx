import React from 'react';
import { UserModalProps } from '../../src/interfaces';
import styles from './UserModal.module.css';

const UserModal: React.FC<UserModalProps> = ({ user, isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{user.name}</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.userInfo}>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
            </div>

            <div className={styles.addressInfo}>
              <h3>Address</h3>
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
              <p>Location: {user.address.geo.lat}, {user.address.geo.lng}</p>
            </div>

            <div className={styles.companyInfo}>
              <h3>Company</h3>
              <p><strong>Name:</strong> {user.company.name}</p>
              <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
              <p><strong>Business:</strong> {user.company.bs}</p>
            </div>

            <div className={styles.modalFooter}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal; 