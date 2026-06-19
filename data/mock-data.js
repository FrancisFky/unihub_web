// Mock Data for UniHub Platform
const mockData = {
  // Current logged in user
  currentUser: {
    id: 'STU001',
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@university.com',
    role: 'student',
    profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jean',
    institution: 'Université de Brazzaville',
    program: 'Computer Science',
    enrollmentDate: '2022-09-15',
    phoneNumber: '+242 06 123 45 67',
    country: 'Congo-Brazzaville',
    city: 'Brazzaville'
  },

  // Student Dashboard Data
  studentStats: {
    gpa: 3.85,
    totalCredits: 128,
    completedCredits: 95,
    currentSemester: 6,
    balance: 150000, // in CFA francs
  },

  // Courses for Student
  courses: [
    {
      id: 'COURSE001',
      code: 'CS101',
      name: 'Introduction to Programming',
      lecturer: 'Dr. Paul Martin',
      credits: 3,
      semester: 6,
      startDate: '2024-09-10',
      endDate: '2024-12-20',
      status: 'active',
      progress: 65,
      description: 'Learn the basics of programming with Python',
      materials: 5,
      assignments: 4
    },
    {
      id: 'COURSE002',
      code: 'CS102',
      name: 'Data Structures',
      lecturer: 'Prof. Marie Leblanc',
      credits: 4,
      semester: 6,
      startDate: '2024-09-10',
      endDate: '2024-12-20',
      status: 'active',
      progress: 55,
      description: 'Study fundamental data structures',
      materials: 8,
      assignments: 5
    },
    {
      id: 'COURSE003',
      code: 'CS103',
      name: 'Web Development',
      lecturer: 'Eng. Pierre Bernard',
      credits: 3,
      semester: 6,
      startDate: '2024-09-10',
      endDate: '2024-12-20',
      status: 'active',
      progress: 80,
      description: 'Build responsive web applications',
      materials: 10,
      assignments: 6
    },
    {
      id: 'COURSE004',
      code: 'MATH201',
      name: 'Calculus II',
      lecturer: 'Prof. Sophie Laurent',
      credits: 4,
      semester: 6,
      startDate: '2024-09-10',
      endDate: '2024-12-20',
      status: 'active',
      progress: 45,
      description: 'Advanced calculus concepts',
      materials: 6,
      assignments: 4
    }
  ],

  // Assignments
  assignments: [
    {
      id: 'ASS001',
      courseId: 'COURSE001',
      courseName: 'Introduction to Programming',
      title: 'Python Basics Project',
      description: 'Create a simple calculator application',
      dueDate: '2024-10-15',
      status: 'pending',
      submitted: false,
      marks: null,
      maxMarks: 100
    },
    {
      id: 'ASS002',
      courseId: 'COURSE002',
      courseName: 'Data Structures',
      title: 'Implement Linked List',
      description: 'Implement a doubly linked list with operations',
      dueDate: '2024-10-20',
      status: 'submitted',
      submitted: true,
      submittedDate: '2024-10-18',
      marks: 92,
      maxMarks: 100
    },
    {
      id: 'ASS003',
      courseId: 'COURSE003',
      courseName: 'Web Development',
      title: 'Personal Portfolio Website',
      description: 'Create a responsive portfolio website',
      dueDate: '2024-10-25',
      status: 'pending',
      submitted: false,
      marks: null,
      maxMarks: 100
    },
    {
      id: 'ASS004',
      courseId: 'COURSE004',
      courseName: 'Calculus II',
      title: 'Integration Problems Set',
      description: 'Solve 20 integration problems',
      dueDate: '2024-10-10',
      status: 'submitted',
      submitted: true,
      submittedDate: '2024-10-08',
      marks: 85,
      maxMarks: 100
    }
  ],

  // Results
  results: [
    { courseCode: 'CS101', courseName: 'Introduction to Programming', semester: 5, grade: 'A', points: 4.0, credits: 3 },
    { courseCode: 'CS102', courseName: 'Data Structures', semester: 5, grade: 'A-', points: 3.7, credits: 4 },
    { courseCode: 'CS103', courseName: 'Web Development', semester: 5, grade: 'A', points: 4.0, credits: 3 },
    { courseCode: 'MATH201', courseName: 'Calculus II', semester: 5, grade: 'B+', points: 3.3, credits: 4 },
    { courseCode: 'PHY101', courseName: 'Physics I', semester: 5, grade: 'B', points: 3.0, credits: 4 }
  ],

  // Timetable
  timetable: [
    { day: 'Monday', time: '09:00-11:00', course: 'CS101', lecturer: 'Dr. Paul Martin', room: 'Lab 201' },
    { day: 'Monday', time: '14:00-16:00', course: 'MATH201', lecturer: 'Prof. Sophie Laurent', room: 'Room 305' },
    { day: 'Tuesday', time: '08:00-10:00', course: 'CS102', lecturer: 'Prof. Marie Leblanc', room: 'Lab 202' },
    { day: 'Tuesday', time: '11:00-13:00', course: 'CS103', lecturer: 'Eng. Pierre Bernard', room: 'Lab 203' },
    { day: 'Wednesday', time: '09:00-11:00', course: 'CS101', lecturer: 'Dr. Paul Martin', room: 'Lab 201' },
    { day: 'Thursday', time: '10:00-12:00', course: 'MATH201', lecturer: 'Prof. Sophie Laurent', room: 'Room 305' },
    { day: 'Friday', time: '08:00-10:00', course: 'CS103', lecturer: 'Eng. Pierre Bernard', room: 'Lab 203' }
  ],

  // Payments/Fees
  fees: [
    { semester: 1, totalAmount: 500000, paid: 500000, status: 'Paid', paymentDate: '2022-08-20' },
    { semester: 2, totalAmount: 500000, paid: 500000, status: 'Paid', paymentDate: '2023-01-15' },
    { semester: 3, totalAmount: 500000, paid: 500000, status: 'Paid', paymentDate: '2023-08-10' },
    { semester: 4, totalAmount: 500000, paid: 500000, status: 'Paid', paymentDate: '2024-01-20' },
    { semester: 5, totalAmount: 500000, paid: 350000, status: 'Partial', paymentDate: '2024-08-15' },
    { semester: 6, totalAmount: 500000, paid: 0, status: 'Pending', paymentDate: null }
  ],

  // Announcements
  announcements: [
    {
      id: 1,
      title: 'Final Examination Schedule Released',
      content: 'The final examination schedule for the semester has been released. Please check your student portal.',
      date: '2024-10-18',
      author: 'Dr. Admin',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Maintenance Notice',
      content: 'The student portal will be down for maintenance on October 25, 2024 from 2 AM to 6 AM.',
      date: '2024-10-17',
      author: 'IT Department',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'New Library Opening Hours',
      content: 'Starting from November, the library will be open 24/7 for students.',
      date: '2024-10-16',
      author: 'Library Management',
      priority: 'low'
    }
  ],

  // Messages/Conversations
  messages: [
    {
      id: 1,
      conversationId: 'CONV001',
      from: 'Dr. Paul Martin',
      fromId: 'LECT001',
      content: 'Hi Jean, how are you progressing with the programming project?',
      timestamp: '2024-10-19 14:30',
      read: true
    },
    {
      id: 2,
      conversationId: 'CONV001',
      from: 'Jean Dupont',
      fromId: 'STU001',
      content: 'Hi Dr. Martin, I am doing well. I have completed about 60% of the project. I will submit it before the deadline.',
      timestamp: '2024-10-19 15:45',
      read: true
    },
    {
      id: 3,
      conversationId: 'CONV002',
      from: 'Prof. Marie Leblanc',
      fromId: 'LECT002',
      content: 'Students, please submit your data structures assignment by tomorrow.',
      timestamp: '2024-10-19 10:00',
      read: false
    }
  ],

  // Lecturer Data
  lecturers: [
    {
      id: 'LECT001',
      firstName: 'Paul',
      lastName: 'Martin',
      email: 'paul.martin@university.com',
      department: 'Computer Science',
      specialization: 'Software Engineering',
      phone: '+242 06 111 22 33',
      profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Paul'
    },
    {
      id: 'LECT002',
      firstName: 'Marie',
      lastName: 'Leblanc',
      email: 'marie.leblanc@university.com',
      department: 'Computer Science',
      specialization: 'Data Structures',
      phone: '+242 06 222 33 44',
      profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie'
    },
    {
      id: 'LECT003',
      firstName: 'Pierre',
      lastName: 'Bernard',
      email: 'pierre.bernard@university.com',
      department: 'Computer Science',
      specialization: 'Web Development',
      phone: '+242 06 333 44 55',
      profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre'
    }
  ],

  // Students List
  students: [
    {
      id: 'STU001',
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@university.com',
      program: 'Computer Science',
      enrollmentDate: '2022-09-15',
      status: 'Active',
      gpa: 3.85
    },
    {
      id: 'STU002',
      firstName: 'Marie',
      lastName: 'Kouala',
      email: 'marie.kouala@university.com',
      program: 'Computer Science',
      enrollmentDate: '2022-09-15',
      status: 'Active',
      gpa: 3.65
    },
    {
      id: 'STU003',
      firstName: 'Pierre',
      lastName: 'Ngoubou',
      email: 'pierre.ngoubou@university.com',
      program: 'Computer Science',
      enrollmentDate: '2022-09-15',
      status: 'Active',
      gpa: 3.45
    }
  ],

  // Departments
  departments: [
    { id: 'DEPT001', name: 'Computer Science', code: 'CS', head: 'Prof. Jean Claude' },
    { id: 'DEPT002', name: 'Mathematics', code: 'MATH', head: 'Prof. Sophie' },
    { id: 'DEPT003', name: 'Physics', code: 'PHY', head: 'Dr. Michel' },
    { id: 'DEPT004', name: 'Chemistry', code: 'CHEM', head: 'Prof. Anne' }
  ],

  // Institutions (for super admin)
  institutions: [
    {
      id: 'INST001',
      name: 'Université de Brazzaville',
      country: 'Congo-Brazzaville',
      city: 'Brazzaville',
      email: 'contact@univ-brazzaville.com',
      students: 5000,
      lecturers: 250,
      status: 'Active',
      subscriptionPlan: 'Premium',
      subscriptionStartDate: '2023-01-01',
      subscriptionEndDate: '2025-12-31'
    },
    {
      id: 'INST002',
      name: 'Université de Kinshasa',
      country: 'Democratic Republic of Congo',
      city: 'Kinshasa',
      email: 'contact@univ-kinshasa.com',
      students: 8000,
      lecturers: 350,
      status: 'Active',
      subscriptionPlan: 'Premium',
      subscriptionStartDate: '2023-06-01',
      subscriptionEndDate: '2025-06-30'
    }
  ],

  // Subscription Plans
  plans: [
    {
      id: 'PLAN001',
      name: 'Basic',
      price: 1000000,
      maxStudents: 500,
      maxLecturers: 50,
      features: ['Student Portal', 'Basic E-Learning', 'Announcements', 'Email Support']
    },
    {
      id: 'PLAN002',
      name: 'Standard',
      price: 2500000,
      maxStudents: 2000,
      maxLecturers: 200,
      features: ['All Basic Features', 'Advanced E-Learning', 'Gradebook', 'Chat Support']
    },
    {
      id: 'PLAN003',
      name: 'Premium',
      price: 5000000,
      maxStudents: 10000,
      maxLecturers: 500,
      features: ['All Standard Features', 'Financial Management', 'Analytics', '24/7 Support', 'API Access']
    }
  ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = mockData;
}
