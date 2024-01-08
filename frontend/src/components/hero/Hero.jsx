import DocAnimation from "../animation/DocAnimation"
import vdo from '../../assets/images/vdo.mp4'

const Hero = () => {
  return (
    <div className="relative">
      <video className="relative top-0 left-0 w-full h-full object-cover z-0 " src={vdo} autoPlay muted loop />
      <DocAnimation/>
    </div>
  )
}

export default Hero