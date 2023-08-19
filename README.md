

# Decentralized Seed Phrase Recovery





![image-20230707152849634](Images/image-20230707152849634.png)



Managing Seed phrase for Web3 is tough ask, not only for new users who are non-technical and/or not too savvy and also not realizing importance of these keys but even for technically experienced. Either we end up being quite paranoid not to lose the key and come up with ways ourselves or we see users forget where they stored etc.

This project offers a way to store the seed phrase On Chain in an encrypted fashion so it can be recovered and relieving the stress of trying to secure it w/o getting hacked etc.



![image-20230805080433577](Images/DecentralizedSeedManagementV2.drawio.png)









### Web Application Front end

A web application front end will enable user to first create their Seed phrase or they can also bring their Seed phrase they want to have recovery on.

### Seed phrase

User will get the seed phrase of 24 hr word phrase. They can write it down or keep it like you would normally.



### Recovery Info



#### Secret Word and Index

User will choose one out of the 24 words that will NOT be stored onChain but instead will themselves keep it and also the index of it. This will form part of their recovery. 

#### User Password

User will then also supply a password that will be part of the recovery.



#### Personal Identification & Hash

The user will also choose some combined personal identification information like passport or drive license or Social security number etc of their choice. This will be hashed as part of the Decentralized Seed Phrase Smart contract. 



### Encryption

Then the application will then use the password, 1 word left out with index as part of encryption to encrypt the remaining 23 words. We will use some form of AES ([Advanced Encryption Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) ) encryption to encrypt the rest of the words.

Below is an example. So in this example our encrypted string is `U2FsdGVkX1+tz5nkrdI4eX34/tBFPy+MeSM2AHTTU2A+CEyqORTdZXqPF5TVXBfn`

![image-20230819075607363](Images/image-20230819075607363.png)



User can keep the recovery info of User Password, 1 word and index and the personal information provided safely in any normal cloud storage or other current methods etc where its easily recoverable with 2FA etc too since this info has no meaning on its own in context of the wallet. 



 

### Parameterized Smart Contract

This project will then build a parameterized Smart contract on Cardano blockchain that will use the hashed personal info as a parameter and will store in the Datum the encrypted 23 words. 



 

### Seed Phrase Recovery

When the user in future forgets/lost the seed phrase and wants to recover then they simply need their personal info, password, the secret word with index.

Then on Cardano blockchain the personal info hashed is used to find the UTXO that has the encrypted rest of the key words. Then once they now have the encrypted string with AES they can use their password, left out word with index to decrypt this.



![image-20230819080601903](Images/image-20230819080601903.png)















