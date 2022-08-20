if (localStorage.getItem("books")) {
  var books = JSON.parse(localStorage.getItem("books"));
} else localStorage.setItem("books", JSON.stringify([]));

/* ------------------------------ routing ------------------------------ */
const $ = (id) => {
  return document.getElementById(id);
};
$("addAnchor")?.addEventListener("click", () => {
  window.location.href = "/newbook.html";
  return;
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

books?.map((e, i) => {
  $("tbody").appendChild(createRecord(e, i + 1));
});
