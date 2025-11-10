import './App.scss';

import { Container } from './components/Container/index';
import { Heading } from './components/Heading/index';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
