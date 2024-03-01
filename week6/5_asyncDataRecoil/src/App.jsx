import {RecoilRoot, useRecoilValue, useRecoilState} from "recoil";
import { useEffect } from "react"
import axios from "axios";
import {totalNotficationSelector, notifications} from "./atoms"
function App() {

  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const totalNotificationCount = useRecoilValue(totalNotficationSelector);
  const [notificationCount, setNotificationCount] = useRecoilState(notifications);

  /* Not a good way, with recoil */
  // useEffect(()=> {
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNotificationCount(res.data);
  //     })
  // }, []);

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({notificationCount.network >= 100 ? "99+" : notificationCount.network})</button>
      <button>Jobs ({notificationCount.jobs})</button>
      <button>Messaging ({notificationCount.messaging})</button>
      <button>Notifications ({notificationCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>      
    </>
  )
}

export default App
