const container = document.getElementById("container");
const mainAddButton = document.getElementById("mainAddButton");

mainAddButton.addEventListener("click", addDiv);

function addDiv() {
  const newDiv = createDiv();
  container.appendChild(newDiv);
}

function createDiv() {
  const div = document.createElement("div");
  div.className = "dynamic-div";

  const title = document.createElement("p");
  title.className = "title";
  title.contentEditable = "true";
  title.textContent = "LOREM IPSUM";

  const description = document.createElement("p");
  description.className = "description";
  description.contentEditable = "true"; //This allows user to edit text directly on screen 
  description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at justo urna.";

  const addButton = document.createElement("i");
  addButton.className = "addButton fa fa-plus";
  addButton.addEventListener("click", addChildDiv);

  const removeButton = document.createElement("i");
  removeButton.className = "removeButton fa fa-minus";
  removeButton.addEventListener("click", removeDiv);

  const addRemoveContainer = document.createElement("div");
  addRemoveContainer.className = "addRemoveContainer";
  
  //Child elements of dynamic-div
  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(addRemoveContainer);
  //Child elements of child element addRemoveContainer of dynamic-div
  addRemoveContainer.appendChild(addButton);
  addRemoveContainer.appendChild(removeButton);

  return div;
}

//Add new dynamic-div inside current dynamic-div
function addChildDiv(event) {
	const div = event.target.closest('.dynamic-div');
	if (div) {
		const newChildDiv = createDiv();
		div.appendChild(newChildDiv);
	}
}

//Remove current dinamic-div and all of it's child elements
function removeDiv(event) {
	const div = event.target.closest('.dynamic-div');
	if (div) {
		div.parentElement.removeChild(div);	
	}
}
