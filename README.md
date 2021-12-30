# Repair Materials Management (RMM) - Web Application

This web application will run as a Web Component (Angular Element)

The app is wrapped in a Docker container running Nginx with a virtual host of /om
and uses the following to avoid 404 errors within the Angular app:

```
 /conf/nginx.conf
 location / {
            # First attempt to serve request as file, then
            # as directory, then redirect to index(angular) if no file found.
            try_files $uri $uri/ /index.html;
 }
```
## ng build command 
* ng build --configuration=dev

## Push Docker image to ECR - WEB_SUPPLIES
* aws ecr create-repository --repository-name signet-rmm-dev-web-mfe --image-scanning-configuration scanOnPush=true --region us-east-2
* aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 741716617916.dkr.ecr.us-east-2.amazonaws.com
* docker tag signet-rmm-dev-web-mfe:latest 741716617916.dkr.ecr.us-east-2.amazonaws.com/signet-rmm-dev-web-mfe:latest
* docker push 741716617916.dkr.ecr.us-east-2.amazonaws.com/signet-rmm-dev-web-mfe:latest
* aws ecs update-service --cluster signet-rmm-dev-cluster --service signet-rmm-dev-web-mfe --region us-east-2 --force-new-deployment