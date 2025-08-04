import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Campello sul Clitunno",
  canonical: links.servizi["trasporto-rifiuti"]["campello-sul-clitunno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});