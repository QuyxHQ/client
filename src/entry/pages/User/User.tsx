import { Items, UserInfo, UserTop } from './components';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Address } from 'ton-core';
import useApi from '../../hooks/useApi';

const User = () => {
    const { username } = useParams();

    const { isPending, data: user } = useQuery({
        queryKey: [`${username}-data`],
        queryFn: async function () {
            const { user } = await useApi();
            return await user.getUser(username!);
        },
    });

    return (
        <section>
            {isPending ? (
                'loading'
            ) : user == undefined ? (
                'error bro'
            ) : user == null ? (
                'not found'
            ) : (
                <>
                    <UserTop user={user} />
                    <UserInfo user={user} />
                    <Items address={Address.parse(user.address)} />
                </>
            )}
        </section>
    );
};

export default User;
