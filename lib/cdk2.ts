import * as cdk from '@aws-cdk/core';
import * as autoscaling from '@aws-cdk/aws-autoscaling';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as sqs from '@aws-cdk/aws-sqs';
import * as queuehook from '@aws-cdk/aws-autoscaling-hooktargets';
export class cdk2 extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const importedasgname = cdk.Fn.importValue('asg-name');
    const asg= autoscaling.AutoScalingGroup.fromAutoScalingGroupName(this,'asgg', importedasgname);
    const hook= new autoscaling.LifecycleHook(this, 'my-hook', {
      autoScalingGroup: asg,
      lifecycleTransition: autoscaling.LifecycleTransition.INSTANCE_LAUNCHING,
      notificationTarget: new queuehook.QueueHook(new sqs.Queue(this , 'myqueue') )

    });
  
  }
}
