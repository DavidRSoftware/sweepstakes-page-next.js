import Image from 'next/image';
import fire from "../public/images/fire.svg";

export default function Header() {
    return (
        <header className="header">
            <section className="d-flex pt-4 container">
                <Image src={fire} alt="" />
                <div className="logo-text align-self-end">Sweepstakes Delight</div>
            </section>
        </header>
    );
}