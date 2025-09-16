import React, { useState } from 'react';
import { Search, Users, Clock, Calendar, Phone } from 'lucide-react';

const therapists = [
    { id: 1, name: "Dr. Sarah Mitchell", title: "Clinical Psychologist", specialty: "Anxiety & Depression", yearsExperience: 12, clientsHelped: 850, rating: 4.9, image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face", color: "blue", available: true },
    { id: 2, name: "Dr. Emily Rodriguez", title: "Behavioral Therapist", specialty: "CBT & Mindfulness", yearsExperience: 15, clientsHelped: 1200, rating: 4.8, image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face", color: "teal", available: true },
    { id: 3, name: "Dr. Lisa Thompson", title: "Trauma Specialist", specialty: "PTSD & Trauma Recovery", yearsExperience: 14, clientsHelped: 950, rating: 4.9, image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face", color: "purple", available: true },
    { id: 4, name: "Dr. Michael Chen", title: "Licensed Therapist", specialty: "Couples & Family Therapy", yearsExperience: 8, clientsHelped: 620, rating: 4.7, image: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face", color: "indigo", available: true },
    { id: 5, name: "Dr. Robert Kim", title: "Adolescent Counselor", specialty: "Teen & Young Adult Issues", yearsExperience: 9, clientsHelped: 580, rating: 4.6, image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face", color: "gray", available: true },
    { id: 6, name: "Dr. James Wilson", title: "Addiction Counselor", specialty: "Substance Abuse & Recovery", yearsExperience: 10, clientsHelped: 750, rating: 4.8, image: "https://images.pexels.com/photos/5327540/pexels-photo-5327540.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face", color: "emerald", available: true }
];

const BookSession = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
    const [sortBy, setSortBy] = useState("Sort by Rating");

    const getColorClasses = (color) => {
        const colorMap = {
            blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", button: "bg-blue-500 hover:bg-blue-600" },
            teal: { bg: "bg-teal-500", light: "bg-teal-50", text: "text-teal-600", button: "bg-teal-500 hover:bg-teal-600" },
            purple: { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", button: "bg-purple-500 hover:bg-purple-600" },
            indigo: { bg: "bg-indigo-500", light: "bg-indigo-50", text: "text-indigo-600", button: "bg-indigo-500 hover:bg-indigo-600" },
            gray: { bg: "bg-gray-500", light: "bg-gray-50", text: "text-gray-600", button: "bg-gray-500 hover:bg-gray-600" },
            emerald: { bg: "bg-emerald-500", light: "bg-emerald-50", text: "text-emerald-600", button: "bg-emerald-500 hover:bg-emerald-600" }
        };
        return colorMap[color] || colorMap.blue;
    };

    const TherapistCard = ({ therapist }) => {
        const colors = getColorClasses(therapist.color);
        return (
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                        <img src={therapist.image} alt={therapist.name} className="w-16 h-16 rounded-full object-cover" />
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center`}>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{therapist.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{therapist.title}</p>
                        <p className="text-gray-500 text-xs">{therapist.specialty}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`${colors.light} rounded-xl p-4 text-center`}>
                        <Clock className={`w-5 h-5 ${colors.text} mx-auto mb-2`} />
                        <div className={`text-2xl font-bold ${colors.text} mb-1`}>{therapist.yearsExperience}</div>
                        <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                    <div className={`${colors.light} rounded-xl p-4 text-center`}>
                        <Users className={`w-5 h-5 ${colors.text} mx-auto mb-2`} />
                        <div className={`text-2xl font-bold ${colors.text} mb-1`}>{therapist.clientsHelped}+</div>
                        <div className="text-xs text-gray-600">Clients Helped</div>
                    </div>
                </div>

                <button className={`w-full ${colors.button} text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200`}>
                    Book Now
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <header className="bg-gradient-to-r from-slate-700 via-slate-800 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 rounded-full p-3">
                                <Users className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">We are here</h1>
                                <p className="text-blue-200 text-sm">Professional Mental Health Services</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                                Find Therapists
                            </button>
                            <button className="text-white hover:text-blue-200 transition-colors">
                                My Sessions
                            </button>
                            <div className="flex items-center gap-2 text-blue-200">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">24/7 Support</span>
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Instant Booking
                            </button>
                        </div>
                    </div>
                    <p className="text-blue-100 text-lg max-w-2xl">Connect with licensed therapists and counselors. Book sessions, manage appointments, and get the professional support you deserve.</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                    <div className="flex gap-4 flex-col md:flex-row">
                        <div className="flex-1 relative">
                            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                            <input type="text" placeholder="Search therapists by name or specialty..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50" />
                        </div>
                        <div className="flex gap-4">
                            <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)} className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[180px]">
                                <option>All Specialties</option>
                                <option>Anxiety & Depression</option>
                                <option>CBT & Mindfulness</option>
                                <option>PTSD & Trauma Recovery</option>
                                <option>Couples & Family Therapy</option>
                                <option>Teen & Young Adult Issues</option>
                                <option>Substance Abuse & Recovery</option>
                            </select>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[160px]">
                                <option>Sort by Rating</option>
                                <option>Sort by Experience</option>
                                <option>Sort by Clients Helped</option>
                                <option>Sort by Availability</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Available Therapists <span className="text-blue-600">({therapists.length})</span></h2>
                        <p className="text-gray-600 text-lg">Connect with licensed professionals ready to support your mental health journey</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {therapists.map((therapist) => (
                            <TherapistCard key={therapist.id} therapist={therapist} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookSession;
