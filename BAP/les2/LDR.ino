int LDR_In = A0;

uint8_t Led1 = D3;
uint8_t Led2 = D5;
uint8_t Led3 = D6;

int lichtHoeveelheid;
int maxLicht = 900;
int donkLicht = 540;

void setup() {
  Serial.begin(9600);
  pinMode (Led1, OUTPUT);
  pinMode (Led2, OUTPUT);
  pinMode (Led3, OUTPUT);
}

void loop() {
  lichtHoeveelheid = analogRead(LDR_In);
  Serial.println(lichtHoeveelheid);

  if ( lichtHoeveelheid > 600){
    digitalWrite(Led1, HIGH);
  }
  else{
    digitalWrite(Led1, LOW);
  }
    if ( lichtHoeveelheid < 650){
    digitalWrite(Led2, HIGH);
  }
  else{
    digitalWrite(Led2, LOW);
  }
    if ( lichtHoeveelheid < 615){
    digitalWrite(Led3, HIGH);
  }
  else{
    digitalWrite(Led3, LOW);
  }
}
