import { useEffect, useState } from 'react';
import { createAsyncLocalStorage } from '../../../utils/async.storage';
import useForm from '../../hooks/useForm';
import { useNavigate, useParams } from 'react-router-dom';
import { checkUsername } from '../../../utils/helper';
import useModal from '../../hooks/useModal';

const ClaimUsernameModal = ({ username }: { username: string }) => {
    return <div className="p-4">Claim username bro: {username}</div>;
};

const ClaimUsername = () => {
    const { username } = useParams();
    const [error, setError] = useState<string>();
    const [history, setHistory] = useState<string[]>([]);
    const { openModal, setModalBody, closeModal } = useModal();

    const navigate = useNavigate();
    const storage = createAsyncLocalStorage('history');

    const { onChange, onSubmit, values } = useForm(submit, { username: username || '' });

    useEffect(() => {
        if (username) {
            setModalBody(<ClaimUsernameModal username={username} />);
            openModal(false);
        } else {
            closeModal();
        }
    }, [username]);

    useEffect(() => {
        if (values.username.length == 0) return;

        const err = checkUsername(values.username);
        if (err) return setError(err);

        setError(undefined);
    }, [values]);

    useEffect(() => {
        getHistory();
    }, []);

    async function getHistory() {
        const data = await storage.getItem('storage');
        if (!data) return setHistory([]);

        return setHistory((JSON.parse(data) as string[]).reverse());
    }

    async function addToHistory(value: string) {
        const data = await storage.getItem('storage');
        if (data) {
            const values = JSON.parse(data) as string[];
            if (!values.includes(value)) {
                values.push(value);
                setHistory((prev) => [value, ...prev]);
            }

            return await storage.setItem('storage', JSON.stringify(values));
        }

        await storage.setItem('storage', JSON.stringify([value]));
    }

    async function deleteHistory(index: number) {
        const data = await storage.getItem('storage');
        if (!data) return;

        const values = JSON.parse(data) as string[];
        values.splice(index, 1);

        await storage.setItem('storage', JSON.stringify(values));
        await getHistory();
    }

    async function submit() {
        let { username } = values;
        username = username.toLowerCase();

        const err = checkUsername(username);
        if (err) return setError(err);

        setError(undefined);
        await addToHistory(username);

        navigate(`/claim/${username}`);
    }

    return (
        <main className="claim">
            <div className="bg"></div>

            <div className="info d-flex flex-column align-items-center justify-content-center mb-5">
                <h1>Claim username</h1>
                <p>Gives you access to Quyx's decentralized identity solution</p>
            </div>

            <form action="#" onSubmit={onSubmit}>
                <div className="position-relative">
                    <i className="h h-lens position-absolute" />

                    <input
                        autoComplete="off"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username e.g satoshi"
                        onChange={onChange}
                        value={values.username}
                        style={error ? { border: '1px solid crimson' } : {}}
                    />
                </div>

                {error ? <p className="pt-4 pb-2">{error}</p> : undefined}
            </form>

            {history.length > 0 ? (
                <div className="history mt-4">
                    {history.map((item, i) => (
                        <div key={`history-${i}`}>
                            <p onClick={() => navigate(`/claim/${item}`)}>
                                <i className="h h-clock-7" />
                                <span>{item}</span>
                            </p>

                            <button onClick={() => deleteHistory(history.length - 1 - i)}>
                                <i className="h h-x" />
                            </button>
                        </div>
                    ))}
                </div>
            ) : null}
        </main>
    );
};

export default ClaimUsername;
