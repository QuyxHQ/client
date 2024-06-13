import { Link } from 'react-router-dom';

const AnchorLink = (props: AnchorLinkProps) => {
    function click() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (typeof props.handleClick != 'undefined') return props.handleClick();
    }

    return (
        <Link
            to={props.to}
            className={props.className}
            style={props.style}
            onClick={click}
            title={props.title}
            target={props.target}
        >
            {props.children}
        </Link>
    );
};

export default AnchorLink;
