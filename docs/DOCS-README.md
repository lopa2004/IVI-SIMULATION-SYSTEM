# IVI System Documentation & Artifact Index

This directory serves as the technical documentation repository and artifact catalog for the **In-Vehicle Infotainment (IVI) System Conceptual Architecture and Interactive Simulation** project.

---

## Live Interactive Deployment

The fully functional browser-based IVI simulation is hosted via GitHub Pages and can be accessed directly without installation.

- **Live Interactive Simulator:** [https://lopa2004.github.io/IVI-SIMULATION-SYSTEM/](https://lopa2004.github.io/IVI-SIMULATION-SYSTEM/)
- **Project Source Repository:** [https://github.com/lopa2004/IVI-SIMULATION-SYSTEM](https://github.com/lopa2004/IVI-SIMULATION-SYSTEM)

The simulator is developed using native web technologies including **HTML5, CSS3, Vanilla JavaScript, and SVG-based visualization**. It demonstrates the conceptual architecture, component interactions, system-state transitions, and signal flow of an In-Vehicle Infotainment system.

The application runs directly in a modern web browser and does not require an external JavaScript framework or build pipeline.

---

## Directory Manifest & Artifact Breakdown

| File | Format | Description and Scope |
|---|---|---|
| `IVI_Project_Report_Lopamudra_Roy.pdf` | PDF | **Primary Project Report:** Contains the detailed documentation of the IVI Simulation System, including the project objective, conceptual architecture, system components, implementation methodology, signal flow, simulation behavior, limitations, and future scope. |
| `Project design.png` | PNG | **System Design:** Visual representation of the conceptual IVI architecture showing the Driver, Smartphone, IVI HMI, IVI Controller, application services, hardware abstraction layers, system outputs, Vehicle Network, and Vehicle ECUs. |

---

## Architectural Context and Domain Overview

The IVI Simulation System represents a conceptual automotive infotainment architecture organized into three primary operational domains:

1. External Domain
2. IVI System Core
3. Vehicle Domain

These domains communicate through defined conceptual interfaces and signal-flow paths.

### 1. External Domain

#### Driver

The Driver represents the primary operator of the infotainment system.

The Driver interacts with the system through the IVI HMI and can initiate operations such as media playback, navigation, route projection, and other supported simulation scenarios.

Basic interaction:

```text
Driver
   |
   v
IVI HMI
```

#### Smartphone

The Smartphone represents an external mobile device connected conceptually to the IVI environment.

It can participate in operations related to:

- Smartphone connectivity
- Incoming calls
- Media interaction
- Projection concepts
- Android Auto / Apple CarPlay concepts

Conceptual communication:

```text
Smartphone
     |
     v
   IVI HMI
```

---

## 2. IVI System Core

The IVI System Core represents the main infotainment software and hardware abstraction architecture.

The primary components include:

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

### IVI HMI / Touch Display

The IVI HMI represents the driver-facing Human Machine Interface.

Its responsibilities include:

- Receiving user interaction
- Forwarding user commands
- Presenting system information
- Providing access to simulation scenarios

Conceptual flow:

```text
Driver
   |
   v
IVI HMI
   |
   v
IVI Controller
```

### IVI Controller / Middleware

The IVI Controller acts as the central routing and coordination component of the architecture.

It receives commands from the IVI HMI and routes them to the appropriate application service.

```text
                   IVI Controller
                         |
          +--------------+--------------+
          |              |              |
          v              v              v
    Media Service   Navigation     Projection
                      Service        Service
```

The controller also represents the connection between the infotainment system and the conceptual vehicle network.

---

## 3. Application Services

The application-service layer contains specialized components responsible for individual infotainment functions.

### Media Service

The Media Service manages conceptual media playback.

Its responsibilities include:

- Receiving media-control commands
- Starting media playback
- Pausing media playback
- Responding to call interruptions
- Restoring the previous media state when applicable
- Sending audio information to the Audio HAL

Media flow:

```text
IVI Controller
      |
      v
Media Service
      |
      v
  Audio HAL
      |
      v
Vehicle Speakers
```

### Navigation Service

The Navigation Service represents navigation and route-processing functionality.

It receives information from two conceptual data sources:

- GPS Module
- Map Database

```text
GPS Module --------+
                   |
                   v
            Navigation Service
                   ^
                   |
Map Database ------+
```

The GPS Module provides location information, while the Map Database provides stored map information required for route processing.

### Projection Service

The Projection Service prepares navigation or other visual information for presentation on the vehicle display.

```text
Navigation Service
        |
        v
Projection Service
        |
        v
Display HAL
        |
        v
Central Display / HUD
```

---

## 4. Hardware Abstraction Layer

The architecture includes conceptual hardware abstraction components that separate application services from physical output devices.

### Audio HAL

The Audio HAL represents the abstraction between the Media Service and the vehicle audio output.

```text
Media Service
     |
     v
 Audio HAL
     |
     v
Vehicle Speakers
```

### Display HAL

The Display HAL represents the abstraction between the Projection Service and the vehicle display hardware.

```text
Projection Service
        |
        v
   Display HAL
        |
        v
Central Display / HUD
```

---

## 5. Physical System Outputs

### Vehicle Speakers

Vehicle Speakers represent the final audio-output component.

```text
Media Service
      |
      v
Audio HAL
      |
      v
Vehicle Speakers
```

### Central Display / HUD

The Central Display / HUD represents the final visual-output component.

```text
Projection Service
        |
        v
Display HAL
        |
        v
Central Display / HUD
```

---

## Vehicle Domain

The Vehicle Domain represents conceptual communication between the infotainment system and other electronic systems within the vehicle.

### Vehicle Network (CAN/LIN)

The Vehicle Network represents the conceptual automotive communication layer connecting the IVI Controller with Vehicle ECUs.

```text
IVI Controller
      |
      v
Vehicle Network
   (CAN/LIN)
      |
      v
Vehicle ECUs
```

### Vehicle ECUs

Vehicle ECUs represent electronic control units that can provide vehicle-state information.

Conceptual information may include:

- Vehicle speed
- Gear position
- Ignition state
- Other vehicle-state data

---

## Interface Data Flow Mapping

The primary conceptual interfaces represented in the simulation are listed below.

| Source | Destination | Purpose / Data |
|---|---|---|
| Driver | IVI HMI | User interaction and commands |
| Smartphone | IVI HMI | Smartphone interaction and call/projection events |
| IVI HMI | IVI Controller | User commands |
| IVI Controller | IVI HMI | System response and status |
| IVI Controller | Media Service | Media-control commands |
| IVI Controller | Navigation Service | Navigation requests |
| IVI Controller | Projection Service | Projection requests |
| GPS Module | Navigation Service | Location information |
| Map Database | Navigation Service | Map information |
| Navigation Service | Projection Service | Route information |
| Media Service | Audio HAL | Audio information |
| Audio HAL | Vehicle Speakers | Audio output |
| Projection Service | Display HAL | Visual information |
| Display HAL | Central Display / HUD | Visual output |
| IVI Controller | Vehicle Network | Vehicle-system communication |
| Vehicle Network | Vehicle ECUs | Conceptual CAN/LIN communication |

---

## Media Playback Signal Flow

When the Play Music scenario is executed, the conceptual signal path is:

```text
Driver
   |
   v
IVI HMI
   |
   v
IVI Controller
   |
   v
Media Service
   |
   v
Audio HAL
   |
   v
Vehicle Speakers
```

This demonstrates how a media command moves from the user interface through the service and hardware abstraction layers to the final audio output.

---

## Navigation Signal Flow

When the Start Navigation scenario is executed:

```text
Driver
   |
   v
IVI HMI
   |
   v
IVI Controller
   |
   v
Navigation Service
   ^
   |
   +---- GPS Module
   |
   +---- Map Database
```

The Navigation Service combines conceptual location and map information to represent route processing.

---

## Route Projection Signal Flow

Once navigation is active, route information can pass through the projection pipeline:

```text
Navigation Service
        |
        v
Projection Service
        |
        v
Display HAL
        |
        v
Central Display / HUD
```

---

## Incoming Call Interaction

The simulation demonstrates interaction between smartphone calls and active media playback.

```text
Smartphone
     |
     v
IVI HMI
     |
     v
IVI Controller
     |
     v
Media Service
     |
     v
Media Paused
```

If media is playing when a call arrives, the simulation can temporarily pause playback.

When the call ends, the previous media state can be restored when applicable.

---

## Vehicle Communication Flow

The conceptual vehicle communication path is:

```text
IVI Controller
      |
      v
Vehicle Network
   (CAN/LIN)
      |
      v
Vehicle ECUs
```

This represents the conceptual exchange of vehicle-state information between the infotainment system and vehicle electronic systems.

---

## Component Responsibility Matrix

| Component | Primary Responsibility |
|---|---|
| Driver | Generates user input |
| Smartphone | Represents external smartphone interaction |
| IVI HMI | Receives user commands and presents system information |
| IVI Controller | Central routing and coordination |
| Media Service | Handles media playback |
| Navigation Service | Processes navigation and route information |
| Projection Service | Prepares information for visual output |
| Audio HAL | Abstracts audio hardware interaction |
| Display HAL | Abstracts display hardware interaction |
| GPS Module | Provides location information |
| Map Database | Provides stored map information |
| Vehicle Speakers | Provides final audio output |
| Central Display / HUD | Provides final visual output |
| Vehicle Network | Represents CAN/LIN communication |
| Vehicle ECUs | Represent vehicle electronic systems |

---

## Interactive Simulation Scenarios

The simulator provides multiple scenarios for demonstrating IVI behavior.

| Scenario | Demonstration |
|---|---|
| Play Music | Media Service to Audio HAL to Vehicle Speakers |
| Start Navigation | Navigation processing using GPS and Map Database |
| Project Route | Navigation Service to Projection Service to Display HAL |
| Incoming Call | Smartphone call interaction and media interruption |
| End Call | Call termination and restoration of the previous media state |
| Reset | Returns the simulation to its initial state |

### Live Simulator

[Launch IVI Simulation System](https://lopa2004.github.io/IVI-SIMULATION-SYSTEM/)

---

## State Management and Event Journal

The application maintains the state of important IVI functions, including:

- Media
- Navigation
- Projection
- Call
- GPS
- Vehicle Network
- Overall system state

The Event Journal records important events generated during each scenario.

A typical conceptual event sequence is:

```text
Driver Interaction
        |
        v
HMI Command
        |
        v
Controller Routing
        |
        v
Service Processing
        |
        v
HAL Processing
        |
        v
Physical Output
```

---

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure and user interface |
| CSS3 | Layout, styling, responsive design, and visual states |
| Vanilla JavaScript | Simulation logic, state management, and event handling |
| SVG | Architecture visualization and signal-flow representation |
| Git | Source-code version control |
| GitHub | Repository hosting |
| GitHub Pages | Live application deployment |

---

## Source-Code Organization

```text
IVI-SIMULATION-SYSTEM/
|
|-- index.html
|-- README.md
|
|-- css/
|   `-- theme.css
|
|-- js/
|   |-- app.js
|   |-- diagram.js
|   |-- journal.js
|   |-- scenarios.js
|   |-- store.js
|   `-- topology.js
|
`-- docs/
    |-- DOCS-README.md
    |-- Project design.png
    `-- IVI_Project_Report_Lopamudra_Roy.pdf
```

### JavaScript Module Responsibilities

| Module | Responsibility |
|---|---|
| `app.js` | Main application coordination |
| `diagram.js` | Architecture diagram and visual signal-flow handling |
| `journal.js` | Simulation event journal |
| `scenarios.js` | Scenario definitions and execution |
| `store.js` | Application-state management |
| `topology.js` | Architecture nodes, zones, and connections |

---

## Project Artifacts

### Project Report

**File:** `IVI_Project_Report_Lopamudra_Roy.pdf`

The project report provides the detailed academic and technical documentation associated with the IVI Simulation System.

### Project Design

**File:** `Project design.png`

The project design provides the visual representation of the conceptual IVI system architecture and its major component relationships.

---

## Simulation Scope and Limitations

The IVI Simulation System is a conceptual educational simulation.

The project does not implement:

- Real CAN bus communication
- Real LIN communication
- Real vehicle ECU communication
- Real GPS hardware
- Production Audio HAL
- Production Display HAL
- Actual Android Automotive OS
- Actual Android Auto or Apple CarPlay connectivity
- Real vehicle sensor communication

The architecture, system states, and interactive scenarios are designed for educational and demonstration purposes.

---

## Future Scope

Possible future extensions include:

- Real CAN-bus integration
- OBD-II communication
- Real GPS integration
- Voice-command functionality
- Vehicle sensor integration
- Climate-control simulation
- Additional ECU interaction
- Android Automotive concepts
- Advanced diagnostics
- Additional IVI scenarios
- Hardware-in-the-loop testing
- Embedded touchscreen implementation

---

## Educational Purpose

This project and its supporting documentation are intended to demonstrate:

- In-Vehicle Infotainment architecture
- Human Machine Interface concepts
- Middleware and command routing
- Media and navigation services
- Projection systems
- Hardware Abstraction Layers
- Vehicle-network concepts
- CAN/LIN communication concepts
- ECU interaction
- State management
- Event-driven programming
- Interactive signal-flow visualization

---

