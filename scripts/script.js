const $ = (id) => {
  return document.getElementById(id);
};
if (
  localStorage.getItem("books") &&
  localStorage.getItem("books")?.length !== 0
) {
  var books = JSON.parse(localStorage.getItem("books"));
} else {
  localStorage.setItem("books", JSON.stringify([]));
  $("add-new").style.display = "block";
}

/* ------------------------------ routing ------------------------------ */

$("addAnchor")?.addEventListener("click", () => {
  window.location.href = "/newbook.html";
  return;
});
$("add-new")?.addEventListener("click", () => {
  document.location.href = "/newbook.html";
});
$("submit")?.addEventListener("click", (e) => {
  e.preventDefault();

  const bookInfo = {
    title: $("title")?.value,
    author: $("author").value,
    isbn: $("isbn").value,
  };
  $("title").value = "";
  $("author").value = "";
  $("isbn").value = "";
  books.push(bookInfo);
  localStorage.setItem("books", JSON.stringify(books));
  console.log(JSON.stringify(bookInfo));
});
/* ----------------------- creating new table row ---------------------- */
const createRecord = (data, i) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
   <th>${i}</th>
            <td>${data.title}</td>
            <td>${data.author}</td>
            <td>${data.isbn}</td>
  `;
  return tr;
};

/* --------------------------------------------------------------------- */
if (location.pathname === "/index.html") {
  books?.map((e, i) => {
    $("tbody").appendChild(createRecord(e, i + 1));
  });
}
