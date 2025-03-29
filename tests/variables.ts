import {createPowerDNSAdvancedClient, createPowerDNSSimpleClient} from "../src/lib/powerdns";

// Use environment variables or fallback for local development
const host = process.env.PDNS_HOST || 'localhost';

export const SIMPLE_CLIENT = createPowerDNSSimpleClient({
    baseUrl: `http://${host}:8081/api/v1`,
    apiKey: 'apikey'
});

export const ADVANCED_CLIENT = createPowerDNSAdvancedClient({
    baseUrl: `http://${host}:8081/api/v1`,
    apiKey: 'apikey'
});
