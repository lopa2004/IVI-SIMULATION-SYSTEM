# 🔗 IVI Simulation System — Interactive Simulation

**In-Vehicle Infotainment (IVI) System Project: Conceptual Architecture + Browser-Based Signal-Flow Simulation**

---

## 1. Project Overview

This project is an interactive browser-based simulation of a conceptual **In-Vehicle Infotainment (IVI) System**.

It demonstrates how different components of a vehicle infotainment system — including the **Driver, Smartphone, IVI HMI, IVI Controller, Media Service, Navigation Service, Projection Service, GPS Module, Map Database, Hardware Abstraction Layers, Vehicle Network, and Vehicle ECUs** — communicate and exchange data.

Instead of showing only a static architecture diagram, this project allows users to run different scenarios and watch the signal flow through the IVI architecture.

The simulation is developed using **HTML, CSS, and Vanilla JavaScript**. It does not require any external JavaScript framework.

---

## 2. Objective

The main objective of this project is to provide an interactive representation of an IVI system architecture and demonstrate how commands and data move between different software and vehicle components.

The simulation demonstrates:

- Media playback and audio output
- Navigation using GPS and map information
- Route projection to the vehicle display
- Smartphone interaction
- Incoming call handling
- Media interruption and recovery
- Vehicle network communication
- Live system-state changes
- Event-based signal-flow visualization

The interactive approach makes it easier to understand how different IVI services work together inside a vehicle infotainment architecture.

---

## 3. Architecture

The system is organized into three main zones:

### External Devices

Components outside the main IVI system:

- **Driver** — provides touch or voice commands.
- **Smartphone** — represents smartphone connectivity such as Android Auto / Apple CarPlay concepts.

### IVI System

The main infotainment stack consists of:

- **IVI HMI / Touch Display** — the interface through which the driver interacts with the system.
- **IVI Controller / Middleware** — receives commands and routes them to the appropriate service.
- **Media Service** — handles media and audio playback.
- **Navigation Service** — handles navigation, routing, and location information.
- **Projection Service** — prepares information for display projection.
- **Audio HAL** — represents the hardware abstraction layer between the Media Service and physical audio output.
- **Display HAL** — represents the hardware abstraction layer between projection software and the physical display.
- **GPS Module** — provides location information to the Navigation Service.
- **Map Database** — provides stored map information used for navigation.
- **Vehicle Speakers** — final audio output.
- **Central Display / HUD** — final visual output.

### Vehicle System

The vehicle side consists of:

- **Vehicle Network (CAN/LIN)** — conceptual communication network between the IVI Controller and vehicle systems.
- **Vehicle ECUs** — represent electronic control units that provide information such as speed, gear, and other vehicle-state data.

The basic system flow is:

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

---

## 4. Project Structure

```text
IVI-SIMULATION-SYSTEM/
│
├── index.html
├── README.md
│
├── css/
│   └── theme.css
│
└── js/
    ├── app.js
    ├── diagram.js
    ├── journal.js
    ├── scenarios.js
    ├── store.js
    └── topology.js
```

### File Description

- **index.html** — Contains the main page structure and user interface of the IVI simulation.

- **css/theme.css** — Contains the visual theme, layout, component styling, responsive design, and animation states.

- **js/topology.js** — Defines the IVI architecture, including zones, nodes, and connections between different components.

- **js/store.js** — Maintains the application state and stores the current status of different IVI features.

- **js/diagram.js** — Generates and updates the architecture diagram and handles visual signal-flow animation.

- **js/journal.js** — Manages the simulation event journal and displays events generated during scenarios.

- **js/scenarios.js** — Defines the interactive IVI scenarios, their steps, conditions, and resulting state changes.

- **js/app.js** — Main application logic that connects the user interface, scenarios, state, diagram, and event journal.

- **README.md** — Project documentation and instructions.

---

## 5. Requirements

To run this project, you need:

- A modern web browser
- Google Chrome (recommended), Microsoft Edge, or Mozilla Firefox
- No external JavaScript framework
- No special hardware
- No real vehicle connection

