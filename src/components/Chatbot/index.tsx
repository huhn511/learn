import React, { useState, useEffect } from 'react';
import ChatBot from "react-chatbotify";

import { useHistory } from "react-router-dom";

const MyChatBot = () => {
    const history = useHistory();

	const helpOptions = ["Cloud Basics", "API Docs", "Examples", "Github"];
	const flow = {
		start: {
			message: "Hello, I am your Bot 👋! Welcome to STACKIT! I'm excited that you are using our " +
				"chatbot 😊!",
			transition: {duration: 1000},
			path: "show_options"
		},
		show_options: {
			message: "Here are a few helpful " +
				"things you can check out to get started:",
			options: helpOptions,
			path: "process_options"
		},
		prompt_again: {
			message: "Do you need any other help?",
			options: helpOptions,
			path: "process_options"
		},
		unknown_input: {
			message: "Sorry, I do not understand your message 😢! We need more AI here :)",
			options: helpOptions,
			path: "process_options"
		},
		process_options: {
			transition: {duration: 0},
			chatDisabled: true,
			path: async (params) => {
				let link = "";
				switch (params.userInput) {
				case "Cloud Basics":
					link = "/docs/category/cloud-basics";
					break;
				case "Docs":
					link = "https://react-chatbotify.com/docs/api/settings";
					break;
				case "Examples":
					link = "https://react-chatbotify.com/docs/examples/basic_form";
					break;
				case "Github":
					link = "https://github.com/tjtanjin/react-chatbotify/";
					break;
				default:
					return "unknown_input";
				}
				await params.injectMessage("Sit tight! I'll send you right there!");
				setTimeout(() => {
					//window.open(link);
                    history.push(link);

				}, 1000)
				return "repeat"
			},
		},
		repeat: {
			transition: {duration: 3000},
			path: "prompt_again"
		},
	}
	return (
		<ChatBot settings={{general: {embedded: false}, chatHistory: {storageKey: "example_faq_bot"}}} flow={flow}/>
	);
};


export default MyChatBot