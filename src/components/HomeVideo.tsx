import GearVideo from '../assets/Gears - 56376.mp4'

function HomeVideo() {

    return (
        <div className=''>
            <video className='h-100vh w-full object-cover animate-clip-from-top-animation' autoPlay muted loop>
                <source src={GearVideo} type='video/mp4'/>
            </video>
        </div>
    )

}

export default HomeVideo