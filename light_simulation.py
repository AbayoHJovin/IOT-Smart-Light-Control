import paho.mqtt.client as mqtt
import time
import threading
import sys

# MQTT Broker Configuration
broker = "test.mosquitto.org"  # Use test.mosquitto.org to rule out broker-specific issues
port = 1883
control_topic = "/student_group/light_control"
status_topic = "/student_group/light_status"

# Heartbeat interval (seconds)
HEARTBEAT_INTERVAL = 5

# Callback when the client connects to the broker
def on_connect(client, userdata, flags, reason_code, properties=None):
    if reason_code == 0:
        print("Connected to MQTT broker")
        client.subscribe(control_topic)
        # Publish "online" status immediately upon connection
        client.publish(status_topic, "online", retain=True)
    else:
        print(f"Failed to connect, reason code {reason_code}")

# Callback when a message is received from the broker
def on_message(client, userdata, msg):
    message = msg.payload.decode()
    if message == "ON":
        print("💡 Light is TURNED ON")
    elif message == "OFF":
        print("💡 Light is TURNED OFF")

# Function to publish heartbeat messages
def publish_heartbeat(client):
    while True:
        client.publish(status_topic, "online", retain=True)
        time.sleep(HEARTBEAT_INTERVAL)

# Function to handle script shutdown
def on_shutdown(client):
    client.publish(status_topic, "offline", retain=True)
    client.disconnect()
    sys.exit(0)

# Set up the MQTT client with the latest protocol version
client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2, protocol=mqtt.MQTTv311)

# Assign callbacks
client.on_connect = on_connect
client.on_message = on_message

# Connect to the broker with error handling
try:
    client.connect(broker, port, 60)
except Exception as e:
    print(f"Connection error: {e}")
    sys.exit(1)

# Start the heartbeat thread
heartbeat_thread = threading.Thread(target=publish_heartbeat, args=(client,), daemon=True)
heartbeat_thread.start()

try:
    # Start the loop to process received messages
    client.loop_forever()
except KeyboardInterrupt:
    print("Shutting down...")
    on_shutdown(client)