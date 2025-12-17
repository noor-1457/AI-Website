    import React from 'react';
    import CaseStudyCard from '../Components/CaseStudyCard';

    const CaseStudies = () => {
    const caseStudies = [
        {
        id: "ecommerce-automation",    
        title: "E-commerce Automation",
        company: "StyleHub Fashion",
        industry: "E-commerce",
        problem: "Manual order processing took 50+ hours weekly with 15% error rate in shipping.",
        solution: "AI-powered automated order processing system with real-time inventory sync.",
        results: [
            { label: "Processing Time", value: "85% faster" },
            { label: "Error Rate", value: "Reduced to 2%" },
            { label: "Cost Savings", value: "$45,000/year" }
        ],
        metrics: [
            { icon: 'time', value: '50 hrs', label: 'Weekly Saved' },
            { icon: 'revenue', value: '30%', label: 'Sales Increase' },
            { icon: 'cost', value: '40%', label: 'Cost Reduced' }
        ]
        },
        {
        id: "heathcare-appointment",
        title: "Healthcare Appointment System",
        company: "MediCare Hospitals",
        industry: "Healthcare",
        problem: "30% no-show rate causing revenue loss and inefficient scheduling.",
        solution: "AI scheduling with automated reminders and predictive analytics.",
        results: [
            { label: "No-show Rate", value: "Down to 8%" },
            { label: "Patient Satisfaction", value: "90%" },
            { label: "Staff Efficiency", value: "Increased 2x" }
        ],
        metrics: [
            { icon: 'time', value: '200+ hrs', label: 'Monthly Saved' },
            { icon: 'revenue', value: '$80K', label: 'Revenue Gain' },
            { icon: 'cost', value: '35%', label: 'Cost Reduced' }
        ]
        },
        {
        id: "realestate-automation",
        title: "Real Estate Lead Management",
        company: "Urban Properties",
        industry: "Real Estate",
        problem: "60% lead loss due to slow follow-up and manual processes.",
        solution: "AI chatbot for instant lead qualification and automated CRM.",
        results: [
            { label: "Lead Response Time", value: "From 24h to 2min" },
            { label: "Conversion Rate", value: "Increased 250%" },
            { label: "Lead Cost", value: "Reduced 55%" }
        ],
        metrics: [
            { icon: 'time', value: 'Instant', label: 'Response Time' },
            { icon: 'revenue', value: '250%', label: 'More Conversions' },
            { icon: 'cost', value: '55% ↓', label: 'Per Lead Cost' }
        ]
        }
    ];

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