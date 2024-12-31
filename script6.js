
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Close all other FAQ items
      faqItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
        }
      });

      // Toggle the clicked FAQ item
      item.classList.toggle("active");
    });
  });

