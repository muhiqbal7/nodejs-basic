const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

const onBirthdayListener = ({ name }) => {
  birthdayEventListener(name);
};

myEventEmitter.on("birthday", onBirthdayListener);

myEventEmitter.emit("birthday", { name: "April" });
