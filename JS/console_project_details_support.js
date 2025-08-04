// normal message for support to client
const uploadForm = document.getElementById("imageUploadForm");
const imageInput = document.getElementById("imageInput");
const descriptionInput = document.getElementById("image_description");
const support_chatBox = document.getElementById("support-chat-messages-box");
const support_contact_form = document.querySelector("#support_contact_form");
const support_message_input = document.querySelector("#support_message");
const support_image_message_modal = document.querySelector("#imageMessage2");
simpleTextChat(support_chatBox,support_contact_form,support_message_input); // find the function in common.js
textAndImageChat(support_chatBox,uploadForm,imageInput,descriptionInput,support_image_message_modal); // find the function in common.js

// normal message for support to reviewer - Solvify
const reviewerChatBox = document.getElementById("reviewer-chat-box");
const reviewer_chat_form = document.querySelector("#reviewer_chat_form");
const reviewer_chat_input = document.querySelector("#reviewer_chat_input");
simpleTextChat(reviewerChatBox,reviewer_chat_form,reviewer_chat_input); // find the function in common.js

// normal message for support to Hoster - Solvify
const hosterChatBox = document.getElementById("hoster-chat-box");
const hoster_chat_form = document.querySelector("#hoster_chat_form");
const hoster_chat_input = document.querySelector("#hoster_chat_input");
simpleTextChat(hosterChatBox,hoster_chat_form,hoster_chat_input); // find the function in common.js

// normal message for support to hoster - Freelancer
const freelancerHosterChatBox = document.getElementById("freelancer-hoster-chat-box");
const freelancerHosterChatForm = document.querySelector("#freelancer_hoster_chat_form");
const freelancerHosterChatInput = document.querySelector("#freelancer_hoster_chat_input");
simpleTextChat(freelancerHosterChatBox,freelancerHosterChatForm,freelancerHosterChatInput); // find the function in common.js

// normal message for support to hoster - Freelancer
const freelancerReviewerChatBox = document.getElementById("freelancer-reviewer-chat-box");
const freelancerReviewerChatForm = document.querySelector("#freelancer_reviewer_chat_form");
const freelancerReviewerChatInput = document.querySelector("#freelancer_reviewer_chat_input");
simpleTextChat(freelancerReviewerChatBox,freelancerReviewerChatForm,freelancerReviewerChatInput); // find the function in common.js