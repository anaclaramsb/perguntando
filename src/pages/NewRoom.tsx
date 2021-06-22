import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
//necessário usar import com REACT: webpack (snowpack, vite,...)

import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    {/* Uso do className em vez do class no React */}
                    <img src={logoImg} alt="Logo da aplicação" />
                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>

    )
}