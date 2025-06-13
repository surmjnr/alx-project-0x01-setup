import React, { useCallback } from 'react';
import { UserProps } from '../../interfaces';
import UserCard from '../../components/common/UserCard';
import styles from './Users.module.css';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }: UsersPageProps): JSX.Element => {
  // Handle user click with proper typing
  const handleUserClick = useCallback((user: UserProps): void => {
    console.log('User clicked:', user.name);
    // Add your click handling logic here
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.grid}>
        {users.map((user: UserProps) => (
          <UserCard 
            key={user.id} 
            user={user}
            onUserClick={handleUserClick}
            className={styles.userCard}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users
    }
  };
}

export default Users; 