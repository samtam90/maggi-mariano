import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ascoli Piceno",
  canonical: links.servizi["trasporto-rifiuti"]["ascoli-piceno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});