let article = {
    data: new Date(2030, 12, 01),
    title: "Hello World",
    content: "To mój pierwszy artykuł",
    tags: ["blog", "lifestyle"],
    version: 1,
  };

  function validateArticle(art) {
    if ("title" in art === false || typeof art.title !== "string") {
        console.log("Nieprawidłowy title");
        return false;
    }

    if (! "content" in art || typeof art.content !== "string") {
        console.log("content NIE ok");
        return false;

    }

    
    if (! "tags" in art || !Array.isArray(art.tags)) {
        console.log("Nieprawidłowe tagi")
        return false;

    }

    if (! "version" in art || typeof art.version !== "number") {
        console.log("Version NIE ok");
        return false;
    }

    if (art.version <= 0) {
        consoe.log("version NIE ok ")
    }

    return true;
}
  console.log(validateArticle(article));