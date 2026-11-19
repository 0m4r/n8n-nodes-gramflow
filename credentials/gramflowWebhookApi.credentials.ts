import type { ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class gramflowWebhookApi implements ICredentialType {
  name = 'gramflowWebhookApi';
  displayName = 'Gramflow Instagram Webhook API';
  icon: Icon = { light: 'file:../credentials/gramflow.svg', dark: 'file:../credentials/gramflow.svg' };
  documentationUrl = 'https://developers.facebook.com/docs/graph-api/webhooks/getting-started';
  properties: INodeProperties[] = [
    {
      displayName: 'App Secret',
      name: 'appSecret',
      type: 'string',
      typeOptions: { password: true },
      required: true,
      default: '',
      description: 'Meta App Secret used to validate X-Hub-Signature-256 webhook signatures',
    },
  ];
}
