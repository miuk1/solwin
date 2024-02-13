pipeline {
    agent any

    environment {
        VM_IP_ADDRESS = '4.234.162.218'
        BUILD_ARTIFACT = 'dist'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/miuk1/solwin.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }
        
        stage('Deploy to azure') {
            steps{
                withCredentials([sshUserPrivateKey(credentialsId: 'solwinadmin', keyFileVariable: 'SSH_KEY_FILE']) {
                    script {
                        // Copy the build to the remote server
                        sh "scp -i $SSH_KEY_FILE -o StrictHostKeyChecking=no -r $BUILD_ARTIFACT solwinadmin@$VM_IP_ADDRESS:/var/www/html"
                    }
            }
        }    
    }
}
