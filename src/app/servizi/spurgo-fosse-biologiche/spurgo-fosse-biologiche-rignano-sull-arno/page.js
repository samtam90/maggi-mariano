import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rignano sull'Arno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rignano-sull-arno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"}  
});
