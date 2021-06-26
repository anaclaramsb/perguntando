import illustrationImg from '../assets/images/tecno.png';
import logoImg from '../assets/images/logo.png';
import googleIconImg from '../assets/images/google-icon.svg';
//necessário usar import com REACT: webpack (snowpack, vite,...)

import { useHistory } from 'react-router';
import { Button } from '../components/Button';

import '../styles/auth.scss';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function Home() {
    const history = useHistory();
    const { user, singInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        console.log(user);
        if (!user) {
            await singInWithGoogle();
        }
        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('A sala não existe!');
            return;
        }

        if (roomRef.val().endedAt) {
            alert('A sala já foi fechada');
            return;
        }
        history.push(`rooms/${roomCode}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Facilitando a interação entre conversas em tempo real.</strong>
                <p>Receba e mande perguntas para sua audiência ou para a pessoa que você está assistindo, compartilhando conhecimento ao vivo.</p>
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
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
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