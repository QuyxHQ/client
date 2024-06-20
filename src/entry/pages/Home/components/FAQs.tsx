import { useState } from 'react';

const FAQs = () => {
    const items = [
        {
            question: 'What is Quyx?',
            answer: 'Quyx is a social identity platform built on The Open Network (TON) that allows you to manage your social credentials in one place.',
        },
        {
            question: 'How do I claim a username?',
            answer: 'Visit https://quyx.xyz/claim, start an auction for your preferred username, and secure it through the bidding process.',
        },
        {
            question: 'Can I sell my username?',
            answer: 'Yes, you can sell your username on our marketplace, and we charge a 0% marketplace fee.',
        },
        {
            question: 'What is a credential?',
            answer: 'A credential is a verifiable digital identity that you can create and manage through Quyx.',
        },
        {
            question: 'What can I do with the Telegram mini app?',
            answer: 'The Telegram mini app (@QuyxBot) lets you set up your account, create and manage credentials, and control site access to your credentials.',
        },
        {
            question: 'How do I manage my credentials?',
            answer: 'You can create, revoke, and manage your credentials using our Telegram mini app.',
        },
        {
            question: 'Is Quyx secure?',
            answer: 'Yes, Quyx leverages blockchain technology to ensure the security and privacy of your digital identity.',
        },
        {
            question: 'Is there a fee for using Quyx?',
            answer: 'We charge no marketplace fees for buying or selling usernames.',
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState<number>();

    return (
        <div className="faqs" id="faqs">
            <div className="header">
                <h2>Frequently Asked Questions</h2>
            </div>

            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={`faq-${index}`}>
                        <div
                            onClick={() =>
                                setSelectedIndex(selectedIndex == index ? undefined : index)
                            }
                        >
                            <h3>{item.question}</h3>
                            <i
                                className={`h h-chevron-${
                                    selectedIndex == index ? 'up' : 'bottom'
                                }`}
                            />
                        </div>

                        <p className={`${selectedIndex == index ? 'd-block' : 'd-none'}`}>
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
