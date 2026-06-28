import roverPic from "../assets/roverpic.jpg";
import lunaOverviewScreenshot from "../assets/Screenshot 2026-06-27 154806.png";
import lunaControllerScreenshot from "../assets/Screenshot 2026-06-27 154831.png";
import lunaCameraScreenshot from "../assets/Screenshot 2026-06-27 154842.png";
import postureDashboardOverview from "../assets/psoture1.png";
import postureSensorDashboard from "../assets/posture2.png";
import postureTelemetryPacket from "../assets/psoture3.png";
import smartLightLandingPage from "../assets/smartLightlandingpage.jpg";
import smartLightControls from "../assets/smartLightcontrols.jpg";
import travelAppMainPage from "../assets/Screenshot 2026-06-27 220906.png";
import travelAppFlightsPage from "../assets/Screenshot 2026-06-27 220919.png";
import travelAppHotelsPage from "../assets/Screenshot 2026-06-27 220926.png";
import travelAppAttractionsPage from "../assets/Screenshot 2026-06-27 220941.png";

export const projects = [
    {   
        id: 1,
        title: "FIU Panther Robotics Luna1 Rover",
        description: "Distributed NASA Lunabotics rover system connecting PC controls, Jetson vision, Raspberry Pi networking, and Arduino firmware.",
        details: [
            "Streams controller/status packets over a CRC32-validated TCP protocol.",
            "Routes rover commands from Raspberry Pi to Arduino hardware over serial."
        ],
        contributions: [
            "Added Arduino serial control, rover state gates, actuator updates, and hall-effect telemetry.",
            "Improved dashboard UI/state display and contributed Jetson camera, autonomy, and costmap work."
        ],
        techStack: ["Go", "Python", "C++", "C", "JavaScript", "Raspberry Pi", "Jetson Nano", "Arduino", "TCP", "Serial", "CRC32", "ROS"],
        images: [
            {
                src: roverPic,
                alt: "FIU Luna1 rover hardware with blue wheels and aluminum frame"
            },
            {
                src: lunaOverviewScreenshot,
                alt: "FIU Lunabotics rover control dashboard overview"
            },
            {
                src: lunaControllerScreenshot,
                alt: "Luna1 rover dashboard controller input view"
            },
            {
                src: lunaCameraScreenshot,
                alt: "Luna1 rover dashboard camera status view"
            }
        ],
        projectUrl: "https://github.com/FIU-Panther-Robotics/FIU-Luna1"
    },
    {
        id: 2,
        title: "WearYourPosture",
        description: "Wearable posture-correction device that monitors body alignment and provides feedback when poor posture is sustained.",
        details: [
            "Uses an ESP32 and MPU6050 IMU for real-time orientation sensing.",
            "Includes posture thresholds, timing checks, and frontend telemetry for testing."
        ],
        contributions: [
            "Added MPU6050 register/data reads and integrated sensor flow into firmware.",
            "Worked on posture math, Bluetooth/multiplexer drivers, and frontend telemetry logic."
        ],
        techStack: ["C++", "C", "JavaScript", "React", "Vite", "CSS", "ESP32", "MPU6050", "Bluetooth", "CMake"],
        images: [
            {
                src: postureDashboardOverview,
                alt: "WearYourPosture live dashboard overview"
            },
            {
                src: postureSensorDashboard,
                alt: "WearYourPosture sensor axes and temperature dashboard"
            },
            {
                src: postureTelemetryPacket,
                alt: "WearYourPosture telemetry packet dashboard"
            }
        ],
        projectUrl: "https://github.com/gabenogu/WearYourPosture"
    },
    {
        id: 3,
        title: "SmartLightRemote",
        description: "Android Kotlin app for controlling smart lights with power, brightness, and color controls.",
        details: [
            "Implements a light detail screen with Material switches, SeekBar brightness control, and ViewBinding.",
            "Includes a custom HSV color picker with live preview before applying the selected color."
        ],
        techStack: ["Kotlin", "Android", "Material Design", "ViewBinding", "Gradle"],
        images: [
            {
                src: smartLightLandingPage,
                alt: "SmartLightRemote home screen with a grid of smart lights"
            },
            {
                src: smartLightControls,
                alt: "SmartLightRemote light controls screen with power, brightness, and color button"
            }
        ],
        projectUrl: "https://github.com/Gabe0312/SmartLightRemote"
    },
    {
        id: 4,
        title: "All-in-One Travel App",
        description: "Group travel-planning web app for flights, hotels, events, attractions, weather, and trip discovery.",
        details: [
            "Uses Flask routes with external APIs for travel search, weather, events, hotels, and nearby attractions.",
            "Includes map-based attraction discovery with city/category filters and styled travel pages."
        ],
        contributions: [
            "Integrated Google Maps/Places API changes for the attraction finder flow.",
            "Updated map templates, CSS, JavaScript, and fixed flight page backend errors."
        ],
        techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Google Maps API", "Ticketmaster API", "Eventbrite API", "Weather API"],
        images: [
            {
                src: travelAppMainPage,
                alt: "TravelBuddy main page with popular destinations"
            },
            {
                src: travelAppFlightsPage,
                alt: "TravelBuddy flight search page"
            },
            {
                src: travelAppHotelsPage,
                alt: "TravelBuddy hotel search page"
            },
            {
                src: travelAppAttractionsPage,
                alt: "TravelBuddy attractions search page"
            }
        ],
        projectUrl: "https://github.com/argeliorh98/All-in-one-travel-app"
    },
    {
        id: 5,
        title: "Job Application Tracker",
        description: "Flask and MySQL web app for organizing job applications, companies, contacts, and saved roles.",
        details: [
            "Includes dashboard metrics, CRUD workflows, interview notes, and delete safeguards.",
            "Compares user skills against job requirements to calculate match percentages.",
            "*Video Demo Available in GitHub README, Click View Project Button*"
        ],
        techStack: ["Python", "Flask", "MySQL", "HTML", "CSS"],
        imageUrl: "",
        projectUrl: "https://github.com/Gabe0312/job-application-tracker"
    }
];
