export default function request(params, target) {

    return new Promise(function(resolve, reject) {

        var config = {
            method: params.method || 'POST',
            charset: "utf-8",
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json;charset=utf-8',
                // "Authorization":"Token 1495250143-8wIWCGfID97huikl-4262859",
                // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            // credentials: 'same-origin'
        };
        if(process.env.NODE_ENV === 'development'){
          // params.url = 'api' + params.url;
          params.url = 'http://cuikangjie.com:3030/same/api' + params.url;
        }else{
          params.url = 'http://cuikangjie.com:3030/same/api' + params.url;
        }

        // if (params.data && config.method === 'POST') {
        //
        //     config.body = params.data
        //     // 'device=d%3A2994466891692&password=kindom123&mobile=%2B86-18636809307&push_token=mi-uid&'
        // }




        fetch(params.url, config).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                Message.error(`报错了 status: ${response.status}`);
                var error = new Error(response.statusText)
                error.response = response;
                throw error
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
          console.log(data);
          if(data.code == 0){
            resolve(data.data)
          }else{
            reject(data);
          }

        }).catch((err) => {
            reject({
                type: 1,
                msg: '网络异常,请检查您的网络环境'
            });
        });

    })
}
