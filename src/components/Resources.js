import React, { useState } from 'react';
import { Search, Download, Play, Star, ChevronDown, Volume2, FileText, Video } from 'lucide-react';
import './Resources.css';

const pdfResources = [
    {
        id: 1,
        title: "Anxiety Workbook: Understanding and Managing Anxiety",
        rating: 4.8,
        pages: 48,
        tags: ["workbook", "anxiety"],
        image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'pdf'
    },
    {
        id: 2,
        title: "Depression Self-Help Guide",
        rating: 4.7,
        pages: 32,
        tags: ["self-help", "depression"],
        image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'pdf'
    },
    {
        id: 3,
        title: "Mindfulness Journal and Exercise Collection",
        rating: 4.9,
        pages: 64,
        tags: ["journal", "mindfulness"],
        image: "https://images.pexels.com/photos/4226269/pexels-photo-4226269.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'pdf'
    }
];

const videoResources = [
    {
        id: 4,
        title: "Cognitive Behavioral Therapy Techniques",
        rating: 4.9,
        duration: "42 min",
        tags: ["cbt", "therapy"],
        image: "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'video'
    },
    {
        id: 5,
        title: "Sleep Hygiene and Mental Health",
        rating: 4.6,
        duration: "28 min",
        tags: ["sleep", "routine"],
        image: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'video'
    },
    {
        id: 6,
        title: "Building Resilience in Difficult Times",
        rating: 4.8,
        duration: "33 min",
        tags: ["resilience", "strength"],
        image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'video'
    }
];

const audioResources = [
    {
        id: 7,
        title: "Affirmations for Self-Confidence",
        rating: 4.5,
        duration: "18 min",
        tags: ["affirmations", "confidence"],
        image: "https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'audio'
    },
    {
        id: 8,
        title: "Trauma Recovery Stories - Hope and Healing",
        rating: 4.9,
        duration: "52 min",
        tags: ["trauma", "recovery"],
        image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'audio'
    },
    {
        id: 9,
        title: "Mindful Eating Meditation",
        rating: 4.4,
        duration: "30 min",
        tags: ["mindful-eating", "meditation"],
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        type: 'audio'
    }
];

const Resources = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const ResourceCard = ({ resource }) => {
        const getIcon = () => {
            switch (resource.type) {
                case 'pdf': return <Download className="w-6 h-6 text-white" />;
                case 'video': return <Play className="w-6 h-6 text-white" />;
                case 'audio': return <Play className="w-6 h-6 text-white" />;
                default: return <Download className="w-6 h-6 text-white" />;
            }
        };

        const getDurationInfo = () => {
            if (resource.pages) {
                return `${resource.pages} pages`;
            }
            return resource.duration;
        };

        return (
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 resource-card">
                <div className="relative resource-media">
                    <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-lg text-sm font-medium resource-badge">
                        {getDurationInfo()}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center resource-overlay">
                        <div className="bg-purple-600 rounded-full p-4 transform scale-90 hover:scale-100 transition-transform duration-200 cursor-pointer resource-action-btn">
                            {getIcon()}
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">
                        {resource.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4 rating-row">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium text-gray-700 rating-pill">{resource.rating}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 tag-row">
                        {resource.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full tag-pill"
                            >
                                #{tag}
                            </span>
                        ))}
                        {resource.tags.length > 2 && (
                            <span className="text-sm text-gray-500 font-medium tag-more">
                                +{resource.tags.length - 2} more
                            </span>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const ResourceSection = ({
        title,
        description,
        icon,
        resources
    }) => (
        <section className="mb-16">
            <div className="flex items-center gap-4 mb-6 section-heading">
                <div className="text-purple-600 section-icon">
                    {icon}
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 section-title">{title}</h2>
                    <p className="text-gray-600 text-lg section-subtitle">{description}</p>
                    <p className="text-purple-500 text-sm mt-1 flex items-center gap-1 section-hint">
                        💡 Scroll with mouse wheel to navigate
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 resources-grid">
                {resources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </div>

            {/* pagination removed */}
        </section>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 resources-page">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50 resources-header">
                <div className="max-w-7xl mx-auto px-4 py-6 resources-container">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        <span className="text-gray-800">Mental Health </span>
                        <span className="text-purple-600">Resources</span>
                    </h1>

                    {/* Search and Filters */}
                    <div className="max-w-4xl mx-auto">
                        <div className="flex gap-4 flex-col md:flex-row">
                            <div className="flex-1 relative resources-filters">
                                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Search resources, topics, or keywords..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 resources-input"
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="relative">
                                    <select
                                        value={selectedLanguage}
                                        onChange={(e) => setSelectedLanguage(e.target.value)}
                                        className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer resources-select"
                                    >
                                        <option>All Languages</option>
                                        <option>English</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>

                                <div className="relative">
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer resources-select"
                                    >
                                        <option>All Categories</option>
                                        <option>Anxiety</option>
                                        <option>Depression</option>
                                        <option>Mindfulness</option>
                                        <option>Self-Help</option>
                                    </select>
                                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-12">
                {/* Navigation indicator */}
                {/* top pagination and count removed */}

                <ResourceSection
                    title="PDF Resources"
                    description="Download worksheets, guides, and educational materials"
                    icon={<FileText className="w-8 h-8" />}
                    resources={pdfResources}
                />

                <ResourceSection
                    title="Video Resources"
                    description="Watch guided sessions, educational content, and therapeutic videos"
                    icon={<Video className="w-8 h-8" />}
                    resources={videoResources}
                />

                <ResourceSection
                    title="Audio Resources"
                    description="Listen to meditation guides, podcasts, and calming soundscapes"
                    icon={<Volume2 className="w-8 h-8" />}
                    resources={audioResources}
                />

                {/* Final navigation indicator */}
                {/* bottom pagination and count removed */}
            </main>
        </div>
    );
};

export default Resources;


