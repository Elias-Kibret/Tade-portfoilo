import Image from 'next/image'
import profileImage from '../public/Img/profileImage.png'
const About = () => {
  return (
    <section>
        <div>
        <Image  src={profileImage} width={200} height={200} alt="Tadessa G.wakjira"/>
        </div>
        <div>

        </div>
    </section>
  )
}

export default About