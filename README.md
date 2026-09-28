#  IVI SIMULATION SYSTEM

### In-Vehicle Infotainment (IVI) System — Interactive Architecture & Signal-Flow Simulation

An interactive browser-based simulation that demonstrates the architecture, communication, and signal flow of an **In-Vehicle Infotainment (IVI) System**.

The project visualizes how the **Driver, Smartphone, IVI HMI, IVI Controller, Media Service, Navigation Service, Projection Service, Hardware Abstraction Layers (HAL), GPS, Map Database, Vehicle Network, and Vehicle ECUs** interact with each other.

The simulation is developed using **HTML, CSS, and Vanilla JavaScript** and can run directly in a modern web browser.

---

##  1. Project Overview

The **IVI Simulation System** is a browser-based educational simulation of a conceptual automotive **In-Vehicle Infotainment (IVI) architecture**.

Modern vehicles use infotainment systems to provide features such as:

- 🎵 Music and media playback
- 🗺️ Navigation and route guidance
- 📱 Smartphone connectivity
- 📺 Information projection
- ☎️ Incoming call handling
- 🚘 Vehicle information
- 📡 Communication with vehicle systems

Instead of presenting only a static architecture diagram, this project provides an **interactive signal-flow simulation**.

Users can trigger different scenarios and observe how commands and data travel through different IVI components.

The system also provides a **Live State panel** and an **Event Journal** to show what is happening during each simulation.

---

##  2. Project Objective

The main objective of this project is to demonstrate the conceptual architecture and data flow of an automotive **In-Vehicle Infotainment System**.

The project helps users understand:

- Driver interaction with the infotainment system
- HMI and controller communication
- Media playback architecture
- Navigation and GPS communication
- Map database interaction
- Smartphone projection concepts
- Hardware Abstraction Layer (HAL)
- Vehicle network communication
- CAN/LIN concepts
- Vehicle ECU interaction
- Audio output
- Visual output
- Cross-feature interaction such as incoming calls interrupting music

---

##  3. System Architecture

The IVI architecture follows the general flow:

```text
Driver / Smartphone
        ↓
      IVI HMI
        ↓
  IVI Controller
        ↓
      Services
        ↓
       HAL
        ↓
      Output
```

The **IVI Controller** works as the central communication and routing layer of the system.

It receives commands from the HMI and sends them to the appropriate service.

The system is conceptually divided into:

### External Devices

- Driver
- Smartphone

### IVI System

- IVI HMI / Touch Display
- IVI Controller / Middleware
- Media Service
- Navigation Service
- Projection Service
- Audio HAL
- Display HAL
- GPS Module
- Map Database
- Vehicle Speakers
- Central Display / HUD

### Vehicle System

- Vehicle Network (CAN/LIN)
- Vehicle ECUs

---

##  4. Architecture Flow

```text
                         DRIVER
                    (Touch / Voice)
                          │
                          ▼
                    ┌───────────┐
                    │  IVI HMI  │
                    │  Display  │
                    └─────┬─────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ IVI CONTROLLER  │
                 │ Middleware /    │
                 │ Routing         │
                 └───────┬─────────┘
                         │
             ┌───────────┼───────────┐
             │           │           │
             ▼           ▼           ▼
       ┌──────────┐ ┌──────────┐ ┌────────────┐
       │  MEDIA   │ │NAVIGATION│ │ PROJECTION │
       │ SERVICE  │ │ SERVICE  │ │  SERVICE   │
       └────┬─────┘ └────┬─────┘ └─────┬──────┘
            │             ▲             │
            ▼             │             ▼
       ┌─────────┐   ┌────┴─────┐  ┌───────────┐
       │AUDIO HAL│   │ GPS / MAP│  │DISPLAY HAL│
       └────┬────┘   └──────────┘  └─────┬─────┘
            │                             │
            ▼                             ▼
       ┌─────────┐                 ┌─────────────┐
       │SPEAKERS │                 │DISPLAY / HUD│
       └─────────┘                 └─────────────┘


               VEHICLE COMMUNICATION

                 IVI CONTROLLER
                       │
                       ▼
               VEHICLE NETWORK
                  (CAN / LIN)
                       │
                       ▼
                  VEHICLE ECUs
```

---

##  5. Architecture Diagram

