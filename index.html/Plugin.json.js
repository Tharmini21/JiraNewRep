{
  "name": "jiracreateissue",
  "displayName": "Jira Integration",
  "description": "Plugin to integrate with Jira",
  "category": "",
  "documentLink": "https://jirasoft123.atlassian.net",
  "uiSpec": {
    "providerTabs": [
      {
        "type": "SETTINGS",
        "text": "Setup",
        "enable": "hasAgreed || isRegistered",
        "nextTab": 1,
        "default": "hasAgreed",
        "params": [
          "app"
        ]
      },
      {
        "type": "OAUTH2",
        "saveBtn": false,
        "enable": "isRegistered",
        "default": "isRegistered",
        "nextTab": 2
      },
      {
        "type": "SETTINGS",
        "enable": "isAuthorized",
        "nextTab": true,
        "default": "isAuthorized",
        "params": [
            "oauth"
        ]
      }
    ]
  },
  "providerData": [
    {
      "param": "app",
      "displayName": "Connected App",
      "description": "The details of the connected app to be used for authentication. If you do not supply this information then the default converse app will be used.",
      "type": "PARAM",
      "optional": false,
      "valueParams": [
        {
          "param": "client_id",
          "displayName": "Client Id",
          "description": "The client id of the connected app",
          "type": "STRING",
          "optional": false
        },
        {
          "param": "client_secret",
          "displayName": "Client Secret",
          "description": "The client secret of the connected app",
          "type": "PASSWORD",
          "optional": false
        }
      ]
    },
    {
      "param": "basic_auth",
      "displayName": "basic_auth Callback",
      "description": "Settings for customising the basic_auth process for the end user.",
      "type": "PARAM",
      "optional": true,
      "valueParams": [
        {
          "param": "Host Url",
          "displayName": "Host",
          "description": "Host Url of the basic oauth",
          "type": "STRING",
          "optional": true
        },
        {
          "param": "Email",
          "displayName": "Email",
          "description": "Email of the basic oauth",
          "type": "PASSWORD",
          "optional": true
        },
        {
          "param": "password",
          "displayName": "password",
          "description": "password of the basic oauth",
          "type": "STRING",
          "optional": true
        }
      ]
    }
  ],
  "module": [
    {
      "id": "jiracreateissue",
      "name": "Create Jira Issue",
      "description": "This module will create issue in Jira.",
      "hasReturn": false,
      "param": [
        {
          "param": "projectkey",
          "displayName": "Project Key",
          "description": "Key of the Project.",
          "type": "STRING"
        },
        {
          "param": "Issue type",
          "displayName": "Issue Type",
          "description": "Type of the issue.",
          "type": "ENUM",
          "value": [
            {
              "label": "Epic",
              "value": 1
            },
            {
              "label": "Task",
              "value": 2
            },
            {
              "label": "Story",
              "value": 3
            },
            {
              "label": "Bug",
              "value": 4
            }
          ]
        },
        {
          "param": "summary",
          "displayName": "summary",
          "description": "summary of the issue.",
          "type": "STRING"
        },
        {
          "param": "Description",
          "displayName": "Description",
          "description": "description of the issue.",
          "type": "STRING"
        }
      ]
    }
  ],
  "webhooks": []
}
