if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/AutoHelper/sw.js', { scope: '/AutoHelper/' })})}