The architecture diagram represents the communication between the external devices, IVI software services, hardware abstraction layers, outputs, and vehicle systems.

If the architecture image is stored inside the `docs` folder as `architecture.png`, it will appear below:

![IVI System Architecture](docs/architecture.png)

---

##  6. Project Structure

```text
IVI-SIMULATION-SYSTEM/
│
├── index.html
├── README.md
│
├── css/
│   └── theme.css
│
├── js/
│   ├── app.js
│   ├── diagram.js
│   ├── journal.js
│   ├── scenarios.js
│   ├── store.js
│   └── topology.js
│
└── docs/
    ├── architecture.png
    └── IVI_Project_Report_Lopamudra_Roy.pdf
```

### File Description

| File | Purpose |
|---|---|
| `index.html` | Main application interface and page structure |
| `css/theme.css` | UI design, layout, responsive styling and visual states |
| `js/app.js` | Main application logic and scenario execution |
| `js/diagram.js` | Generates and controls the IVI architecture diagram and animations |
| `js/journal.js` | Handles the simulation event journal |
| `js/scenarios.js` | Defines interactive IVI simulation scenarios |
| `js/store.js` | Handles application state management |
| `js/topology.js` | Defines architecture nodes, zones and connections |
| `README.md` | Complete project documentation |
| `docs/architecture.png` | IVI architecture diagram |
| `docs/IVI_Project_Report_Lopamudra_Roy.pdf` | Detailed project report |

---

##  7. Technologies Used

The project uses:

- HTML5
- CSS3
- Vanilla JavaScript
- SVG
- DOM Manipulation
- Event-driven Programming
- State Management
- Git
- GitHub

### Core Technology Stack

```text
HTML
  ↓
Page Structure

CSS
  ↓
Design + Layout + Animation

JavaScript
  ↓
Simulation Logic + State + Events

SVG
  ↓
Interactive Architecture Diagram
```

No external JavaScript framework is required.

---

## 💻 8. Requirements

To run this project, you only need a modern web browser.

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

No external software package is required to run the simulation.

---

## 🚀 9. How to Run

### Method 1 — Run Directly

1. Download the repository.
2. Extract the project folder if required.
3. Open the project folder.
4. Locate `index.html`.
5. Open `index.html` using a modern web browser.
6. The IVI Simulation System will start.

---

### Method 2 — Clone from GitHub

Clone the repository:

```bash
git clone https://github.com/lopa2004/IVI-SIMULATION-SYSTEM.git
```

Open the project directory:

```bash
cd IVI-SIMULATION-SYSTEM
```

Then open:

```text
index.html
```

in your browser.

---

##  10. Simulation Scenarios

The project provides multiple interactive scenarios that demonstrate different IVI operations.

### Available Scenarios

| Scenario | Purpose |
|---|---|
| 🎵 Play Music | Demonstrates media playback signal flow |
| 🗺️ Start Navigation | Demonstrates navigation using GPS and map information |
| 📺 Project Route | Demonstrates route projection to the display/HUD |
| ☎️ Incoming Call | Demonstrates call interruption of active media |
| ✕ End Call | Demonstrates recovery after the call ends |
| 🔄 Reset | Returns the simulation to the initial idle state |

---

##  11. Music Playback Flow

When the driver selects **Play Music**, the command travels through the following components:

```text
Driver
  ↓
IVI HMI
  ↓
IVI Controller
  ↓
Media Service
  ↓
Audio HAL
  ↓
Vehicle Speakers
```

### Explanation

1. The Driver sends a command through the HMI.
2. The IVI HMI sends the command to the IVI Controller.
3. The IVI Controller routes the request to the Media Service.
4. The Media Service processes the media request.
5. Audio data is passed to the Audio HAL.
6. The Audio HAL sends the final audio output to the Vehicle Speakers.

---

##  12. Navigation Flow

When navigation starts, the **Navigation Service** uses location and map information.

```text
GPS Module ─────────┐
                    │
                    ▼
             Navigation Service
                    ▲
                    │
Map Database ───────┘
```

The complete user-command flow is:

```text
Driver
   ↓
IVI HMI
   ↓
IVI Controller
   ↓
Navigation Service
   ↑
   ├──── GPS Module
   │
   └──── Map Database
```

### GPS Module

Provides location information to the Navigation Service.

