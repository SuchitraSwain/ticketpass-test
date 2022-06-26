import axios from "axios";

async function getEvents(num = "1") {
  const url = "http://127.0.0.1:8000/api/events?page=";
  const myUrl = url + num;
  const event = await axios.get(myUrl);
  return event;
}
async function getEvent(eventNum) {
  const event = await axios.get("http://127.0.0.1:8000/api/events/" + eventNum);
  return event;
}
async function login(email, password) {
  const formData = {
    username: email,
    password: password,
    client_id: `966c01ba-31b1-40a2-8f4c-fab8b1373bd7`,
    grant_type: `password`,
  };
  const event = await axios.post("http://127.0.0.1:8000/api/login", formData);
  return event;
}
async function CreateEvent(eventName, desc, file, startDate, endDate, token) {
  const formData = {
    name: eventName,
    description: desc,
    image: file,
    startDate: startDate,
    endDate: endDate,
  };
  const event = await axios.post("http://127.0.0.1:8000/api/events", formData, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
  });
  return event;
}
export { getEvent, getEvents, login, CreateEvent };
