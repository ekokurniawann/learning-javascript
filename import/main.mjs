// Mengimpor named exports dari greetings.mjs
import { greetMorning, greetEvening } from "./greetings.mjs";

// Mengimpor named exports dan default exports dari userInfo.mjs
import { name } from "./userInfo.mjs";
import displayInfo from "./userInfo.mjs";

// Menggunakan fungsi dan variabel yang diimpor
greetMorning(name);
greetEvening(name);

displayInfo();
