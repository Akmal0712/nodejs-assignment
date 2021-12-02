# HTTP сервер

Для запуска наберите npm run http

Сервер имеет доступ к данным из MongoDB, которые ранее были добавлены Consumer-ом.

/api/vehicles?page=${page}&limit=${limit} - получить информации о транспортах

/api/vehicles:id - получить информацию о транспорте по ID
