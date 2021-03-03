<template>
    <div class="lh-404">
        <lh-main-lead :text="text" :header="header"></lh-main-lead>
    </div>
</template>

<script>
    import LhMainLead from '../components/MainLead';

    export default {
        name: 'lh-404',
        data() {
            return {
                text: 'Oops! Looks Like You Made It To The Wrong Page.',
                header: 'Wrong Page Alert!'
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
            LhMainLead
        }
    }
</script>

<style lang="scss" scoped>

    .lh-404 {
        height: 100vh;
    }

</style>