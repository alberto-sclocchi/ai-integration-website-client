import React from 'react'
import azureImg from '../../images/azure.png'
import awsImg from '../../images/aws.png'
import vmwareImg from '../../images/vmware.png'
import siemImg from '../../images/siem.png'
import ztaImg from '../../images/zta.png'

export default function Scroller() {
  return (
    <div className="scroller">
        <ul className="scroller-list" data-animated="true">
            <li><img src={azureImg} alt="azure"/></li>
            <li><img src={awsImg} alt="aws"/></li>
            <li><img src={vmwareImg} alt="vmware"/></li>
            <li><img src={azureImg} alt="siem"/></li>
            <li><img src={awsImg} alt="zta"/></li>
            <li><img src={vmwareImg} alt="azure"/></li>
            <li><img src={azureImg} alt="aws"/></li>
            <li><img src={awsImg} alt="vmware"/></li>
            <li><img src={vmwareImg} alt="siem"/></li>
            <li><img src={azureImg} alt="zta"/></li>
        </ul>

        <ul className="scroller-list" data-animated="true">
        <li><img src={azureImg} alt="azure"/></li>
            <li><img src={awsImg} alt="aws"/></li>
            <li><img src={vmwareImg} alt="vmware"/></li>
            <li><img src={azureImg} alt="siem"/></li>
            <li><img src={awsImg} alt="zta"/></li>
            <li><img src={vmwareImg} alt="azure"/></li>
            <li><img src={azureImg} alt="aws"/></li>
            <li><img src={awsImg} alt="vmware"/></li>
            <li><img src={vmwareImg} alt="siem"/></li>
            <li><img src={azureImg} alt="zta"/></li>
        </ul>
    </div>
  )
}
