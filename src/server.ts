// expressモジュールを読み込む
import * as Express from 'express';

import zaif from './controller/zaif';

// expressアプリを生成する
const app = Express();

const cors = require( 'cors' );
app.use( cors() );

// routing
app.use( '/zaif/', zaif );

// CORSを許可する

app.get(
    '/',
    ( req: Express.Request, res: Express.Response ) => {
      return res.sendStatus(200);
    } );

app.listen(
  4400,
  () => {
    console.log( 'Example app listening on port 4400!' );
  } );

export default app;
