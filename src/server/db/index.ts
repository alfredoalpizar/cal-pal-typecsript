import * as AWS from 'aws-sdk';


const creds = new AWS.SharedIniFileCredentials({ callback: (err): void => console.log(`Error: ${err}`) });
AWS.config.credentials = creds;
AWS.config.update({ region: 'us-east-1' });
export default new AWS.DynamoDB();
// dynamodb.listTables({}, (err, data) => {
//   if (err)console.log(`Error in listTables: ${err}`);
//   else console.log(data);
// });
