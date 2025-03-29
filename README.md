# PowerDNS Client

## A NodeJS client to communicate with the PowerDNS Authoritative Nameserver REST API.
        
## Installation
```
npm i @wipsquare/powerdns
```

## Important note
My focus is towards the instances with LBDM backed. Some limitations might appear because of that, for example:

Not supported:
- RRset comments

## Usage
```
/** SimpleClient */
(async () => {
     
    // create a new simple client instance
    const client = createPowerDNSSimpleClient({
        baseUrl: 'http://localhost:8082/api/v1',
        apiKey: 'apikey'
    });
    
    // get information about the domain "example.com"
    console.log(await client.getDomain("example.com"));

});

/** AdvancedClient */
(async () => {

    // create a new advanced client instance
    const client = createPowerDNSAdvancedClient({
        baseUrl: 'http://localhost:8082/api/v1',
        apiKey: 'apikey'
    });
    
    // get information about the zone "example.com" with records
    console.log(await client.getZone("example.com", {
        rrsets: true
    }));

});

```

### Simple client
The simple client integrates all common functions for domain management.

#### Features
* List domains
* Get domain info
* Create domain
* Create domain with dnssec, nameservers, hostmaster and records
* Delete domain
* List records
* Add record(s)
* Set record(s)
* Remove record(s)

### Advanced client
The advanced client is directly connected to the PowerDNS API and has all API-endpoints implemented.

#### Features
* Servers
  * List servers
  * Get info
  * List configs
* Zones
    * List
    * Get info
    * Export as AXFR
    * Rectify
    * Create / Update / Delete
    * Update records
    * Retrieve slave from master
    * Notify all slaves
* CryptoKeys
    * List
    * Get info
    * Create
    * Enable/Disable
    * Delete
* Metadata
    * List
    * Get info
    * Create
    * Update
    * Delete
* TSIG Keys
    * List
    * Get info
    * Create
    * Update
    * Delete
* AutoPrimaries
    * List
    * Add
    * Delete
* Others
    * Search
    * Get statistics
    * Flush cache