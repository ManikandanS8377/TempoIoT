import paho.mqtt.client as mqtt
import random
import json
import time
from datetime import datetime

broker_address = "Broker.emqx.io"
broker_port = 1883
topic = "a1_a1_a1_a1_a1_a1"

client = mqtt.Client()
client.connect(broker_address, broker_port)
               

def send_random_data():
    temperature = random.randint(10, 40)
    humidity = random.randint(20, 50)
    timestamp=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    data = {"Timestamp":timestamp,"temperature": temperature, "pressure": humidity}
    json_data = json.dumps(data)
    client.publish(topic, json_data)

while True:
    client.loop()
    send_random_data()
    time.sleep(5)
