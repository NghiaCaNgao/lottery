import API from "../api/data";
export default async function({ store, route, redirect }) {
  const userPath = /\/user\/*/;
  const playPath = /\/play\/*/;
  const createPath = /\/create\/*/;

  if (
    userPath.test(route.fullPath) ||
    playPath.test(route.fullPath) ||
    createPath.test(route.fullPath)
  ) {
    if (!store.getters.isLoggedIn) {
      redirect(`/login?redirect=${route.fullPath}`);
    } else if (playPath.test(route.fullPath) && route.params.roomID) {
      const roomID = route.params.roomID;
      const isExist = await API.Room.RoomData.isExist(roomID);
      if (!isExist) {
        redirect(`/pageNotFound`);
      }
    }
  }
}
