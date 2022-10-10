pipeline {
    agent {
        docker {
            image 'node:14.19.3'
        }
    }
    stages {
        stage('删除之前的构建包') {
            steps {
                  sh '''
                        rm -rf docs/dist.tar.gz
                     '''
            }
        }
        stage('下载依赖包') {
            steps {
                  sh '''
                        yarn install
                     '''
            }
        }
        stage('打包构建') {
            steps {
                   sh '''
                        yarn build
                        cd docs
                        tar -cvzf dist.tar.gz *
                      '''
            }
        }
        stage('上传构建包') {
            steps {
                sshPublisher(publishers:
                [sshPublisherDesc(configName: '180.76.109.184', 
                transfers: [sshTransfer(cleanRemote: false, excludes: '',
                execCommand: 
                '''
                cd /home/project/profile
                tar -xvzf dist.tar.gz -C ./
                ''',
                 execTimeout: 120000, flatten: false, 
                makeEmptyDirs: false, noDefaultExcludes: false,
                patternSeparator: '[, ]+', remoteDirectory: 'profile',
                remoteDirectorySDF: false, removePrefix: '/docs',
                sourceFiles: 'docs/dist.tar.gz')], usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, verbose: false)])
            }
        }
     }
}