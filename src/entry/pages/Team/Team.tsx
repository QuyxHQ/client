import { getAvatar } from '../../../utils/helper';

const Team = () => {
    const members = [
        {
            name: 'That Nerd Next Door',
            image: getAvatar(null, 'That Nerd Next Door'),
            role: 'Founder & Team Lead',
            socials: [
                {
                    icon: 'twitter',
                    url: '//twitter.com/@iamthe_nerdyDev',
                },
                {
                    icon: 'github',
                    url: '//github.com/iamthe-nerdyDev',
                },
                {
                    icon: 'linkedin',
                    url: '//www.linkedin.com/in/morifeoluwa',
                },
                {
                    icon: 'send',
                    url: '//t.me/iamthe_nerdyDev',
                },
            ],
        },
        {
            name: 'moyinthegrait',
            image: getAvatar(null, 'moyinthegrait'),
            role: 'Co-Founder & Designer',
            socials: [
                {
                    icon: 'twitter',
                    url: '//twitter.com/@moyinthegrait',
                },
                {
                    icon: 'linkedin',
                    url: '//www.linkedin.com/in/morifeoluwa',
                },
                {
                    icon: 'send',
                    url: '//t.me/moyinthegrait',
                },
            ],
        },
        {
            name: 'resoluteFatty',
            image: getAvatar(null, 'resoluteFatty'),
            role: 'Frontend Engineer',
            socials: [
                {
                    icon: 'twitter',
                    url: '//twitter.com/@resolutefatty',
                },
                {
                    icon: 'github',
                    url: '//github.com/lolodusiji',
                },
                {
                    icon: 'linkedin',
                    url: '//www.linkedin.com/in/morifeoluwa',
                },
                {
                    icon: 'send',
                    url: '//t.me/resolutefatty',
                },
            ],
        },
        {
            name: 'Ralph',
            image: getAvatar(null, 'Ralph'),
            role: 'Project manager',
            socials: [
                {
                    icon: 'twitter',
                    url: '//twitter.com/@everything_devv',
                },
                {
                    icon: 'linkedin',
                    url: '//www.linkedin.com/in/morifeoluwa',
                },
                {
                    icon: 'send',
                    url: '//t.me/resolutefatty',
                },
            ],
        },
    ];

    return (
        <main className="team">
            <div className="team-hero">
                <div className="bg"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="px-2 main">
                                <h1>The team</h1>
                                <p>The names behind Quyx</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="px-2">
                                <div className="col-12">
                                    <div className="members">
                                        <div className="row g-4 g-lg-5">
                                            {members.map((member, i) => (
                                                <div
                                                    key={`member-${i}`}
                                                    className="col-12 col-md-6 col-lg-4 col-xl-3"
                                                >
                                                    <div className="member py-2">
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="mb-4"
                                                        />
                                                        <div>
                                                            <h3 className="mb-2">{member.name}</h3>
                                                            <p className="mb-4 pb-2">
                                                                {member.role}
                                                            </p>

                                                            <div className="socials">
                                                                {member.socials.map((social, j) => (
                                                                    <a
                                                                        href={social.url}
                                                                        key={`social-${i}-${j}`}
                                                                        target="_blank"
                                                                    >
                                                                        <i
                                                                            className={`h h-${social.icon}`}
                                                                        />
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Team;
