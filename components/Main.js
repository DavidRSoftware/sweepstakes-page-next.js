import Image from 'next/image';
import bills from '../public/images/dollars-falling-with-background.png';

export default function Main() {
    return (
        <main>
            <div className='main-one'>
                <div className='container-sm'>
                    <div className='row'>
                        <section className='col-md-5 d-none d-md-block'>
                            <div className="d-flex flex-column main-section-left mt-5">
                                <div className="win-big-text align-self-center">Win Big!</div>
                                <Image src={bills} alt="" className='img-fluid' />

                                <div className="details-text mt-5 d-none d-lg-block">
                                    Many different sweepstakes and games brought right to you!
                                </div>
                                <div className="details-text d-none d-lg-block">
                                    You can enter to win as many sweepstakes as you like.
                                </div>
                            </div>
                        </section>
                        <div className='col-sm-9 offset-sm-2 col-md-6 offset-md-1 col-lg-5 offset-lg-1'>
                            <form className='form-background form-text-styles p-4 mt-5' autoComplete="off">

                                <div className="h2 mb-3">Fill out this form for your chance to win!</div>

                                <div className="mb-3">
                                    <label className='form-label' htmlFor='firstName'>First Name</label>
                                    <input id="firstName" type="text" placeholder="" autoComplete="new-password" className='form-control' />
                                </div>

                                <div className="mb-4">
                                    <label className='form-label' htmlFor='email'>Email</label>
                                    <input id='email' type="email" placeholder="" autoComplete="new-password" className='form-control' />
                                </div>

                                <div className="mb-4">
                                    <label className='form-label' htmlFor='phone'>Phone</label>
                                    <input id="phone" type="text" placeholder="" autoComplete="new-password" className='form-control' />
                                </div>

                                <div className="mb-4">
                                    <label className='form-label' htmlFor='zipCode'>Zip Code</label>
                                    <input id="zipCode" type="text" placeholder="" autoComplete="new-password" className='form-control' />
                                </div>

                                <div className="d-grid">
                                    <button className="press press-round press-lg btn-orange" type="button">Submit!</button>
                                </div>
                                <div className="mt-4 small-text">By clicking the “Submit” button, you certify that you have provided your legal name and your own phone number, you agree to the Terms and Conditions and Privacy Policy and authorize Sweeps Junkie and its partners to contact you by email or at the phone number you entered using automated technology including recurring auto-dialers, pre-recorded messages, and text messages, even if your phone is a mobile number or is currently listed on any state, federal, or corporate “Do Not Call” list. You understand that your telephone company may impose charges on you for these contacts, and that you can revoke this consent at any time. For SMS campaigns Text STOP to cancel and HELP for help. Message and data rates may apply. You are not required to give your consent as a condition of service. By clicking the “Submit” button and submitting this form, I affirm that I have read and agree to this Site’s Terms and Conditions (including the arbitration provision and the E-SIGN consent) and Privacy Policy.</div>

                            </form>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-9 offset-md-2'>
                            <section className='details-text d-lg-none mt-4'>
                                <p>
                                    Many different sweepstakes and games brought right to you!
                                </p>
                                <p>
                                    You can enter to win as many sweepstakes as you like.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-two">

            </div>
        </main>
    );
}