import Queries from '~/utils/Queries'


export default function({ store, route, redirect, document }) {

  if (process.client) {

    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // });
1
    const queries = new Queries
    queries.mobile() ? store.commit("setIsMenu", false) : store.commit("setIsMenu", true)

  }

}
