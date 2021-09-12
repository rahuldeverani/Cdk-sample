
import * as cdk from '@aws-cdk/core';

import * as sns from '@aws-cdk/aws-sns';

export class SnsStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const topic = new sns.Topic(this, 'mytopic');

    }
}