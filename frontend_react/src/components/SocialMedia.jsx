import React from 'react';
import { BsInstagram, BsLinkedin, BsTwitch, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a target='_blank' href="https://www.linkedin.com/in/patsferrer/">
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a target='_blank' href="https://www.instagram.com/patsferrer/">
                <div>
                    <BsInstagram />
                </div>
            </a>
            <a target='_blank' href="https://github.com/patsferrer">
                <div>
                    <BsGithub />
                </div>
            </a>
            <a target='_blank' href="https://www.twitch.tv/patsferrer">
                <div>
                    <BsTwitch />
                </div>
            </a>

        </div>
    )
}

export default SocialMedia