import heroImg from '../assets/images/hero.jpg'
import './HeroStyles.css'

export const Hero = () => {
    return (
        <div className="hero">
            <img alt='HeroImg' src={heroImg}/>
            <div className='hero-text'>
                <h1>Beta Psi Chapter</h1>
                <p><strong>of La Unidad Latina, Lambda Upislon Lambda Fraternity, Incorporated</strong></p>
                <a href='/'>Learn More</a>
            </div>
        </div>
    )
}