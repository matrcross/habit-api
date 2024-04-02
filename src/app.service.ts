import { Injectable } from '@nestjs/common';
import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient();

const docClient = DynamoDBDocumentClient.from(client);


@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await this.addProduct();
    return 'Hello World!';
  }

  async addProduct() {
    
    const params = new GetItemCommand({
      TableName: 'weekdays', // Replace with your DynamoDB table name
      Key: {'weekday': {"N":"0"}}
    });
  
    try {
      const response = await client.send(params);
      console.log(unmarshall(response.Item));
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  
}


