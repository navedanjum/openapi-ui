# OPENAPI-UI
## Table of contents
- [About](#about)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [List of Services](#list-of-swagger-services)
- [Additional Information](#additional-info)

## About<a name="about"></a>
### openapi-ui does has the following functionalities 
- It either clones or pulls the latest changes from twilio-oai repository
- Use the open-api specification from the json files and transforms the spec files such that endpoint can be viewed collectively under a group
- Displays each of the services in the swagger UI
- Swagger UI distribution files are copied to the repository to make api calls to twilio services locally or through hosted UI pages
- Additionally each of the services API endpoints for different HTTP verbs are grouped together for ease of use and hosted on githib pages 
- [twilio-oai](https://github.com/twilio/twilio-oai) - Twilio open-api repo
- [swagger-ui](https://github.com/swagger-api/swagger-ui) - Swagger UI repo


## Requirements<a name="requirements"></a>
1. Node version > 12, `brew install node` Good to use `nvm`  node version management.  
2. npm

## Getting Started<a name="getting-started"></a>
Assuming repository is already cloned then follow the steps below to get started:  
```sh
# Install dependencies
npm install

# Execute the project
npm run start

#Transformed swagger specs and index.html files are created at path `./services/<service_name>/*{json|html}`
```

## List of Services<a name="list-of-swagger-services"></a>    
 * [accounts_v1](https://navedanjum.github.io/openapi-ui/services/accounts_v1/)
 * [api_v2010](https://navedanjum.github.io/openapi-ui/services/api_v2010/)
 * [autopilot_v1](https://navedanjum.github.io/openapi-ui/services/autopilot_v1/)
 * [bulkexports_v1](https://navedanjum.github.io/openapi-ui/services/bulkexports_v1/)
 * [chat_v1](https://navedanjum.github.io/openapi-ui/services/chat_v1/)
 * [chat_v2](https://navedanjum.github.io/openapi-ui/services/chat_v2/)
 * [chat_v3](https://navedanjum.github.io/openapi-ui/services/chat_v3/)
 * [conversations_v1](https://navedanjum.github.io/openapi-ui/services/conversations_v1/)
 * [events_v1](https://navedanjum.github.io/openapi-ui/services/events_v1/)
 * [flex_v1](https://navedanjum.github.io/openapi-ui/services/flex_v1/)
 * [frontline_v1](https://navedanjum.github.io/openapi-ui/services/frontline_v1/)
 * [insights_v1](https://navedanjum.github.io/openapi-ui/services/insights_v1/)
 * [ip_messaging_v1](https://navedanjum.github.io/openapi-ui/services/ip_messaging_v1/)
 * [ip_messaging_v2](https://navedanjum.github.io/openapi-ui/services/ip_messaging_v2/)
 * [lookups_v1](https://navedanjum.github.io/openapi-ui/services/lookups_v1/)
 * [lookups_v2](https://navedanjum.github.io/openapi-ui/services/lookups_v2/)
 * [media_v1](https://navedanjum.github.io/openapi-ui/services/media_v1/)
 * [messaging_v1](https://navedanjum.github.io/openapi-ui/services/messaging_v1/)
 * [microvisor_v1](https://navedanjum.github.io/openapi-ui/services/microvisor_v1/)
 * [monitor_v1](https://navedanjum.github.io/openapi-ui/services/monitor_v1/)
 * [notify_v1](https://navedanjum.github.io/openapi-ui/services/notify_v1/)
 * [numbers_v2](https://navedanjum.github.io/openapi-ui/services/numbers_v2/)
 * [oauth_v1](https://navedanjum.github.io/openapi-ui/services/oauth_v1/)
 * [preview](https://navedanjum.github.io/openapi-ui/services/preview/)
 * [pricing_v1](https://navedanjum.github.io/openapi-ui/services/pricing_v1/)
 * [pricing_v2](https://navedanjum.github.io/openapi-ui/services/pricing_v2/)
 * [proxy_v1](https://navedanjum.github.io/openapi-ui/services/proxy_v1/)
 * [routes_v2](https://navedanjum.github.io/openapi-ui/services/routes_v2/)
 * [serverless_v1](https://navedanjum.github.io/openapi-ui/services/serverless_v1/)
 * [studio_v1](https://navedanjum.github.io/openapi-ui/services/studio_v1/)
 * [studio_v2](https://navedanjum.github.io/openapi-ui/services/studio_v2/)
 * [supersim_v1](https://navedanjum.github.io/openapi-ui/services/supersim_v1/)
 * [sync_v1](https://navedanjum.github.io/openapi-ui/services/sync_v1/)
 * [taskrouter_v1](https://navedanjum.github.io/openapi-ui/services/taskrouter_v1/)
 * [trunking_v1](https://navedanjum.github.io/openapi-ui/services/trunking_v1/)
 * [trusthub_v1](https://navedanjum.github.io/openapi-ui/services/trusthub_v1/)
 * [verify_v2](https://navedanjum.github.io/openapi-ui/services/verify_v2/)
 * [video_v1](https://navedanjum.github.io/openapi-ui/services/video_v1/)
 * [voice_v1](https://navedanjum.github.io/openapi-ui/services/voice_v1/)
 * [wireless_v1](https://navedanjum.github.io/openapi-ui/services/wireless_v1/)

## Additional Information<a name="additional-info"></a>
- View & Use locally by serving the project 
- View it on dev server or live server by directory accessing index.html file in created services directory in the project root

