
```
λ openssl req -new -newkey rsa:2048 -nodes -out server.csr -keyout server.key
```

#### Generate a new private key and Certificate Signing Request
```
λ openssl req -out CSR.csr -new -newkey rsa:2048 -nodes -keyout privateKey.key
```

#### Generate a self-signed certificate
```
λ openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privateKey.key -out certificate.crt
```

#### Generate a certificate signing request (CSR) for an existing private key
```
λ openssl req -out CSR.csr -key privateKey.key -new
```

#### Generate a certificate signing request based on an existing certificate
```
λ openssl x509 -x509toreq -in certificate.crt -out CSR.csr -signkey privateKey.key
```


#### Remove a passphrase from a private key
```
λ openssl rsa -in privateKey.pem -out newPrivateKey.pem
```

#### How to convert .csr to .crt
```
openssl x509 -req -in server.csr -signkey server.key -out server.crt
```
