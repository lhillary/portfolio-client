<template>
    <div class="lh-login">
        <lh-main-lead :text="text" :header="header">
            <div class="lh-login-container" v-if="!$auth.loading">
                <lh-button v-if="!$auth.isAuthenticated" @click="login">Log In To View Projects</lh-button>
                <lh-button v-if="$auth.isAuthenticated" @click="logout">Log Out</lh-button>
            </div>
        </lh-main-lead>
    </div>
</template>

<script>
    import LhMainLead from '../components/MainLead';
    import LhButton from '../components/Button';

    export default {
        name: 'lh-home',
        data() {
            return {
                text: 'Welcome To The Portfolio Of Lydia Hillary. Log In To See My Projects. Connect With Me On LinkedIn For Credentials (Pesky NDAs).',
                header: 'Welcome To My Portfolio'
            }
        },
        methods: {
            login() {
                this.$auth.loginWithRedirect();
            },
            logout() {
                this.$auth.logout({
                    returnTo: window.location.origin
                })
            }
        },
        components: {
            LhMainLead,
            LhButton
        }
    }
</script>

<style lang="scss" scoped>

    .lh-login {
        height: 80vh;
    }

    .lh-login-container {
        padding: 2em 0em;
    }

</style>