export const subscription_template = {
    subscriptions: ['//Subscriptions', {
        current: 'number(currentPage)',
        total: 'number(totalPages)',
        subscription: ['//subscription', {
            creator_id: 'number(creatorId)',
            subscriber_id: 'number(subscriberId)',
            status: 'status'
        }]
    }]
}

export const update_template = {
    result : '//ns2:UpdateSubscriptionResponse'
}
