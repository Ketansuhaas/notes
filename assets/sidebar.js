(function () {
  var SECTIONS = [
    {
      title: "Linear Algebra",
      posts: [
        ["posts/geometry-in-rn.html", "Lines, planes, and spheres in R^n"],
        ["posts/linear-algebra-fundamentals.html", "Rank, subspaces, and projections"],
        ["posts/eigenvalues-and-defectiveness.html", "Eigenvalues, eigenvectors, and defectiveness"],
        ["posts/spectral-theorem.html", "The spectral theorem"],
        ["posts/dynamics-in-the-eigenbasis.html", "Dynamics in the eigenbasis"],
        ["posts/quadratic-forms-and-positive-definiteness.html", "Quadratic forms and positive definiteness"],
        ["posts/singular-value-decomposition.html", "Singular value decomposition"],
        ["posts/gradients-jacobians-and-hessians.html", "Gradients, Jacobians, and Hessians"],
        ["posts/lagrangian-and-kkt.html", "The Lagrangian and KKT conditions"],
        ["posts/primal-and-dual-problems.html", "Primal and dual problems"],
        ["posts/principal-component-analysis.html", "Principal component analysis"],
        ["posts/variance-decomposition-and-the-eigenbasis.html", "Variance decomposition and the eigenbasis"]
      ]
    },
    {
      title: "Probability & Information Theory",
      posts: [
        ["posts/random-variables-and-notation.html", "Probability notation and random variables"],
        ["posts/common-distributions.html", "Common distributions, and where they come from in deep learning"],
        ["posts/lebesgue-measure-and-kl-divergence.html", "Lebesgue measure, densities, and KL divergence"],
        ["posts/supervised-learning-as-kl-minimization.html", "Supervised learning as KL minimization"],
        ["posts/generative-modeling-and-kl-divergence.html", "Generative modeling: approximating pθ"]
      ]
    }
  ];

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function render() {
    var mount = document.getElementById("toc-sidebar");
    if (!mount) return;

    var inPosts = /\/posts\//.test(location.pathname);
    var prefix = inPosts ? "../" : "";
    var currentFile = location.pathname.replace(/\/$/, "").split("/").pop();

    var html = '<a class="toc-home" href="' + prefix + 'index.html">Deep Learning Notes</a>';
    html += '<div class="toc-heading">Contents</div>';
    SECTIONS.forEach(function (section) {
      html += '<div class="toc-section"><div class="toc-section-title">' + escapeHtml(section.title) + '</div><ul class="toc-list">';
      section.posts.forEach(function (entry) {
        var path = entry[0];
        var title = entry[1];
        var file = path.split("/").pop();
        var isActive = inPosts && file === currentFile;
        html += '<li><a' + (isActive ? ' class="active" aria-current="page"' : "") +
          ' href="' + prefix + path + '">' + escapeHtml(title) + "</a></li>";
      });
      html += "</ul></div>";
    });
    mount.innerHTML = html;
  }

  function setupToggle() {
    var btn = document.getElementById("toc-toggle");
    var sidebar = document.getElementById("toc-sidebar");
    if (!btn || !sidebar) return;

    var overlay = document.createElement("div");
    overlay.className = "toc-overlay";
    document.body.appendChild(overlay);

    function close() {
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }

    function open() {
      sidebar.classList.add("open");
      overlay.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }

    btn.addEventListener("click", function () {
      if (sidebar.classList.contains("open")) {
        close();
      } else {
        open();
      }
    });
    overlay.addEventListener("click", close);
    sidebar.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });
  }

  render();
  setupToggle();
})();
