var watson = require("watson-developer-cloud");
const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

const assistant = new AssistantV2({
  version: process.env.WATSON_VERSION,
  authenticator: new IamAuthenticator({
    apikey: "Io5zdxywleZeRP-3woW_uGGaOK_L5S_qNt7BTUNIH9ua"
  }),
  url: "https://gateway-lon.watsonplatform.net/assistant/api"
});

var ses_id;
assistant.createSession(
  {
    assistantId: "a42ff155-6761-4db4-94d3-a574f46775a1"
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(response.result.session_id));
      ses_id = response.result.session_id;
    }
  }
);

// const assistant = new watson.AssistantV1({
//   apikey: "Io5zdxywleZeRP-3woW_uGGaOK_L5S_qNt7BTUNIH9ua",
//   iam_apikey_description:
//     "Auto-generated for key bd3a9626-dd2a-4e59-a95f-59cb0f4d756c",
//   iam_apikey_name: "Auto-generated service credentials",
//   iam_role_crn: "crn:v1:bluemix:public:iam::::serviceRole:Manager",
//   iam_serviceid_crn:
//     "crn:v1:bluemix:public:iam-identity::a/66de5c1d1ec941f68d2b4f95e1f46e82::serviceid:ServiceId-3e4adb11-1c93-4477-a0a0-7f9a1994b783",
//   url: "https://gateway-lon.watsonplatform.net/assistant/api",
//   // username: "apikey",
//   // password: "AifmA6d5K7tsdFIbHrhkuBOpkpXx1N-PGfZ7VagjafUl",
//   // url: "https://gateway-lon.watsonplatform.net/assistant/api",
//   version: process.env.WATSON_VERSION
//   // version_date:
// });

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    console.log(process.env.WATSON_URL);
    console.log(process.env.WATSON_VERSION);
    assistant.message(
      {
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        assistantId: "a42ff155-6761-4db4-94d3-a574f46775a1",
        sessionId: ses_id,
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
