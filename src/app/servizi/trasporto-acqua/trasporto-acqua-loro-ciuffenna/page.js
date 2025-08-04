import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Loro ciuffenna",
  canonical: links.servizi["trasporto-acqua"]["loro-ciuffenna"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});