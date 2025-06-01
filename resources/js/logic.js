function setCurrentDate() {
  const dateElem = document.getElementById('current-date');
  const today = new Date();
  const formatted = today.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  }).replace(/ /g, ' ');
  dateElem.textContent = formatted;
}

function formatTime(hour, minute) {
  const period = hour >= 12 ? 'PM' : 'AM';
  const h = hour % 12 === 0 ? 12 : hour % 12;
  const m = minute.toString().padStart(2, '0');
  return `${h}:${m} ${period}`;
}

function generateBlocks() {
  const container = document.getElementById('time-blocks');
  container.innerHTML = '';
  for (let i = 0; i < 48; i++) {
    const totalMinutes = i * 30;
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const timeLabel = formatTime(hour, minute);

    const block = document.createElement('div');
    block.className = 'time-block';
    block.innerHTML = `
      <span class="time-label">${timeLabel}</span>
      <input type="text" class="task-input" />
      <button class="edit-btn">✏️</button>
      <button class="done-btn">✔️</button>
    `;
    container.appendChild(block);
  }
}



setCurrentDate();
generateBlocks();