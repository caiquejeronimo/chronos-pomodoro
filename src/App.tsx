import './App.scss';

import { Container } from './components/Container/index';
import { Logo } from './components/Logo/index';
import { Menu } from './components/Menu/index';
import { CountDown } from './components/CountDown/index';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
    </>
  );
}
