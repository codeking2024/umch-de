import mitt from "mitt";

type Events = {
  "change-language": string; // Define the event and its payload type
  // Add other events here as needed
};

const eventBus = mitt<Events>(); // Use generic type directly

export default eventBus;
