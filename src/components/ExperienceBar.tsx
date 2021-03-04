import React, { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  );

  const currentExperiencePercentage = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        {currentExperiencePercentage > 0 && (
          <div style={{ width: `${currentExperiencePercentage}%` }}></div>
        )}
        {currentExperience > 0 && (
          <span
            className={styles.currentExperience}
            style={{ left: `${currentExperiencePercentage}%` }}
          >
            {currentExperience}xp
          </span>
        )}
      </div>
      <span>{experienceToNextLevel}xp</span>
    </header>
  );
}
