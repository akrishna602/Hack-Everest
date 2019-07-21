#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <DHT.h>


const int trigPin = 0;
const int echoPin = 2;
long duration;
int WaterLevel;

#define FIREBASE_HOST "avartan-dab6e.firebaseio.com"
#define FIREBASE_AUTH "gBTGlVVXMP440ODKzoJwa6ulgw8DLlfDU7aXWBEj"
#define WIFI_SSID "9801343515"
#define WIFI_PASSWORD "123@4567"
#define DHTPIN D6
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup()
{
  Serial.begin(9600);
  delay(1000);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  dht.begin();
}

void loop()
{
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  WaterLevel = duration * 0.034 / 2;
  
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(h) || isnan(t))
  {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  Serial.print("Humidity: ");  Serial.print(h);
  String fireHumid = String(h);
  Serial.print("Temperature: ");  Serial.print(t);
  String fireTemp = String(t);
  Serial.print("WaterLevel: "); Serial.print(WaterLevel);
  String fireWaterLevel = String(WaterLevel);
  Serial.print("\n");
  delay(2000);

  Firebase.setString("/DHT11/Humidity", fireHumid);
  Firebase.setString("/DHT11/Temperature", fireTemp);
  Firebase.setString("/DHT11/WaterLevel", fireWaterLevel);

}