The project is designed as a browser-based educational simulation.

---

## 6. How to Run

### Option 1 — Run Directly

1. Download or clone the repository.
2. Open the `IVI-SIMULATION-SYSTEM` folder.
3. Locate `index.html`.
4. Open `index.html` using a modern browser.
5. The IVI Simulation System will load.
6. Use the available scenario controls to run the simulation.

### Option 2 — Clone from GitHub

Clone the repository:

```bash
git clone https://github.com/lopa2004/IVI-SIMULATION-SYSTEM.git
```

Open the project directory:

```bash
cd IVI-SIMULATION-SYSTEM
```

Then open `index.html` in your browser.

---

## 7. How to Demonstrate the Project

A simple demonstration sequence can be followed:

1. **Open the simulator.**  
   Introduce the major areas of the architecture: Driver/Smartphone, IVI System, and Vehicle System.

2. **Explain the main signal flow.**

   ```text
   Driver → IVI HMI → IVI Controller
   ```

   Explain that the IVI Controller works as the central routing component.

3. **Run Play Music.**

   Explain the signal path:

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

4. **Run Start Navigation.**

   Explain that the Navigation Service receives information from both the GPS Module and Map Database.

5. **Run Project Route.**

   Explain the visual-output path:

   ```text
   Navigation Service
          ↓
   Projection Service
          ↓
      Display HAL
          ↓
   Central Display / HUD
   ```

6. **Run Incoming Call while media is playing.**

   Explain how the incoming call interacts with the media feature and causes active media to pause.

7. **Run End Call.**

   Explain how media can resume after the call ends when it was previously interrupted by the call.

8. **Reset the simulation.**

   Return the system to its initial idle state.

---

## 8. Simulation Scenarios

| Button / Scenario | What It Demonstrates |
|---|---|
| **Play Music** | Media playback through Media Service → Audio HAL → Vehicle Speakers |
| **Start Navigation** | Navigation Service using GPS and Map Database information |
| **Project Route** | Navigation → Projection Service → Display HAL → Display/HUD |
| **Incoming Call** | Smartphone call interrupting active media playback |
| **End Call** | Ending the call and restoring the previous media state when required |
| **Reset** | Returns the complete simulation to its initial idle state |

Each scenario updates the architecture visualization, system state, and event journal.

---

## 9. Component Description

| Component | Purpose |
|---|---|
| **Driver** | Provides touch or voice input to the system |
| **Smartphone** | Represents an external smartphone and projection source |
| **IVI HMI / Touch Display** | User interface through which the driver interacts with the IVI system |
| **IVI Controller / Middleware** | Central component that receives commands and routes them to services |
| **Media Service** | Handles media playback and audio operations |
| **Navigation Service** | Handles navigation, routing, and location information |
| **Projection Service** | Prepares navigation or other information for visual output |
| **Audio HAL** | Represents the abstraction between media software and audio hardware |
| **GPS Module** | Supplies location information to Navigation Service |
| **Map Database** | Supplies stored map information for navigation |
| **Display HAL** | Represents the abstraction between projection software and display hardware |
| **Vehicle Speakers** | Final audio output |
| **Central Display / HUD** | Final visual output |
| **Vehicle Network (CAN/LIN)** | Represents communication between the IVI system and vehicle ECUs |
| **Vehicle ECUs** | Provide conceptual vehicle information such as speed and gear |

---

## 10. Data Flow

The important interfaces represented in the simulation include:

- **Driver → IVI HMI** — User input / commands
- **IVI HMI ↔ IVI Controller** — User commands and system responses
- **Smartphone ↔ IVI HMI** — Smartphone interaction / projection
- **IVI Controller → Media Service** — Media commands
- **IVI Controller → Navigation Service** — Navigation commands
- **IVI Controller → Projection Service** — Projection requests
- **GPS Module → Navigation Service** — Location information
- **Map Database → Navigation Service** — Map information
- **Navigation Service → Projection Service** — Route information
- **Media Service → Audio HAL** — Audio data
- **Audio HAL → Vehicle Speakers** — Final audio output
- **Projection Service → Display HAL** — Display content
- **Display HAL → Central Display / HUD** — Final visual output
- **IVI Controller ↔ Vehicle Network** — Vehicle information
- **Vehicle Network ↔ Vehicle ECUs** — CAN/LIN communication

