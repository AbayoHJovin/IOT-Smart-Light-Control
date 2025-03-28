# 🚀 MQTT-Based Smart Light Control

This project implements a web-based application to control a simulated IoT light using the **MQTT protocol**. It features a **modern, responsive, and animated user interface (UI)** for controlling the light and includes a **Python script** to simulate an IoT device (e.g., ESP8266). The project demonstrates how **MQTT can be used for real-time communication** between a web application and IoT devices.

---

## 🎯 Project Goals
The primary goal of this project is to provide a **user-friendly and interactive interface** for controlling IoT devices (in this case, a smart light) using **MQTT**. The project also aims to:

✅ Demonstrate **real-time communication** between a web application and IoT devices.

✅ Simulate an **IoT device using Python** for testing and development purposes.

✅ Provide a **foundation for building more complex IoT control systems**.

---

## 🌟 Features

### 🖥️ Web Interface
- 🎨 **Sleek and Modern UI**: A responsive, dark-themed interface with smooth animations for the light bulb and buttons.
- 🎛️ **Interactive Controls**: Buttons to turn the light **ON/OFF** with visual feedback.
- 📡 **Device Status Monitoring**: Displays the device's online/offline status with color-coded indicators.
- 📱 **Responsive Design**: Works seamlessly on both desktop and mobile devices.

### 🔗 MQTT Communication
- 🔄 **Real-Time Messaging**: Uses **MQTT over WebSockets** for communication.
- 📢 **Control Topic**: Publishes `ON` or `OFF` messages to the topic `/student_group/light_control`.
- 📥 **Status Topic**: Subscribes to `/student_group/light_status` to monitor the device's status.

### 🤖 IoT Simulation
- 🐍 **Python Script**: Simulates an IoT device that listens to the control topic and responds to ON/OFF commands.
- 📡 **Status Updates**: Periodically publishes `online` status messages to indicate the device is active.

---

## ⚙️ How It Works

### 🌐 Web Interface:
1. The user interacts with the web interface to turn the light **ON** or **OFF**.
2. The interface sends **MQTT messages** to the `/student_group/light_control` topic.
3. It also subscribes to the `/student_group/light_status` topic to monitor the device's status.

### 🤖 IoT Simulation:
1. The Python script (`light_simulation.py`) subscribes to `/student_group/light_control` to receive ON/OFF commands.
2. It simulates an IoT device by **printing the light status** and **publishing periodic "online" status messages**.

### 🌎 MQTT Broker:
- The project uses a **public MQTT broker** (`test.mosquitto.org`) for communication between the **web interface** and the **simulated IoT device**.

---

## 📂 Files
📌 `index.html` - The web interface, including embedded **CSS and JavaScript**.

📌 `light_simulation.py` - **Python script** to simulate the IoT device.

📌 `README.md` - This file, providing a detailed **explanation of the project**.

---

## 🔧 Setup Instructions

### 📌 Prerequisites
- 🐍 **Python 3.x**: Ensure Python is installed on your system.
- 🌐 **Web Browser**: A modern web browser (**Chrome, Firefox, Edge**) to run the web interface.
- 📡 **Internet Connection**: Required to connect to the MQTT broker.

### 🛠️ Step 1: Install Dependencies
Install the `paho-mqtt` library for the Python script:

```bash
pip install paho-mqtt
```

### ▶️ Step 2: Run the IoT Simulation
1. Open a **terminal** or **command prompt**.
2. Navigate to the project directory.
3. Run the Python script:

```bash
python light_simulation.py
```

### 🌍 Step 3: Open the Web Interface
1. Open the `index.html` file in your **web browser**.
2. Use the buttons to **control the light** and monitor the **device's status**.

---

## 🎮 Usage

### 💡 Turn ON the Light:
✅ Click the **"Turn ON"** button in the web interface.
✅ The **light bulb will illuminate**, and the status will update to **"Light is TURNED ON"**.

### 🌑 Turn OFF the Light:
✅ Click the **"Turn OFF"** button in the web interface.
✅ The **light bulb will turn off**, and the status will update to **"Light is TURNED OFF"**.

### 📡 Monitor Device Status:
✅ The **status indicator** will show whether the device is **online** or **offline**.
✅ If the device is offline, the **buttons will be disabled**, and an **error message** will be displayed.

#   I O T - S m a r t - L i g h t - C o n t r o l  
 