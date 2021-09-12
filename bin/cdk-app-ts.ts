#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SnsStack } from '../lib/sns-stack';
import { Queuestack } from '../lib/Queue-stack';
import { helloworld } from '../lib/helloWorldLambda';




const app = new cdk.App();
new SnsStack(app, 'sns');
new Queuestack(app, 'queue');

new helloworld(app, 'lambda-stack');