import { useState } from 'react';
import SubscribeArrow from '../../../svgs/SubscribeArrow';
import SubscribeArrowMd from '../../../svgs/SubscribeArrowMd';
import useApi from '../../../hooks/useApi';

const Subscribe = () => {
    const [email, setEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function subscribe(e: any) {
        e.preventDefault();
        if (isLoading) return;
        setIsLoading(true);

        const { misc } = await useApi();
        const response = await misc.subscribe(email);
        if (response) setEmail('');

        setIsLoading(false);
    }

    return (
        <div className="subscribe" id="subscribe">
            <div className="header text-center">
                <h2>Stay updated with Quyx</h2>
                <p>
                    Stay updated on the latest Quyx features and developments. Subscribe to our
                    newsletter!
                </p>
            </div>

            <div className="item">
                <form
                    action="#"
                    onSubmit={subscribe}
                    className="d-none d-md-flex align-items-center justify-content-center position-relative"
                >
                    <input
                        className="position-absolute"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your email here..."
                        autoComplete="off"
                    />

                    <SubscribeArrowMd />

                    <button className="position-absolute" disabled={isLoading}>
                        {isLoading ? (
                            <div className="px-4">
                                <span
                                    className="loader-span-sm"
                                    style={{ width: '16px', height: '16px' }}
                                />
                            </div>
                        ) : (
                            'Subscribe'
                        )}
                    </button>
                </form>

                <form
                    action="#"
                    onSubmit={subscribe}
                    className="d-flex align-items-center justify-content-center d-md-none position-relative"
                >
                    <input
                        className="position-absolute"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your email here..."
                        autoComplete="off"
                    />

                    <SubscribeArrow size={150} />

                    <button className="position-absolute" disabled={isLoading}>
                        {isLoading ? (
                            <div className="px-4">
                                <span
                                    className="loader-span-sm"
                                    style={{ width: '16px', height: '16px' }}
                                />
                            </div>
                        ) : (
                            'Subscribe'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
