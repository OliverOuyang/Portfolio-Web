declare module 'react-plotly.js' {
  import * as Plotly from 'plotly.js';
  import * as React from 'react';

  interface PlotParams {
    data: Plotly.Data[];
    layout?: Partial<Plotly.Layout>;
    frames?: Partial<Plotly.Frame>[];
    config?: Partial<Plotly.Config>;
    onClick?: (event: Plotly.PlotMouseEvent) => void;
    onHover?: (event: Plotly.PlotMouseEvent) => void;
    onUnHover?: (event: Plotly.PlotMouseEvent) => void;
    onSelected?: (event: Plotly.PlotSelectionEvent) => void;
    onDeselect?: () => void;
    onDoubleClick?: () => void;
    onRelayout?: (event: Plotly.PlotRelayoutEvent) => void;
    onRestyle?: (event: Plotly.PlotRestyleEvent) => void;
    onRedraw?: () => void;
    onPurge?: () => void;
    onError?: () => void;
    onInitialized?: (figure: Plotly.Figure) => void;
    onUpdate?: (figure: Plotly.Figure) => void;
    className?: string;
    style?: React.CSSProperties;
    useResizeHandler?: boolean;
    debug?: boolean;
    divId?: string;
  }

  class Plot extends React.Component<PlotParams> {}
  export default Plot;
} 