import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class helloworld extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const func = new lambda.Function(this, "myFunc", {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'hello-world.handler',
            code: lambda.Code.fromAsset('lambda')

        });

    }
}