### Map Database

Provides stored map and routing information.

### Navigation Service

Combines location and map information to determine the route.

---

##  13. Route Projection Flow

Once navigation is active, the route can be projected onto the vehicle display.

```text
Navigation Service
        ↓
Projection Service
        ↓
Display HAL
        ↓
Central Display / HUD
```

The Projection Service prepares navigation information for visual output.

The Display HAL represents the hardware abstraction layer responsible for transferring display content to the physical display or HUD.

---

##  14. Smartphone Integration

The Smartphone represents an external device that can interact with the IVI system.

Conceptually, it can represent technologies such as:

- Android Auto
- Apple CarPlay
- Media streaming
- Calls
- Navigation projection

Basic communication flow:

```text
Smartphone
     ↕
   IVI HMI
     ↕
IVI Controller
```

---

##  15. Incoming Call Flow

The project demonstrates cross-feature interaction using an incoming call scenario.

If music is currently playing and a call arrives:

```text
Smartphone
     ↓
   IVI HMI
     ↓
IVI Controller
     ↓
Media Service
     ↓
Pause Music
```

This demonstrates how one IVI feature can temporarily affect another feature.

---

##  16. End Call and Media Resume

When the call ends, the system can restore the previous media state.

```text
Call Ends
    ↓
IVI Controller
    ↓
Media Service
    ↓
Audio HAL
    ↓
Vehicle Speakers
    ↓
Music Resumes
```

Media resumes only when it was previously paused because of the incoming call.

---

##  17. Vehicle Data Flow

The IVI Controller communicates conceptually with the vehicle through a CAN/LIN network.

```text
IVI Controller
      ↕
Vehicle Network
   (CAN/LIN)
      ↕
 Vehicle ECUs
```

Vehicle ECUs can provide information such as:

- Vehicle speed
- Gear position
- Ignition state
- Other vehicle-state information

The Vehicle Network represents the communication layer between the infotainment system and vehicle ECUs.

---

##  18. Live System State

The simulation provides live information about the current system state.

The state panel can represent information such as:

- System Mode
- Media State
- Navigation State
- Projection State
- Call State
- Vehicle Network State
- GPS State

For example:

```text
System Mode     : ACTIVE
Media           : PLAYING
Navigation      : ACTIVE
Projection      : ACTIVE
Call            : IDLE
Vehicle Network : CONNECTED
GPS             : AVAILABLE
```

This makes it easier to understand how different scenarios affect the overall IVI system.

---

##  19. Event Journal

The application contains an **Event Journal** that records simulation events.

Example:

```text
Driver interaction detected
        ↓
HMI received command
        ↓
IVI Controller routed command
        ↓
Service received request
        ↓
Service processed data
        ↓
HAL processed output
        ↓
Output generated
```

The journal provides a step-by-step representation of the signal movement through the architecture.

---

## 🧩 20. Component Description

| Component | Description |
|---|---|
| **Driver** | Provides touch, voice, or user commands |
| **Smartphone** | Represents an external smartphone and projection source |
| **IVI HMI** | Driver-facing touchscreen and user interface |
| **IVI Controller** | Central middleware and routing component |
| **Media Service** | Handles media playback and audio-related operations |
| **Navigation Service** | Handles navigation, routing and location information |
| **Projection Service** | Prepares information for visual projection |
| **Audio HAL** | Hardware abstraction layer between media software and audio hardware |
| **Display HAL** | Hardware abstraction layer between software and display hardware |
| **GPS Module** | Provides location information |
| **Map Database** | Provides stored map and route information |
| **Vehicle Speakers** | Final audio output |
| **Central Display / HUD** | Final visual output |
| **Vehicle Network** | Represents CAN/LIN vehicle communication |
| **Vehicle ECUs** | Electronic control units providing vehicle-state information |

---

##  21. Complete Data Flow

Important interfaces represented in the architecture include:

```text
Driver → IVI HMI

Smartphone ↔ IVI HMI

IVI HMI ↔ IVI Controller

IVI Controller → Media Service

IVI Controller → Navigation Service

IVI Controller → Projection Service

GPS Module → Navigation Service

Map Database → Navigation Service

Navigation Service → Projection Service

Media Service → Audio HAL

Audio HAL → Vehicle Speakers

Projection Service → Display HAL

Display HAL → Central Display / HUD

IVI Controller ↔ Vehicle Network

Vehicle Network ↔ Vehicle ECUs
```

