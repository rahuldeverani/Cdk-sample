#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkAppTsStack } from '../lib/cdk-app-ts-stack';

const app = new cdk.App();
new CdkAppTsStack(app, 'CdkAppTsStack');
