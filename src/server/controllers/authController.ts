import * as uuidv4 from 'uuid/v4';
import * as bcrypt from 'bcrypt';
import * as express from 'express';

import {
  PutItemOutput, PutItemInput, QueryInput, QueryOutput,
} from 'aws-sdk/clients/dynamodb';

// import dynamodb from '../db/index';
import { SignupData } from '../../types/index';
import dynamodb from '../db/index';

const putItem = (params: PutItemInput):
 Promise<PutItemOutput> => new Promise((resolve, reject): void => {
  dynamodb.putItem(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      reject(err);
    } else {
      console.log(data);
      resolve(data);
    }
  });
});

const queryItem = (params: QueryInput):
Promise<QueryOutput> => new Promise((resolve, reject): void => {
  dynamodb.query(params, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

export const signup = (req: express.Request, res: express.Response): void => {
  const {
    username, password, height, weight,
  }: SignupData = req.body;

  const uid = uuidv4();
  bcrypt.genSalt(10).then(salt => bcrypt.hash(password, salt))
    .then((hashed) => {
      const params = {
        Item: {
          uid: {
            S: uid,
          },
          username: {
            S: username,
          },
          password: {
            S: hashed,
          },
          height: {
            S: height,
          },
          weight: {
            N: weight,
          },
        },
        ReturnConsumedCapacity: 'TOTAL',
        TableName: 'User',
      };

      putItem(params).then((data) => {
        console.log(data);
        req.session.user = uid;
        return res.json({
          message: 'Success!', uid, height, weight,
        });
      })
        .catch(err => res.json({ err }));
    })
    .catch(err => console.log(`Error in bcrypt ${err}`));
};

export const login = (req: express.Request, res: express.Response): void => {
  const { username, password } = req.body;
  const params = {
    IndexName: 'username-index',
    ExpressionAttributeValues: {
      ':v1': {
        S: username,
      },
    },
    KeyConditionExpression: 'username = :v1',
    TableName: 'User',
    ProjectionExpression: 'password, uid, height, weight',
  };

  queryItem(params).then((data) => {
    bcrypt.compare(password, data.Items[0].password.S).then((match) => {
      if (match) {
        const { uid, height, weight } = data.Items[0];
        console.log(height.S);
        req.session.user = uid;
        return res.json({
          message: 'Success!', uid, height, weight,
        });
      }
      return res.json({ err: 'Wrong password!' });
    });
  }).catch(err => console.log('ERROR:', err));
};

export const verifyToken = (req: express.Request,
  res: express.Response, next: express.NextFunction): void => {
  if (req.session.user && req.cookies.user_sid) {
    res.json({ status: 'success', message: 'user verified!!!', data: { result } });
  } else {
    next();
  }
  // const { token } = req.cookies;
  // console.log(token);
  // if (!token) return res.json({ err: 'Not authorized!' });
  // jwt.verify(token, 'bananaHammock', (err, result) => {
  //   if (err) return res.json({ err });
  //   return res.json({ status: 'success', message: 'user verified!!!', data: { result } });
  // });
};
