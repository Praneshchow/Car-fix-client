import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className='w-3/4 rounded-lg shadow-2xl' />
                    <img src={parts} className='w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl' />
                </div>
                <div className='lg:w-1/2 space-y-3 p-4'>
                <h1 className='text-3xl text-orange-500 font-bold'>About Us</h1>
                    <h3 className="text-5xl font-bold">We are qualified & of experience in this field</h3>
                    <p className="py-4">With over 15 years of experience, our ASE Certified Master Technicians specialize in engine repair, transmission services, brake systems, and electrical diagnostics. </p>
                    <p className="py-4">Skilled in both domestic and foreign vehicles, they ensure top-quality repairs and maintenance, providing exceptional service and customer satisfaction.</p>
                    
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;