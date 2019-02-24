import * as Express from 'express';

import * as request from 'request';

const router = Express.Router();

router.get('', ( req: Express.Request, res: Express.Response ) => {
  res.send('zaif');
});
// 同時検索可能数は最大4
router.get( '/:value', ( req: Express.Request, res: Express.Response ) => {
  const value       = req.params[ 'value' ].split( ',' ).reduce( ( pre, cur ) => { return pre + '/' + cur }, '' );
  const url = `https://api.zaif.jp/api/1${value}`;
  const request_options = { url, method: 'Get' };

  request( request_options, ( error, response_json, body ) => {
    if ( !error ) {
      console.log(url);
      // console.log(response_json);
      const response = JSON.parse( response_json.body );
      res.json( response );
    } else {
      res.status( 500 );
      res.end( 'Internal Server Error' ); // これがないとレスポンスが返らない
    }
  } )
} );

export default router;
