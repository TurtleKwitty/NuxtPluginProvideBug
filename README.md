# Nuxt 3 Minimal Starter

This is a minimal replication on top of the Nuxt 3 Minimal Starter to demonstrate what situation leads to plugin provides being slightly buggy when used directly from the template global access of $data

This bug appears in both dev and node-server builds

## Replication steps:
 - ```npm install && npm run dev ```
 - Verify the correct case
   - In a browser go to [http://localhost:3000/correct](http://localhost:3000/correct)
   - See that it displays `False` meaning that $data is correctly null
 - Verify the bugged case
   - In a browser go to [http://localhost:3000/bugged](http://localhost:3000/bugged)
   - See that it displays `True` meaning that $data is incorrectly `{}` despite the api endpoint returning nothing
