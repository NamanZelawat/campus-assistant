var watson = require('watson-developer-cloud');

const assistant = new watson.AssistantV1({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  url:      process.env.WATSON_URL,
  version:  process.env.WATSON_VERSION
});

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    assistant.message(
      {
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });