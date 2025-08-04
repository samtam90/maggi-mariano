import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Città di Castello",
  canonical: links.servizi["trasporto-acqua"]["città-di-castello"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});