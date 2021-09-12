#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SnsStack } from '../lib/sns-stack';
import { Queuestack } from '../lib/Queue-stack';
import { helloworld } from '../lib/helloWorldLambda';

import { lambdasqs } from '../lib/lamba-sqs';


const app = new cdk.App();
const x = new SnsStack(app, 'sns');
new Queuestack(app, 'queue');

new lambdasqs(app, 'lambda-sq');

cdk.Tags.of(x).add('name', 'rahul');
