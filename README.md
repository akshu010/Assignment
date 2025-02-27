# Assignment
Micro-Frontend Architecture Assignment:-

This project showcases a micro-frontend architecture implementation consisting of three core applications:

Host Application: The main wrapper application that integrates all micro-frontends and manages the shared design system.
Chat Application: A standalone micro-frontend for chat-related functionality.
Email Application: A standalone micro-frontend for email-related functionality.

The project demonstrates seamless integration, a reusable design system, inter-application communication, and scalability.

Technologies Used:-

React: For building the user interface.
Webpack Module Federation: Facilitates dynamic micro-frontend loading and sharing across applications.
React Router: Enables navigation within the host application.
Project Features:-
Micro-Frontend Integration:

Uses Webpack Module Federation for dynamic and seamless loading of chat and email applications into the host application.
Design System:

A central design system with shared, reusable UI components that maintain styling consistency across all applications.
Communication Between Applications:

Enables communication between the host and micro-frontends using events and shared state to ensure smooth interactions.
Scalability:

The architecture is designed to easily support the addition of new micro-frontends.

Folder Structure:-
microfrontend/
├── chat-application/
│   └── (Chat app source code)
├── email-application/
│   └── (Email app source code)
└── host-application/
    └── (Host app source code)

Setup Instructions:-

Clone the Repository
Clone the repository:
bash
Copy
Edit
git clone https://github.com/akshu010/Assignment.git
cd microfrontend

Install Dependencies
Navigate to each application folder and install dependencies:

bash
Copy
Edit
cd host-application
npm install
Repeat the above steps for chat-application and email-application.
Run the Applications
Start the host and micro-frontend applications:

Host Application:
npm start
Chat Application:
npm start
Email Application:
npm start
Open your browser and navigate to http://localhost:3008 to access the main application.

Architectural Decisions:-
Module Federation:

Enables dynamic loading of micro-frontends, improving flexibility and modularity.
Centralized Design System:

Ensures consistent UI across all applications using shared components and styles.
Inter-App Communication:

Utilizes event listeners and shared state for communication between micro-frontends and the host.
Scalability:

The architecture can easily accommodate the addition of future micro-frontends.

Trade-Offs and Considerations:-

Complexity: The micro-frontend approach introduces complexity due to managing multiple applications.
Performance: Initial loading may be slower due to on-demand loading of micro-frontends, but it enhances overall modularity.

