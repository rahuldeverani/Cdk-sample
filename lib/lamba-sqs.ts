import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as fs from 'fs';
import * as path from 'path';
import * as sqs from '@aws-cdk/aws-sqs';

export class lambdasqs extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);



        const queue = new sqs.Queue(this, 'myQueue', {
            visibilityTimeout: cdk.Duration.seconds(300)
        });
        const func = new lambda.Function(this, "myFunc", {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'hello-world.handler',
            code: lambda.Code.fromAsset('lambda'),

            environment: {
                QUEUE_URL: queue.queueUrl
            }

        });


    }
}