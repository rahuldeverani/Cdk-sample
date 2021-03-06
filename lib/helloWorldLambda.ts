import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as fs from 'fs';
import * as path from 'path';
import * as sqs from '@aws-cdk/aws-sqs';

export class helloworld extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const func = new lambda.Function(this, "myFunc", {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'hello-world.handler',
            code: lambda.Code.fromAsset('lambda')

        });



        const func2 = new lambda.Function(this, "myFunc2", {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: lambda.Code.fromInline(fs.readFileSync('lambda/hello-world.js', { encoding: 'utf-8' }))

        });

    }
}