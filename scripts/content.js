const getAIoverviewContainer = () => {
  const element = document.getElementById("Odp5De");
  if (!element) {
    return document.getElementById("eKIzJc");
  }
  return element;
};

getPeopleALsoAskContainer = () => {
  const elements = document.querySelectorAll('[jscontroller="Da4hkd"]');

  return elements;
};

const removeAiOverview = () => {
  const AIcontainer = getAIoverviewContainer();
  const poepleAskContainer = getPeopleALsoAskContainer();

  if (AIcontainer) AIcontainer.style.display = "none";
  if (poepleAskContainer)
    poepleAskContainer.forEach((el) => (el.style.display = "none"));
};

const addAiOverview = () => {
  const AIcontainer = getAIoverviewContainer();
  const poepleAskContainer = getPeopleALsoAskContainer();

  if (AIcontainer) AIcontainer.style.display = "";
  if (poepleAskContainer)
    poepleAskContainer.forEach((el) => (el.style.display = ""));
};

chrome.storage.local.get("disableStatus").then((result) => {
  const disableStatus = result.disableStatus ?? true;

  if (disableStatus) {
    removeAiOverview();
  }
});

browser.storage.onChanged.addListener((changes, namespace) => {
  if (namespace !== "local") return;

  if (!changes.disableStatus) return;

  const disableStatus = changes.disableStatus.newValue;

  if (disableStatus) {
    removeAiOverview();
  } else {
    addAiOverview();
  }
});

