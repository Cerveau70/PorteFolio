import React, { useState, useRef, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

const PhotoSection: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target?.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <motion.section 
            className="flex flex-col items-center justify-center my-24"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            <div className="relative group w-48 h-48 md:w-64 md:h-64">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                <div 
                    className="relative w-full h-full rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center overflow-hidden border-2 border-slate-700"
                >
                    {image ? (
                        <img src={image} alt="Portrait d'Alloma" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-slate-500 text-sm text-center p-4">Photo de profil</span>
                    )}
                </div>
            </div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
            />
            <button
                onClick={handleButtonClick}
                className="mt-6 px-4 py-2 text-sm font-semibold rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors"
            >
                Changer la photo
            </button>
        </motion.section>
    );
};

export default PhotoSection;
