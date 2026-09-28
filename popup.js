let isAIDisabled = true;

const disableAIButton = document.getElementById("disable-AI-button");
const enableAIButton = document.getElementById("enable-AI-button");

const buttonDisabler = () => {
  if (isAIDisabled) {
    disableAIButton.disabled = true;
    enableAIButton.disabled = false;
  } else {
    disableAIButton.disabled = false;

    enableAIButton.disabled = true;
  }
};

(async function getisAIDisabled() {
  let status = await browser.storage.local.get(["disableStatus"]);

  isAIDisabled = status.disableStatus ?? true;
  buttonDisabler();
})();

disableAIButton.addEventListener("click", () => {
  isAIDisabled = true;
  buttonDisabler();
  browser.storage.local.set({ disableStatus: true });
});

enableAIButton.addEventListener("click", () => {
  isAIDisabled = false;
  buttonDisabler();
  browser.storage.local.set({ disableStatus: false });
});

