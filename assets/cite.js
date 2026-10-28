document.querySelectorAll(".copy-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var target = document.getElementById(btn.dataset.target);
    if (!target) return;
    navigator.clipboard.writeText(target.innerText).then(function () {
      var original = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(function () {
        btn.textContent = original;
      }, 1500);
    });
  });
});
