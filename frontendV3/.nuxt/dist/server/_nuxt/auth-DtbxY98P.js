import { u as useFetch } from "./fetch-8GViaUKS.js";
import { e as defineStore, f as useCookie } from "../server.mjs";
const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    userEmailLogged: "",
    userLogged: "",
    sessionToken: "",
    artistId: ""
  }),
  actions: {
    async authenticateUser({ email, password }) {
      const { data, error, pending } = await useFetch("https://arthub-api-polished-breeze-902.fly.dev/api/v1/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      }, "$L7GOUGH2Ei");
      this.loading = pending;
      if (data.value) {
        const token = useCookie("token");
        token.value = data.value.key;
        this.authenticated = true;
        this.userEmailLogged = email;
        this.sessionToken = data.value.key;
        localStorage.setItem("token", data.value.key);
      }
      this.getUserID();
      return { data: data.value, error: error.value };
    },
    async getUserID() {
      const { data } = await useFetch("https://arthub-api-polished-breeze-902.fly.dev/api/v1/auth/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        }
      }, "$9tIGMbEnCX");
      if (data.value) {
        const userLogin = { ...data.value };
        this.userLogged = userLogin;
        localStorage.setItem("userId", data.value.pk);
        this.getArtistId();
      }
    },
    async getArtistId() {
      const { data } = await useFetch(`https://arthub-api-polished-breeze-902.fly.dev/api/v1/search/artist/?user_id=${this.userLogged.pk}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        }
      }, "$vHZDuP3yg3");
      if (data.value) {
        const artistData = data.value;
        this.artistId = artistData.id;
        localStorage.setItem("artistID", data.value.id);
      }
    },
    logout() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
      this.userEmailLogged = null;
      this.userLogged = null;
      this.sessionToken = null;
      this.artistId = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
  },
  persist: true
});
export {
  useAuthStore as u
};
//# sourceMappingURL=auth-DtbxY98P.js.map
