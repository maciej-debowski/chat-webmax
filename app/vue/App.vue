<template>
    <div id="root">
        <h1>Chat App</h1>

        <div class="messages-container">
            <li v-for="message in messages" :key="message">
                {{ message.username }} <br>
                {{ message.message }} <br><br>
            </li>
        </div>

        <br>

        <input type="text" v-model="message" class="add-message" @keypress.enter="send">
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            message: "",
            user: prompt("Username: "),
            messages: []
        }
    },
    methods: {
        send() {
            console.log('sent')
            window.webmax.socket.emit("messager", {
                message: this.message,
                username: this.user
            })
        }
    },
    mounted() {
        window.webmax.socket.on("messager", data => {
           //if(data.username == this.user) return
            this.messages.push(data)
        })
    }
}
</script>

<style>
    #root {
        text-align: center;
        padding: 100px;
    }

    h1 {
        margin-bottom: 30px;
    }

    .add-message {
        padding: 10px 15px;
        background: #0004;
        color: #fff;
        width: 500px;
    }

    .messages-container {
        width: 500px;
        height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px;
        margin: 0 auto;
    }

    .messages-container li {
        list-style: none;
    }
</style>