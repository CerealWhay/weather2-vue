
export const getUserLatLon = async (): Promise<string> => {
    return await new Promise((resolve): void => {
        navigator.geolocation.getCurrentPosition(
            (pos: GeolocationPosition): void => {
                const {latitude, longitude} = pos.coords
                resolve(`${latitude},${longitude}`);
            },
            (error: GeolocationPositionError): void => {
                console.log(error.message)
                resolve('')
            }
        )
    });
}