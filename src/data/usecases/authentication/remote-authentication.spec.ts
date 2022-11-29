import { HttpClientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";


describe('RemoteAuthentication', () => {

    test('Should call HttpClient with correct url', async () => {

        const url = 'localhost'
        const httpPostClientSpy = new HttpClientSpy();
        const sut = new RemoteAuthentication(url, httpPostClientSpy);


        await sut.auth();

        expect(httpPostClientSpy.url).toBe(url);

    })
})