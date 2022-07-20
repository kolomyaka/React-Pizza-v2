enum errorString {
    notFound = 'Not found'
}

export type serverResponseType = {
    status: number,
    data: errorString
}