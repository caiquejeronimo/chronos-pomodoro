import { TimerIcon } from 'lucide-react';
import './App.scss';
import { Heading } from './styles/components/Heading';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo
        <button type='button'>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam a
        inventore consectetur tenetur perferendis quis consequuntur harum
        voluptas mollitia, nesciunt minus dicta minima aspernatur iusto eum
        nobis odio sequi!
      </p>
    </>
  );
}
