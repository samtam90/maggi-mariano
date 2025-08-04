import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Città di Castello",
  canonical: links.servizi["trasporto-rifiuti"]["città-di-castello"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});