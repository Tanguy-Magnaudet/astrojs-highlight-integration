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


export const buildScript = (config: Options) => {
  const { orgId, options = {} } = config;
  if (!orgId) {
    throw new Error('orgId is required in Highlight integration options')
  }

  return `
  import H from 'astrojs-highlight-integration/h';
  H.init("${orgId}", ${JSON.stringify(options)});
  window.H = H;
  `
}