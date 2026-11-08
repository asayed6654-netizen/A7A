// أول ما الصفحة تفتح، اخفي محتوى الموقع لحد ما نتحقق من الباسورد
document.addEventListener("DOMContentLoaded", function() {
    let mainWrapper = document.querySelector(".cards-wrapper");
    if (mainWrapper) {
        mainWrapper.style.display = "none";
    }

    // اطلب كلمة السر
    let password = prompt("يا ريس أدخل كلمة السر عشان الموقع يفتح:");

    // حط كلمة السر اللي تعجبك هنا
    let correctPassword = "BSF";

    if (password === correctPassword) {
        // لو صح، أظهر الكاردات بتاعتك زي ما كانت
        if (mainWrapper) {
            mainWrapper.style.display = "flex";
        }
    } else {
        // لو غلط، نبهه واعمل تحديث للصفحة
        alert("كلمة السر غلط يا معلم!");
        location.reload();
    }
});