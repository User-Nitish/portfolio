import React from 'react'
import AnimatedBtn from '../project/AnimatedBtn'

const Certificates = () => {
    const certificates = [
        {
            title: "Full Stack (MERN) with Gen AI",
            issuer: "W3Grads",
            id: "FLAMES25MERN1898",
            link: "https://theangaarbatch.in/verify-my-certificate/",
            date: "Jul'25"
        },
        {
            title: "Skill-a-thon",
            issuer: "MongoDB & ICT Academy",
            link: "https://www.credly.com/users/nitish-kumar-singh.64ee3ba5/badges#credly",
            date: "Jun'25"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730022504244079.pdf",
            date: "Apr'25"
        },
        {
            title: "Data Structure & Algorithm Using C++",
            issuer: "CipherSchools",
            id: "CS2024-10203",
            link: "https://www.cipherschools.com/",
            date: "Nov'24"
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            link: "https://www.freecodecamp.org/certification/Nitish111/responsive-web-design",
            date: "" // No date provided
        }
    ];

    return (
        <section className='max-w-4xl mx-auto py-24 px-4'>
            <h2 className="text-4xl text-white mb-12 text-center font-medium">CERTIFICATES</h2>

            <div className='space-y-8'>
                {certificates.map((cert, index) => (
                    <div key={index} className='flex flex-col md:flex-row md:items-center md:justify-between bg-gray-900/20 p-6 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 border border-gray-600/30 hover:border-brand/50'>
                        <div className='space-y-2'>
                            <h3 className='text-xl text-white font-bold'>{cert.title}</h3>
                            <p className='text-gray-300 text-sm'>by {cert.issuer}</p>
                            {cert.id && <p className='text-gray-400 text-sm'>ID: {cert.id}</p>}
                            {cert.date && <p className='text-gray-300 text-sm'>{cert.date}</p>}
                        </div>

                        <div className='mt-4 md:mt-0'>
                            <AnimatedBtn href={cert.link} innerTxt="View Certificate" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;