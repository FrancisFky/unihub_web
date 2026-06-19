# UniHub - Modern SaaS Education Platform

A comprehensive, professional education management system built with HTML5, CSS3, and Vanilla JavaScript. **UniHub** combines student portals, e-learning, academic management, and financial systems into one unified platform.

## 🎯 Features

### For Students
- **Dashboard**: Overview of GPA, current courses, and assignments
- **Courses**: Browse and manage enrolled courses with progress tracking
- **Assignments**: Submit work and track grading status
- **Results**: View grades and academic transcripts
- **Timetable**: Class schedule with locations and instructors
- **Fees**: Payment tracking and history with multiple payment methods
- **Announcements**: Important institutional updates
- **Messages**: Communication with instructors and peers
- **Calendar**: Academic events and deadlines
- **Profile**: Manage personal information

### For Lecturers
- **Dashboard**: Student count, course overview, and pending tasks
- **Courses**: Manage teaching assignments
- **Upload Materials**: Share course resources and videos
- **Assignments**: Create and manage student assignments
- **Gradebook**: Enter and track student grades
- **Attendance**: Mark student attendance
- **Announcements**: Post course updates
- **Messages**: Communicate with students

### For Administrators
- **Dashboard**: Institutional statistics and KPIs
- **Students Management**: Add, edit, delete student records
- **Lecturers Management**: Manage faculty members
- **Departments**: Organize academic departments
- **Courses**: Create and manage courses
- **Timetable**: Schedule classes and resources
- **Finance**: Revenue tracking and payment management
- **Reports**: Generate institutional reports
- **Settings**: Configure system parameters

### For Super Administrators
- **Dashboard**: Platform-wide analytics
- **Institutions**: Manage multiple institutions
- **Subscriptions**: Track subscription plans and renewals
- **Analytics**: Detailed platform metrics
- **Plans**: Manage subscription tiers
- **Settings**: Global platform configuration

## 🌐 Multi-Language Support

UniHub supports multiple African languages:
- **Français** (French) - Default
- **English**
- Extensible to Lingala, Kituba, and other languages

Language files are located in `/languages/` directory in JSON format.

## 🎨 Theme System

- **Light Mode**: Professional light theme (default)
- **Dark Mode**: Eye-friendly dark theme
- Seamless theme switching with persistent storage
- All UI components support both themes

## 📱 Responsive Design

- **Desktop**: Full-featured interface (1024px and above)
- **Tablet**: Optimized layout (768px - 1024px)
- **Mobile**: Touch-friendly interface with hamburger menu (below 768px)
- Automatic sidebar collapse on small screens

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Icons**: Font Awesome 6.4.0
- **Charts**: Chart.js 3.9.1
- **Calendar**: FullCalendar.js (ready for integration)
- **Mock Data**: JavaScript objects for prototyping

## 📁 Project Structure

```
unihub/
├── index.html                 # Landing page
├── login.html                 # Login page
├── role-selection.html        # Role selection page
│
├── student/                   # Student portal
│   ├── dashboard.html
│   ├── courses.html
│   ├── assignments.html
│   ├── results.html
│   ├── fees.html
│   ├── timetable.html
│   ├── announcements.html
│   ├── messages.html
│   ├── calendar.html
│   └── profile.html
│
├── lecturer/                  # Lecturer portal
│   ├── dashboard.html
│   ├── courses.html
│   ├── upload-materials.html
│   ├── assignments.html
│   ├── gradebook.html
│   ├── attendance.html
│   ├── announcements.html
│   └── messages.html
│
├── admin/                     # Admin portal
│   ├── dashboard.html
│   ├── students.html
│   ├── lecturers.html
│   ├── departments.html
│   ├── courses.html
│   ├── timetable.html
│   ├── finance.html
│   ├── reports.html
│   ├── announcements.html
│   └── settings.html
│
├── super-admin/               # Super Admin portal
│   ├── dashboard.html
│   ├── institutions.html
│   ├── subscriptions.html
│   ├── analytics.html
│   ├── plans.html
│   └── settings.html
│
├── css/
│   └── style.css              # Main stylesheet with themes
│
├── js/
│   ├── script.js              # Global utilities
│   ├── sidebar.js             # Sidebar functionality
│   ├── language.js            # Language switching
│   └── theme.js               # Theme management
│
├── data/
│   └── mock-data.js           # Mock data for all features
│
└── languages/
    ├── fr.json                # French translations
    ├── en.json                # English translations
    ├── ln.json                # Lingala (placeholder)
    └── ktu.json               # Kituba (placeholder)
```

