import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Città di Castello",
  canonical: links.servizi["spurgo-pozzi-neri"]["città-di-castello"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});