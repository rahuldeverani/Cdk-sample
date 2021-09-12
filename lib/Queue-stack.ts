
import * as cdk from '@aws-cdk/core';



import * as sqs from '@aws-cdk/aws-sqs';


export class Queuestack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'myQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

  }
}

