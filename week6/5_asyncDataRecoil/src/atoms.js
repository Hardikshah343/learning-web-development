import {atom, selector} from "recoil";
import axios from "axios";

// export const notifications = atom({
//     key: "networkAtom", 
//     default: {
//         network: 4,
//         jobs: 6,
//         messaging: 3, 
//         notifications: 3
//     }
// });

export const notifications = atom({
    key: "networkAtom", 
    default: selector ({
        key: "networkAtomSelector",
        get: async ()=> {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotficationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifcations = get(notifications);
        return allNotifcations.network + allNotifcations.jobs + allNotifcations.messaging + allNotifcations.notifications;
    }
});
