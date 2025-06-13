import React from 'react';
import { UserProps } from '../../interfaces';
import UserCard from '../../components/common/UserCard';
import styles from './Users.module.css';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }: UsersPageProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.grid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
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