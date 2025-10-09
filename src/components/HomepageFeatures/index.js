import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sacred Ceremonies',
    icon: '🔥',
    description: (
      <>
        Transform your healing journey through meaningful blockchain ceremonies.
        Burn gratitude tokens while setting intentions for recovery, growth, and spiritual connection.
      </>
    ),
  },
  {
    title: 'Soulbound Achievements',
    icon: '🏆',
    description: (
      <>
        Earn non-transferable NFTs that represent your personal growth milestones.
        Your achievements are permanently bound to your identity, creating an immutable record of progress.
      </>
    ),
  },
  {
    title: 'Community Governance',
    icon: '🗳️',
    description: (
      <>
        Participate in holacratic DAO governance where every voice matters.
        Help shape the future of sacred technology through transparent, community-driven decisions.
      </>
    ),
  },
  {
    title: 'Secure Recovery',
    icon: '🔐',
    description: (
      <>
        Multi-party computation ensures your account can be recovered without trusting
        a central authority. Your healing journey remains secure and accessible.
      </>
    ),
  },
  {
    title: 'Gratitude Economy',
    icon: '💎',
    description: (
      <>
        Earn tokens through positive actions and community participation.
        Our economy rewards healing, growth, and supporting others on their journey.
      </>
    ),
  },
  {
    title: 'Open Source',
    icon: '🌐',
    description: (
      <>
        Built transparently with open-source principles. Every line of code,
        every decision, and every token allocation is visible to the community.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={clsx('card', styles.featureCard)}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Why Choose Ethereal Offering?
          </Heading>
          <p className={styles.featuresSubtitle}>
            Discover the unique features that make our platform a sacred space for healing and growth.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
