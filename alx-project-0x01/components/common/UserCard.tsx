import React from 'react';
import { UserProps } from '../../interfaces';
import styles from './UserCard.module.css';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }: UserCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.name}>{user.name}</h2>
        <span className={styles.username}>@{user.username}</span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.email}>
            <strong>Email:</strong> {user.email}
          </p>
          <p className={styles.phone}>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className={styles.website}>
            <strong>Website:</strong> {user.website}
          </p>
        </div>

        <div className={styles.address}>
          <h3>Address</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
          <p>Location: {user.address.geo.lat}, {user.address.geo.lng}</p>
        </div>

        <div className={styles.company}>
          <h3>Company</h3>
          <p className={styles.companyName}>{user.company.name}</p>
          <p className={styles.catchPhrase}>{user.company.catchPhrase}</p>
          <p className={styles.bs}>{user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard; 