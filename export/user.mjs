// Mengekspor variabel name, email, dan age menggunakan named export
export const name = "John";
export const email = "john@gmail.com";
export const age = 25;

// Mengekspor fungsi getUserInfo menggunakan named export
export function getUserInfo() {
  return `${name} (${age}) - ${email}`; // Mengembalikan string yang berisi informasi pengguna
}
