import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as ecs from 'aws-cdk-lib/aws-ecs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import {FilterPattern, LogGroup, RetentionDays, SubscriptionFilter} from "aws-cdk-lib/aws-logs";
import {LambdaDestination} from "aws-cdk-lib/aws-logs-destinations";

import * as iam from 'aws-cdk-lib/aws-iam';
export class Cdk19Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaA = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution environment
      code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'hello.handler'                // file is "hello", function is "handler"
    });

    const logGroup=lambdaA.logGroup
    
    const lambdaB = lambda.Function.fromFunctionArn(this,'destinationlambda','arn:aws:lambda:us-east-1:1xxxxxxxxx:function:my-function')

    const subscriptionFilter = new SubscriptionFilter(this,'LogSubscriptionFilter', {
      logGroup,
      destination: new LambdaDestination(lambdaB),
      filterPattern: FilterPattern.allEvents(),
  });




  }
}
