// Throwing Error
function processPayment(price, paid) {
  if (paid < price) {
    throw new Error("Pembayaran kurang dari harga barang");
  }
  console.log("Pembayaran berhasil");
}

try {
  processPayment(100, 80);
} catch (error) {
  console.error("Terjadi kesalahan:", error.message);
}

// Finally block
try {
  console.log("Ini try block");
  throw new Error("Error terjadi");
} catch (err) {
  console.log("Ini catch block:", err.message);
} finally {
  console.log("Ini finally block - selalu dieksekusi");
}

function simpleErrorHandling() {
  console.log("=== Sederhana: Error Handling ===");
  try {
    console.log("Memulai program sederhana...");
    throw new Error("Ini adalah error sederhana");
    console.log("Baris ini tidak akan dieksekusi");
  } catch (error) {
    console.error("Menangkap error:", error.message);
  }
}

simpleErrorHandling();

// Menangani kesalahan dalam kondisi tertentu
function conditionBasedErrorHandling() {
  console.log("\n=== Kondisi Berdasarkan Error Handling ===");
  function validatePayment(price, paid) {
    if (paid < price) {
      throw new Error("Pembayaran kurang dari harga barang");
    }
    console.log("Pembayaran berhasil");
  }

  try {
    validatePayment(100, 80);
  } catch (error) {
    console.error("Menangkap error:", error.message);
  }
}

conditionBasedErrorHandling();

// Menangani kesalahan dalam asynchronous code dengan Promise
function asyncErrorHandling() {
  console.log("\n=== Asynchronous: Error Handling dengan Promise ===");

  function asyncOperation(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Operasi berhasil");
        } else {
          reject(new Error("Operasi gagal"));
        }
      }, 1000);
    });
  }

  asyncOperation(false)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error.message);
    })
    .finally(() => {
      console.log("Operasi selesai");
    });
}

asyncErrorHandling();

// Menangani kesalahan dalam asynchronous code dengan async/await
async function asyncAwaitErrorHandling() {
  console.log("\n=== Asynchronous: Error Handling dengan async/await ===");

  function asyncOperation(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Operasi berhasil dengan async/await");
        } else {
          reject(new Error("Operasi gagal dengan async/await"));
        }
      }, 1000);
    });
  }

  try {
    const result = await asyncOperation(false);
    console.log(result);
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
  } finally {
    console.log("Operasi selesai dengan async/await");
  }
}

// Panggil asyncAwaitErrorHandling() dengan async
(async () => {
  await asyncAwaitErrorHandling();
})();
