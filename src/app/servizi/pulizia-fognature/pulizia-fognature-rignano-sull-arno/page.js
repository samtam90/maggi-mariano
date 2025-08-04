import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Rignano sull'Arno",
  canonical: links.servizi["pulizia-fognature"]["rignano-sull-arno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"}  
});
