export const subscription_template = {
    subscriptions: ['//Subscriptions', {
        current: 'number(currentPage)',
        total: 'number(totalPages)',
        subscription: ['//subscription', {
            creator_id: 'number(creator_id)',
            subscriber_id: 'number(subscriber_id)',
            status: 'status'
        }]
    }]
}

export const update_template = {
    result : '//ns2:UpdateSubscriptionResponse'
}

export const validate_template = {
    result : '//ns2:ValidateSubscriptionResponse'
}
