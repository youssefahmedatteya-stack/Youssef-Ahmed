    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
    let header = document.querySelector('header');

window.onscroll = function() {

    if (this.scrollY >= 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
};
let nav_Links = document.getElementById("nav");

function op_cl_Menu() {
    nav_Links.classList.toggle("menu-active")
}




//footer form
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة

    // جلب البيانات
    const name = document.getElementById('name').value.trim() || 'غير محدد';
    const message = document.getElementById('message').value.trim() || 'بدون تفاصيل';

    // رسالة منسقة واحترافية جدًا
    const text = `مرحبا يوسف 
📩 رسالة جديدة من الموقع
👤 الاسم: ${name}
💼 تفاصيل المشروع:${message}
في انتظار ردك بأسرع وقت ممكن `;

    // فتح واتساب مباشرة
    window.open(`https://wa.me/+201099649494?text=${text}`, '_blank');

    // مسح الفورم بعد الإرسال (اختياري)
    this.reset();
});
