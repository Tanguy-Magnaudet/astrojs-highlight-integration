export type Options = {
  /*
  * The organization ID to send application data to.
  */
  orgId: string;
  /**
   * Options to configure Highlight.
   */
  options?: {
    disableNetworkRecording?: boolean,
    disableConsoleRecording?: boolean,
    enableSegmentIntegration?: boolean,
    enableStrictPrivacy?: boolean,
    environment?: string;
    version?: string;
    networkRecording?: any,
  }
}


export const buildScript = (options: Options) => {
  if (!options.orgId) {
    throw new Error('orgId is required in Highlight integration options')
  }

  return `
  import Highlight from 'highlight.run';

  Highlight.H.init(${options.orgId}, ${options.options});
  window.H = Highlight.H;
  `
}