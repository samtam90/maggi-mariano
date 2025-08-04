import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Rignano sull'Arno",
  canonical: links.servizi["trasporto-acqua"]["rignano-sull-arno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"}  
});