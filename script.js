// // Firebase التكوين الذي حصلنا عليه من لوحة تحكم
// const firebaseConfig = {
//     apiKey: "AIzaSyBd04IDbFSNFWaaOB3hS5OUi7VTbsq2uSs",
//     authDomain: "login-a2bae.firebaseapp.com",
//     databaseURL: "https://login-a2bae-default-rtdb.firebaseio.com",
//     projectId: "login-a2bae",
//     storageBucket: "login-a2bae.appspot.com",
//     messagingSenderId: "390282070895",
//     appId: "1:390282070895:web:22830863bf2e760e97369a",
//     measurementId: "G-9YV9LT752J"
//   };

//     // تكوين Firebase
//     firebase.initializeApp(firebaseConfig);

//     // إشارة إلى قاعدة البيانات
//     var database = firebase.database();

//     // النموذج
//     var signupForm = document.getElementById('signup-form');
//     var messageDiv = document.getElementById('message');

//     signupForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         var username = document.getElementById('username').value;
//         var phoneNumber = document.getElementById('phoneNumber').value;
//         var password = document.getElementById('password').value;

//         // حفظ معلومات المستخدم في قاعدة البيانات
//         var userData = {
//             username: username,
//             phoneNumber: phoneNumber,
//             password: password
//         };

//         var newRef = database.ref('users').push();
//         newRef.set(userData, function(error) {
//             if (error) {
//                 messageDiv.innerText = 'حدث خطأ: ' + error.message;
//             } else {
//                 messageDiv.innerText = 'تم التسجيل بنجاح!';
//             }
//         });
//     });
