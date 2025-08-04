import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Città di Castello",
});
export default withBaseProps({ 
    title: "Trasporto acqua Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});