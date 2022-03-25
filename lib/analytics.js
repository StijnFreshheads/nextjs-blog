import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
        googleTagManager({
            containerId: 'GTM-PMFKV2D'
        })
    ]
})

export { analytics };