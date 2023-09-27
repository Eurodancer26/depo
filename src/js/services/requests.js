const postData = async (url, data) => {
    // document.querySelector('.status').textContent = message.loading; //не нужно сообщение загрузка так как будет spinner
    let res = await fetch(url, {
        method: "POST",
        body: data.forEach(item => console.log(item))
    });
    
    return await res.text();
};

export {postData};