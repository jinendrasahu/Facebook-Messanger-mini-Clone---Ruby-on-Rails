import consumer from "./consumer"
document.addEventListener('turbolinks:load', () => {
  const group_element = document.getElementById('group-id');
  const group_id = group_element.getAttribute('data-group-id');

  consumer.subscriptions.subscriptions.forEach((subscription) => {
    consumer.subscriptions.remove(subscription)
  })

  consumer.subscriptions.create({ channel: "GroupChannel", group_id: group_id }, {
    connected() {

    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      console.log(data);
      const user_element = document.getElementById('user-id');
      const user_id = Number(user_element.getAttribute('data-user-id'));

      let html;
      if (user_id === data.message.user_id) {
        html = data.mine;
      } else {
        html = data.theirs;
      }
      const messageContainer = document.getElementById('messages')
      messageContainer.innerHTML = messageContainer.innerHTML + html
      // Called when there's incoming data on the websocket for this channel
    }
  });

});
