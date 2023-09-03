// store/stack.js
import { defineStore } from 'pinia'

export const useStackStore = defineStore({
	id: 'stack',
	state: () => ({
		skills: [
			{
				id: 1,
				title: 'Front-End',
				image: '/images/front-end.png',
				description: [
					{ title: 'Vue.js', icon: 'logos:vue' },
					{ title: 'Nuxt.js', icon: 'logos:nuxt-icon' },
					{ title: 'PHP', icon: 'logos:php' },
					{ title: 'Javascript', icon: 'logos:javascript' },
				],
			},
			{
				id: 2,
				title: 'Back-End',
				image: '/images/back-end.png',
				description: [
					{ title: 'Node.js', icon: 'logos:nodejs' },
					{ title: 'Python', icon: 'logos:python' },
					{ title: 'Java', icon: 'logos:java' },
					{ title: 'c#', icon: 'logos:c-sharp' },
				],
			},
			{
				id: 3,
				title: 'Data Bases',
				image: '/images/database.png',
				description: [
					{ title: 'Mysql', icon: 'logos:mysql' },
					{ title: 'MongoDB', icon: 'logos:mongodb-icon' },
					{ title: 'Oracle', icon: 'logos:oracle' },
					{ title: ' DocumentDB', icon: 'logos:aws-documentdb' },
				],
			},
			{
				id: 4,
				title: 'Cloud Management',
				image: '/images/cloud-management.png',
				description: [
					{ title: 'AWS', icon: 'logos:aws' },
					{ title: 'Azure', icon: 'logos:azure-icon' },
				],
			},
			{
				id: 5,
				title: 'Versionado',
				image: '/images/version-control.png',
				description: [
					{ title: 'GitHub', icon: 'logos:github-octocat' },
					{ title: 'SVN', icon: 'logos:subversion' },
				],
			},
			{
				id: 5,
				title: 'Agile',
				image: '/images/agile.png',
				description: [
					{ title: 'Jira', icon: 'logos:jira' },
					{ title: 'Confluence', icon: 'logos:confluence' },
					{ title: 'Microsoft Teams', icon: 'logos:microsoft-teams' },
					{ title: 'Slack', icon: 'logos:slack-icon' },
					{ title: 'Trello', icon: 'logos:trello' },
				],
			},
		],
	}),
	getters: {
		allSkills() {
			return this.skills
		},
	},
})
