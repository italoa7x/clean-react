import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";


const makeUst = (url: string = '') => {

    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);

    return {
        sut,
        httpPostClientSpy
    }
}

describe('RemoteAuthentication', () => {

    test('Should call HttpClient with correct url', async () => {

        const url = 'localhost'
        const { sut, httpPostClientSpy } = makeUst(url);

        await sut.auth();

        expect(httpPostClientSpy.url).toBe(url);

    })
})