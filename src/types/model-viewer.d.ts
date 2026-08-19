declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        "camera-controls"?: boolean | string;
        "auto-rotate"?: boolean | string;
        "rotation-per-second"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
        "field-of-view"?: string;
        "interaction-prompt"?: string;
        "camera-orbit"?: string;
      };
    }
  }
}

export {};
