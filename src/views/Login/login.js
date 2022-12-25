export default {
  data() {
    return {
      usedForm: "login",
      loginMail: "",
      loginPwd: "",
      registerRepeatPwd: "",
      loginCode: "",

      // Notificare
      notificationType: "error",
      notificationText: "Acest email este deja folosit",
    };
  },
  methods: {
    useLoginForm(newForm) {
      this.usedForm = newForm;
      this.registerRepeatPwd = "";
      this.loginMail = "";
      this.loginPwd = "";
      this.loginCode = "";
    },
    LoginNotify(type, text) {
      this.notificationType = type;
      this.notificationText = text;
      $(".login-notification").fadeIn(0);
      setTimeout(() => {
        $(".login-notification").fadeOut(0);
      }, 3000);
    },
    Login() {
      let data = {
        email: this.loginMail,
        password: this.loginPwd,
      };
      this.$axios
        .post("https://fairplay-rp.ro/api/login", data, {
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.success) {
            this.LoginNotify("success", "Autentificare cu succes");
            setTimeout(() => {
              this.$router.push("/");
            }, 1500);
          } else {
            this.LoginNotify("error", response.data.msg);
          }
        });
    },
    async RegisterUser() {
      if (this.loginPwd != this.registerRepeatPwd) {
        this.LoginNotify("error", "Parolele introduse nu se potrivesc");
        return;
      }
      let data = {
        email: this.loginMail,
        password: this.loginPwd,
        code: this.loginCode,
      };
      this.$axios.post("https://fairplay-rp.ro/api/register", data).then(
        (response) => {
          if (response.data.status == "success") {
            this.LoginNotify("success", "Contul a fost creat cu succes");
            setTimeout(() => {
              this.useLoginForm("login");
            }, 1500);
          } else {
            this.LoginNotify("error", response.data.msg);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
