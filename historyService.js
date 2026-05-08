import { storage } from "./storageService";

export const historyService = {
  log(entry) {
    const history = storage.getHistory();
    const updated = [...history, entry];
    storage.setHistory(updated);
    return updated;
  },

  clear() {
    storage.setHistory([]);
  }
};
