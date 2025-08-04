const uploadForm = document.getElementById("imageUploadForm");
const imageInput = document.getElementById("imageInput");
const descriptionInput = document.getElementById("image_description");
const support_chatBox = document.getElementById("support-chat-messages-box");
const support_contact_form = document.querySelector("#support_contact_form");
const support_message_input = document.querySelector("#support_message");
const support_image_message_modal = document.querySelector("#imageMessage2");
simpleTextChat(support_chatBox,support_contact_form,support_message_input); // find the function in common.js
textAndImageChat(support_chatBox,uploadForm,imageInput,descriptionInput,support_image_message_modal); // find the function in common.js

// normal message for client to developer
const freelancerChatBox = document.getElementById("freelancer-chat-box");
const freelancer_chat_form = document.querySelector("#freelancer_chat_form");
const freelancer_chat_input = document.querySelector("#freelancer_chat_input");
simpleTextChat(freelancerChatBox,freelancer_chat_form,freelancer_chat_input); // find the function in common.js
