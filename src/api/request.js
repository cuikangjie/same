export default function request(params, target) {

    return new Promise(function(resolve, reject) {

        var config = {
            method: params.method || 'POST',
            charset: "utf-8",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            credentials: 'same-origin'
        };

        params.url = 'api' + params.url;


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
