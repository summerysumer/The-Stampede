const dateBar = document.getElementById("currentDate");

if (dateBar) {
  const today = new Date();

  dateBar.textContent = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}