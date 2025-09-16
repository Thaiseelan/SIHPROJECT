import React, { useState } from 'react';
import { Calendar, Clock, Users, ArrowLeft, Video, MapPin, Globe, Award, Star, Shield, Heart, MessageCircle, CheckCircle, DollarSign, Clock3, Phone, User } from 'lucide-react';
import { therapists } from '../data/therapists';

const BookTherapist = ({ onNavigate }) => {
    const selectedId = (() => {
        try {
            const raw = sessionStorage.getItem('selectedTherapistId');
            return raw ? parseInt(raw, 10) : null;
        } catch (_) {
            return null;
        }
    })();

    const therapist = therapists.find(t => t.id === selectedId) || therapists[0];

    const [sessionType, setSessionType] = useState('online');

    const immediateSlots = therapist.availability.filter(slot => slot.type === 'immediate' && slot.available);
    const scheduledSlots = therapist.availability.filter(slot => slot.type === 'scheduled' && slot.available);

    const bookAndRedirect = (slot) => {
        const newSession = {
            id: `session-${Date.now()}`,
            therapistId: therapist.id,
            therapistName: therapist.name,
            date: slot.date,
            time: slot.time,
            status: 'pending',
            type: sessionType === 'online' ? 'online' : 'offline',
        };
        try {
            sessionStorage.setItem('pendingNewSession', JSON.stringify(newSession));
            sessionStorage.setItem('navToSessions', '1');
        } catch (_) {}
        if (onNavigate) onNavigate('book');
    };

    const handleBooking = (slot) => {
        bookAndRedirect(slot);
    };

    const handleReschedule = (sessionId) => {
        // Placeholder for reschedule
    };

    const handleRebook = (sessionId) => {
        // For now rebook first scheduled slot if exists
        const slot = scheduledSlots[0] || immediateSlots[0];
        if (slot) bookAndRedirect(slot);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <header className="bg-gradient-to-r from-slate-700 via-slate-800 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => onNavigate && onNavigate('book')}
                            className="text-white hover:text-blue-200 flex items-center gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 rounded-full p-2">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Book Session</h1>
                                <p className="text-blue-200 text-xs">Select a time with your therapist</p>
                            </div>
                        </div>
                        <div />
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Therapist summary and details remain unchanged */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <div className="flex items-center gap-4">
                                <img src={therapist.image} alt={therapist.name} className="w-16 h-16 rounded-full object-cover" />
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">{therapist.name}</h2>
                                    <p className="text-gray-600 text-sm">{therapist.title}</p>
                                    <p className="text-gray-500 text-xs mt-1">{therapist.yearsOfExperience} yrs • {therapist.clientsHelped}+ clients</p>
                                </div>
                            </div>
                            <div className="mt-4 text-sm text-gray-600">
                                <span className="font-medium">Languages:</span> {therapist.languages.join(', ')}
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                                <span className="font-medium">Specialties:</span> {therapist.specialty.join(', ')}
                            </div>
                        </div>
                        <div className="md:flex-1">
                            {/* Stats and quick info (omitted for brevity) */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200 shadow-sm">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                                            <Star className="h-4 w-4 text-white" />
                                        </div>
                                        <h3 className="font-bold text-slate-700">Experience</h3>
                                    </div>
                                    <div className="text-2xl font-bold text-blue-600 mb-1">{therapist.yearsOfExperience}+</div>
                                    <div className="text-sm text-slate-600">Years of Practice</div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-cyan-200 shadow-sm">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
                                            <Heart className="h-4 w-4 text-white" />
                                        </div>
                                        <h3 className="font-bold text-slate-700">Clients Helped</h3>
                                    </div>
                                    <div className="text-2xl font-bold text-cyan-600 mb-1">{therapist.clientsHelped}+</div>
                                    <div className="text-sm text-slate-600">Successful Sessions</div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-violet-200 shadow-sm">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full flex items-center justify-center">
                                            <Shield className="h-4 w-4 text-white" />
                                        </div>
                                        <h3 className="font-bold text-slate-700">Credentials</h3>
                                    </div>
                                    <div className="text-sm text-slate-700">Licensed Professional Counselor</div>
                                    <div className="text-xs text-slate-600 mt-1">Next Available: {therapist.nextAvailable}</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-blue-500" />
                                        <span className="text-sm font-medium text-slate-700">Licensed Professional</span>
                                    </div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-cyan-100">
                                    <div className="flex items-center space-x-2">
                                        <MessageCircle className="h-4 w-4 text-cyan-500" />
                                        <span className="text-sm font-medium text-slate-700">Bilingual Support</span>
                                    </div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-indigo-100">
                                    <div className="flex items-center space-x-2">
                                        <Clock3 className="h-4 w-4 text-indigo-500" />
                                        <span className="text-sm font-medium text-slate-700">Flexible Scheduling</span>
                                    </div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-violet-100">
                                    <div className="flex items-center space-x-2">
                                        <DollarSign className="h-4 w-4 text-violet-500" />
                                        <span className="text-sm font-medium text-slate-700">Insurance Accepted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Session type selector */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mt-8 border border-blue-200">
                    <h3 className="text-xl font-bold text-slate-700 mb-4">Choose Session Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button onClick={() => setSessionType('online')} className={`flex items-center space-x-3 px-6 py-4 rounded-xl border-2 transition-all duration-200 ${sessionType === 'online' ? 'border-cyan-500 bg-cyan-50 text-cyan-700 shadow-md' : 'border-blue-200 bg-white text-slate-600 hover:border-cyan-300'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${sessionType === 'online' ? 'bg-cyan-500' : 'bg-blue-100'}`}>
                                <Video className={`h-5 w-5 ${sessionType === 'online' ? 'text-white' : 'text-blue-600'}`} />
                            </div>
                            <div className="text-left">
                                <span className="font-semibold text-lg">Online Session</span>
                                <p className="text-sm opacity-80">Join via video call from anywhere</p>
                            </div>
                        </button>
                        <button onClick={() => setSessionType('offline')} className={`flex items-center space-x-3 px-6 py-4 rounded-xl border-2 transition-all duration-200 ${sessionType === 'offline' ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md' : 'border-blue-200 bg-white text-slate-600 hover:border-indigo-300'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${sessionType === 'offline' ? 'bg-indigo-500' : 'bg-indigo-100'}`}>
                                <MapPin className={`h-5 w-5 ${sessionType === 'offline' ? 'text-white' : 'text-indigo-600'}`} />
                            </div>
                            <div className="text-left">
                                <span className="font-semibold text-lg">In-Person Session</span>
                                <p className="text-sm opacity-80">Meet at the therapist's office location</p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Availability lists */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    <div className="bg-gradient-to-br from-white to-cyan-50 rounded-xl border border-cyan-200 p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-700">Available Now</h3>
                                    <p className="text-sm text-slate-600">Book an immediate session</p>
                                </div>
                            </div>
                            <span className="bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full font-semibold">
                                {immediateSlots.length} slots
                            </span>
                        </div>
                        <div className="space-y-3">
                            {immediateSlots.length > 0 ? (
                                immediateSlots.map((slot) => (
                                    <div key={slot.id} className="flex items-center justify-between p-3 border border-cyan-200 rounded-lg hover:bg-cyan-50 cursor-pointer transition-colors" onClick={() => handleBooking(slot)}>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                                            <div>
                                                <div className="flex items-center space-x-2 text-slate-800">
                                                    <Calendar className="h-4 w-4" />
                                                    <span className="font-medium">Today</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-slate-600">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{slot.time}</span>
                                                </div>
                                                <div className="flex items-center space-x-1 mt-1">
                                                    {sessionType === 'online' ? (
                                                        <Video className="h-3 w-3 text-cyan-500" />
                                                    ) : (
                                                        <MapPin className="h-3 w-3 text-indigo-500" />
                                                    )}
                                                    <span className="text-xs text-slate-500">
                                                        {sessionType === 'online' ? 'Online' : 'In-person'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700">
                                            Book Now
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="h-8 w-8 text-cyan-600" />
                                    </div>
                                    <p className="text-slate-600 font-medium">No immediate slots available</p>
                                    <p className="text-sm text-slate-500 mt-1">Check scheduled sessions below</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl border border-indigo-200 p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full flex items-center justify-center">
                                    <Calendar className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-700">Schedule Ahead</h3>
                                    <p className="text-sm text-slate-600">Plan your future sessions</p>
                                </div>
                            </div>
                            <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full font-semibold">
                                {scheduledSlots.length} slots
                            </span>
                        </div>
                        <div className="space-y-3">
                            {scheduledSlots.map((slot) => (
                                <div key={slot.id} className="flex items-center justify-between p-3 border border-indigo-200 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors" onClick={() => handleBooking(slot)}>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                                        <div>
                                            <div className="flex items-center space-x-2 text-slate-800">
                                                <Calendar className="h-4 w-4" />
                                                <span className="font-medium">
                                                    {new Date(slot.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-slate-600">
                                                <Clock className="h-4 w-4" />
                                                <span>{slot.time}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 mt-1">
                                                {sessionType === 'online' ? (
                                                    <Video className="h-3 w-3 text-cyan-500" />
                                                ) : (
                                                    <MapPin className="h-3 w-3 text-indigo-500" />
                                                )}
                                                <span className="text-xs text-slate-500">{sessionType === 'online' ? 'Online' : 'In-person'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
                                        Schedule
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Previous sessions sample */}
                <div className="mt-8 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-200 p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to blue-600 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-700">Previous Sessions with {therapist.name}</h3>
                            <p className="text-sm text-slate-600">Manage your past appointments</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">Session on Jan 12, 2025</p>
                                    <p className="text-sm text-slate-600">2:00 PM - Completed</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleReschedule('session-1')}
                                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                                >
                                    Reschedule
                                </button>
                                <button
                                    onClick={() => handleRebook('session-1')}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Rebook
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-lg border border-indigo-200">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">Session on Jan 8, 2025</p>
                                    <p className="text-sm text-slate-600">10:00 AM - Completed</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleReschedule('session-2')}
                                    className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-colors"
                                >
                                    Reschedule
                                </button>
                                <button
                                    onClick={() => handleRebook('session-2')}
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                                >
                                    Rebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTherapist;