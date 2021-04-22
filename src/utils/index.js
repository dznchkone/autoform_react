//фетч запрос на cgi скрипт
const fetchConfig = async (url, form) => {
    let response = await fetch(url, {
        method: "POST",
        body: new FormData(form)
    })

    if (response.ok) {
        return await response.json();
    } else {
        const msg = `После запроса на ${url} произошла ошибка HTTP: ${response.status}`;
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
