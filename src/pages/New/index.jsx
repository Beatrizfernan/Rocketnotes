import {Link} from 'react-router-dom';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placehold="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://www.rocketseat.com.br/" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
          <div className='tags'>
            <NoteItem value="react" />
            <NoteItem isNew placeholder="Novo link" />
            </div>
          </Section>

          <Button title="SALVAR"/>
        </Form>
      </main>
    </Container>
  );
}