## 🚀 Getting Started

1. **Extract the project** to your web server or local directory
2. **Run a local static server** from the project root:
   ```powershell
   powershell -ExecutionPolicy Bypass -File tools/static-server.ps1 -Port 8000
   ```
3. **Open `http://127.0.0.1:8000/`** in a modern web browser
4. **Navigate through** the landing page or login
5. **Select a role** to view the corresponding dashboard

Opening the HTML files directly can break language loading in some browsers because translations are loaded with `fetch()`. A static server matches how the project behaves on GitHub Pages and other hosting.

### GitHub Pages

This project uses relative paths for local assets, so it can be hosted from a repository subpath such as `https://username.github.io/unihub/`.

1. Push the project to GitHub
2. Go to **Settings > Pages**
3. Set the source to the branch and folder that contain `index.html`
4. Open the generated Pages URL after GitHub finishes deploying

### Demo Credentials
- Any email/password combination works for demo purposes
- System automatically directs to role selection after login

## 🎨 Customization

### Adding Languages
1. Create a new JSON file in `languages/` (e.g., `ln.json` for Lingala)
2. Follow the structure of `fr.json` or `en.json`
3. Add language option to language selectors

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --color-primary: #4f46e5;
  --color-secondary: #06b6d4;
  --color-success: #10b981;
  /* ... more variables */
}
```

### CSS Organization

Most shared and page-level styles live in `css/style.css`. Avoid adding new `<style>` blocks inside HTML pages. For repeated visual patterns, add a reusable class in `css/style.css` and use that class in the HTML.

### Adding New Pages
1. Create HTML file in appropriate role directory
2. Include the navbar, sidebar, and main content structure
3. Link required JavaScript files:
   - `js/script.js`
   - `js/language.js`
   - `js/theme.js`
   - `js/sidebar.js`

## 📊 Mock Data

All data is stored in `data/mock-data.js`. To customize:

```javascript
const mockData = {
  currentUser: { /* user info */ },
  courses: [ /* course data */ ],
  students: [ /* student records */ ],
  // ... more data structures
};
```

## 🔄 Integration Ready

The frontend is designed to seamlessly integrate with:

- **Backend**: Node.js, Express, Django, Laravel
- **Database**: PostgreSQL, MongoDB, MySQL
- **Authentication**: JWT, OAuth, SAML
- **Payment**: Mobile Money (Airtel Money, MTN), Card payments
- **Notifications**: Email, SMS, Push notifications

## 📝 Key Design Principles

✅ **Professional**: Modern, enterprise-grade interface
✅ **Intuitive**: Clear navigation and user experience
✅ **Accessible**: WCAG compliant color contrasts
✅ **Performant**: Lightweight, no dependencies
✅ **Scalable**: Modular structure for easy expansion
✅ **Localizable**: Multi-language and regional support
✅ **Themeable**: Light and dark modes included

## 🌍 Target Markets

- **Congo-Brazzaville** (Initial launch)
- **Democratic Republic of Congo**
- **Sub-Saharan Africa**
- **Global institutions** with African operations

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is designed for UniHub SaaS Platform. All rights reserved.

## 🤝 Contributing

To extend UniHub:

1. Create new pages following the existing structure
2. Use the established CSS classes and utilities
3. Integrate with mock data for consistency
4. Ensure responsive design across all screen sizes
5. Test with language switching and theme toggling

## 📞 Support

For issues, feature requests, or customization needs, please contact the development team.

---

**UniHub** - Transforming Education Across Africa 🌍✨
