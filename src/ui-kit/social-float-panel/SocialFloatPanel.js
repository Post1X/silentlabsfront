import React from 'react';
import styles from './SocialFloatPanel.module.scss';
import { ReactComponent as WhatsappIcon } from '../../assets/icons/social-media-icons/whatsapp.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/social-media-icons/telegram.svg';

const SocialFloatPanel = () => (
  <div className={styles.floatPanel}>
    <a
      href="https://wa.me/37493151426"
      target="_blank"
      rel="noopener noreferrer"
      title="Написать в WhatsApp"
      className={styles.whatsapp}
    >
      <WhatsappIcon className={styles.icon} />
    </a>
    <a
      href="https://t.me/zhanettttta"
      target="_blank"
      rel="noopener noreferrer"
      title="Написать в Telegram"
      className={styles.telegram}
    >
      <TelegramIcon className={styles.icon} />
    </a>
  </div>
);

export default SocialFloatPanel; 