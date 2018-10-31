define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "E__Developmental_files_Code_files_Projects_Backend_Api_app_routes_apidoc_main_js",
    "groupTitle": "E__Developmental_files_Code_files_Projects_Backend_Api_app_routes_apidoc_main_js",
    "name": ""
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/events/list/id",
    "title": "api to get list details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the list. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"list available\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b858b407a26cb1da834debf\",\n        \"id\": \"g53XKh9yt\",\n        \"userId\": \"_nlTQ_WAg\",\n        \"name\": \"qweqwe\",\n        \"createdBy\": \"Vishal\",\n        \"__v\": 1,\n        \"events\": [\n            {\n                \"isDone\": false,\n                \"events\": [],\n                \"_id\": \"5b85a4676f4e6f2bc40b6267\",\n                \"createdBy\": \"Vishal\",\n                \"listName\": \"qweqwe\",\n                \"name\": \"asdasd\",\n                \"userId\": \"_nlTQ_WAg\",\n                \"id\": \"ckuOUq507\",\n                \"parentId\": \"g53XKh9yt\",\n                \"listId\": \"g53XKh9yt\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "GetApiV1EventsListId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/events/lists/userId",
    "title": "api to get all list of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"list available\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5b858b407a26cb1da834debf\",\n            \"id\": \"g53XKh9yt\",\n            \"userId\": \"_nlTQ_WAg\",\n            \"name\": \"qweqwe\",\n            \"createdBy\": \"Vishal\",\n            \"__v\": 1,\n            \"events\": [\n                {\n                    \"isDone\": false,\n                    \"events\": [],\n                    \"_id\": \"5b85a4676f4e6f2bc40b6267\",\n                    \"createdBy\": \"Vishal\",\n                    \"listName\": \"qweqwe\",\n                    \"name\": \"asdasd\",\n                    \"userId\": \"_nlTQ_WAg\",\n                    \"id\": \"ckuOUq507\",\n                    \"parentId\": \"g53XKh9yt\",\n                    \"listId\": \"g53XKh9yt\",\n                    \"__v\": 0\n                }\n            ]\n        },...",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "GetApiV1EventsListsUserid"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/events/subevent/id",
    "title": "api to get sub event details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the parent event. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"event available\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5b859d1ae2ac3308b025ddfc\",\n            \"listId\": \"g53XKh9yt\",\n            \"parentId\": \"ckuOUq507\",\n            \"id\": \"ppWbE_Bwq\",\n            \"userId\": \"_nlTQ_WAg\",\n            \"name\": \"asdasd\",\n            \"listName\": \"qweqwe\",\n            \"createdBy\": \"Vishal\",\n            \"createdOn\": \"2018-08-28T19:06:02.000Z\",\n            \"__v\": 0,\n            \"isDone\": false\n        },",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "GetApiV1EventsSubeventId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/addevent/subevent/id",
    "title": "api to add sub event .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the parent event. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subevent. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"event created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"parentId\": \"ckuOUq507\",\n        \"id\": \"lP8juodeA\",\n        \"userId\": \"_nlTQ_WAg\",\n        \"name\": \"ToDoList3\",\n        \"createdBy\": \"MMMM\",\n        \"createdOn\": \"2018-08-29T08:32:07.000Z\",\n        \"_id\": \"5b865a07f8a2cf00d8fd6371\",\n        \"isDone\": false\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsAddeventSubeventId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/check/event/id",
    "title": "api to mark a event is completed.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the list. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventId",
            "description": "<p>id of the event. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"event checked\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b858b407a26cb1da834debf\",\n        \"id\": \"g53XKh9yt\",\n        \"userId\": \"_nlTQ_WAg\",\n        \"name\": \"qweqwe\",\n        \"createdBy\": \"Vishal\",\n        \"__v\": 1,\n        \"events\": [\n            {\n                \"isDone\": false,\n                \"events\": [],\n                \"_id\": \"5b85a4676f4e6f2bc40b6267\",\n                \"createdBy\": \"Vishal\",\n                \"listName\": \"qweqwe\",\n                \"name\": \"asdasd\",\n                \"userId\": \"_nlTQ_WAg\",\n                \"id\": \"ckuOUq507\",\n                \"parentId\": \"g53XKh9yt\",\n                \"listId\": \"g53XKh9yt\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsCheckEventId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/check/subevent/id",
    "title": "api to mark a subevent is completed.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the subevent. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"event checked\",\n\"status\": 200,\n\"data\": {\n    \"n\": 1,\n    \"nModified\": 1,\n    \"ok\": 1\n        }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsCheckSubeventId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/createlist",
    "title": "api to create a list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the list. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>name of the user. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"list created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"id\": \"yTEXxEQVb\",\n        \"userId\": \"_nlTQ_WAg\",\n        \"name\": \"ToDoList3\",\n        \"createdBy\": \"MMMM\",\n        \"createdOn\": \"2018-08-29T07:13:07Z\",\n        \"_id\": \"5b864783f8a2cf00d8fd636e\",\n        \"events\": []\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsCreatelist"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/createlist/addevent/listId",
    "title": "api to create a event.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>id of the list. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>name of the list. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>name of the user. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"event created\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b864d76f8a2cf00d8fd636f\",\n        \"id\": \"VtnZCdfWn\",\n        \"userId\": \"_nlTQ_WAg\",\n        \"name\": \"ToDoList3\",\n        \"createdBy\": \"MMMM\",\n        \"createdOn\": \"2018-08-29T07:38:30Z\",\n        \"__v\": 0,\n        \"events\": [\n            {\n                \"isDone\": false,\n                \"events\": [],\n                \"_id\": \"5b864db8f8a2cf00d8fd6370\",\n                \"createdOn\": \"2018-08-29T07:39:36.000Z\",\n                \"id\": \"fflMTBGHN\",\n                \"parentId\": \"VtnZCdfWn\",\n                \"listId\": \"VtnZCdfWn\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsCreatelistAddeventListid"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/delete/event/id",
    "title": "api to delete a event.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the list. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventId",
            "description": "<p>id of the event. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\"error\": false,\n\"message\": \"event deleted\",\n\"status\": 200,\n\"data\": {\n    \"n\": 1,\n    \"ok\": 1\n         }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsDeleteEventId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/delete/subevent/id",
    "title": "api to delete a event.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the subevent. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\"error\": false,\n\"message\": \"event deleted\",\n\"status\": 200,\n\"data\": {\n    \"n\": 1,\n    \"ok\": 1\n         }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsDeleteSubeventId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/deletelist/id",
    "title": "api to delete a list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the list. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\"error\": false,\n\"message\": \"list deleted\",\n\"status\": 200,\n\"data\": {\n    \"n\": 1,\n    \"ok\": 1\n         }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsDeletelistId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/edit/event/id",
    "title": "api to edit a event.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the list. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventId",
            "description": "<p>id of the event. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>new name of the event. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"event edited\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b858b407a26cb1da834debf\",\n        \"id\": \"g53XKh9yt\",\n        \"userId\": \"_nlTQ_WAg\",\n        \"name\": \"qweqwe\",\n        \"createdBy\": \"Vishal\",\n        \"__v\": 1,\n        \"events\": [\n            {\n                \"isDone\": false,\n                \"events\": [],\n                \"_id\": \"5b85a4676f4e6f2bc40b6267\",\n                \"createdBy\": \"Vishal\",\n                \"listName\": \"qweqwe\",\n                \"name\": \"asdasd\",\n                \"userId\": \"_nlTQ_WAg\",\n                \"id\": \"ckuOUq507\",\n                \"parentId\": \"g53XKh9yt\",\n                \"listId\": \"g53XKh9yt\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsEditEventId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/edit/subevent/id",
    "title": "api to edit a subevent.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of the subevent. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>new name of the subevent. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"event edited\",\n\"status\": 200,\n\"data\": {\n    \"n\": 1,\n    \"nModified\": 1,\n    \"ok\": 1\n        }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsEditSubeventId"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/undo/userId",
    "title": "api to save history.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "actionName",
            "description": "<p>actionName takes input: 'editevent','editSubevent','deleteEvent','deleteSubEvent','deleteList'</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of list/event/sub-event. (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parentId",
            "description": "<p>parentId of event/sub-event. (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of list/event/sub-event. (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of user. (params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "previousName",
            "description": "<p>name of event. (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>name of list. (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "isDone",
            "description": "<p>status of event/subevent. (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdBy",
            "description": "<p>creator of list/event/subevent. (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "createdOn",
            "description": "<p>date of creation of list/event/subevent. (body)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "events",
            "description": "<p>subevents of list/event if available. (body)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"database saved\",\n\"status\": 200,\n\"data\": {\n    \"n\": 1,\n    \"ok\": 1\n        }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsUndoUserid"
  },
  {
    "group": "ToDo_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/undodb/userId",
    "title": "api to undo last event.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>id of the user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"error\": false,\n    \"message\": \"action restored\",\n    \"status\": 200,\n    \"data\": \n{\n    \"error\": false,\n    \"message\": \"Action restored\",\n    \"status\": 200,\n    \"data\": {\n        \"actionName\": String,\n        \"parentId\": String;\n        \"name\": String\n        \"userId\": String\n        \"listName\": String\n        \"isDone\": Boolean\n        \"createdBy\": String\n        \"createdOn\": Date\n        \"listId\": String\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./toDo.js",
    "groupTitle": "ToDo_List",
    "name": "PostApiV1EventsUndodbUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/friends/userId",
    "title": "to get friends of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Friend list\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-08-15T15:02:10.000Z\",\n            \"mobileNumber\": 0,\n            \"email\": \"String\",\n            \"lastName\": \"String\",\n            \"firstName\": \" String\",\n            \"userId\": \"String\"\n        },\n        ...",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersFriendsUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/get/allusers",
    "title": "to get all users.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Users\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-08-15T15:02:10.000Z\",\n            \"mobileNumber\": 0,\n            \"email\": \"String\",\n            \"lastName\": \"String\",\n            \"firstName\": \" String\",\n            \"userId\": \"String\"\n        },\n        ...",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetAllusers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/get/req/userId",
    "title": "to get user friend requests.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Request Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-08-15T15:02:10.000Z\",\n            \"mobileNumber\": 0,\n            \"email\": \"String\",\n            \"lastName\": \"String\",\n            \"firstName\": \" String\",\n            \"userId\": \"String\"\n        },\n        ...",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetReqUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/accept/senderId",
    "title": "to accept request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the sender. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Request accepted\",\n    \"status\": 200,\n    \"data\": null",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersAcceptSenderid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/reject/senderId",
    "title": "to reject request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the sender. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Request rejected\",\n    \"status\": 200,\n    \"data\": null",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersRejectSenderid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetpassword",
    "title": "to create token for password reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Enter token to change the password\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetpassword/:token",
    "title": "to reset password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>newpassword of the user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token emailed to the user. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"password successfully changed\",\n   \"status\": 200,\n   \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpasswordToken"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signuo",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>last name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "number",
            "description": "<p>mobile number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>country code name of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        null\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignuo"
  }
] });
