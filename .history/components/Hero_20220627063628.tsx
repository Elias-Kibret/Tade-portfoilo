import heroImage from '../public/Img/heroImage.png' 
import Image from 'next/image'
const Hero = () => {
  return (
<main className="h-96 bg-teal-50">

    <div>
      <h1>
        
      </h1>
      <h2>

      </h2>
    </div>
    <div>
      <Image src={heroImage} className="object" width={500} height={550}/>    </div>
</main>
  )
}

export default Hero