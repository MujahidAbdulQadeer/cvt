# cvt

1. Create a Virtual Machine on Hypervisor
Steps:

Open VirtualBox or VMware.

Click New > Name your VM > Select OS type (e.g., Ubuntu 20.04).

Allocate memory (e.g., 4 GB = 4096 MB).

Create a virtual hard disk > Set disk size (e.g., 40 GB).

Choose VDI or VMDK as format > Dynamic or Fixed size.

Start VM and install the operating system.


2. Run and Execute 6 Docker Commands + Comments
docker version               # Shows Docker version info (client/server)
docker pull ubuntu           # Pulls Ubuntu image from Docker Hub
docker run -it ubuntu bash   # Runs a container interactively with bash shell
docker ps -a                 # Lists all containers (running + stopped)
docker stop <container_id>   # Stops a running container
docker rm <container_id>     # Removes a container
Comments:
These commands cover image pulling, container creation, interactive use, listing, and cleanup. Good for basic Docker workflow understanding.

3. Dockerfile, Docker Image, Run Container
Dockerfile:

# Use base image
FROM ubuntu:20.04

# Install dependencies
RUN apt update && apt install -y nginx

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
Commands:

docker build -t my-nginx-image .        # Create docker image
docker run -d --name my-nginx my-nginx-image   # Run container from image


4. Pull Image from Docker Hub & Manage Container
docker pull httpd                    # a) Pull Apache HTTP Server image
docker create --name webserver httpd  # b) Create container
docker start webserver                # Run/start container
docker stop webserver                 # Stop container


6. Kubernetes: Master and Worker Node Setup + 6 Commands
Use kubeadm for setting up:

Steps:

On master node:

kubeadm init
Copy and run the join command on worker nodes:

kubeadm join <master-ip>:<port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>


6 Kubernetes Commands:

kubectl get nodes                   # List nodes
kubectl get pods                    # List pods
kubectl create deployment nginx --image=nginx   # Create deployment
kubectl expose deployment nginx --port=80 --type=NodePort   # Expose service
kubectl describe pod <pod-name>     # Get pod details
kubectl delete pod <pod-name>       # Delete a pod
6. Create a Pod, Get IP, Troubleshoot via Logs
kubectl run testpod --image=nginx
kubectl get pod testpod -o wide     # Find IP address
kubectl logs testpod                # View logs for troubleshooting


7. VM: Host vs Guest Machine (with Screenshot Instruction)
Steps:

Create VM as in step 1.

Boot it and login.

Compare:

Feature	Host Machine	Guest Machine (VM)
OS	Host OS (e.g., Windows)	Guest OS (e.g., Ubuntu)
Resource access	Full hardware access	Allocated resources only
IP Address	Physical network IP	NAT or bridged IP
Kernel	Host kernel	Separate VM kernel
Performance	Native	Virtualized (slightly reduced)
Screenshot Tip: Use the VM window > Take a screenshot from host OS (e.g., Snipping Tool in Windows or gnome-screenshot in Linux).

Would you like a script or setup file to automate any of these steps?










No file chosenNo file chosen
ChatGPT can make mistakes. Check important info.
?
