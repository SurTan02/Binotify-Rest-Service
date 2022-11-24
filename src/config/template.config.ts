export const subscription_template = {
    subscriptions: ['//Subscriptions', {
        current: 'number(current_page)',
        total: 'number(total_pages)',
        subscription: ['//subscription', {
            creator_id: 'number(creatorId)',
            subscriber_id: 'number(subscriberId)',
            status: 'status'
        }]
    }]
}
