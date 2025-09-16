'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
       const therapists = [
      {
        id: 1,
        name: "Dr. Sarah Mitchell",
        title: "Clinical Psychologist",
        yearsOfExperience: 12,
        clientsHelped: 850,
        rating: 4.9,
        image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        nextAvailable: "Today at 10:00 AM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        title: "Licensed Therapist",
        yearsOfExperience: 8,
        clientsHelped: 620,
        rating: 4.8,
        image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        nextAvailable: "Today at 1:00 PM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Dr. Emily Rodriguez",
        title: "Behavioral Therapist",
        yearsOfExperience: 15,
        clientsHelped: 1200,
        rating: 4.9,
        image: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        nextAvailable: "Tomorrow at 10:00 AM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Dr. James Wilson",
        title: "Addiction Counselor",
        yearsOfExperience: 10,
        clientsHelped: 750,
        rating: 4.7,
        image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        nextAvailable: "Today at 11:00 AM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Dr. Lisa Thompson",
        title: "Trauma Specialist",
        yearsOfExperience: 14,
        clientsHelped: 950,
        rating: 4.9,
        image: "https://images.pexels.com/photos/5327665/pexels-photo-5327665.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        nextAvailable: "Tomorrow at 9:00 AM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Dr. Robert Kim",
        title: "Adolescent Counselor",
        yearsOfExperience: 9,
        clientsHelped: 580,
        rating: 4.8,
        image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        nextAvailable: "Friday at 10:00 AM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Therapists", therapists, {});

    // Specialties
    const specialties = [
      { therapistId: 1, specialty: "Anxiety Disorders" },
      { therapistId: 1, specialty: "Depression" },
      { therapistId: 1, specialty: "Trauma Therapy" },

      { therapistId: 2, specialty: "Relationship Counseling" },
      { therapistId: 2, specialty: "Family Therapy" },
      { therapistId: 2, specialty: "Stress Management" },

      { therapistId: 3, specialty: "CBT" },
      { therapistId: 3, specialty: "ADHD" },
      { therapistId: 3, specialty: "Autism Spectrum" },
      { therapistId: 3, specialty: "Child Psychology" },

      { therapistId: 4, specialty: "Substance Abuse" },
      { therapistId: 4, specialty: "Addiction Recovery" },
      { therapistId: 4, specialty: "Group Therapy" },

      { therapistId: 5, specialty: "PTSD" },
      { therapistId: 5, specialty: "Trauma Recovery" },
      { therapistId: 5, specialty: "EMDR" },
      { therapistId: 5, specialty: "Crisis Intervention" },

      { therapistId: 6, specialty: "Teen Counseling" },
      { therapistId: 6, specialty: "Academic Stress" },
      { therapistId: 6, specialty: "Social Anxiety" },
      { therapistId: 6, specialty: "Identity Issues" },
    ].map((s) => ({ ...s, createdAt: new Date(), updatedAt: new Date() }));

    await queryInterface.bulkInsert("Specialties", specialties, {});

    // Languages
    const languages = [
      { therapistId: 1, language: "English" },
      { therapistId: 1, language: "Tamil" },

      { therapistId: 2, language: "English" },
      { therapistId: 2, language: "Tamil" },
      { therapistId: 2, language: "Hindi" },

      { therapistId: 3, language: "English" },
      { therapistId: 3, language: "Kannada" },
      { therapistId: 3, language: "Hindi" },

      { therapistId: 4, language: "English" },

      { therapistId: 5, language: "English" },
      { therapistId: 5, language: "Hindi" },
      { therapistId: 5, language: "Urdu" },

      { therapistId: 6, language: "English" },
      { therapistId: 6, language: "Tamil" },
      { therapistId: 6, language: "Malayalam" },
    ].map((l) => ({ ...l, createdAt: new Date(), updatedAt: new Date() }));

    await queryInterface.bulkInsert("Languages", languages, {});

    // Availability
    const availability = [
      { therapistId: 1, date: "2025-01-15", time: "10:00 AM", available: true, type: "immediate" },
      { therapistId: 1, date: "2025-01-15", time: "2:00 PM", available: true, type: "scheduled" },
      { therapistId: 1, date: "2025-01-16", time: "11:00 AM", available: true, type: "scheduled" },

      { therapistId: 2, date: "2025-01-15", time: "1:00 PM", available: true, type: "immediate" },
      { therapistId: 2, date: "2025-01-15", time: "4:00 PM", available: true, type: "scheduled" },
      { therapistId: 2, date: "2025-01-17", time: "9:00 AM", available: true, type: "scheduled" },

      { therapistId: 3, date: "2025-01-15", time: "3:00 PM", available: true, type: "scheduled" },
      { therapistId: 3, date: "2025-01-16", time: "10:00 AM", available: true, type: "immediate" },
      { therapistId: 3, date: "2025-01-16", time: "2:00 PM", available: true, type: "scheduled" },

      { therapistId: 4, date: "2025-01-15", time: "11:00 AM", available: true, type: "immediate" },
      { therapistId: 4, date: "2025-01-15", time: "5:00 PM", available: true, type: "scheduled" },
      { therapistId: 4, date: "2025-01-18", time: "9:00 AM", available: true, type: "scheduled" },

      { therapistId: 5, date: "2025-01-16", time: "9:00 AM", available: true, type: "immediate" },
      { therapistId: 5, date: "2025-01-16", time: "1:00 PM", available: true, type: "scheduled" },
      { therapistId: 5, date: "2025-01-17", time: "11:00 AM", available: true, type: "scheduled" },

      { therapistId: 6, date: "2025-01-15", time: "4:00 PM", available: true, type: "scheduled" },
      { therapistId: 6, date: "2025-01-17", time: "10:00 AM", available: true, type: "immediate" },
      { therapistId: 6, date: "2025-01-17", time: "3:00 PM", available: true, type: "scheduled" },
    ].map((a) => ({ ...a, createdAt: new Date(), updatedAt: new Date() }));

    await queryInterface.bulkInsert("Availabilities", availability, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Availabilities", null, {});
    await queryInterface.bulkDelete("Languages", null, {});
    await queryInterface.bulkDelete("Specialties", null, {});
    await queryInterface.bulkDelete("Therapists", null, {});
  }
};
