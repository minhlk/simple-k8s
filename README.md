## How to run the K8s cluster

### Prerequisites
- Minikube
- Kubectl
- Docker
- https://hub.docker.com/r/minhlkz/simple-nodejs-express

### Start Minikube Node 

```sh
minikube start
```

### Apply the secrets, configMaps, deployments

```sh
kubectl apply -f db-config.yaml 
kubectl apply -f db-secret.yaml 
kubectl apply -f deployment-db.yaml 
kubectl apply -f deployment-web.yaml 
```

### How to run in browser

```sh
minikube service web-express-service
```
