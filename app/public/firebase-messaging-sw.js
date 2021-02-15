importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAawbqj2_2yXg5XUzDZZrC8muVQLVMLESM",
    authDomain: "covid-app-ogy.firebaseapp.com",
    projectId: "covid-app-ogy",
    storageBucket: "covid-app-ogy.appspot.com",
    messagingSenderId: "187503202144",
    appId: "1:187503202144:web:23cdf92dbf5e1b3515d805"
};
firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
