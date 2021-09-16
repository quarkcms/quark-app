import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { get } from '../../services/request'
import Render from '../Render';
import { View } from '@tarojs/components'

const Page: React.FC<any> = (props:any) => {

  const [data, setDataState] = useState(null);

  useEffect(() => {
    if(props.initApi) {
      getData(props.initApi)
    }
    
    if(props.title) {
      Taro.setNavigationBarTitle({
        title: props.title
      });
    }
  }, [props.initApi]);

  const getData = async (initApi:string) => {

    const result = await get({
      actionUrl: initApi
    });

    setDataState(result.data);
  };

  return (
    <View style={props?.style}>
      <Render body={props.body} data={data ? data : props.data} callback={null} />
    </View>
  );
}

export default Page;