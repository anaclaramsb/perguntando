import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
//necessário usar import com REACT: webpack (snowpack, vite,...)

import { useHistory } from 'react-router';
import { Button } from '../components/Button';

import '../styles/auth.scss';

import { useAuth } from '../hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { user, singInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        console.log(user);
        if (!user) {
            await singInWithGoogle();
        }
        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Toda pergunta tem uma resposta.</strong>
                <p>Tire as dúvidas da sua audiência em tempo real, aprenda e compartilhe conhecimento
                    com outras pessoas</p>
            </aside>
            <main>
                <div className="main-content">
                    {/* Uso do className em vez do class no React */}
                    <img src={logoImg} alt="Logo da aplicação" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>

    )
}