# MQTT-Based Light Control

This project implements a web-based application to control a simulated IoT light using MQTT. It includes a modern, animated UI for controlling the light and a Python script to simulate an IoT device (e.g., ESP8266).

## Features
- **Web Interface**: A sleek UI with animated buttons and a light bulb effect to turn the light ON/OFF. The interface disables buttons and shows an error message when the IoT device is offline.
- **MQTT Communication**: Uses MQTT over WebSockets to publish "ON" or "OFF" messages to the topic `/student_group/light_control`. Subscribes to `/student_group/light_status` to monitor device status.
- **IoT Simulation**: A Python script subscribes to the control topic and prints the light status. It also publishes periodic "online" status messages to indicate it is running.

## Files
- `index.html`: The web interface, including embedded CSS and JavaScript.
- `light_simulation.py`: Python script to simulate the IoT device.
- `README.md`: This file, providing a short explanation of the project.

## Setup Instructions
1. **Install Dependencies**:
   - Install Python 3.x.
   - Install the `paho-mqtt` library:
     ```bash
     pip install --upgrade paho-mqtt