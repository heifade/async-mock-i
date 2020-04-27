import { Request, Response } from 'express';
import { mapKeys } from 'lodash';

interface IProps {
  [key: string]: object;
}
export function asyncMock(props: IProps) {
  const obj: { [key: string]: any } = {};

  mapKeys(props, (value: any, key: string) => {
    switch (typeof value) {
      case 'function': {
        obj[key] = value;
        break;
      }
      default: {
        obj[key] = async (req: Request, res: Response) => {
          await delay(500);
          res.send(value);
        };
      }
    }
  });
  return obj;
}

/**
 * 延迟
 * @param millisecond 毫秒
 */
export function delay(millisecond: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millisecond);
  });
}