The GPS Module and Map Database act as separate information sources for the Navigation Service.

---

## 11. Media Flow

When the user selects **Play Music**, the signal follows:

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

The Media Service handles the playback request and sends the resulting audio information through the Audio HAL to the vehicle speakers.

---

## 12. Navigation Flow

Navigation uses two important information sources:

```text
GPS Module ───────┐
                  ↓
            Navigation Service
                  ↑
Map Database ─────┘
```

The GPS Module provides location information while the Map Database provides map information.

The Navigation Service uses these inputs to represent route processing.

---

## 13. Projection Flow

After navigation is active, route information can be sent to the display system.

```text
Navigation Service
        ↓
Projection Service
        ↓
Display HAL
        ↓
Central Display / HUD
```

The Projection Service prepares the content and the Display HAL represents the interface to the physical visual output.

---

## 14. Incoming Call Handling

The project also demonstrates interaction between smartphone calls and media playback.

When a call arrives:

```text
Smartphone
     ↓
   IVI HMI
     ↓
IVI Controller
     ↓
Media Service
     ↓
Media Paused
```

If media was playing before the incoming call, the simulation can temporarily pause it.

When the call ends, the system can restore the previous media state.

---

## 15. Vehicle Data Flow

The conceptual vehicle communication path is:

```text
IVI Controller
      ↕
Vehicle Network
   (CAN/LIN)
      ↕
 Vehicle ECUs
```

This represents communication between the infotainment system and other electronic systems inside the vehicle.

---

## 16. Live System State

The simulation maintains the current state of important features such as:

- Media
- Navigation
- Projection
- Call
- GPS
- Vehicle Network
- Overall system mode

The state changes according to the scenario currently being executed.

---

## 17. Event Journal

The Event Journal records events generated during each simulation.

A typical flow may appear as:

```text
Driver interaction
        ↓
HMI receives command
        ↓
IVI Controller routes request
        ↓
Service processes request
        ↓
HAL processes output
        ↓
Output generated
```

This makes the internal signal flow easier to follow during a demonstration.

---

## 18. Key Concepts Demonstrated

The project demonstrates the following concepts:

- In-Vehicle Infotainment architecture
- Human Machine Interface (HMI)
- Middleware and command routing
- Media services
- Navigation services
- Projection services
- Hardware Abstraction Layer (HAL)
- GPS and map information
- Vehicle network communication
- CAN/LIN concepts
- ECU interaction
- State management
- Event-driven programming
- Interactive signal-flow visualization

---

## 19. Limitations

This is a **conceptual and educational simulation only**.

It does not implement a production automotive infotainment platform.

Specifically:

- No real CAN bus is connected.
- No real LIN network is connected.
- GPS information is simulated.
- Vehicle ECU communication is simulated.
- Audio HAL is represented conceptually.
- Display HAL is represented conceptually.
- No actual Android Automotive OS is implemented.
- No actual Android Auto or Apple CarPlay connection is established.
- Vehicle data and simulation events are generated for demonstration purposes.

---

## 20. Future Scope

Possible future improvements include:

- Integration with real Android Automotive concepts
- Real CAN bus interface
- OBD-II integration
- Real GPS data
- Voice-control functionality
- Climate-control simulation
- Additional vehicle ECU interaction
- Real vehicle sensor information
- Advanced system diagnostics
- Additional IVI scenarios
- Hardware-in-the-loop testing
- Raspberry Pi based touchscreen prototype

---

## 21. Educational Purpose

This project is designed for educational and demonstration purposes.

It can be used to understand:

- Automotive infotainment architecture
- Software component interaction
- Signal and data flow
- HMI communication
- Service-based architecture
- Hardware abstraction
- Vehicle network concepts
- Interactive automotive system simulation

---


