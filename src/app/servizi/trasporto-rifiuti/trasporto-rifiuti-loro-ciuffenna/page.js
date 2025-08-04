import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Loro ciuffenna",
  canonical: links.servizi["trasporto-rifiuti"]["loro-ciuffenna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});