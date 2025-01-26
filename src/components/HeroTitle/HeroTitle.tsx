import { TextAnimate } from '../TextAnimate/TextAnimate'
import styles from '@/pages/styles/index.module.scss'

export const HeroTitle = () => {
  return (
    <div className={styles.hero__title_section}>
      <TextAnimate
        className={styles.hero__title_section__role}
        animation="blurInUp"
        as={'span'}
        by="character"
      >
        FRONTEND DEVELOPER
      </TextAnimate>
      <TextAnimate
        className={styles.hero__title_section__title}
        animation="blurInUp"
        as={'h1'}
        by="character"
        delay={3000}
      >
        ISMONOV MUHAMAD
      </TextAnimate>
    </div>
  )
}