---

##  22. Overall System Flow

The complete conceptual flow can be summarized as:

```text
INPUT
  ↓
Driver / Smartphone
  ↓
INTERFACE
  ↓
IVI HMI
  ↓
CONTROL
  ↓
IVI Controller
  ↓
SERVICE LAYER
  ↓
Media / Navigation / Projection
  ↓
HARDWARE ABSTRACTION
  ↓
Audio HAL / Display HAL
  ↓
OUTPUT
  ↓
Vehicle Speakers / Display / HUD
```

---

##  23. Key Concepts Demonstrated

This project demonstrates several important automotive software concepts:

### Human Machine Interface (HMI)

Provides the interaction point between the driver and the infotainment system.

### Middleware

The IVI Controller acts as the central communication layer.

### Service-Oriented Architecture

Media, Navigation and Projection are represented as separate services.

### Hardware Abstraction Layer

Audio HAL and Display HAL provide abstraction between software services and physical outputs.

### Vehicle Communication

CAN/LIN communication is conceptually represented through the Vehicle Network.

### State Management

The simulator maintains system states such as media, navigation, projection and call activity.

### Event-Driven Programming

User actions trigger scenarios that update the application state and architecture visualization.

---

##  24. How to Demonstrate the Project

A simple demonstration sequence can be:

### Step 1 — Open the Simulator

Open `index.html` in the browser.

Explain the main architecture components.

### Step 2 — Explain the Main Flow

Explain:

```text
Driver → HMI → Controller → Service → HAL → Output
```

### Step 3 — Play Music

Select **Play Music**.

Explain:

```text
Driver → HMI → Controller → Media → Audio HAL → Speakers
```

### Step 4 — Start Navigation

Select **Start Navigation**.

Explain how the Navigation Service receives information from:

```text
GPS Module + Map Database
```

### Step 5 — Project Route

Select **Project Route**.

Explain:

```text
Navigation → Projection → Display HAL → HUD
```

### Step 6 — Incoming Call

While music is active, trigger **Incoming Call**.

Explain how the system temporarily pauses media.

### Step 7 — End Call

End the call and demonstrate how the previous media state can be restored.

### Step 8 — Reset

Use the reset option to return the system to its initial state.

---

##  25. Limitations

This project is a **conceptual and educational simulation**.

It does not implement a production automotive infotainment platform.

The project does not contain:

- Real CAN bus communication
- Real LIN communication
- Real vehicle ECUs
- Real GPS hardware
- Production Audio HAL
- Production Display HAL
- Actual Android Automotive OS
- Actual Android Auto connection
- Actual Apple CarPlay connection
- Real vehicle sensor communication

The GPS, CAN/LIN, ECU, HAL, smartphone, system states, timestamps, and events shown in the application are simulated for educational demonstration.

---

##  26. Future Scope

The project can be extended with:

- Real-time CAN data simulation
- OBD-II adapter integration
- Real vehicle sensor information
- Real GPS integration
- Voice command functionality
- Climate-control simulation
- Additional ECU interaction
- Android Automotive integration concepts
- Real-time route visualization
- Advanced diagnostic information
- Dark/light theme selection
- Additional IVI scenarios
- Hardware-in-the-loop (HIL) testing
- Raspberry Pi touchscreen prototype

---

##  27. Educational Purpose

The **IVI Simulation System** was developed for educational and demonstration purposes.

It can help students understand:

- Automotive software architecture
- In-Vehicle Infotainment systems
- Signal and data flow
- Service communication
- HMI interaction
- Hardware abstraction
- Vehicle networking
- CAN/LIN concepts
- ECU communication
- Interactive web-based system simulation

---

##  28. Project Documentation

Additional project documentation can be stored inside the `docs` directory.

### Architecture Diagram

[View Architecture Diagram](docs/architecture.png)

### Project Report

[View Project Report](docs/IVI_Project_Report_Lopamudra_Roy.pdf)

---

##  29. Clone Repository

Use the following command to clone the project:

```bash
git clone https://github.com/lopa2004/IVI-SIMULATION-SYSTEM.git
```

Repository:

**IVI-SIMULATION-SYSTEM**

---




 
