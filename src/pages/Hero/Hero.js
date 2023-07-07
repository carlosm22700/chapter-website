import heroImg from '../../assets/images/hero.jpg'
import { HeroButton } from '../../components/HeroButton'
import './HeroStyles.css'

export const Hero = () => {
    return (
        <div className="hero">
            <img alt='HeroImg' src={heroImg}/>
            <div className='hero-text'>
                <h1>La Unidad Latina, Lambda Uspilon Lambda Fraternity, Incorporated: Beta Psi Chapter</h1>
                {/* <h2>La Unidad Latina, Lambda Upislon Lambda Fraternity, Incorporated</h2> */}
                <h2>The University of California, Los Angeles</h2>
                <p><strong>Est. 2021</strong></p>
                <HeroButton />
            </div>
        </div>
    )
}