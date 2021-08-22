export default function({ app, store, route, redirect }) {
  const userPath = /\/user\/*/;
  const playPath = /\/play\/*/;
  const createPath = /\/create\/*/;

  if (
    userPath.test(route.fullPath) ||
    playPath.test(route.fullPath) ||
    createPath.test(route.fullPath)
  ) {
    if (!store.getters.isLoggedIn) redirect(`/login?redirect=${route.fullPath}`);
  }
}
