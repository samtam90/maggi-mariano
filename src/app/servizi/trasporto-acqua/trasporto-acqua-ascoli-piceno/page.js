import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Ascoli Piceno",
  canonical: links.servizi["trasporto-acqua"]["ascoli-piceno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});