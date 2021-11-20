import * as cdk from '@aws-cdk/core';
import * as autoscaling from '@aws-cdk/aws-autoscaling';
import * as ec2 from '@aws-cdk/aws-ec2';

export class CdkAsgStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = ec2.Vpc.fromLookup(this, 'VPC', {
      vpcId: 'vpc-025bxxxx'
    })
    const linux = ec2.MachineImage.genericLinux({
      'us-east-1': 'ami-04ad2567c9e3d7893'
      
    });
    
    const ag = new autoscaling.AutoScalingGroup(this, 'AutoScalingGroup', {
      vpc:vpc, 
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: linux,
      autoScalingGroupName: 'test-asg-12'

    });
    
    
    new cdk.CfnOutput( this, 'asg', {
      value: ag.autoScalingGroupName,
      description: 'The name of the asg',
      exportName: 'asg-name',
    });

    
  }
}
