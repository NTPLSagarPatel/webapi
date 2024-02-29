import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getPersonName(name: string): Promise<string> {
    let personName = '';
    const apiURL = `http://localhost:5000/getPersonName/${name}`;
    // Test 29-2
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      personName = response.data;
    } catch (error) {
      console.error(error);
    }

    return ` <-- ('webAPI'):  ${personName}`;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
