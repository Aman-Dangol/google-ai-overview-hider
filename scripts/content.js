const getAIoverviewContainer = () => {
  const element = document.getElementById("Odp5De");
  if (!element) {
    return document.getElementById("eKIzJc");
  }
  return element;
};

const removeAiOverview = () => {
  const AIcontainer = getAIoverviewContainer();

  if (!AIcontainer) return;

  AIcontainer.style.display = "none";
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
    const AIcontainer = getAIoverviewContainer();

    if (AIcontainer) {
      AIcontainer.style.display = "";
    }
  }
});

