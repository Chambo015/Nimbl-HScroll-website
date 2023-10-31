import OAuth, * as oauth from 'oauth-1.0a';
import * as CryptoJS from 'crypto-js';
import { ISessionTwitter, IUserTwitter } from '@/types';

class TwitterAuthClientClass {
    private oauth: OAuth;
    // private token: { key: string, secret: string };

    constructor() {
        this.oauth = new OAuth({
          consumer: {
            key: 'wyCoO2zeP42kAWgzSRACRitwa',
            secret: 'exexeMvxeezQtWAc0ESWnTSi7hgsxrLzlqLA8etGXbtyBhLHCk'
          },
          signature_method: 'HMAC-SHA1',
          hash_function(base_string, key) {
            const hash = CryptoJS.HmacSHA1(base_string, key);
            return CryptoJS.enc.Base64.stringify(hash);
          }
        });

        // this.token = {
        //     key: 'YOUR_ACCESS_TOKEN',
        //     secret: 'YOUR_TOKEN_SECRET'
        // };
    }

    twitterLogin() {

      // const requestData = {
      //   url: 'https://api.twitter.com/oauth/request_token/',
      //   method: 'POST',
      //   data: { oauth_callback: "https://api.nimbl.tv/accounts/twitter/login/callback/" } // Include the callback URL here
      // };

      // try {
      //   const response = await fetch(requestData.url, {
      //     method: 'POST',
      //     headers: this.oauth.toHeader(this.oauth.authorize(requestData))
      //   });
        
      //     const data = await response.text();
      //     console.log(data)
      //     // get oauth_token and oauth_token_secret
      //     // const oauth_token = data.split('&')[0].split('=')[1];
      //     // const oauth_token_secret = data.split('&')[1].split('=')[1];

      //     window.location.href = `https://api.twitter.com/oauth/authenticate?${data}`;
      //     // oauth_callback=https%3A%2F%2Fapi.nimbl.tv%2Faccounts%2Ftwitter%2Flogin%2Fcallback%2F
          
      // } catch (error) {
      //     console.error('Error during OAuth 1.0a login:', error);
      // }

      window.location.href = "https://api.nimbl.tv/accounts/twitter/login/"
    }

    async fetchTwitterUserById(id: string) {
      const response = await fetch(`https://api.nimbl.tv/en/api/user/info/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${id}`
        }
      });
      const data = await response.json() as {
        user: IUserTwitter
        key: string
      };

      return {
        user: data.user,
        token: data.key
      } as ISessionTwitter;
    }
}

const twitterAuthClient = new TwitterAuthClientClass();

export default twitterAuthClient;
