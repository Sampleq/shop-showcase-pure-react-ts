import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>Shop Showcase</h1>
      <ul>
        <li>
          <a
            href='https://github.com/Sampleq/shop-showcase-pure-react-ts'
            target='_blank'
          >
            Repo
          </a>
        </li>
      </ul>
    </header>
  );
};
