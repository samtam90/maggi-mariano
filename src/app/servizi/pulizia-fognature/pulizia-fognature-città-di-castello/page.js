import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Città di Castello",
  canonical: links.servizi["pulizia-fognature"]["città-di-castello"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"}  
});
