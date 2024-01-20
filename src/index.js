export default function healthStatus(personObject) {
  if (personObject.health > 50) {
    return 'healthy';
  } if (personObject.health <= 50 && personObject.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
