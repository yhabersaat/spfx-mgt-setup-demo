import * as React from 'react';
import styles from './MgtSetupSpFx.module.scss';
import { IMgtSetupSpFxProps } from './IMgtSetupSpFxProps';
import { Agenda } from '@microsoft/mgt-react/dist/es6/spfx';

export default class MgtSetupSpFx extends React.Component<IMgtSetupSpFxProps, {}> {
  public render(): React.ReactElement<IMgtSetupSpFxProps> {
    return (
      <div className={styles.mgtSetupSpFx}>
        <h1>Microsoft Graph Toolkit setup demo with SPFx</h1>
        <h2>Agenda component demo</h2>
        <Agenda groupByDay days={5} showMax={10}></Agenda>
      </div>
    );
  }
}
