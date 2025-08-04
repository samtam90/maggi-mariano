import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Città di Castello",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});