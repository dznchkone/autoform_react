//Отправляем JSON
const fetchConfig = async (url, form) => {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
    })

    if (response.ok) {
        //Если ответ пришел экспортируем json в объект
        return await response.json();
    } else {
        // Если ответ не пришел, генерируем свой объект с ошибкой
        const msg = `После запроса на ${url} произошла ошибка HTTP: ${response.statusText}`;
        return {
            error: -1,
            msg
        }
    }
}
//функция генерирует ссылку на файл, кликает её и удаляет ссылку.
const downloadFile = (msg)=>{
    let link = document.createElement('a');
    link.href = `${msg}`;
    link.download = `${msg}`;
    link.click();
    link.remove();
}

export {
    fetchConfig,
    downloadFile
}
