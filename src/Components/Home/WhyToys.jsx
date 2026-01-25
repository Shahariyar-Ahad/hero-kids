import React from 'react';
import { FaBrain, FaShapes, FaChild, FaPalette, FaRocket, FaHeart } from 'react-icons/fa';

const WhyToys = () => {
    const features = [
        {
            id: 1,
            icon: <FaChild className="text-4xl text-blue-500" />,
            title: "Motor Skills",
            desc: "Enhance fine and gross motor skills through active play with cars, tricycles, and blocks."
        },
        {
            id: 2,
            icon: <FaShapes className="text-4xl text-purple-500" />,
            title: "Cognitive Growth",
            desc: "Learn shapes, colors, and numbers naturally while sorting and stacking educational toys."
        },
        {
            id: 3,
            icon: <FaBrain className="text-4xl text-pink-500" />,
            title: "Problem Solving",
            desc: "Puzzles and logic games teach kids how to face challenges and find creative solutions."
        },
        {
            id: 4,
            icon: <FaPalette className="text-4xl text-yellow-500" />,
            title: "Creativity & Imagination",
            desc: "Open-ended toys spark imagination, allowing kids to create their own stories and worlds."
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-yellow-50 to-white m-20">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Child Development</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
                        Why Toys Are <span className="text-red-500 underline decoration-wavy decoration-yellow-400">Essential</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Toys are more than just fun. They are the tools your child uses to learn about the world, 
                        themselves, and others. Here is how the right playtime shapes their future.
                    </p>
                </div>

                {/* Grid Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div key={feature.id} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-center text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Info Section (Did You Know?) */}
                <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl relative overflow-hidden">
                    {/* Decorative Background Circle */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                    
                    <div className="flex-1 space-y-4 z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <FaRocket className="text-yellow-300 text-2xl" />
                            <h3 className="text-2xl font-bold uppercase tracking-wide">Did You Know?</h3>
                        </div>
                        <p className="text-blue-100 text-lg">
                            Play is so important to optimal child development that it has been recognized by the 
                            <span className="font-bold text-white"> United Nations High Commission for Human Rights</span> as a right of every child.
                        </p>
                    </div>
                    
                    <div className="flex-shrink-0 z-10">
                        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-center">
                            <FaHeart className="text-red-400 text-4xl mx-auto mb-2" />
                            <div className="text-3xl font-bold">90%</div>
                            <div className="text-sm opacity-90">Brain develops <br/> by age 5</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyToys;