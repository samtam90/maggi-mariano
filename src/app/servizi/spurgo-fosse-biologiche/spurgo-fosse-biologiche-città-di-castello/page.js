import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Città di Castello",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});
