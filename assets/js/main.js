(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Nav dropdown: Kiến thức Implant ---------- */
  document.querySelectorAll(".nav-item.has-dropdown").forEach(function (item) {
    var toggle = item.querySelector(".nav-dd-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = item.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.querySelectorAll(".nav-item.has-dropdown").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          var t = other.querySelector(".nav-dd-toggle");
          if (t) t.setAttribute("aria-expanded", "false");
        }
      });
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".nav-item.has-dropdown.open").forEach(function (item) {
      item.classList.remove("open");
      var t = item.querySelector(".nav-dd-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function () {
      var wasOpen = item.classList.contains("open");
      item.closest(".faq-list").querySelectorAll(".faq-item").forEach(function (i) {
        i.classList.remove("open");
        var btn = i.querySelector(".faq-q");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var lbClose = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        if (!img) return;
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || "";
        if (lbCaption) lbCaption.textContent = img.alt || "";
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    }
    if (lbClose) lbClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ---------- Back-to-top in floating sidebar ---------- */
  var fsTop = document.querySelector(".fs-top");
  if (fsTop) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 480) fsTop.classList.add("show");
        else fsTop.classList.remove("show");
      },
      { passive: true }
    );
    fsTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Booking form (static site — no backend wired yet) ---------- */
  var form = document.querySelector(".booking-form form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      var name = form.querySelector("[name='name']");
      var phone = form.querySelector("[name='phone']");
      var lang = document.documentElement.lang === "en";

      if (status) {
        status.classList.remove("show");
        if (name && !name.value.trim()) {
          status.textContent = lang
            ? "Please enter your name."
            : "Vui lòng nhập họ tên.";
          status.classList.add("show");
          name.focus();
          return;
        }
        if (phone && !phone.value.trim()) {
          status.textContent = lang
            ? "Please enter a phone number."
            : "Vui lòng nhập số điện thoại.";
          status.classList.add("show");
          phone.focus();
          return;
        }
        status.classList.add("ok");
        status.textContent = lang
          ? "Thanks! This form is a front-end demo only — connect it to Formspree, a serverless function, or your CRM to actually receive submissions. Meanwhile, please call or Zalo us directly."
          : "Cảm ơn bạn! Form này mới chỉ là giao diện demo — cần kết nối tới Formspree, serverless function hoặc CRM để nhận được dữ liệu thật. Trong lúc chờ, vui lòng gọi hotline hoặc nhắn Zalo để được hỗ trợ ngay.";
        status.classList.add("show");
        form.reset();
      }
    });
  }
})();
