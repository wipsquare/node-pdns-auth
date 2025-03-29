import {createPowerDNSAdvancedClient, createPowerDNSSimpleClient} from "../src/lib/powerdns";

export const SIMPLE_CLIENT = createPowerDNSSimpleClient({
    baseUrl: 'http://pdns-auth:8081/api/v1',
    apiKey: 'apikey'
});

export const ADVANCED_CLIENT = createPowerDNSAdvancedClient({
    baseUrl: 'http://pdns-auth:8081/api/v1',
    apiKey: 'apikey'
});