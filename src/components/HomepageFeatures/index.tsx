import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Einfach und verständlich',
    Svg: require('@site/static/img/landingpage/Icon-Collage_stabile-Loesungen_DE-1.svg').default,
    description: (
      <>
        Die STACKIT-Lernplattform wurde entwickelt, um Cloud-Konzepte einfach 
        und verständlich zu erklären – ideal für Einsteiger und Fortgeschrittene.
      </>
    ),
  },
  {
    title: 'Fokus auf relevante Themen',
    Svg: require('@site/static/img/landingpage/Icon-Collage_einfache-Implemetierung.svg').default,
    description: (
      <>
        Lernen Sie, wie moderne Technologien wie Künstliche Intelligenz, 
        Machine Learning und Containerisierung in der Cloud umgesetzt werden können.
        Alle Inhalte sind auf die Besonderheiten des deutschen Marktes zugeschnitten.
      </>
    ),
  },
  {
    title: 'STACKIT-Expertise nutzen',
    Svg: require('@site/static/img/landingpage/Icon-Collage_EU-Sicherheit.svg').default,
    description: (
      <>
        Profitieren Sie von STACKITs Expertise in Cloud-Lösungen und erhalten 
        Sie Einblicke in bewährte Ansätze für datenschutzkonforme und skalierbare 
        IT-Infrastrukturen.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
