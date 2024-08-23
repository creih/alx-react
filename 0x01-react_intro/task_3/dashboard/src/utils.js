// utils.js
// function to get the current year
export function getFullYear() {
    return new Date().getFullYear();
}

// function to get the footer copy
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    }
    return "Holberton School main dashboard";
}
// function to get the latest notification
export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
  }
