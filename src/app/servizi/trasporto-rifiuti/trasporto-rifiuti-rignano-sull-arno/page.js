import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rignano sull'Arno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"}  
});