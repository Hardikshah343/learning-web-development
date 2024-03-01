import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom, jobsAtom, messagingAtom, notificationAtom , totalNotificationSelector} from "./atoms"; 
import { useMemo } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const netwrokNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);

  const totalNotificationCount = useMemo(() => {
    return netwrokNotificationCount + jobsAtomCount + messagingAtomCount + notificationAtomCount;
  }, [netwrokNotificationCount, jobsAtomCount, messagingAtomCount, notificationAtomCount]);

  /* Using selector: A better approach */
  const totalNotificationCountViaSelector = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({netwrokNotificationCount >= 100 ? "99+" : netwrokNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>

      <button>Me ({totalNotificationCount})</button>
      <button>Me ({totalNotificationCountViaSelector})</button>
    </>
  )
}

export default App
