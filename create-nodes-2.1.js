//2.1
const render = (words) => {
  const arr = words;
  const ul = document.createElement("ul");

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.textContent = arr[i];
    ul.append(li);
  }
  return document.body.append(ul);
};

//2.2
const renderObj = (words) => {
  const arr = words;
  const ul = document.createElement("ul");

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = arr[i].url;
    a.append(arr[i].name);
    li.append(a);
    ul.append(li);
  }
  return document.body.append(ul);
};
