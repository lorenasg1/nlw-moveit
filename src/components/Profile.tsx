import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/884768?s=460&u=6c54faf19926a9e8ce582f4dc46971a8a77e1c44&v=4"
        alt=""
      />
      <div>
        <strong>Lorena Sabino Guedes</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Nível {level}
        </p>
      </div>
    </div>
  );
}
