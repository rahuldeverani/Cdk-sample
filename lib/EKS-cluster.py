from aws_cdk import (


    core,
    aws_ec2 as ec2,
    aws_cloudwatch_actions as cw,
    aws_eks as eks,
    aws_sqs as sqs


)



class CdkWorkshopStack(core.Stack):

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        vpc = ec2.Vpc.from_lookup(self, 'vpc',
            vpc_id='vpc-xxxxx'
            )



        cluster = eks.Cluster(self, 'dev',
            cluster_name='eks_cdk',
            version=eks.KubernetesVersion.V1_21,
            default_capacity=0,
            vpc=vpc)


        cfn_addon_one = eks.CfnAddon(self, "coredns",
            addon_name="coredns",
            resolve_conflicts ="OVERWRITE",
            cluster_name=cluster.cluster_name
                )

        cfn_addon_two = eks.CfnAddon(self, "kube-proxy",
            addon_name="kube-proxy",
            resolve_conflicts ="OVERWRITE",
            cluster_name=cluster.cluster_name
                )
        cfn_addon_three = eks.CfnAddon(self, "vpc-cni",
            addon_name="vpc-cni",
            resolve_conflicts= "OVERWRITE",
            cluster_name=cluster.cluster_name
                )

        
        # Take the dependency
        cfn_addon_one.node.add_dependency(cluster)
        cfn_addon_two.node.add_dependency(cluster)
        cfn_addon_three.node.add_dependency(cluster)
