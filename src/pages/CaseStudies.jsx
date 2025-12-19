    import React from 'react';
    import CaseStudyCard from '../Components/CaseStudyCard';
    import {caseStudies} from '../constants'

    const CaseStudies = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real <span className="text-gray-900">AI Success</span> Stories
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                See how businesses transformed with AI-powered automation
            </p>
            </div>

            {/* Cards Grid */}
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

            {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
            ))}
            </div>

            {/* Stats */}
            <div className="mt-16 bg-gray-900 text-white rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-blue-100">Client Satisfaction</div>
                </div>
                <div>
                <div className="text-3xl font-bold">300+</div>
                <div className="text-blue-100">Projects Delivered</div>
                </div>
                <div>
                <div className="text-3xl font-bold">$5M+</div>
                <div className="text-blue-100">Client Savings</div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default CaseStudies;