// MQTT Broker Configuration
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);
const host = 'wss://test.mosquitto.org:8081/mqtt'; // Updated to test.mosquitto.org
const controlTopic = '/student_group/light_control';
const statusTopic = '/student_group/light_status';
const options = {
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4
};

// Connect to MQTT Broker
const client = mqtt.connect(host, options);

// DOM Elements
const onButton = document.getElementById('on-btn');
const offButton = document.getElementById('off-btn');
const statusText = document.getElementById('status');
const bulb = document.getElementById('bulb');

// Function to update UI based on device status
function updateDeviceStatus(isOnline) {
    if (isOnline) {
        onButton.disabled = false;
        offButton.disabled = false;
        onButton.style.opacity = 1;
        offButton.style.opacity = 1;
        statusText.textContent = 'Status: Device is online. Waiting for command...';
        statusText.style.color = '#28a745'; // Green for online
    } else {
        onButton.disabled = true;
        offButton.disabled = true;
        onButton.style.opacity = 0.5;
        offButton.style.opacity = 0.5;
        statusText.textContent = 'Status: Device is offline. Please restart the IoT simulation.';
        statusText.style.color = '#dc3545'; // Red for offline
        bulb.classList.remove('on'); // Turn off bulb if device is offline
    }
}

// Handle connection to MQTT broker
client.on('connect', () => {
    console.log('Connected to MQTT broker');
    // Subscribe to the status topic to monitor device status
    client.subscribe(statusTopic, (err) => {
        if (!err) {
            console.log(`Subscribed to ${statusTopic}`);
        } else {
            console.error('Subscription error:', err);
        }
    });
});

client.on('error', (err) => {
    console.error('Connection error: ', err);
    client.end();
    updateDeviceStatus(false); // Assume device is offline on connection error
});

// Handle incoming messages
client.on('message', (topic, message) => {
    console.log(`Received message on ${topic}: ${message.toString()}`); // Debug log
    if (topic === statusTopic) {
        const status = message.toString();
        if (status === 'online') {
            console.log('Device is online');
            updateDeviceStatus(true);
        } else if (status === 'offline') {
            console.log('Device is offline');
            updateDeviceStatus(false);
        }
    }
});

// Button Click Events
onButton.addEventListener('click', () => {
    client.publish(controlTopic, 'ON');
    statusText.textContent = 'Status: Light is TURNED ON';
    statusText.style.color = '#28a745'; // Green for ON
    bulb.classList.add('on');
});

offButton.addEventListener('click', () => {
    client.publish(controlTopic, 'OFF');
    statusText.textContent = 'Status: Light is TURNED OFF';
    statusText.style.color = '#dc3545'; // Red for OFF
    bulb.classList.remove('on');
});

// Initially assume device is offline until we receive a status message
updateDeviceStatus(false);