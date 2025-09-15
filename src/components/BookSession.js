import React, { useState, useMemo } from 'react';
import { Search, Users, Clock, Calendar, Phone } from 'lucide-react';
import MySessions from './MySessions';
import { therapists } from '../data/therapists';

const BookSession = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('find');
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
    const [sortBy, setSortBy] = useState("Sort by Rating");
    const [sortOrder, setSortOrder] = useState('Descending');

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

    const allSpecialties = useMemo(() => {
        const set = new Set();
        therapists.forEach(t => (t.specialty || []).forEach(s => set.add(s)));
        return ["All Specialties", ...Array.from(set).sort()];
    }, []);

    const getEarliestSlotDate = (t) => {
        if (!t.availability || t.availability.length === 0) return Infinity;
        const min = t.availability.reduce((acc, slot) => {
            const ts = new Date(slot.date).getTime();
            return Math.min(acc, isNaN(ts) ? Infinity : ts);
        }, Infinity);
        return min;
    };

    const filteredTherapists = useMemo(() => {
        let list = therapists.slice();
        const q = searchQuery.trim().toLowerCase();
        if (q) {
            list = list.filter(t => {
                const inName = t.name.toLowerCase().includes(q);
                const inSpec = (t.specialty || []).some(s => s.toLowerCase().includes(q));
                return inName || inSpec;
            });
        }
        if (selectedSpecialty && selectedSpecialty !== 'All Specialties') {
            list = list.filter(t => (t.specialty || []).includes(selectedSpecialty));
        }

        const isDesc = sortOrder === 'Ascending';
        const compare = (a, b, aVal, bVal) => {
            if (aVal === bVal) return 0;
            if (aVal === undefined || aVal === null) return isDesc ? 1 : -1;
            if (bVal === undefined || bVal === null) return isDesc ? -1 : 1;
            const base = aVal < bVal ? -1 : 1;
            return isDesc ? -base : base;
        };

        switch (sortBy) {
            case 'Sort by Experience':
                list.sort((a, b) => compare(a, b, a.yearsOfExperience || 0, b.yearsOfExperience || 0));
                break;
            case 'Sort by Clients Helped':
                list.sort((a, b) => compare(a, b, a.clientsHelped || 0, b.clientsHelped || 0));
                break;
            case 'Sort by Availability':
                list.sort((a, b) => compare(a, b, getEarliestSlotDate(a), getEarliestSlotDate(b)));
                break;
            case 'Sort by Name':
                list.sort((a, b) => compare(a, b, a.name.toLowerCase(), b.name.toLowerCase()));
                break;
            case 'Sort by Rating':
            default:
                list.sort((a, b) => compare(a, b, a.rating || 0, b.rating || 0));
        }
        return list;
    }, [searchQuery, selectedSpecialty, sortBy, sortOrder]);

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
                        <p className="text-gray-500 text-xs">{Array.isArray(therapist.specialty) ? therapist.specialty.join(', ') : therapist.specialty}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`${colors.light} rounded-xl p-4 text-center`}>
                        <Clock className={`w-5 h-5 ${colors.text} mx-auto mb-2`} />
                        <div className={`text-2xl font-bold ${colors.text} mb-1`}>{therapist.yearsOfExperience}</div>
                        <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                    <div className={`${colors.light} rounded-xl p-4 text-center`}>
                        <Users className={`w-5 h-5 ${colors.text} mx-auto mb-2`} />
                        <div className={`text-2xl font-bold ${colors.text} mb-1`}>{therapist.clientsHelped}+</div>
                        <div className="text-xs text-gray-600">Clients Helped</div>
                    </div>
                </div>

                <button
                    className={`w-full ${colors.button} text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200`}
                    onClick={() => {
                        try {
                            sessionStorage.setItem('selectedTherapistId', String(therapist.id));
                        } catch (_) {}
                        if (onNavigate) {
                            onNavigate('book-therapist');
                        }
                    }}
                >
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
                            <div className="bg-white/10 p-1 rounded-lg flex" role="group" aria-label="Find or view sessions">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('find')}
                                    aria-pressed={activeTab === 'find'}
                                    className={`${activeTab === 'find' ? 'bg-white text-blue-700 shadow-sm' : 'text-white/90 hover:bg-white/10'} px-4 py-2 rounded-md font-medium transition-colors`}
                                >
                                    Find Therapists
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('sessions')}
                                    aria-pressed={activeTab === 'sessions'}
                                    className={`${activeTab === 'sessions' ? 'bg-white text-blue-700 shadow-sm' : 'text-white/90 hover:bg-white/10'} px-4 py-2 rounded-md font-medium transition-colors`}
                                >
                                    My Sessions
                                </button>
                            </div>
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
                {activeTab === 'find' ? (
                    <>
                        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                            <div className="flex gap-4 flex-col md:flex-row">
                                <div className="flex-1 relative">
                                    <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                                    <input type="text" placeholder="Search therapists by name or specialty..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50" />
                                </div>
                                <div className="flex gap-4">
                                    <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)} className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[180px]">
                                        {allSpecialties.map((spec) => (
                                            <option key={spec} value={spec}>{spec}</option>
                                        ))}
                                    </select>
                                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[180px]">
                                        <option>Sort by Rating</option>
                                        <option>Sort by Experience</option>
                                        <option>Sort by Clients Helped</option>
                                        <option>Sort by Availability</option>
                                        <option>Sort by Name</option>
                                    </select>
                                    {/* <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[160px]">
                                        <option>Descending</option>
                                        <option>Ascending</option>
                                    </select> */}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Available Therapists <span className="text-blue-600">({filteredTherapists.length})</span></h2>
                                <p className="text-gray-600 text-lg">Connect with licensed professionals ready to support your mental health journey</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredTherapists.map((therapist) => (
                                    <TherapistCard key={therapist.id} therapist={therapist} />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <MySessions />
                )}
            </div>
        </div>
    );
};

export default BookSession;
