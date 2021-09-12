#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SnsStack } from '../lib/sns-stack';
import { Queuestack } from '../lib/Queue-stack';

const app = new cdk.App();
new SnsStack(app, 'sns');
new Queuestack(app, 'queue');