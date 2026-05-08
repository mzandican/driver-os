import { useState } from "react";
import { storage } from "../services/storageService";
import { historyService } from "../services/historyService";

export function useHistory() {
  const [history, setHistory] = useState(storage.getHistory());

  const logTrip = (entry) => setHistory(historyService.log(entry));
  const clearHistory = () => {
    historyService.clear();
    setHistory([]);
  };

  return { history, logTrip, clearHistory };
}
