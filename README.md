# Functional Example
This is cobbled together between the Prisma docs and an express JWT example that I had found that made use of an array as a fake database.

## JWT Note
JWT seem to take a lot of flack for not being great. This tries to avoid it by making use of the HTTP only cookie for refresh token, but as the jsonwebtoken package points out, you have to make your own decision regarding automatically reauthing against the refresh token.