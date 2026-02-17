'use client'
import React, { useState, useEffect } from 'react'
import { EnvelopeIcon, DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/16/solid'
import "../../globals.css"

const Contact = () => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("ns24492449@gmail.com");
            setIsCopied(true);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => setIsCopied(false), 2000); // Hide checkmark after 2 seconds
            return () => clearTimeout(timer); // Cleanup the timer on unmount
        }
    }, [isCopied]);

    return (
        <section className="py-24 md:py-48 bg-colors" id="contact">
            <div className="space-y-8 max-w-3xl md:max-w-6xl mx-auto px-4 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl text-white font-bold">
                    Let's Build Something Great Together
                </h2>
                <p className="text-white text-base md:text-lg max-w-2xl mx-auto md:mx-0">
                    Whether you’re seeking innovative solutions or a fresh perspective, I'm here to bring expertise and passion to your team.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex items-center gap-2">
                        <EnvelopeIcon className="text-white w-5 h-5" />
                        <p className="text-white text-base md:text-lg">ns24492449@gmail.com</p>
                    </div>

                    <div
                        className="bg-[#0E101B] bg-opacity-50 p-2 rounded-md cursor-pointer"
                        onClick={handleCopy}
                    >
                        {isCopied ? (
                            <CheckIcon className="text-green-400 w-5 h-5 transition-opacity duration-500" />
                        ) : (
                            <DocumentDuplicateIcon className="text-white w-5 h-5" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
